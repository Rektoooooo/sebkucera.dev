---
name: swiftui-layout
description: SwiftUI layout and container expert for arranging views. Use when working with VStack, HStack, ZStack, Grid, LazyVGrid, LazyHGrid, GeometryReader, spacing, padding, alignment, frames, safe areas, or responsive layouts.
---

# SwiftUI Layout

Expert guidance for arranging and positioning views in SwiftUI.

## Stack Containers

### VStack (Vertical)
```swift
VStack(alignment: .leading, spacing: 16) {
    Text("Title")
        .font(.headline)
    Text("Subtitle")
        .font(.subheadline)
    Text("Body text")
}
```

### HStack (Horizontal)
```swift
HStack(alignment: .center, spacing: 12) {
    Image(systemName: "star")
    Text("Favorite")
    Spacer()
    Text("5")
}
```

### ZStack (Overlay)
```swift
ZStack(alignment: .bottomTrailing) {
    Image("background")
        .resizable()
        .aspectRatio(contentMode: .fill)

    Text("Overlay")
        .padding()
        .background(.black.opacity(0.7))
        .foregroundStyle(.white)
}
```

## Lazy Containers

### LazyVStack & LazyHStack
```swift
// Only loads visible items - use for long lists
ScrollView {
    LazyVStack(spacing: 8) {
        ForEach(items) { item in
            ItemRow(item: item)
        }
    }
    .padding()
}
```

### LazyVGrid
```swift
let columns = [
    GridItem(.flexible()),
    GridItem(.flexible()),
    GridItem(.flexible())
]

ScrollView {
    LazyVGrid(columns: columns, spacing: 16) {
        ForEach(items) { item in
            ItemCard(item: item)
        }
    }
    .padding()
}
```

### Adaptive Grid
```swift
let columns = [
    GridItem(.adaptive(minimum: 100, maximum: 200))
]

LazyVGrid(columns: columns) {
    ForEach(items) { item in
        ItemCard(item: item)
    }
}
```

## GeometryReader

### Reading Size
```swift
GeometryReader { geometry in
    VStack {
        Text("Width: \(geometry.size.width)")
        Text("Height: \(geometry.size.height)")

        Rectangle()
            .fill(.blue)
            .frame(width: geometry.size.width * 0.5)
    }
}
```

### Safe Area
```swift
GeometryReader { geometry in
    VStack {
        Text("Safe Area Top: \(geometry.safeAreaInsets.top)")
        Text("Safe Area Bottom: \(geometry.safeAreaInsets.bottom)")
    }
}
```

## Spacing & Padding

### Padding
```swift
Text("Padded")
    .padding()                    // All sides, default amount
    .padding(.horizontal, 20)     // Horizontal only
    .padding(.vertical, 10)       // Vertical only
    .padding(.top, 30)            // Single edge
    .padding(EdgeInsets(top: 10, leading: 20, bottom: 10, trailing: 20))
```

### Spacer
```swift
HStack {
    Text("Left")
    Spacer()           // Pushes items apart
    Text("Right")
}

HStack {
    Text("Left")
    Spacer(minLength: 20)  // Minimum spacing
    Text("Right")
}
```

### Divider
```swift
VStack {
    Text("Above")
    Divider()
        .background(.gray)
    Text("Below")
}
```

## Frame & Sizing

### Fixed Frame
```swift
Text("Fixed Size")
    .frame(width: 200, height: 100)
    .background(.blue)
```

### Flexible Frame
```swift
Text("Flexible")
    .frame(maxWidth: .infinity)              // Full width
    .frame(minHeight: 100, maxHeight: 300)   // Height range
    .frame(idealWidth: 200)                  // Preferred size
```

### Aspect Ratio
```swift
Image("photo")
    .resizable()
    .aspectRatio(16/9, contentMode: .fit)

Rectangle()
    .aspectRatio(1, contentMode: .fit)  // Square
```

## Alignment

### Stack Alignment
```swift
VStack(alignment: .leading) {    // .leading, .center, .trailing
    Text("Short")
    Text("Medium length")
    Text("Very long text here")
}

HStack(alignment: .top) {        // .top, .center, .bottom, .firstTextBaseline
    Text("Tall\nText")
    Text("Short")
}
```

### Frame Alignment
```swift
Text("Aligned")
    .frame(maxWidth: .infinity, alignment: .leading)
```

### Custom Alignment
```swift
extension VerticalAlignment {
    struct CustomAlignment: AlignmentID {
        static func defaultValue(in context: ViewDimensions) -> CGFloat {
            context[.top]
        }
    }
    static let custom = VerticalAlignment(CustomAlignment.self)
}
```

## ScrollView

### Basic ScrollView
```swift
ScrollView {
    VStack(spacing: 20) {
        ForEach(items) { item in
            ItemRow(item: item)
        }
    }
    .padding()
}
```

### Horizontal ScrollView
```swift
ScrollView(.horizontal, showsIndicators: false) {
    HStack(spacing: 16) {
        ForEach(items) { item in
            ItemCard(item: item)
        }
    }
    .padding()
}
```

### ScrollViewReader
```swift
ScrollViewReader { proxy in
    ScrollView {
        ForEach(items) { item in
            ItemRow(item: item)
                .id(item.id)
        }
    }
    .onChange(of: selectedItem) { _, newItem in
        withAnimation {
            proxy.scrollTo(newItem.id, anchor: .center)
        }
    }
}
```

## Safe Areas

### Ignoring Safe Area
```swift
Color.blue
    .ignoresSafeArea()              // All edges
    .ignoresSafeArea(.top)          // Top only
    .ignoresSafeArea(.keyboard)     // Keyboard only
```

### Safe Area Inset
```swift
List(items) { item in
    Text(item.name)
}
.safeAreaInset(edge: .bottom) {
    Button("Add Item") { }
        .padding()
        .background(.ultraThinMaterial)
}
```

## Responsive Layout

### ViewThatFits
```swift
ViewThatFits {
    HStack {
        Image(systemName: "star")
        Text("Favorites")
        Text("View all your favorite items")
    }

    VStack {
        Image(systemName: "star")
        Text("Favorites")
    }
}
```

### Size Classes
```swift
@Environment(\.horizontalSizeClass) var horizontalSizeClass

var body: some View {
    if horizontalSizeClass == .compact {
        VStack { content }
    } else {
        HStack { content }
    }
}
```

## Apple Documentation

- [Layout Containers](https://developer.apple.com/documentation/swiftui/layout-containers)
- [GeometryReader](https://developer.apple.com/documentation/swiftui/geometryreader)
- [ScrollView](https://developer.apple.com/documentation/swiftui/scrollview)
- [LazyVGrid](https://developer.apple.com/documentation/swiftui/lazyvgrid)
- [Alignment](https://developer.apple.com/documentation/swiftui/alignment)
