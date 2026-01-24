---
name: ios-app-lifecycle
description: iOS app lifecycle expert for app structure and scenes. Use when working with App struct, WindowGroup, scenes, ScenePhase, background tasks, app states, or launch configuration.
---

# iOS App Lifecycle

Expert guidance for managing iOS app lifecycle with SwiftUI.

## App Structure

### Basic App
```swift
import SwiftUI

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

### App with Initialization
```swift
@main
struct MyApp: App {
    @StateObject private var appState = AppState()
    @StateObject private var dataController = DataController()

    init() {
        // Configure appearance
        configureAppearance()

        // Setup dependencies
        setupAnalytics()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(appState)
                .environment(\.managedObjectContext, dataController.container.viewContext)
        }
    }

    private func configureAppearance() {
        let appearance = UINavigationBarAppearance()
        appearance.configureWithOpaqueBackground()
        UINavigationBar.appearance().standardAppearance = appearance
    }
}
```

## Scene Phase

### Monitor Scene Phase
```swift
struct ContentView: View {
    @Environment(\.scenePhase) private var scenePhase

    var body: some View {
        Text("Hello")
            .onChange(of: scenePhase) { oldPhase, newPhase in
                switch newPhase {
                case .active:
                    // App is in foreground and active
                    handleBecameActive()
                case .inactive:
                    // App is transitioning (e.g., control center open)
                    handleBecameInactive()
                case .background:
                    // App is in background
                    handleEnteredBackground()
                @unknown default:
                    break
                }
            }
    }

    private func handleBecameActive() {
        // Resume activities, refresh data
    }

    private func handleBecameInactive() {
        // Pause activities, save state
    }

    private func handleEnteredBackground() {
        // Save data, schedule background tasks
    }
}
```

### App-Level Scene Phase
```swift
@main
struct MyApp: App {
    @Environment(\.scenePhase) private var scenePhase

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .onChange(of: scenePhase) { oldPhase, newPhase in
            if newPhase == .background {
                // Save app state
                saveAppState()
            }
        }
    }
}
```

## AppDelegate

### UIApplicationDelegateAdaptor
```swift
class AppDelegate: NSObject, UIApplicationDelegate {
    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        // Configure push notifications
        UNUserNotificationCenter.current().delegate = self

        // Register for remote notifications
        application.registerForRemoteNotifications()

        return true
    }

    func application(
        _ application: UIApplication,
        didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
    ) {
        let token = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
        print("Device Token: \(token)")
    }

    func application(
        _ application: UIApplication,
        didFailToRegisterForRemoteNotificationsWithError error: Error
    ) {
        print("Failed to register: \(error)")
    }
}

extension AppDelegate: UNUserNotificationCenterDelegate {
    func userNotificationCenter(
        _ center: UNUserNotificationCenter,
        willPresent notification: UNNotification
    ) async -> UNNotificationPresentationOptions {
        return [.banner, .sound]
    }
}

@main
struct MyApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

## Background Tasks

### Register Background Tasks
```swift
import BackgroundTasks

@main
struct MyApp: App {
    init() {
        registerBackgroundTasks()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }

    private func registerBackgroundTasks() {
        BGTaskScheduler.shared.register(
            forTaskWithIdentifier: "com.app.refresh",
            using: nil
        ) { task in
            handleAppRefresh(task: task as! BGAppRefreshTask)
        }

        BGTaskScheduler.shared.register(
            forTaskWithIdentifier: "com.app.processing",
            using: nil
        ) { task in
            handleProcessing(task: task as! BGProcessingTask)
        }
    }

    private func handleAppRefresh(task: BGAppRefreshTask) {
        scheduleAppRefresh()

        let operation = RefreshOperation()

        task.expirationHandler = {
            operation.cancel()
        }

        operation.completionBlock = {
            task.setTaskCompleted(success: !operation.isCancelled)
        }

        OperationQueue.main.addOperation(operation)
    }

    private func handleProcessing(task: BGProcessingTask) {
        // Handle long-running processing
        Task {
            do {
                try await performProcessing()
                task.setTaskCompleted(success: true)
            } catch {
                task.setTaskCompleted(success: false)
            }
        }
    }
}
```

### Schedule Background Tasks
```swift
func scheduleAppRefresh() {
    let request = BGAppRefreshTaskRequest(identifier: "com.app.refresh")
    request.earliestBeginDate = Date(timeIntervalSinceNow: 15 * 60) // 15 minutes

    do {
        try BGTaskScheduler.shared.submit(request)
    } catch {
        print("Failed to schedule: \(error)")
    }
}

func scheduleProcessing() {
    let request = BGProcessingTaskRequest(identifier: "com.app.processing")
    request.requiresNetworkConnectivity = true
    request.requiresExternalPower = false

    try? BGTaskScheduler.shared.submit(request)
}
```

### Info.plist
```xml
<key>BGTaskSchedulerPermittedIdentifiers</key>
<array>
    <string>com.app.refresh</string>
    <string>com.app.processing</string>
</array>
```

## URL Handling

### Open URL
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

    private func handleDeepLink(_ url: URL) {
        guard let components = URLComponents(url: url, resolvingAgainstBaseURL: true) else {
            return
        }

        switch components.host {
        case "item":
            if let itemID = components.queryItems?.first(where: { $0.name == "id" })?.value {
                navigateToItem(id: itemID)
            }
        case "profile":
            navigateToProfile()
        default:
            break
        }
    }
}
```

### Register URL Scheme
```xml
<!-- Info.plist -->
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>myapp</string>
        </array>
        <key>CFBundleURLName</key>
        <string>com.myapp.deeplink</string>
    </dict>
</array>
```

## User Activity

### Handoff
```swift
struct ContentView: View {
    var body: some View {
        Text("Document")
            .userActivity("com.app.viewDocument") { activity in
                activity.title = "View Document"
                activity.userInfo = ["documentID": "123"]
                activity.isEligibleForHandoff = true
            }
    }
}

// Handle incoming activity
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .onContinueUserActivity("com.app.viewDocument") { activity in
                    if let documentID = activity.userInfo?["documentID"] as? String {
                        openDocument(id: documentID)
                    }
                }
        }
    }
}
```

## Shortcuts

### Quick Actions (Home Screen)
```swift
class AppDelegate: NSObject, UIApplicationDelegate {
    func application(
        _ application: UIApplication,
        configurationForConnecting connectingSceneSession: UISceneSession,
        options: UIScene.ConnectionOptions
    ) -> UISceneConfiguration {
        // Handle shortcut item if launched from quick action
        if let shortcutItem = options.shortcutItem {
            handleShortcutItem(shortcutItem)
        }
        return UISceneConfiguration(name: "Default", sessionRole: connectingSceneSession.role)
    }
}

// Configure in Info.plist or dynamically
func setupShortcuts() {
    UIApplication.shared.shortcutItems = [
        UIApplicationShortcutItem(
            type: "com.app.newItem",
            localizedTitle: "New Item",
            localizedSubtitle: "Create a new item",
            icon: UIApplicationShortcutIcon(systemImageName: "plus"),
            userInfo: nil
        )
    ]
}
```

## State Restoration

### SceneStorage
```swift
struct ContentView: View {
    @SceneStorage("selectedTab") private var selectedTab = 0
    @SceneStorage("searchText") private var searchText = ""

    var body: some View {
        TabView(selection: $selectedTab) {
            HomeView()
                .tag(0)
            SearchView(searchText: $searchText)
                .tag(1)
            SettingsView()
                .tag(2)
        }
    }
}
```

### Navigation Path Restoration
```swift
struct ContentView: View {
    @SceneStorage("navigationPath") private var pathData: Data?
    @State private var path = NavigationPath()

    var body: some View {
        NavigationStack(path: $path) {
            HomeView()
                .navigationDestination(for: Item.self) { item in
                    ItemDetailView(item: item)
                }
        }
        .onAppear {
            restorePath()
        }
        .onChange(of: path) { _, newPath in
            savePath(newPath)
        }
    }

    private func savePath(_ path: NavigationPath) {
        if let representation = path.codable {
            pathData = try? JSONEncoder().encode(representation)
        }
    }

    private func restorePath() {
        guard let data = pathData,
              let representation = try? JSONDecoder().decode(
                  NavigationPath.CodableRepresentation.self,
                  from: data
              ) else { return }
        path = NavigationPath(representation)
    }
}
```

## Apple Documentation

- [App Structure](https://developer.apple.com/documentation/swiftui/app)
- [ScenePhase](https://developer.apple.com/documentation/swiftui/scenephase)
- [Background Tasks](https://developer.apple.com/documentation/backgroundtasks)
- [Handoff](https://developer.apple.com/documentation/foundation/nsuseractivity)
- [State Restoration](https://developer.apple.com/documentation/swiftui/scenestorage)
