---
name: ios-accessibility
description: iOS accessibility expert for inclusive app design. Use when working with VoiceOver, Dynamic Type, accessibility labels, traits, hints, color contrast, or assistive technologies.
---

# iOS Accessibility

Expert guidance for building accessible iOS applications.

## VoiceOver

### Accessibility Labels
```swift
// Basic label
Image(systemName: "heart.fill")
    .accessibilityLabel("Favorite")

// Dynamic label
Button(action: toggleFavorite) {
    Image(systemName: isFavorite ? "heart.fill" : "heart")
}
.accessibilityLabel(isFavorite ? "Remove from favorites" : "Add to favorites")

// Combined elements
HStack {
    Text(item.name)
    Spacer()
    Text(item.price, format: .currency(code: "USD"))
}
.accessibilityElement(children: .combine)
.accessibilityLabel("\(item.name), \(item.price.formatted(.currency(code: "USD")))")
```

### Accessibility Values
```swift
Slider(value: $volume, in: 0...100)
    .accessibilityLabel("Volume")
    .accessibilityValue("\(Int(volume)) percent")

Toggle("Notifications", isOn: $notificationsEnabled)
    .accessibilityValue(notificationsEnabled ? "On" : "Off")
```

### Accessibility Hints
```swift
Button("Delete") {
    showDeleteConfirmation = true
}
.accessibilityHint("Double tap to delete this item")

TextField("Search", text: $searchText)
    .accessibilityHint("Enter search terms to find items")
```

### Accessibility Traits
```swift
// Button trait
Text("Tap to learn more")
    .accessibilityAddTraits(.isButton)

// Header trait
Text("Settings")
    .font(.title)
    .accessibilityAddTraits(.isHeader)

// Image trait
Image("profile")
    .accessibilityAddTraits(.isImage)

// Static text (removes interaction)
Text("Status: Active")
    .accessibilityAddTraits(.isStaticText)

// Selected state
TabButton(isSelected: isSelected)
    .accessibilityAddTraits(isSelected ? .isSelected : [])
```

### Grouping Elements
```swift
// Combine children into single element
VStack {
    Text("John Doe")
    Text("Developer")
    Text("San Francisco")
}
.accessibilityElement(children: .combine)

// Ignore children, provide custom label
HStack {
    Image(systemName: "star.fill")
    Image(systemName: "star.fill")
    Image(systemName: "star.fill")
    Image(systemName: "star")
    Image(systemName: "star")
}
.accessibilityElement(children: .ignore)
.accessibilityLabel("Rating: 3 out of 5 stars")

// Hide decorative elements
Image("decorative-divider")
    .accessibilityHidden(true)
```

### Custom Actions
```swift
struct ItemRow: View {
    let item: Item

    var body: some View {
        HStack {
            Text(item.name)
            Spacer()
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel(item.name)
        .accessibilityAction(named: "Delete") {
            deleteItem(item)
        }
        .accessibilityAction(named: "Edit") {
            editItem(item)
        }
        .accessibilityAction(named: "Share") {
            shareItem(item)
        }
    }
}
```

### Rotor Actions
```swift
Text(article.content)
    .accessibilityRotorEntry(id: article.id, in: .headings)

// Custom rotor
struct ArticleView: View {
    let article: Article

    var body: some View {
        ScrollView {
            // Content
        }
        .accessibilityRotor("Headings") {
            ForEach(article.headings) { heading in
                AccessibilityRotorEntry(heading.title, id: heading.id)
            }
        }
    }
}
```

## Dynamic Type

### Support Dynamic Type
```swift
// Use semantic fonts (automatically scale)
Text("Title")
    .font(.title)

Text("Body text")
    .font(.body)

Text("Caption")
    .font(.caption)

// Custom fonts with scaling
Text("Custom")
    .font(.custom("Helvetica", size: 17, relativeTo: .body))

// Minimum scale factor
Text("Long text that might need to shrink")
    .font(.title)
    .minimumScaleFactor(0.5)
```

### Respond to Size Changes
```swift
struct AdaptiveView: View {
    @Environment(\.dynamicTypeSize) var dynamicTypeSize

    var body: some View {
        if dynamicTypeSize >= .accessibility1 {
            // Use larger, simpler layout
            VStack {
                icon
                text
            }
        } else {
            // Standard layout
            HStack {
                icon
                text
            }
        }
    }
}
```

### Limit Dynamic Type
```swift
// Set maximum scale
Text("Fixed size text")
    .dynamicTypeSize(...DynamicTypeSize.xxxLarge)

// Set range
Text("Constrained text")
    .dynamicTypeSize(.large...DynamicTypeSize.accessibility3)
```

## Color and Contrast

### Check Reduce Transparency
```swift
struct ContentView: View {
    @Environment(\.accessibilityReduceTransparency) var reduceTransparency

    var body: some View {
        Rectangle()
            .fill(reduceTransparency ? .black : .black.opacity(0.5))
    }
}
```

### Check Increase Contrast
```swift
struct ButtonView: View {
    @Environment(\.colorSchemeContrast) var contrast

    var body: some View {
        Text("Action")
            .foregroundStyle(contrast == .increased ? .primary : .secondary)
    }
}
```

### Differentiate Without Color
```swift
struct StatusView: View {
    @Environment(\.accessibilityDifferentiateWithoutColor) var differentiateWithoutColor
    let status: Status

    var body: some View {
        HStack {
            Circle()
                .fill(status.color)
                .frame(width: 10, height: 10)

            if differentiateWithoutColor {
                Image(systemName: status.icon)
            }

            Text(status.text)
        }
    }
}
```

## Motion

### Reduce Motion
```swift
struct AnimatedView: View {
    @Environment(\.accessibilityReduceMotion) var reduceMotion
    @State private var isExpanded = false

    var body: some View {
        VStack {
            content
        }
        .animation(reduceMotion ? .none : .spring(), value: isExpanded)
    }
}

// Alternative approach
Button("Animate") {
    if reduceMotion {
        // Instant change
        isExpanded.toggle()
    } else {
        withAnimation(.spring()) {
            isExpanded.toggle()
        }
    }
}
```

### Auto-Play Video
```swift
struct VideoView: View {
    @Environment(\.accessibilityReduceMotion) var reduceMotion

    var body: some View {
        VideoPlayer(player: player)
            .onAppear {
                if !reduceMotion {
                    player.play()
                }
            }
    }
}
```

## Focus Management

### Focus State
```swift
struct FormView: View {
    @FocusState private var focusedField: Field?
    @State private var email = ""
    @State private var password = ""

    enum Field {
        case email, password
    }

    var body: some View {
        Form {
            TextField("Email", text: $email)
                .focused($focusedField, equals: .email)

            SecureField("Password", text: $password)
                .focused($focusedField, equals: .password)

            Button("Submit") {
                if email.isEmpty {
                    focusedField = .email
                } else if password.isEmpty {
                    focusedField = .password
                }
            }
        }
    }
}
```

### Accessibility Focus
```swift
struct AlertView: View {
    @AccessibilityFocusState private var isAlertFocused: Bool
    @Binding var showAlert: Bool

    var body: some View {
        VStack {
            Text("Important Alert")
                .accessibilityFocused($isAlertFocused)
        }
        .onChange(of: showAlert) { _, isShowing in
            if isShowing {
                isAlertFocused = true
            }
        }
    }
}
```

## Announcements

### Post Announcements
```swift
func itemDeleted() {
    // Announce to VoiceOver
    UIAccessibility.post(
        notification: .announcement,
        argument: "Item deleted"
    )
}

func layoutChanged() {
    // Notify of layout change
    UIAccessibility.post(
        notification: .layoutChanged,
        argument: nil
    )
}

func screenChanged(focusElement: Any?) {
    // Notify of screen change and focus element
    UIAccessibility.post(
        notification: .screenChanged,
        argument: focusElement
    )
}
```

## Testing Accessibility

### Accessibility Audit
```swift
import XCTest

class AccessibilityTests: XCTestCase {
    func testAccessibility() throws {
        let app = XCUIApplication()
        app.launch()

        // Perform accessibility audit
        try app.performAccessibilityAudit()
    }

    func testAccessibility_withOptions() throws {
        let app = XCUIApplication()
        app.launch()

        // Audit with specific checks
        try app.performAccessibilityAudit(for: [
            .dynamicType,
            .contrast,
            .hitRegion
        ])
    }
}
```

### Check Accessibility Properties
```swift
func testButtonAccessibility() {
    let button = app.buttons["submitButton"]

    XCTAssertTrue(button.isAccessibilityElement)
    XCTAssertEqual(button.label, "Submit form")
    XCTAssertEqual(button.accessibilityTraits, .button)
}
```

## Apple Documentation

- [Accessibility](https://developer.apple.com/documentation/accessibility)
- [VoiceOver](https://developer.apple.com/documentation/accessibility/voiceover)
- [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically)
- [Human Interface Guidelines - Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Accessibility Inspector](https://developer.apple.com/documentation/accessibility/accessibility-inspector)
