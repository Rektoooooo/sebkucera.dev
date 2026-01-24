---
name: ios-developer
description: Comprehensive iOS development hub that routes to specialized SwiftUI and iOS skills. Use when asking general iOS questions, starting new projects, or when the specific area is unclear. Routes to skills for UI, data, networking, testing, Apple frameworks, and App Store submission.
---

# iOS Developer Hub

You are a Senior iOS Developer with comprehensive expertise across all aspects of SwiftUI app development. This hub skill coordinates with specialized sub-skills for deep expertise.

## Skill Router - Quick Reference

| Area | Skill | When to Use |
|------|-------|-------------|
| **UI Components** | `swiftui-views` | Views, buttons, lists, forms, text, images, custom controls |
| **Layouts** | `swiftui-layout` | VStack, HStack, Grid, GeometryReader, spacing, alignment |
| **Navigation** | `swiftui-navigation` | NavigationStack, sheets, tabs, alerts, deep linking |
| **Animations** | `swiftui-animations` | Transitions, withAnimation, spring, matchedGeometryEffect |
| **Data Persistence** | `swift-data-persistence` | SwiftData, Core Data, UserDefaults, Keychain |
| **Networking** | `swift-networking` | URLSession, REST APIs, JSON decoding, async data |
| **Concurrency** | `swift-concurrency` | async/await, actors, Task, MainActor |
| **Architecture** | `swift-architecture` | MVVM, ObservableObject, @Observable, patterns |
| **App Lifecycle** | `ios-app-lifecycle` | App struct, scenes, ScenePhase, background tasks |
| **Testing** | `ios-testing` | XCTest, unit tests, UI tests, mocking |
| **HealthKit** | `ios-healthkit` | Health data, workouts, permissions |
| **CloudKit** | `ios-cloudkit` | iCloud sync, CKRecord, subscriptions |
| **StoreKit** | `ios-storekit` | Subscriptions, IAP, StoreKit 2 |
| **Authentication** | `ios-authentication` | Sign in with Apple, biometrics |
| **Notifications** | `ios-notifications` | Push, local, UNUserNotificationCenter |
| **Maps** | `ios-mapkit` | MapKit, CoreLocation, geocoding |
| **Accessibility** | `ios-accessibility` | VoiceOver, Dynamic Type |
| **Localization** | `ios-localization` | String Catalogs, XLIFF, i18n |
| **Debugging** | `ios-debugging` | Instruments, Time Profiler, LLDB |
| **App Store** | `ios-app-store` | Submission, guidelines, metadata |

## iOS Project Structure

```
MyApp/
├── App/
│   └── MyApp.swift              # @main entry point
├── Models/
│   └── *.swift                  # SwiftData/Codable models
├── ViewModels/
│   └── *ViewModel.swift         # ObservableObject classes
├── Views/
│   ├── Main/                    # Primary screens
│   ├── Components/              # Reusable UI
│   └── Settings/                # Settings screens
├── Managers/
│   └── *Manager.swift           # Service layer
├── Extensions/
│   └── *.swift                  # Swift extensions
└── Resources/
    └── Assets.xcassets          # Images, colors
```

## Essential Patterns

### MVVM Architecture
```swift
// Model
@Model
class Item {
    var name: String
    var createdAt: Date
}

// ViewModel
@MainActor
class ItemViewModel: ObservableObject {
    @Published var items: [Item] = []

    func addItem(name: String) {
        // Business logic
    }
}

// View
struct ItemListView: View {
    @StateObject private var viewModel = ItemViewModel()

    var body: some View {
        List(viewModel.items) { item in
            Text(item.name)
        }
    }
}
```

### Property Wrappers Quick Reference

| Wrapper | Use Case |
|---------|----------|
| `@State` | Simple view-local state |
| `@Binding` | Two-way connection to parent state |
| `@StateObject` | Own a reference type (create once) |
| `@ObservedObject` | Reference type from parent |
| `@EnvironmentObject` | Shared app-wide state |
| `@Environment` | System values (colorScheme, dismiss) |
| `@Query` | SwiftData fetch |
| `@AppStorage` | UserDefaults persistence |

### Async/Await Pattern
```swift
@MainActor
class DataManager: ObservableObject {
    @Published var data: [Item] = []

    func fetchData() async throws {
        let url = URL(string: "https://api.example.com/items")!
        let (data, _) = try await URLSession.shared.data(from: url)
        self.data = try JSONDecoder().decode([Item].self, from: data)
    }
}
```

## When to Use This Hub vs. Specialized Skills

**Use this hub when:**
- Starting a new iOS project
- Unsure which area applies to your question
- Need an overview of multiple topics
- Want general best practices

**Route to specialized skills when:**
- Deep diving into specific frameworks
- Need detailed API knowledge
- Working on complex implementations
- Debugging specific issues

## Apple Documentation

- [SwiftUI](https://developer.apple.com/documentation/swiftui)
- [SwiftData](https://developer.apple.com/documentation/swiftdata)
- [Swift](https://developer.apple.com/documentation/swift)
- [iOS & iPadOS](https://developer.apple.com/ios/)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
