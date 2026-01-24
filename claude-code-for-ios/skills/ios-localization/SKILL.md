---
name: ios-localization
description: iOS localization expert for internationalization. Use when working with String Catalogs, XLIFF, localized strings, date/number formatting, pluralization, or multi-language support.
---

# iOS Localization

Expert guidance for localizing iOS applications.

## String Catalogs (Xcode 15+)

### Create String Catalog
1. File > New > File > String Catalog
2. Name it `Localizable.xcstrings`

### Basic Usage
```swift
// SwiftUI - automatically extracted
Text("Hello, World!")
Text("Welcome to the app")

// With String Catalogs, strings are auto-extracted
// Edit translations directly in Xcode
```

### String Interpolation
```swift
// Variable interpolation
Text("Hello, \(username)!")

// In String Catalog:
// Key: "Hello, %@!"
// Variations per language

// Multiple variables
Text("Score: \(points) points in \(level)")
// Key: "Score: %lld points in %@"
```

### Comments for Translators
```swift
Text("Save", comment: "Button to save the current document")
Text("Book", comment: "Noun - a written publication, not the verb")
```

## Pluralization

### Automatic Pluralization
```swift
// In SwiftUI
Text("^[\(itemCount) item](inflect: true)")

// Handles:
// 0 items, 1 item, 2 items, etc.
```

### Manual Pluralization (String Catalog)
```swift
Text("\(count) files selected")

// In String Catalog, create variations:
// zero: "No files selected"
// one: "1 file selected"
// other: "%lld files selected"
```

### Complex Pluralization
```swift
// In String Catalog with substitutions
Text("\(unreadCount) unread messages from \(senderCount) senders")

// Variations handle both numbers independently
```

## Localized Resources

### Localized Images
```swift
// 1. Create asset catalog variations per language
// 2. Or use localized file names:
//    - welcome_en.png
//    - welcome_ja.png

Image("welcome", bundle: .main)
    .resizable()
```

### Localized Colors
```swift
// In asset catalog, add appearances for languages
Color("brandColor")
```

### Info.plist Localization
```xml
<!-- InfoPlist.strings (Localized) -->
<!-- English -->
"CFBundleDisplayName" = "My App";
"NSCameraUsageDescription" = "Take photos for your profile";

<!-- Japanese -->
"CFBundleDisplayName" = "マイアプリ";
"NSCameraUsageDescription" = "プロフィール写真を撮影";
```

## Formatters

### Date Formatting
```swift
// Automatic localization
Text(date, style: .date)
Text(date, style: .time)
Text(date, format: .dateTime.day().month().year())

// Custom format (still localized)
let formatter = DateFormatter()
formatter.dateStyle = .long
formatter.timeStyle = .short
// Automatically uses device locale

// Relative dates
Text(date, format: .relative(presentation: .named))
// "yesterday", "2 days ago", etc.
```

### Number Formatting
```swift
// Currency
Text(price, format: .currency(code: "USD"))
// $9.99 (US), 9,99 $ (France)

// Percentage
Text(progress, format: .percent)

// Decimal
Text(value, format: .number.precision(.fractionLength(2)))

// Measurement
let distance = Measurement(value: 5, unit: UnitLength.kilometers)
Text(distance, format: .measurement(width: .abbreviated))
// "5 km" or "3.1 mi" based on locale
```

### List Formatting
```swift
let items = ["Apple", "Banana", "Orange"]
Text(items, format: .list(type: .and))
// "Apple, Banana, and Orange" (English)
// "Apple、Banana、Orange" (Japanese)
```

## Layout Considerations

### Right-to-Left Languages
```swift
// Automatic RTL support
HStack {
    Image(systemName: "arrow.left")
    Text("Back")
}
// Flips automatically for RTL

// Prevent flipping when needed
Image(systemName: "checkmark")
    .flipsForRightToLeftLayoutDirection(false)
```

### Check Layout Direction
```swift
struct AdaptiveView: View {
    @Environment(\.layoutDirection) var layoutDirection

    var body: some View {
        HStack {
            if layoutDirection == .rightToLeft {
                trailingContent
                leadingContent
            } else {
                leadingContent
                trailingContent
            }
        }
    }
}
```

### Text Alignment
```swift
// Use leading/trailing instead of left/right
Text("Content")
    .frame(maxWidth: .infinity, alignment: .leading)

// Multi-line alignment
Text("Long text content here")
    .multilineTextAlignment(.leading)
```

## Language-Specific Adjustments

### Check Current Language
```swift
let currentLanguage = Locale.current.language.languageCode?.identifier
// "en", "ja", "fr", etc.

if currentLanguage == "ja" {
    // Japanese-specific adjustments
}
```

### Override Locale
```swift
// For testing
Text(date, format: .dateTime)
    .environment(\.locale, Locale(identifier: "ja_JP"))

// Preview in different locales
#Preview {
    ContentView()
        .environment(\.locale, Locale(identifier: "ar"))
        .environment(\.layoutDirection, .rightToLeft)
}
```

## Export/Import

### Export for Translation
```bash
# Command line
xcodebuild -exportLocalizations -project MyApp.xcodeproj -localizationPath ./Localizations

# Exports XLIFF files for each language
```

### Import Translations
```bash
xcodebuild -importLocalizations -project MyApp.xcodeproj -localizationPath ./Localizations/ja.xcloc
```

## Testing Localization

### Preview Different Languages
```swift
#Preview("English") {
    ContentView()
        .environment(\.locale, Locale(identifier: "en"))
}

#Preview("Japanese") {
    ContentView()
        .environment(\.locale, Locale(identifier: "ja"))
}

#Preview("Arabic RTL") {
    ContentView()
        .environment(\.locale, Locale(identifier: "ar"))
        .environment(\.layoutDirection, .rightToLeft)
}
```

### Pseudo-Localization
```swift
// In scheme settings:
// Edit Scheme > Run > Options
// - Application Language: Right-to-Left Pseudolanguage
// - Application Language: Accented Pseudolanguage (double-length)
```

### UI Tests for Localization
```swift
func testLocalizedUI() {
    let app = XCUIApplication()
    app.launchArguments += ["-AppleLanguages", "(ja)"]
    app.launchArguments += ["-AppleLocale", "ja_JP"]
    app.launch()

    // Test Japanese UI
    XCTAssertTrue(app.buttons["保存"].exists)
}
```

## Best Practices

### String Keys
```swift
// Use descriptive keys in code
Text("welcome.message")
Text("button.save")
Text("error.network.unavailable")

// Actual translations in String Catalog
```

### Avoid Concatenation
```swift
// Bad - breaks translation
Text("Hello, ") + Text(username) + Text("!")

// Good - single translatable string
Text("Hello, \(username)!")
```

### Context for Translators
```swift
// Provide context
Text("Post", comment: "Verb - action to publish content")
Text("Post", comment: "Noun - a published article")

// Different keys for same word in different contexts
Text("settings.save.button") // "Save" button in settings
Text("document.save.action") // "Save" action for document
```

## Apple Documentation

- [Localization](https://developer.apple.com/documentation/xcode/localization)
- [String Catalogs](https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog)
- [Formatters](https://developer.apple.com/documentation/foundation/formatter)
- [Right-to-Left](https://developer.apple.com/design/human-interface-guidelines/right-to-left)
- [Internationalization](https://developer.apple.com/internationalization/)
