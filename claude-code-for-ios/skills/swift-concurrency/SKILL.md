---
name: swift-concurrency
description: Swift concurrency expert for async programming. Use when working with async/await, actors, Task, TaskGroup, MainActor, Sendable, continuations, or managing concurrent operations.
---

# Swift Concurrency

Expert guidance for modern Swift concurrency with async/await and actors.

## Async/Await Basics

### Async Functions
```swift
// Define async function
func fetchUser(id: Int) async throws -> User {
    let url = URL(string: "https://api.example.com/users/\(id)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(User.self, from: data)
}

// Call async function
func loadUser() async {
    do {
        let user = try await fetchUser(id: 1)
        print(user.name)
    } catch {
        print("Error: \(error)")
    }
}
```

### Async Properties
```swift
struct ImageLoader {
    let url: URL

    var image: UIImage {
        get async throws {
            let (data, _) = try await URLSession.shared.data(from: url)
            guard let image = UIImage(data: data) else {
                throw ImageError.invalidData
            }
            return image
        }
    }
}

// Usage
let loader = ImageLoader(url: imageURL)
let image = try await loader.image
```

### Async Sequences
```swift
// Iterate over async sequence
for try await line in url.lines {
    print(line)
}

// With AsyncStream
func notifications() -> AsyncStream<Notification> {
    AsyncStream { continuation in
        let observer = NotificationCenter.default.addObserver(
            forName: .myNotification,
            object: nil,
            queue: nil
        ) { notification in
            continuation.yield(notification)
        }

        continuation.onTermination = { _ in
            NotificationCenter.default.removeObserver(observer)
        }
    }
}

// Usage
for await notification in notifications() {
    print("Received: \(notification)")
}
```

## Task

### Basic Task
```swift
// Fire and forget
Task {
    await performWork()
}

// With priority
Task(priority: .high) {
    await urgentWork()
}

// Detached task (no context inheritance)
Task.detached {
    await backgroundWork()
}
```

### Task Cancellation
```swift
class DataLoader {
    private var loadTask: Task<Void, Never>?

    func startLoading() {
        loadTask = Task {
            do {
                // Check cancellation periodically
                try Task.checkCancellation()

                let data = try await fetchData()

                // Or use isCancelled
                guard !Task.isCancelled else { return }

                await processData(data)
            } catch is CancellationError {
                print("Task was cancelled")
            } catch {
                print("Error: \(error)")
            }
        }
    }

    func cancelLoading() {
        loadTask?.cancel()
    }
}
```

### Task Value
```swift
let task = Task {
    try await fetchUser(id: 1)
}

// Later, get result
let user = try await task.value
```

## TaskGroup

### Parallel Execution
```swift
func fetchAllUsers(ids: [Int]) async throws -> [User] {
    try await withThrowingTaskGroup(of: User.self) { group in
        for id in ids {
            group.addTask {
                try await fetchUser(id: id)
            }
        }

        var users: [User] = []
        for try await user in group {
            users.append(user)
        }
        return users
    }
}
```

### Limiting Concurrency
```swift
func processImages(_ urls: [URL], maxConcurrent: Int = 4) async throws -> [UIImage] {
    try await withThrowingTaskGroup(of: UIImage.self) { group in
        var images: [UIImage] = []
        var iterator = urls.makeIterator()

        // Start initial batch
        for _ in 0..<maxConcurrent {
            if let url = iterator.next() {
                group.addTask { try await downloadImage(url) }
            }
        }

        // Process and add more
        for try await image in group {
            images.append(image)
            if let url = iterator.next() {
                group.addTask { try await downloadImage(url) }
            }
        }

        return images
    }
}
```

### First Result Wins
```swift
func fetchFromFastestServer() async throws -> Data {
    try await withThrowingTaskGroup(of: Data.self) { group in
        let servers = ["server1.com", "server2.com", "server3.com"]

        for server in servers {
            group.addTask {
                try await fetch(from: server)
            }
        }

        // Return first successful result
        guard let data = try await group.next() else {
            throw NetworkError.noResponse
        }

        // Cancel remaining tasks
        group.cancelAll()

        return data
    }
}
```

## Actors

### Basic Actor
```swift
actor BankAccount {
    private var balance: Double = 0

    func deposit(_ amount: Double) {
        balance += amount
    }

    func withdraw(_ amount: Double) throws -> Double {
        guard balance >= amount else {
            throw BankError.insufficientFunds
        }
        balance -= amount
        return amount
    }

    func getBalance() -> Double {
        balance
    }
}

// Usage (must await)
let account = BankAccount()
await account.deposit(100)
let balance = await account.getBalance()
```

### Nonisolated
```swift
actor DataStore {
    private var items: [Item] = []

    // Synchronous property access
    nonisolated let id = UUID()

    // Computed nonisolated (only from immutable data)
    nonisolated var description: String {
        "DataStore \(id)"
    }

    func addItem(_ item: Item) {
        items.append(item)
    }
}
```

### Actor Reentrancy
```swift
actor ImageCache {
    private var cache: [URL: UIImage] = [:]
    private var inProgress: [URL: Task<UIImage, Error>] = [:]

    func image(for url: URL) async throws -> UIImage {
        // Check cache first
        if let cached = cache[url] {
            return cached
        }

        // Check if already downloading
        if let task = inProgress[url] {
            return try await task.value
        }

        // Start new download
        let task = Task {
            try await downloadImage(url)
        }

        inProgress[url] = task

        do {
            let image = try await task.value
            cache[url] = image
            inProgress[url] = nil
            return image
        } catch {
            inProgress[url] = nil
            throw error
        }
    }
}
```

## MainActor

### MainActor Annotation
```swift
@MainActor
class ViewModel: ObservableObject {
    @Published var items: [Item] = []
    @Published var isLoading = false

    func loadItems() async {
        isLoading = true
        defer { isLoading = false }

        do {
            items = try await fetchItems()
        } catch {
            // Handle error
        }
    }
}
```

### MainActor.run
```swift
func processInBackground() async {
    let result = await performHeavyWork()

    // Update UI on main thread
    await MainActor.run {
        updateUI(with: result)
    }
}
```

### MainActor in SwiftUI
```swift
struct ContentView: View {
    @StateObject private var viewModel = ViewModel()

    var body: some View {
        List(viewModel.items) { item in
            Text(item.name)
        }
        .task {
            // Automatically runs on MainActor context
            await viewModel.loadItems()
        }
    }
}
```

## Sendable

### Sendable Types
```swift
// Struct with Sendable properties is implicitly Sendable
struct UserData: Sendable {
    let id: Int
    let name: String
}

// Explicitly mark as Sendable
final class Counter: Sendable {
    let count: Int  // Must be immutable for class

    init(count: Int) {
        self.count = count
    }
}

// @unchecked Sendable (use carefully)
final class ThreadSafeCounter: @unchecked Sendable {
    private var lock = NSLock()
    private var _count = 0

    var count: Int {
        lock.lock()
        defer { lock.unlock() }
        return _count
    }

    func increment() {
        lock.lock()
        defer { lock.unlock() }
        _count += 1
    }
}
```

### Sendable Closures
```swift
// @Sendable closure
func performAsync(_ work: @Sendable @escaping () async -> Void) {
    Task {
        await work()
    }
}

// Usage
performAsync { @Sendable in
    await processData()
}
```

## Continuations

### Bridging Callbacks to Async
```swift
func fetchUser() async throws -> User {
    try await withCheckedThrowingContinuation { continuation in
        oldAPIWithCallback { result in
            switch result {
            case .success(let user):
                continuation.resume(returning: user)
            case .failure(let error):
                continuation.resume(throwing: error)
            }
        }
    }
}
```

### Unsafe Continuation (Performance)
```swift
func fetchData() async -> Data {
    await withUnsafeContinuation { continuation in
        // Only resume exactly once!
        legacyFetch { data in
            continuation.resume(returning: data)
        }
    }
}
```

## async let

### Concurrent Binding
```swift
func loadDashboard() async throws -> Dashboard {
    async let user = fetchUser()
    async let posts = fetchPosts()
    async let notifications = fetchNotifications()

    // All three run concurrently
    return try await Dashboard(
        user: user,
        posts: posts,
        notifications: notifications
    )
}
```

### With Cancellation
```swift
func loadData() async throws -> (User, [Post]) {
    async let user = fetchUser()
    async let posts = fetchPosts()

    // If either fails, the other is cancelled
    return try await (user, posts)
}
```

## Best Practices

### Structured Concurrency
```swift
// Good: Task lifetime tied to scope
func loadData() async {
    await withTaskGroup(of: Void.self) { group in
        group.addTask { await loadUsers() }
        group.addTask { await loadPosts() }
    }
    // Both complete before function returns
}

// Avoid: Unstructured tasks that outlive scope
func loadData() {
    Task { await loadUsers() }  // May outlive function
    Task { await loadPosts() }
}
```

### Error Handling
```swift
func fetchWithRetry<T>(
    maxAttempts: Int = 3,
    operation: () async throws -> T
) async throws -> T {
    var lastError: Error?

    for attempt in 1...maxAttempts {
        do {
            return try await operation()
        } catch {
            lastError = error
            if attempt < maxAttempts {
                try await Task.sleep(nanoseconds: UInt64(attempt) * 1_000_000_000)
            }
        }
    }

    throw lastError!
}
```

## Apple Documentation

- [Concurrency](https://developer.apple.com/documentation/swift/concurrency)
- [async/await](https://developer.apple.com/documentation/swift/updating-an-app-to-use-swift-concurrency)
- [Actors](https://developer.apple.com/documentation/swift/actor)
- [Task](https://developer.apple.com/documentation/swift/task)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
