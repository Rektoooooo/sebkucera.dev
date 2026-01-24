---
name: swiftui-navigation
description: SwiftUI navigation expert for app routing and flow. Use when implementing NavigationStack, NavigationLink, NavigationPath, TabView, sheets, fullScreenCover, alerts, confirmation dialogs, popovers, deep linking, or programmatic navigation.
---

# SwiftUI Navigation

Expert guidance for implementing navigation patterns in SwiftUI.

## NavigationStack

### Basic Navigation
```swift
NavigationStack {
    List(items) { item in
        NavigationLink(item.name) {
            ItemDetailView(item: item)
        }
    }
    .navigationTitle("Items")
    .navigationBarTitleDisplayMode(.large)
}
```

### Programmatic Navigation with Path
```swift
@State private var path = NavigationPath()

NavigationStack(path: $path) {
    List(items) { item in
        Button(item.name) {
            path.append(item)
        }
    }
    .navigationDestination(for: Item.self) { item in
        ItemDetailView(item: item)
    }
    .navigationDestination(for: Category.self) { category in
        CategoryView(category: category)
    }
}

// Pop to root
func popToRoot() {
    path.removeLast(path.count)
}

// Pop one level
func goBack() {
    path.removeLast()
}
```

### Navigation Toolbar
```swift
NavigationStack {
    ContentView()
        .toolbar {
            ToolbarItem(placement: .topBarLeading) {
                Button("Edit") { }
            }
            ToolbarItem(placement: .topBarTrailing) {
                Button(action: { }) {
                    Image(systemName: "plus")
                }
            }
            ToolbarItem(placement: .bottomBar) {
                HStack {
                    Button("Share") { }
                    Spacer()
                    Button("Delete") { }
                }
            }
        }
}
```

## TabView

### Basic Tabs
```swift
TabView {
    HomeView()
        .tabItem {
            Label("Home", systemImage: "house")
        }

    SearchView()
        .tabItem {
            Label("Search", systemImage: "magnifyingglass")
        }

    ProfileView()
        .tabItem {
            Label("Profile", systemImage: "person")
        }
}
```

### Programmatic Tab Selection
```swift
@State private var selectedTab = 0

TabView(selection: $selectedTab) {
    HomeView()
        .tabItem { Label("Home", systemImage: "house") }
        .tag(0)

    SearchView()
        .tabItem { Label("Search", systemImage: "magnifyingglass") }
        .tag(1)

    ProfileView()
        .tabItem { Label("Profile", systemImage: "person") }
        .tag(2)
}

// Switch tab programmatically
func switchToProfile() {
    selectedTab = 2
}
```

### Badge
```swift
TabView {
    NotificationsView()
        .tabItem { Label("Notifications", systemImage: "bell") }
        .badge(5)
}
```

## Sheets & Covers

### Sheet
```swift
@State private var showSheet = false

Button("Show Sheet") {
    showSheet = true
}
.sheet(isPresented: $showSheet) {
    SheetContentView()
}

// With dismiss
struct SheetContentView: View {
    @Environment(\.dismiss) var dismiss

    var body: some View {
        NavigationStack {
            Content()
                .toolbar {
                    ToolbarItem(placement: .topBarTrailing) {
                        Button("Done") {
                            dismiss()
                        }
                    }
                }
        }
    }
}
```

### Sheet with Item
```swift
@State private var selectedItem: Item?

List(items) { item in
    Button(item.name) {
        selectedItem = item
    }
}
.sheet(item: $selectedItem) { item in
    ItemDetailView(item: item)
}
```

### Full Screen Cover
```swift
@State private var showFullScreen = false

Button("Show Full Screen") {
    showFullScreen = true
}
.fullScreenCover(isPresented: $showFullScreen) {
    FullScreenView()
}
```

### Sheet Customization (iOS 16+)
```swift
.sheet(isPresented: $showSheet) {
    SheetContent()
        .presentationDetents([.medium, .large])
        .presentationDragIndicator(.visible)
        .presentationCornerRadius(20)
        .presentationBackground(.ultraThinMaterial)
}
```

## Alerts & Dialogs

### Alert
```swift
@State private var showAlert = false

Button("Delete") {
    showAlert = true
}
.alert("Delete Item?", isPresented: $showAlert) {
    Button("Cancel", role: .cancel) { }
    Button("Delete", role: .destructive) {
        deleteItem()
    }
} message: {
    Text("This action cannot be undone.")
}
```

### Alert with TextField
```swift
@State private var showAlert = false
@State private var inputText = ""

.alert("Enter Name", isPresented: $showAlert) {
    TextField("Name", text: $inputText)
    Button("Cancel", role: .cancel) { }
    Button("Save") { saveName(inputText) }
}
```

### Confirmation Dialog
```swift
@State private var showDialog = false

.confirmationDialog("Choose Action", isPresented: $showDialog) {
    Button("Share") { share() }
    Button("Edit") { edit() }
    Button("Delete", role: .destructive) { delete() }
    Button("Cancel", role: .cancel) { }
}
```

## Popovers

```swift
@State private var showPopover = false

Button("Info") {
    showPopover = true
}
.popover(isPresented: $showPopover, arrowEdge: .top) {
    VStack {
        Text("Additional Information")
        Text("Details here...")
    }
    .padding()
    .presentationCompactAdaptation(.popover)
}
```

## Deep Linking

### URL Handling
```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .onOpenURL { url in
                    handleDeepLink(url)
                }
        }
    }

    func handleDeepLink(_ url: URL) {
        // myapp://item/123
        guard let components = URLComponents(url: url, resolvingAgainstBaseURL: true),
              let host = components.host else { return }

        switch host {
        case "item":
            if let itemId = components.path.dropFirst().description {
                // Navigate to item
            }
        default:
            break
        }
    }
}
```

### Environment-Based Navigation
```swift
class NavigationManager: ObservableObject {
    @Published var path = NavigationPath()

    func navigateToItem(_ id: String) {
        path.append(ItemDestination(id: id))
    }

    func popToRoot() {
        path.removeLast(path.count)
    }
}

struct ContentView: View {
    @StateObject private var navigationManager = NavigationManager()

    var body: some View {
        NavigationStack(path: $navigationManager.path) {
            HomeView()
        }
        .environmentObject(navigationManager)
    }
}
```

## Navigation State Persistence

```swift
@SceneStorage("navigationPath") private var pathData: Data?
@State private var path = NavigationPath()

.onAppear {
    if let data = pathData,
       let decoded = try? JSONDecoder().decode(NavigationPath.CodableRepresentation.self, from: data) {
        path = NavigationPath(decoded)
    }
}
.onChange(of: path) { _, newPath in
    if let representation = newPath.codable,
       let data = try? JSONEncoder().encode(representation) {
        pathData = data
    }
}
```

## Apple Documentation

- [NavigationStack](https://developer.apple.com/documentation/swiftui/navigationstack)
- [NavigationLink](https://developer.apple.com/documentation/swiftui/navigationlink)
- [TabView](https://developer.apple.com/documentation/swiftui/tabview)
- [sheet](https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:))
- [alert](https://developer.apple.com/documentation/swiftui/view/alert(_:ispresented:actions:message:))
