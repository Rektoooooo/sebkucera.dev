---
name: ios-notifications
description: iOS notifications expert for push and local notifications. Use when working with UNUserNotificationCenter, push notifications, local notifications, notification actions, badges, or notification extensions.
---

# iOS Notifications

Expert guidance for implementing push and local notifications in iOS apps.

## Setup

### Request Permission
```swift
import UserNotifications

class NotificationManager: ObservableObject {
    static let shared = NotificationManager()

    @Published var isAuthorized = false

    func requestPermission() async -> Bool {
        do {
            let granted = try await UNUserNotificationCenter.current()
                .requestAuthorization(options: [.alert, .badge, .sound])
            await MainActor.run {
                isAuthorized = granted
            }
            return granted
        } catch {
            print("Notification permission error: \(error)")
            return false
        }
    }

    func checkPermissionStatus() async {
        let settings = await UNUserNotificationCenter.current().notificationSettings()

        await MainActor.run {
            isAuthorized = settings.authorizationStatus == .authorized
        }
    }
}
```

### Register for Push Notifications
```swift
// In AppDelegate
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    UIApplication.shared.registerForRemoteNotifications()
    return true
}

func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    let token = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
    print("Device Token: \(token)")
    // Send token to your server
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    print("Failed to register: \(error)")
}
```

## Local Notifications

### Schedule Notification
```swift
func scheduleNotification(
    title: String,
    body: String,
    delay: TimeInterval,
    identifier: String = UUID().uuidString
) async throws {
    let content = UNMutableNotificationContent()
    content.title = title
    content.body = body
    content.sound = .default
    content.badge = 1

    let trigger = UNTimeIntervalNotificationTrigger(
        timeInterval: delay,
        repeats: false
    )

    let request = UNNotificationRequest(
        identifier: identifier,
        content: content,
        trigger: trigger
    )

    try await UNUserNotificationCenter.current().add(request)
}
```

### Schedule at Specific Time
```swift
func scheduleDaily(at hour: Int, minute: Int, title: String, body: String) async throws {
    let content = UNMutableNotificationContent()
    content.title = title
    content.body = body
    content.sound = .default

    var dateComponents = DateComponents()
    dateComponents.hour = hour
    dateComponents.minute = minute

    let trigger = UNCalendarNotificationTrigger(
        dateMatching: dateComponents,
        repeats: true
    )

    let request = UNNotificationRequest(
        identifier: "daily-reminder",
        content: content,
        trigger: trigger
    )

    try await UNUserNotificationCenter.current().add(request)
}
```

### Schedule with Location
```swift
import CoreLocation

func scheduleLocationNotification(
    title: String,
    body: String,
    coordinate: CLLocationCoordinate2D,
    radius: CLLocationDistance = 100
) async throws {
    let content = UNMutableNotificationContent()
    content.title = title
    content.body = body
    content.sound = .default

    let region = CLCircularRegion(
        center: coordinate,
        radius: radius,
        identifier: "location-trigger"
    )
    region.notifyOnEntry = true
    region.notifyOnExit = false

    let trigger = UNLocationNotificationTrigger(region: region, repeats: false)

    let request = UNNotificationRequest(
        identifier: UUID().uuidString,
        content: content,
        trigger: trigger
    )

    try await UNUserNotificationCenter.current().add(request)
}
```

### Cancel Notifications
```swift
func cancelNotification(identifier: String) {
    UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: [identifier])
}

func cancelAllNotifications() {
    UNUserNotificationCenter.current().removeAllPendingNotificationRequests()
}

func cancelDeliveredNotifications() {
    UNUserNotificationCenter.current().removeAllDeliveredNotifications()
}
```

## Notification Actions

### Define Categories
```swift
func setupNotificationCategories() {
    // Action buttons
    let acceptAction = UNNotificationAction(
        identifier: "ACCEPT_ACTION",
        title: "Accept",
        options: [.foreground]
    )

    let declineAction = UNNotificationAction(
        identifier: "DECLINE_ACTION",
        title: "Decline",
        options: [.destructive]
    )

    // Text input action
    let replyAction = UNTextInputNotificationAction(
        identifier: "REPLY_ACTION",
        title: "Reply",
        options: [],
        textInputButtonTitle: "Send",
        textInputPlaceholder: "Type your reply..."
    )

    // Category
    let inviteCategory = UNNotificationCategory(
        identifier: "INVITE_CATEGORY",
        actions: [acceptAction, declineAction],
        intentIdentifiers: [],
        options: []
    )

    let messageCategory = UNNotificationCategory(
        identifier: "MESSAGE_CATEGORY",
        actions: [replyAction],
        intentIdentifiers: [],
        options: []
    )

    UNUserNotificationCenter.current().setNotificationCategories([inviteCategory, messageCategory])
}
```

### Use Category
```swift
func sendInviteNotification() async throws {
    let content = UNMutableNotificationContent()
    content.title = "New Invitation"
    content.body = "John invited you to an event"
    content.categoryIdentifier = "INVITE_CATEGORY"

    let request = UNNotificationRequest(
        identifier: UUID().uuidString,
        content: content,
        trigger: nil  // Deliver immediately
    )

    try await UNUserNotificationCenter.current().add(request)
}
```

### Handle Actions
```swift
class NotificationDelegate: NSObject, UNUserNotificationCenterDelegate {

    func userNotificationCenter(
        _ center: UNUserNotificationCenter,
        didReceive response: UNNotificationResponse
    ) async {
        let actionIdentifier = response.actionIdentifier

        switch actionIdentifier {
        case "ACCEPT_ACTION":
            handleAccept(response.notification)

        case "DECLINE_ACTION":
            handleDecline(response.notification)

        case "REPLY_ACTION":
            if let textResponse = response as? UNTextInputNotificationResponse {
                handleReply(textResponse.userText, notification: response.notification)
            }

        case UNNotificationDefaultActionIdentifier:
            // User tapped notification
            handleTap(response.notification)

        default:
            break
        }
    }

    // Show notification while app in foreground
    func userNotificationCenter(
        _ center: UNUserNotificationCenter,
        willPresent notification: UNNotification
    ) async -> UNNotificationPresentationOptions {
        return [.banner, .sound, .badge]
    }
}

// Set delegate in App
@main
struct MyApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate

    init() {
        UNUserNotificationCenter.current().delegate = NotificationDelegate()
    }
}
```

## Rich Notifications

### With Image
```swift
func sendImageNotification(imageURL: URL) async throws {
    let content = UNMutableNotificationContent()
    content.title = "New Photo"
    content.body = "Check out this image"

    // Download and attach image
    let (localURL, _) = try await URLSession.shared.download(from: imageURL)
    let attachment = try UNNotificationAttachment(
        identifier: "image",
        url: localURL,
        options: nil
    )
    content.attachments = [attachment]

    let request = UNNotificationRequest(
        identifier: UUID().uuidString,
        content: content,
        trigger: nil
    )

    try await UNUserNotificationCenter.current().add(request)
}
```

### With Custom Data
```swift
func sendNotificationWithData(userInfo: [AnyHashable: Any]) async throws {
    let content = UNMutableNotificationContent()
    content.title = "New Message"
    content.body = "You have a new message"
    content.userInfo = userInfo  // Custom data

    let request = UNNotificationRequest(
        identifier: UUID().uuidString,
        content: content,
        trigger: nil
    )

    try await UNUserNotificationCenter.current().add(request)
}

// Access in delegate
func handleNotification(_ notification: UNNotification) {
    let userInfo = notification.request.content.userInfo
    if let messageID = userInfo["messageID"] as? String {
        // Navigate to message
    }
}
```

## Badge Management

```swift
func updateBadge(count: Int) async {
    try? await UNUserNotificationCenter.current().setBadgeCount(count)
}

func clearBadge() async {
    try? await UNUserNotificationCenter.current().setBadgeCount(0)
}
```

## Push Notification Payload

### Standard Payload
```json
{
    "aps": {
        "alert": {
            "title": "New Message",
            "subtitle": "From John",
            "body": "Hey, how are you?"
        },
        "badge": 5,
        "sound": "default",
        "category": "MESSAGE_CATEGORY"
    },
    "messageID": "12345",
    "senderID": "user123"
}
```

### Silent Push
```json
{
    "aps": {
        "content-available": 1
    },
    "data": {
        "type": "sync"
    }
}
```

## Notification Service Extension

### Create Extension
1. File > New > Target > Notification Service Extension

```swift
class NotificationService: UNNotificationServiceExtension {
    var contentHandler: ((UNNotificationContent) -> Void)?
    var bestAttemptContent: UNMutableNotificationContent?

    override func didReceive(
        _ request: UNNotificationRequest,
        withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void
    ) {
        self.contentHandler = contentHandler
        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)

        guard let content = bestAttemptContent else {
            contentHandler(request.content)
            return
        }

        // Modify content
        content.title = "[Modified] " + content.title

        // Download and attach image
        if let imageURLString = content.userInfo["imageURL"] as? String,
           let imageURL = URL(string: imageURLString) {
            downloadImage(url: imageURL) { attachment in
                if let attachment = attachment {
                    content.attachments = [attachment]
                }
                contentHandler(content)
            }
        } else {
            contentHandler(content)
        }
    }

    override func serviceExtensionTimeWillExpire() {
        if let contentHandler = contentHandler,
           let content = bestAttemptContent {
            contentHandler(content)
        }
    }
}
```

## Apple Documentation

- [UserNotifications](https://developer.apple.com/documentation/usernotifications)
- [Scheduling Notifications](https://developer.apple.com/documentation/usernotifications/scheduling_a_notification_locally_from_your_app)
- [Push Notifications](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server)
- [Notification Actions](https://developer.apple.com/documentation/usernotifications/declaring_your_actionable_notification_types)
- [Notification Service Extension](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications)
