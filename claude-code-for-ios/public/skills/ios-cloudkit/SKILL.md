---
name: ios-cloudkit
description: CloudKit expert for iCloud data sync. Use when working with iCloud sync, CKRecord, CKDatabase, subscriptions, sharing, or cross-device data synchronization.
---

# iOS CloudKit

Expert guidance for iCloud data synchronization with CloudKit.

## Setup

### Enable CloudKit
1. Add iCloud capability in Xcode
2. Check "CloudKit" option
3. Create container (e.g., `iCloud.com.yourapp`)

### CloudKit Manager
```swift
import CloudKit

@MainActor
class CloudKitManager: ObservableObject {
    let container: CKContainer
    let privateDatabase: CKDatabase
    let publicDatabase: CKDatabase

    @Published var isSignedIn = false
    @Published var syncStatus: SyncStatus = .idle

    enum SyncStatus {
        case idle, syncing, error(Error)
    }

    init(containerIdentifier: String = "iCloud.com.yourapp") {
        container = CKContainer(identifier: containerIdentifier)
        privateDatabase = container.privateCloudDatabase
        publicDatabase = container.publicCloudDatabase
    }

    func checkAccountStatus() async throws -> Bool {
        let status = try await container.accountStatus()
        isSignedIn = status == .available
        return isSignedIn
    }
}
```

## CRUD Operations

### Create Record
```swift
func createRecord(item: Item) async throws -> CKRecord {
    let record = CKRecord(recordType: "Item")
    record["name"] = item.name
    record["createdAt"] = item.createdAt
    record["isCompleted"] = item.isCompleted

    return try await privateDatabase.save(record)
}
```

### Read Records
```swift
func fetchItems() async throws -> [Item] {
    let predicate = NSPredicate(value: true)
    let query = CKQuery(recordType: "Item", predicate: predicate)
    query.sortDescriptors = [NSSortDescriptor(key: "createdAt", ascending: false)]

    let (results, _) = try await privateDatabase.records(matching: query)

    return results.compactMap { _, result in
        guard case .success(let record) = result else { return nil }
        return Item(
            id: record.recordID.recordName,
            name: record["name"] as? String ?? "",
            createdAt: record["createdAt"] as? Date ?? Date(),
            isCompleted: record["isCompleted"] as? Bool ?? false
        )
    }
}
```

### Update Record
```swift
func updateRecord(recordID: CKRecord.ID, updates: [String: Any]) async throws -> CKRecord {
    let record = try await privateDatabase.record(for: recordID)

    for (key, value) in updates {
        record[key] = value as? CKRecordValue
    }

    return try await privateDatabase.save(record)
}
```

### Delete Record
```swift
func deleteRecord(recordID: CKRecord.ID) async throws {
    try await privateDatabase.deleteRecord(withID: recordID)
}
```

## Querying

### Filtered Query
```swift
func fetchIncompleteItems() async throws -> [CKRecord] {
    let predicate = NSPredicate(format: "isCompleted == %@", NSNumber(value: false))
    let query = CKQuery(recordType: "Item", predicate: predicate)

    let (results, _) = try await privateDatabase.records(matching: query)
    return results.compactMap { _, result in
        if case .success(let record) = result { return record }
        return nil
    }
}
```

### Compound Predicate
```swift
func searchItems(name: String, completed: Bool) async throws -> [CKRecord] {
    let namePredicate = NSPredicate(format: "name CONTAINS[cd] %@", name)
    let completedPredicate = NSPredicate(format: "isCompleted == %@", NSNumber(value: completed))
    let compound = NSCompoundPredicate(andPredicateWithSubpredicates: [namePredicate, completedPredicate])

    let query = CKQuery(recordType: "Item", predicate: compound)
    let (results, _) = try await privateDatabase.records(matching: query)

    return results.compactMap { _, result in
        if case .success(let record) = result { return record }
        return nil
    }
}
```

### Paginated Query
```swift
func fetchItemsPaginated(cursor: CKQueryOperation.Cursor? = nil) async throws -> (items: [CKRecord], cursor: CKQueryOperation.Cursor?) {
    let query = CKQuery(recordType: "Item", predicate: NSPredicate(value: true))

    let (results, newCursor) = try await privateDatabase.records(
        matching: query,
        desiredKeys: ["name", "createdAt"],
        resultsLimit: 50
    )

    let records = results.compactMap { _, result in
        if case .success(let record) = result { return record }
        return nil
    }

    return (records, newCursor)
}
```

## Subscriptions

### Push Notifications Setup
```swift
func setupSubscription() async throws {
    let subscription = CKQuerySubscription(
        recordType: "Item",
        predicate: NSPredicate(value: true),
        subscriptionID: "item-changes",
        options: [.firesOnRecordCreation, .firesOnRecordUpdate, .firesOnRecordDeletion]
    )

    let notification = CKSubscription.NotificationInfo()
    notification.shouldSendContentAvailable = true
    notification.alertBody = "Items updated"

    subscription.notificationInfo = notification

    try await privateDatabase.save(subscription)
}
```

### Handle Notifications
```swift
// In AppDelegate
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any]) async -> UIBackgroundFetchResult {
    let notification = CKNotification(fromRemoteNotificationDictionary: userInfo)

    if notification.subscriptionID == "item-changes" {
        // Fetch changes
        await cloudKitManager.fetchChanges()
        return .newData
    }

    return .noData
}
```

## Sync with Change Tokens

### Fetch Changes
```swift
class CloudKitManager: ObservableObject {
    @AppStorage("changeToken") private var changeTokenData: Data?

    func fetchChanges() async throws -> [CKRecord] {
        var changedRecords: [CKRecord] = []

        let token = changeTokenData.flatMap {
            try? NSKeyedUnarchiver.unarchivedObject(ofClass: CKServerChangeToken.self, from: $0)
        }

        let config = CKFetchRecordZoneChangesOperation.ZoneConfiguration()
        config.previousServerChangeToken = token

        let zoneID = CKRecordZone.default().zoneID

        let changes = try await privateDatabase.recordZoneChanges(
            inZoneWith: zoneID,
            since: token
        )

        for modification in changes.modificationResultsByID {
            if case .success(let record) = modification.value {
                changedRecords.append(record)
            }
        }

        // Save new token
        if let newToken = changes.changeToken,
           let data = try? NSKeyedArchiver.archivedData(withRootObject: newToken, requiringSecureCoding: true) {
            changeTokenData = data
        }

        return changedRecords
    }
}
```

## Assets (Files)

### Upload Asset
```swift
func uploadImage(_ image: UIImage, for recordID: CKRecord.ID) async throws {
    guard let data = image.jpegData(compressionQuality: 0.8) else {
        throw CloudKitError.invalidData
    }

    // Write to temp file
    let tempURL = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString + ".jpg")
    try data.write(to: tempURL)

    let record = try await privateDatabase.record(for: recordID)
    record["image"] = CKAsset(fileURL: tempURL)

    try await privateDatabase.save(record)

    // Cleanup
    try? FileManager.default.removeItem(at: tempURL)
}
```

### Download Asset
```swift
func downloadImage(from record: CKRecord) async throws -> UIImage? {
    guard let asset = record["image"] as? CKAsset,
          let fileURL = asset.fileURL else {
        return nil
    }

    let data = try Data(contentsOf: fileURL)
    return UIImage(data: data)
}
```

## Sharing

### Create Share
```swift
func shareRecord(_ record: CKRecord) async throws -> CKShare {
    let share = CKShare(rootRecord: record)
    share.publicPermission = .readOnly
    share[CKShare.SystemFieldKey.title] = "Shared Item"

    let operation = CKModifyRecordsOperation(recordsToSave: [record, share], recordIDsToDelete: nil)

    return try await withCheckedThrowingContinuation { continuation in
        operation.modifyRecordsResultBlock = { result in
            switch result {
            case .success:
                continuation.resume(returning: share)
            case .failure(let error):
                continuation.resume(throwing: error)
            }
        }

        privateDatabase.add(operation)
    }
}
```

### Accept Share
```swift
func acceptShare(metadata: CKShare.Metadata) async throws {
    try await container.accept(metadata)
}

// In SceneDelegate or App
func scene(_ scene: UIScene, userDidAcceptCloudKitShareWith metadata: CKShare.Metadata) {
    Task {
        try await cloudKitManager.acceptShare(metadata: metadata)
    }
}
```

## Error Handling

### CloudKit Errors
```swift
enum CloudKitError: LocalizedError {
    case notSignedIn
    case networkError
    case quotaExceeded
    case serverError
    case invalidData

    var errorDescription: String? {
        switch self {
        case .notSignedIn: return "Please sign in to iCloud"
        case .networkError: return "Network connection error"
        case .quotaExceeded: return "iCloud storage quota exceeded"
        case .serverError: return "iCloud server error"
        case .invalidData: return "Invalid data format"
        }
    }
}

func handleCloudKitError(_ error: Error) -> CloudKitError {
    guard let ckError = error as? CKError else {
        return .serverError
    }

    switch ckError.code {
    case .notAuthenticated:
        return .notSignedIn
    case .networkUnavailable, .networkFailure:
        return .networkError
    case .quotaExceeded:
        return .quotaExceeded
    default:
        return .serverError
    }
}
```

### Retry Logic
```swift
func saveWithRetry(_ record: CKRecord, maxAttempts: Int = 3) async throws -> CKRecord {
    var lastError: Error?

    for attempt in 1...maxAttempts {
        do {
            return try await privateDatabase.save(record)
        } catch let error as CKError where error.code == .networkUnavailable {
            lastError = error
            if attempt < maxAttempts {
                try await Task.sleep(nanoseconds: UInt64(attempt) * 1_000_000_000)
            }
        }
    }

    throw lastError ?? CloudKitError.networkError
}
```

## SwiftData + CloudKit

### Automatic Sync
```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(for: Item.self, isAutosaveEnabled: true, isUndoEnabled: true) { result in
            // Container configured for CloudKit sync automatically
            // when iCloud capability is enabled
        }
    }
}
```

## Apple Documentation

- [CloudKit](https://developer.apple.com/documentation/cloudkit)
- [Enabling CloudKit](https://developer.apple.com/documentation/cloudkit/enabling_cloudkit_in_your_app)
- [CKRecord](https://developer.apple.com/documentation/cloudkit/ckrecord)
- [Subscriptions](https://developer.apple.com/documentation/cloudkit/cksubscription)
- [Sharing](https://developer.apple.com/documentation/cloudkit/shared_records)
