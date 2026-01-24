---
name: swift-architecture
description: Swift architecture expert for app structure and patterns. Use when working with MVVM, @Observable, ObservableObject, dependency injection, state management, or designing app architecture.
---

# Swift Architecture

Expert guidance for architecting SwiftUI applications with modern patterns.

## MVVM Pattern

### Basic MVVM Structure
```swift
// Model
struct User: Identifiable, Codable {
    let id: UUID
    var name: String
    var email: String
}

// ViewModel
@MainActor
class UserViewModel: ObservableObject {
    @Published var users: [User] = []
    @Published var isLoading = false
    @Published var errorMessage: String?

    private let userService: UserServiceProtocol

    init(userService: UserServiceProtocol = UserService()) {
        self.userService = userService
    }

    func loadUsers() async {
        isLoading = true
        errorMessage = nil

        do {
            users = try await userService.fetchUsers()
        } catch {
            errorMessage = error.localizedDescription
        }

        isLoading = false
    }

    func deleteUser(_ user: User) async {
        do {
            try await userService.delete(user)
            users.removeAll { $0.id == user.id }
        } catch {
            errorMessage = error.localizedDescription
        }
    }
}

// View
struct UserListView: View {
    @StateObject private var viewModel = UserViewModel()

    var body: some View {
        List {
            ForEach(viewModel.users) { user in
                Text(user.name)
            }
            .onDelete { indexSet in
                Task {
                    for index in indexSet {
                        await viewModel.deleteUser(viewModel.users[index])
                    }
                }
            }
        }
        .overlay {
            if viewModel.isLoading {
                ProgressView()
            }
        }
        .alert("Error", isPresented: .constant(viewModel.errorMessage != nil)) {
            Button("OK") { viewModel.errorMessage = nil }
        } message: {
            Text(viewModel.errorMessage ?? "")
        }
        .task {
            await viewModel.loadUsers()
        }
    }
}
```

## @Observable (iOS 17+)

### Observable Macro
```swift
import Observation

@Observable
class UserViewModel {
    var users: [User] = []
    var isLoading = false
    var errorMessage: String?

    private let userService: UserServiceProtocol

    init(userService: UserServiceProtocol = UserService()) {
        self.userService = userService
    }

    @MainActor
    func loadUsers() async {
        isLoading = true
        defer { isLoading = false }

        do {
            users = try await userService.fetchUsers()
        } catch {
            errorMessage = error.localizedDescription
        }
    }
}

// View - no @StateObject needed!
struct UserListView: View {
    @State private var viewModel = UserViewModel()

    var body: some View {
        List(viewModel.users) { user in
            Text(user.name)
        }
        .task {
            await viewModel.loadUsers()
        }
    }
}
```

### Observable vs ObservableObject
```swift
// ObservableObject (pre-iOS 17)
class OldViewModel: ObservableObject {
    @Published var count = 0  // Must use @Published
}

struct OldView: View {
    @StateObject var vm = OldViewModel()  // Use @StateObject
    // or @ObservedObject if passed from parent
}

// @Observable (iOS 17+)
@Observable
class NewViewModel {
    var count = 0  // No @Published needed
}

struct NewView: View {
    @State var vm = NewViewModel()  // Just @State
    // or var vm: NewViewModel if passed from parent
}
```

## Dependency Injection

### Protocol-Based DI
```swift
// Define protocol
protocol UserServiceProtocol {
    func fetchUsers() async throws -> [User]
    func createUser(_ user: User) async throws -> User
    func delete(_ user: User) async throws
}

// Real implementation
class UserService: UserServiceProtocol {
    func fetchUsers() async throws -> [User] {
        // Real API call
    }

    func createUser(_ user: User) async throws -> User {
        // Real API call
    }

    func delete(_ user: User) async throws {
        // Real API call
    }
}

// Mock for testing
class MockUserService: UserServiceProtocol {
    var mockUsers: [User] = []

    func fetchUsers() async throws -> [User] {
        mockUsers
    }

    func createUser(_ user: User) async throws -> User {
        mockUsers.append(user)
        return user
    }

    func delete(_ user: User) async throws {
        mockUsers.removeAll { $0.id == user.id }
    }
}

// ViewModel accepts protocol
@MainActor
class UserViewModel: ObservableObject {
    private let service: UserServiceProtocol

    init(service: UserServiceProtocol = UserService()) {
        self.service = service
    }
}

// Test with mock
let mockService = MockUserService()
mockService.mockUsers = [User(id: UUID(), name: "Test", email: "test@test.com")]
let viewModel = UserViewModel(service: mockService)
```

### Environment-Based DI
```swift
// Define environment key
private struct UserServiceKey: EnvironmentKey {
    static let defaultValue: UserServiceProtocol = UserService()
}

extension EnvironmentValues {
    var userService: UserServiceProtocol {
        get { self[UserServiceKey.self] }
        set { self[UserServiceKey.self] = newValue }
    }
}

// Use in view
struct UserListView: View {
    @Environment(\.userService) private var userService
    @State private var users: [User] = []

    var body: some View {
        List(users) { user in
            Text(user.name)
        }
        .task {
            users = try? await userService.fetchUsers() ?? []
        }
    }
}

// Inject in app
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.userService, UserService())
        }
    }
}

// Inject mock in previews
#Preview {
    UserListView()
        .environment(\.userService, MockUserService())
}
```

## State Management

### App-Wide State
```swift
@MainActor
class AppState: ObservableObject {
    @Published var currentUser: User?
    @Published var isAuthenticated = false
    @Published var settings = AppSettings()

    static let shared = AppState()

    func signIn(user: User) {
        currentUser = user
        isAuthenticated = true
    }

    func signOut() {
        currentUser = nil
        isAuthenticated = false
    }
}

// Inject via environment
@main
struct MyApp: App {
    @StateObject private var appState = AppState.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(appState)
        }
    }
}

// Use in any view
struct ProfileView: View {
    @EnvironmentObject var appState: AppState

    var body: some View {
        if let user = appState.currentUser {
            Text("Welcome, \(user.name)")
        }
    }
}
```

### Feature-Scoped State
```swift
// Feature module state
@MainActor
class ShoppingCartState: ObservableObject {
    @Published var items: [CartItem] = []
    @Published var isCheckingOut = false

    var total: Double {
        items.reduce(0) { $0 + $1.price * Double($1.quantity) }
    }

    func addItem(_ product: Product, quantity: Int = 1) {
        if let index = items.firstIndex(where: { $0.productId == product.id }) {
            items[index].quantity += quantity
        } else {
            items.append(CartItem(productId: product.id, name: product.name,
                                  price: product.price, quantity: quantity))
        }
    }

    func removeItem(_ item: CartItem) {
        items.removeAll { $0.id == item.id }
    }
}

// Scope to feature
struct ShopView: View {
    @StateObject private var cartState = ShoppingCartState()

    var body: some View {
        NavigationStack {
            ProductListView()
                .environmentObject(cartState)
        }
    }
}
```

## Repository Pattern

### Repository Interface
```swift
protocol UserRepository {
    func getAll() async throws -> [User]
    func getById(_ id: UUID) async throws -> User?
    func save(_ user: User) async throws -> User
    func delete(_ user: User) async throws
}

// Remote implementation
class RemoteUserRepository: UserRepository {
    private let apiClient: APIClient

    init(apiClient: APIClient = .shared) {
        self.apiClient = apiClient
    }

    func getAll() async throws -> [User] {
        try await apiClient.request(endpoint: "/users")
    }

    func getById(_ id: UUID) async throws -> User? {
        try await apiClient.request(endpoint: "/users/\(id)")
    }

    func save(_ user: User) async throws -> User {
        try await apiClient.request(endpoint: "/users", method: .post, body: user)
    }

    func delete(_ user: User) async throws {
        try await apiClient.request(endpoint: "/users/\(user.id)", method: .delete)
    }
}

// Local implementation with SwiftData
class LocalUserRepository: UserRepository {
    private let context: ModelContext

    init(context: ModelContext) {
        self.context = context
    }

    func getAll() async throws -> [User] {
        let descriptor = FetchDescriptor<User>()
        return try context.fetch(descriptor)
    }

    func getById(_ id: UUID) async throws -> User? {
        let predicate = #Predicate<User> { $0.id == id }
        let descriptor = FetchDescriptor<User>(predicate: predicate)
        return try context.fetch(descriptor).first
    }

    func save(_ user: User) async throws -> User {
        context.insert(user)
        try context.save()
        return user
    }

    func delete(_ user: User) async throws {
        context.delete(user)
        try context.save()
    }
}
```

## Coordinator Pattern

### Navigation Coordinator
```swift
@MainActor
class AppCoordinator: ObservableObject {
    @Published var path = NavigationPath()
    @Published var sheet: Sheet?
    @Published var fullScreenCover: FullScreenCover?

    enum Destination: Hashable {
        case userDetail(User)
        case settings
        case profile
    }

    enum Sheet: Identifiable {
        case createUser
        case editUser(User)

        var id: String {
            switch self {
            case .createUser: return "createUser"
            case .editUser(let user): return "editUser-\(user.id)"
            }
        }
    }

    enum FullScreenCover: Identifiable {
        case onboarding
        case imageViewer(URL)

        var id: String {
            switch self {
            case .onboarding: return "onboarding"
            case .imageViewer(let url): return "imageViewer-\(url)"
            }
        }
    }

    func navigate(to destination: Destination) {
        path.append(destination)
    }

    func present(sheet: Sheet) {
        self.sheet = sheet
    }

    func present(cover: FullScreenCover) {
        self.fullScreenCover = cover
    }

    func pop() {
        path.removeLast()
    }

    func popToRoot() {
        path.removeLast(path.count)
    }

    func dismissSheet() {
        sheet = nil
    }
}

// Usage
struct ContentView: View {
    @StateObject private var coordinator = AppCoordinator()

    var body: some View {
        NavigationStack(path: $coordinator.path) {
            HomeView()
                .navigationDestination(for: AppCoordinator.Destination.self) { destination in
                    switch destination {
                    case .userDetail(let user):
                        UserDetailView(user: user)
                    case .settings:
                        SettingsView()
                    case .profile:
                        ProfileView()
                    }
                }
        }
        .sheet(item: $coordinator.sheet) { sheet in
            switch sheet {
            case .createUser:
                CreateUserView()
            case .editUser(let user):
                EditUserView(user: user)
            }
        }
        .fullScreenCover(item: $coordinator.fullScreenCover) { cover in
            switch cover {
            case .onboarding:
                OnboardingView()
            case .imageViewer(let url):
                ImageViewerView(url: url)
            }
        }
        .environmentObject(coordinator)
    }
}
```

## Service Layer

### Service Pattern
```swift
protocol AuthServiceProtocol {
    var isAuthenticated: Bool { get }
    var currentUser: User? { get }
    func signIn(email: String, password: String) async throws -> User
    func signOut() async throws
}

@MainActor
class AuthService: ObservableObject, AuthServiceProtocol {
    @Published private(set) var isAuthenticated = false
    @Published private(set) var currentUser: User?

    private let apiClient: APIClient
    private let keychain: KeychainManager

    init(apiClient: APIClient = .shared, keychain: KeychainManager = .shared) {
        self.apiClient = apiClient
        self.keychain = keychain

        // Restore session
        Task {
            await restoreSession()
        }
    }

    func signIn(email: String, password: String) async throws -> User {
        let response: AuthResponse = try await apiClient.request(
            endpoint: "/auth/login",
            method: .post,
            body: LoginRequest(email: email, password: password)
        )

        try keychain.save(response.token.data(using: .utf8)!, forKey: "authToken")
        currentUser = response.user
        isAuthenticated = true

        return response.user
    }

    func signOut() async throws {
        try keychain.delete(forKey: "authToken")
        currentUser = nil
        isAuthenticated = false
    }

    private func restoreSession() async {
        guard let tokenData = try? keychain.load(forKey: "authToken"),
              let _ = String(data: tokenData, encoding: .utf8) else {
            return
        }

        do {
            let user: User = try await apiClient.request(endpoint: "/auth/me")
            currentUser = user
            isAuthenticated = true
        } catch {
            try? keychain.delete(forKey: "authToken")
        }
    }
}
```

## Apple Documentation

- [App Architecture](https://developer.apple.com/documentation/swiftui/model-data)
- [Observable](https://developer.apple.com/documentation/observation/observable())
- [ObservableObject](https://developer.apple.com/documentation/combine/observableobject)
- [Environment](https://developer.apple.com/documentation/swiftui/environment)
- [StateObject](https://developer.apple.com/documentation/swiftui/stateobject)
