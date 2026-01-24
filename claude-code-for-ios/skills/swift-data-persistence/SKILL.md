---
name: swift-data-persistence
description: Swift data persistence expert for storing app data. Use when working with SwiftData, Core Data, UserDefaults, Keychain, file storage, @Query, @Model, ModelContainer, or data migration.
---

# Swift Data Persistence

Expert guidance for persisting data in Swift apps using modern Apple frameworks.

## SwiftData (iOS 17+)

### Model Definition
```swift
import SwiftData

@Model
class Item {
    var name: String
    var createdAt: Date
    var isCompleted: Bool

    // Relationships
    @Relationship(deleteRule: .cascade)
    var tasks: [Task]?

    // Unique constraint
    @Attribute(.unique) var id: UUID

    // External storage for large data
    @Attribute(.externalStorage) var imageData: Data?

    init(name: String) {
        self.id = UUID()
        self.name = name
        self.createdAt = Date()
        self.isCompleted = false
    }
}

@Model
class Task {
    var title: String
    var item: Item?

    init(title: String) {
        self.title = title
    }
}
```

### Model Container Setup
```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(for: [Item.self, Task.self])
    }
}

// Custom configuration
let config = ModelConfiguration(
    schema: Schema([Item.self]),
    isStoredInMemoryOnly: false,
    cloudKitDatabase: .private("iCloud.com.myapp")
)
let container = try ModelContainer(for: Item.self, configurations: config)
```

### Querying Data
```swift
struct ItemListView: View {
    // Basic query
    @Query private var items: [Item]

    // Sorted query
    @Query(sort: \Item.createdAt, order: .reverse)
    private var sortedItems: [Item]

    // Filtered query
    @Query(filter: #Predicate<Item> { $0.isCompleted == false })
    private var pendingItems: [Item]

    // Complex query
    @Query(
        filter: #Predicate<Item> { item in
            item.name.contains("important") && !item.isCompleted
        },
        sort: [SortDescriptor(\Item.createdAt, order: .reverse)],
        animation: .default
    )
    private var filteredItems: [Item]

    var body: some View {
        List(items) { item in
            Text(item.name)
        }
    }
}
```

### CRUD Operations
```swift
struct ItemManager {
    @Environment(\.modelContext) private var context

    // Create
    func addItem(name: String) {
        let item = Item(name: name)
        context.insert(item)
        // Auto-saves, or explicit:
        try? context.save()
    }

    // Read
    func fetchItems() throws -> [Item] {
        let descriptor = FetchDescriptor<Item>(
            predicate: #Predicate { !$0.isCompleted },
            sortBy: [SortDescriptor(\.createdAt)]
        )
        return try context.fetch(descriptor)
    }

    // Update
    func updateItem(_ item: Item, name: String) {
        item.name = name
        // Changes auto-tracked
    }

    // Delete
    func deleteItem(_ item: Item) {
        context.delete(item)
    }
}
```

### Dynamic Queries
```swift
struct SearchView: View {
    @State private var searchText = ""

    var body: some View {
        ItemListView(searchText: searchText)
    }
}

struct ItemListView: View {
    @Query private var items: [Item]

    init(searchText: String) {
        let predicate = #Predicate<Item> { item in
            searchText.isEmpty || item.name.localizedStandardContains(searchText)
        }
        _items = Query(filter: predicate, sort: \Item.createdAt)
    }

    var body: some View {
        List(items) { item in
            Text(item.name)
        }
    }
}
```

## UserDefaults

### Basic Usage
```swift
// Store values
UserDefaults.standard.set("John", forKey: "username")
UserDefaults.standard.set(25, forKey: "age")
UserDefaults.standard.set(true, forKey: "isPremium")

// Retrieve values
let username = UserDefaults.standard.string(forKey: "username")
let age = UserDefaults.standard.integer(forKey: "age")
let isPremium = UserDefaults.standard.bool(forKey: "isPremium")
```

### @AppStorage in SwiftUI
```swift
struct SettingsView: View {
    @AppStorage("username") private var username = ""
    @AppStorage("notificationsEnabled") private var notifications = true
    @AppStorage("selectedTheme") private var theme: Theme = .system

    var body: some View {
        Form {
            TextField("Username", text: $username)
            Toggle("Notifications", isOn: $notifications)
            Picker("Theme", selection: $theme) {
                ForEach(Theme.allCases, id: \.self) { theme in
                    Text(theme.rawValue).tag(theme)
                }
            }
        }
    }
}

enum Theme: String, CaseIterable {
    case light, dark, system
}
```

### Custom Types with UserDefaults
```swift
// For Codable types
extension UserDefaults {
    func set<T: Codable>(_ value: T, forKey key: String) {
        if let data = try? JSONEncoder().encode(value) {
            set(data, forKey: key)
        }
    }

    func get<T: Codable>(_ type: T.Type, forKey key: String) -> T? {
        guard let data = data(forKey: key) else { return nil }
        return try? JSONDecoder().decode(type, from: data)
    }
}

// Usage
struct UserSettings: Codable {
    var theme: String
    var fontSize: Int
}

UserDefaults.standard.set(settings, forKey: "userSettings")
let settings = UserDefaults.standard.get(UserSettings.self, forKey: "userSettings")
```

## Keychain (Secure Storage)

### Basic Keychain Operations
```swift
import Security

class KeychainManager {
    static let shared = KeychainManager()

    func save(_ data: Data, forKey key: String) throws {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecValueData as String: data
        ]

        SecItemDelete(query as CFDictionary)  // Remove existing

        let status = SecItemAdd(query as CFDictionary, nil)
        guard status == errSecSuccess else {
            throw KeychainError.saveFailed(status)
        }
    }

    func load(forKey key: String) throws -> Data? {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecReturnData as String: true,
            kSecMatchLimit as String: kSecMatchLimitOne
        ]

        var result: AnyObject?
        let status = SecItemCopyMatching(query as CFDictionary, &result)

        guard status == errSecSuccess else {
            if status == errSecItemNotFound { return nil }
            throw KeychainError.loadFailed(status)
        }

        return result as? Data
    }

    func delete(forKey key: String) throws {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key
        ]

        let status = SecItemDelete(query as CFDictionary)
        guard status == errSecSuccess || status == errSecItemNotFound else {
            throw KeychainError.deleteFailed(status)
        }
    }
}

enum KeychainError: Error {
    case saveFailed(OSStatus)
    case loadFailed(OSStatus)
    case deleteFailed(OSStatus)
}
```

### Store Credentials
```swift
// Save password
func savePassword(_ password: String, for account: String) throws {
    guard let data = password.data(using: .utf8) else { return }
    try KeychainManager.shared.save(data, forKey: account)
}

// Retrieve password
func getPassword(for account: String) throws -> String? {
    guard let data = try KeychainManager.shared.load(forKey: account) else {
        return nil
    }
    return String(data: data, encoding: .utf8)
}
```

## File Storage

### Documents Directory
```swift
class FileStorageManager {
    static let shared = FileStorageManager()

    var documentsDirectory: URL {
        FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
    }

    func save<T: Codable>(_ object: T, to filename: String) throws {
        let url = documentsDirectory.appendingPathComponent(filename)
        let data = try JSONEncoder().encode(object)
        try data.write(to: url)
    }

    func load<T: Codable>(_ type: T.Type, from filename: String) throws -> T {
        let url = documentsDirectory.appendingPathComponent(filename)
        let data = try Data(contentsOf: url)
        return try JSONDecoder().decode(type, from: data)
    }

    func delete(_ filename: String) throws {
        let url = documentsDirectory.appendingPathComponent(filename)
        try FileManager.default.removeItem(at: url)
    }

    func fileExists(_ filename: String) -> Bool {
        let url = documentsDirectory.appendingPathComponent(filename)
        return FileManager.default.fileExists(atPath: url.path)
    }
}
```

### Image Storage
```swift
func saveImage(_ image: UIImage, named filename: String) throws {
    guard let data = image.jpegData(compressionQuality: 0.8) else {
        throw StorageError.compressionFailed
    }
    let url = FileStorageManager.shared.documentsDirectory
        .appendingPathComponent(filename)
    try data.write(to: url)
}

func loadImage(named filename: String) -> UIImage? {
    let url = FileStorageManager.shared.documentsDirectory
        .appendingPathComponent(filename)
    guard let data = try? Data(contentsOf: url) else { return nil }
    return UIImage(data: data)
}
```

## Data Migration (SwiftData)

### Schema Versioning
```swift
enum SchemaV1: VersionedSchema {
    static var versionIdentifier = Schema.Version(1, 0, 0)
    static var models: [any PersistentModel.Type] {
        [Item.self]
    }

    @Model
    class Item {
        var name: String
        init(name: String) { self.name = name }
    }
}

enum SchemaV2: VersionedSchema {
    static var versionIdentifier = Schema.Version(2, 0, 0)
    static var models: [any PersistentModel.Type] {
        [Item.self]
    }

    @Model
    class Item {
        var name: String
        var createdAt: Date  // New property
        init(name: String) {
            self.name = name
            self.createdAt = Date()
        }
    }
}

enum MigrationPlan: SchemaMigrationPlan {
    static var schemas: [any VersionedSchema.Type] {
        [SchemaV1.self, SchemaV2.self]
    }

    static var stages: [MigrationStage] {
        [migrateV1toV2]
    }

    static let migrateV1toV2 = MigrationStage.lightweight(
        fromVersion: SchemaV1.self,
        toVersion: SchemaV2.self
    )
}

// Use in app
.modelContainer(for: Item.self, migrationPlan: MigrationPlan.self)
```

## Apple Documentation

- [SwiftData](https://developer.apple.com/documentation/swiftdata)
- [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults)
- [Keychain Services](https://developer.apple.com/documentation/security/keychain_services)
- [FileManager](https://developer.apple.com/documentation/foundation/filemanager)
