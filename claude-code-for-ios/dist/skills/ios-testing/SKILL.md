---
name: ios-testing
description: iOS testing expert for XCTest and test automation. Use when writing unit tests, UI tests, performance tests, mocking, test doubles, or setting up test infrastructure.
---

# iOS Testing

Expert guidance for testing iOS applications with XCTest.

## Unit Testing

### Basic Test Structure
```swift
import XCTest
@testable import MyApp

final class UserTests: XCTestCase {

    var sut: UserManager!  // System Under Test

    override func setUpWithError() throws {
        try super.setUpWithError()
        sut = UserManager()
    }

    override func tearDownWithError() throws {
        sut = nil
        try super.tearDownWithError()
    }

    func testUserCreation() {
        // Given
        let name = "John"
        let email = "john@example.com"

        // When
        let user = sut.createUser(name: name, email: email)

        // Then
        XCTAssertEqual(user.name, name)
        XCTAssertEqual(user.email, email)
        XCTAssertNotNil(user.id)
    }

    func testUserValidation_withInvalidEmail_shouldFail() {
        // Given
        let invalidEmail = "invalid-email"

        // When
        let result = sut.validateEmail(invalidEmail)

        // Then
        XCTAssertFalse(result)
    }
}
```

### Testing Async Code
```swift
func testFetchUser_shouldReturnUser() async throws {
    // Given
    let userID = "123"

    // When
    let user = try await sut.fetchUser(id: userID)

    // Then
    XCTAssertEqual(user.id, userID)
}

func testFetchUser_withInvalidID_shouldThrow() async {
    // Given
    let invalidID = "invalid"

    // When/Then
    do {
        _ = try await sut.fetchUser(id: invalidID)
        XCTFail("Expected error to be thrown")
    } catch {
        XCTAssertTrue(error is UserError)
    }
}
```

### Testing with Expectations
```swift
func testNotificationPosted() {
    // Given
    let expectation = expectation(forNotification: .userDidLogin, object: nil)

    // When
    sut.login(username: "test", password: "password")

    // Then
    wait(for: [expectation], timeout: 1.0)
}

func testCallbackInvoked() {
    // Given
    let expectation = expectation(description: "Callback invoked")

    // When
    sut.performAsync { result in
        XCTAssertNotNil(result)
        expectation.fulfill()
    }

    // Then
    wait(for: [expectation], timeout: 2.0)
}
```

## Mocking

### Protocol-Based Mocking
```swift
// Protocol
protocol UserServiceProtocol {
    func fetchUser(id: String) async throws -> User
    func saveUser(_ user: User) async throws
}

// Mock
class MockUserService: UserServiceProtocol {
    var fetchUserResult: Result<User, Error>?
    var saveUserCalled = false
    var savedUser: User?

    func fetchUser(id: String) async throws -> User {
        guard let result = fetchUserResult else {
            fatalError("fetchUserResult not set")
        }
        return try result.get()
    }

    func saveUser(_ user: User) async throws {
        saveUserCalled = true
        savedUser = user
    }
}

// Test
final class UserViewModelTests: XCTestCase {
    var sut: UserViewModel!
    var mockService: MockUserService!

    override func setUp() {
        mockService = MockUserService()
        sut = UserViewModel(service: mockService)
    }

    func testLoadUser_shouldUpdateState() async {
        // Given
        let expectedUser = User(id: "1", name: "John")
        mockService.fetchUserResult = .success(expectedUser)

        // When
        await sut.loadUser(id: "1")

        // Then
        XCTAssertEqual(sut.user?.name, "John")
    }

    func testLoadUser_onError_shouldSetError() async {
        // Given
        mockService.fetchUserResult = .failure(UserError.notFound)

        // When
        await sut.loadUser(id: "invalid")

        // Then
        XCTAssertNotNil(sut.error)
    }
}
```

### Spy Pattern
```swift
class SpyAnalytics: AnalyticsProtocol {
    var trackedEvents: [(name: String, parameters: [String: Any])] = []

    func track(event: String, parameters: [String: Any]) {
        trackedEvents.append((event, parameters))
    }
}

func testPurchase_shouldTrackEvent() async throws {
    // Given
    let spy = SpyAnalytics()
    sut = PurchaseManager(analytics: spy)

    // When
    try await sut.completePurchase(item: testItem)

    // Then
    XCTAssertEqual(spy.trackedEvents.count, 1)
    XCTAssertEqual(spy.trackedEvents.first?.name, "purchase_completed")
}
```

## UI Testing

### Basic UI Test
```swift
import XCTest

final class LoginUITests: XCTestCase {
    var app: XCUIApplication!

    override func setUpWithError() throws {
        continueAfterFailure = false
        app = XCUIApplication()
        app.launch()
    }

    func testLogin_withValidCredentials_shouldShowHome() {
        // Given
        let emailField = app.textFields["Email"]
        let passwordField = app.secureTextFields["Password"]
        let loginButton = app.buttons["Login"]

        // When
        emailField.tap()
        emailField.typeText("test@example.com")

        passwordField.tap()
        passwordField.typeText("password123")

        loginButton.tap()

        // Then
        XCTAssertTrue(app.staticTexts["Welcome"].waitForExistence(timeout: 5))
    }

    func testLogin_withEmptyFields_shouldShowError() {
        // When
        app.buttons["Login"].tap()

        // Then
        XCTAssertTrue(app.alerts["Error"].exists)
    }
}
```

### Accessibility Identifiers
```swift
// In SwiftUI View
TextField("Email", text: $email)
    .accessibilityIdentifier("emailTextField")

Button("Login") { ... }
    .accessibilityIdentifier("loginButton")

// In UI Test
let emailField = app.textFields["emailTextField"]
let loginButton = app.buttons["loginButton"]
```

### Page Object Pattern
```swift
struct LoginPage {
    let app: XCUIApplication

    var emailField: XCUIElement {
        app.textFields["emailTextField"]
    }

    var passwordField: XCUIElement {
        app.secureTextFields["passwordTextField"]
    }

    var loginButton: XCUIElement {
        app.buttons["loginButton"]
    }

    func login(email: String, password: String) {
        emailField.tap()
        emailField.typeText(email)
        passwordField.tap()
        passwordField.typeText(password)
        loginButton.tap()
    }
}

struct HomePage {
    let app: XCUIApplication

    var welcomeLabel: XCUIElement {
        app.staticTexts["welcomeLabel"]
    }

    var isDisplayed: Bool {
        welcomeLabel.waitForExistence(timeout: 5)
    }
}

// Usage
func testLoginFlow() {
    let loginPage = LoginPage(app: app)
    let homePage = HomePage(app: app)

    loginPage.login(email: "test@example.com", password: "password")

    XCTAssertTrue(homePage.isDisplayed)
}
```

## Performance Testing

### Measure Performance
```swift
func testPerformance_listRendering() {
    measure {
        _ = sut.renderList(items: largeDataSet)
    }
}

func testPerformance_withMetrics() {
    let metrics: [XCTMetric] = [
        XCTClockMetric(),
        XCTMemoryMetric(),
        XCTCPUMetric()
    ]

    measure(metrics: metrics) {
        performOperation()
    }
}

func testPerformance_withBaseline() {
    let options = XCTMeasureOptions()
    options.iterationCount = 10

    measure(options: options) {
        sut.processData(data)
    }
}
```

### UI Performance
```swift
func testScrollPerformance() {
    let app = XCUIApplication()
    app.launch()

    let list = app.tables.firstMatch

    measure(metrics: [XCTOSSignpostMetric.scrollingAndDecelerationMetric]) {
        list.swipeUp(velocity: .fast)
        list.swipeDown(velocity: .fast)
    }
}
```

## Test Utilities

### Test Helpers
```swift
extension XCTestCase {
    func waitForAsync(timeout: TimeInterval = 1.0, action: @escaping () async throws -> Void) {
        let expectation = expectation(description: "Async operation")

        Task {
            do {
                try await action()
                expectation.fulfill()
            } catch {
                XCTFail("Async operation failed: \(error)")
            }
        }

        wait(for: [expectation], timeout: timeout)
    }
}
```

### Test Data Builders
```swift
struct UserBuilder {
    private var id = UUID().uuidString
    private var name = "Test User"
    private var email = "test@example.com"

    func withId(_ id: String) -> UserBuilder {
        var builder = self
        builder.id = id
        return builder
    }

    func withName(_ name: String) -> UserBuilder {
        var builder = self
        builder.name = name
        return builder
    }

    func withEmail(_ email: String) -> UserBuilder {
        var builder = self
        builder.email = email
        return builder
    }

    func build() -> User {
        User(id: id, name: name, email: email)
    }
}

// Usage
let user = UserBuilder()
    .withName("John")
    .withEmail("john@test.com")
    .build()
```

## Snapshot Testing

### View Snapshot
```swift
import XCTest
@testable import MyApp

final class ViewSnapshotTests: XCTestCase {

    func testProfileView_lightMode() {
        let view = ProfileView(user: testUser)
            .environment(\.colorScheme, .light)

        let hostingController = UIHostingController(rootView: view)
        hostingController.view.frame = UIScreen.main.bounds

        // Compare with saved snapshot
        assertSnapshot(matching: hostingController, as: .image)
    }
}
```

## Test Organization

### Test Naming Convention
```swift
// Format: test_unitOfWork_stateUnderTest_expectedBehavior

func test_login_withValidCredentials_shouldSucceed() { }
func test_login_withEmptyPassword_shouldFail() { }
func test_fetchUser_whenNetworkError_shouldReturnCachedData() { }
```

### Test Categories
```swift
// Use test plans in Xcode to organize:
// - Unit Tests
// - Integration Tests
// - UI Tests
// - Performance Tests

// Or use XCTest tags (iOS 16+)
@Test(.tags(.integration))
func testDatabaseIntegration() { }
```

## Apple Documentation

- [XCTest](https://developer.apple.com/documentation/xctest)
- [Testing Your Apps](https://developer.apple.com/documentation/xcode/testing-your-apps-in-xcode)
- [UI Testing](https://developer.apple.com/documentation/xctest/user_interface_tests)
- [Performance Testing](https://developer.apple.com/documentation/xctest/performance_tests)
- [Test Plans](https://developer.apple.com/documentation/xcode/organizing-tests-to-improve-feedback)
