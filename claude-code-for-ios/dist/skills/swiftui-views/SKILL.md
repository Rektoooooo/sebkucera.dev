---
name: swiftui-views
description: SwiftUI view components expert for building UI elements. Use when creating views, buttons, text, images, lists, forms, pickers, toggles, sliders, or custom controls. Covers view modifiers, styling, @ViewBuilder, and reusable components.
---

# SwiftUI Views

Expert guidance for building SwiftUI view components and UI elements.

## Core Views

### Text & Labels
```swift
// Basic text
Text("Hello, World!")
    .font(.title)
    .fontWeight(.bold)
    .foregroundStyle(.primary)

// Multiline text
Text("Long text content here")
    .lineLimit(3)
    .truncationMode(.tail)
    .multilineTextAlignment(.center)

// Attributed text
Text("Hello ") + Text("World").bold().foregroundStyle(.blue)

// Label with icon
Label("Settings", systemImage: "gear")
    .labelStyle(.titleAndIcon)
```

### Buttons
```swift
// Basic button
Button("Tap Me") {
    // Action
}
.buttonStyle(.borderedProminent)

// Custom button
Button(action: { /* action */ }) {
    HStack {
        Image(systemName: "plus")
        Text("Add Item")
    }
    .padding()
    .background(.blue)
    .foregroundStyle(.white)
    .cornerRadius(10)
}

// Destructive button
Button("Delete", role: .destructive) {
    // Delete action
}
```

### Images
```swift
// System image
Image(systemName: "star.fill")
    .font(.largeTitle)
    .foregroundStyle(.yellow)

// Asset image
Image("photo")
    .resizable()
    .aspectRatio(contentMode: .fit)
    .frame(width: 200, height: 200)
    .clipShape(Circle())

// Async image
AsyncImage(url: imageURL) { image in
    image.resizable().aspectRatio(contentMode: .fill)
} placeholder: {
    ProgressView()
}
.frame(width: 100, height: 100)
```

### Lists
```swift
// Basic list
List(items) { item in
    Text(item.name)
}

// Sections
List {
    Section("Favorites") {
        ForEach(favorites) { item in
            ItemRow(item: item)
        }
    }
    Section("All Items") {
        ForEach(allItems) { item in
            ItemRow(item: item)
        }
    }
}

// Swipe actions
List {
    ForEach(items) { item in
        Text(item.name)
            .swipeActions(edge: .trailing) {
                Button(role: .destructive) {
                    delete(item)
                } label: {
                    Label("Delete", systemImage: "trash")
                }
            }
            .swipeActions(edge: .leading) {
                Button {
                    favorite(item)
                } label: {
                    Label("Favorite", systemImage: "star")
                }
                .tint(.yellow)
            }
    }
}
```

### Forms & Input
```swift
Form {
    Section("Profile") {
        TextField("Name", text: $name)
        TextField("Email", text: $email)
            .textContentType(.emailAddress)
            .keyboardType(.emailAddress)

        SecureField("Password", text: $password)
    }

    Section("Preferences") {
        Toggle("Notifications", isOn: $notificationsEnabled)

        Picker("Theme", selection: $selectedTheme) {
            Text("Light").tag(Theme.light)
            Text("Dark").tag(Theme.dark)
            Text("System").tag(Theme.system)
        }

        Slider(value: $volume, in: 0...100, step: 1) {
            Text("Volume")
        }

        Stepper("Quantity: \(quantity)", value: $quantity, in: 1...10)

        DatePicker("Date", selection: $date, displayedComponents: .date)
    }
}
```

### Text Editor
```swift
TextEditor(text: $content)
    .frame(minHeight: 200)
    .border(Color.gray, width: 1)
    .scrollContentBackground(.hidden)
    .background(Color.gray.opacity(0.1))
```

## View Modifiers

### Common Modifiers
```swift
Text("Styled Text")
    .font(.headline)
    .foregroundStyle(.blue)
    .padding()
    .background(.gray.opacity(0.2))
    .cornerRadius(8)
    .shadow(radius: 2)
```

### Custom View Modifier
```swift
struct CardModifier: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .background(.background)
            .cornerRadius(12)
            .shadow(color: .black.opacity(0.1), radius: 5, x: 0, y: 2)
    }
}

extension View {
    func cardStyle() -> some View {
        modifier(CardModifier())
    }
}

// Usage
Text("Card Content")
    .cardStyle()
```

## Reusable Components

### Custom View with @ViewBuilder
```swift
struct Card<Content: View>: View {
    let title: String
    @ViewBuilder let content: Content

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(title)
                .font(.headline)

            content
        }
        .padding()
        .background(.background)
        .cornerRadius(12)
    }
}

// Usage
Card(title: "Statistics") {
    Text("Views: 1,234")
    Text("Likes: 567")
}
```

### Conditional Content
```swift
struct ConditionalView: View {
    let showDetails: Bool

    var body: some View {
        VStack {
            Text("Title")

            if showDetails {
                Text("Details here")
            }
        }
    }
}
```

## Progress & Loading

```swift
// Indeterminate
ProgressView()
    .progressViewStyle(.circular)

// Determinate
ProgressView(value: progress, total: 100) {
    Text("Downloading...")
}

// Gauge (iOS 16+)
Gauge(value: batteryLevel, in: 0...100) {
    Text("Battery")
} currentValueLabel: {
    Text("\(Int(batteryLevel))%")
}
.gaugeStyle(.accessoryCircular)
```

## Apple Documentation

- [Views](https://developer.apple.com/documentation/swiftui/views)
- [Text](https://developer.apple.com/documentation/swiftui/text)
- [Button](https://developer.apple.com/documentation/swiftui/button)
- [List](https://developer.apple.com/documentation/swiftui/list)
- [Form](https://developer.apple.com/documentation/swiftui/form)
- [ViewModifier](https://developer.apple.com/documentation/swiftui/viewmodifier)
