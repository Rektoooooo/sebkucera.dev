---
name: swiftui-animations
description: SwiftUI animation and transition expert. Use when adding animations, transitions, withAnimation, implicit animations, spring animations, matchedGeometryEffect, gesture-driven animations, keyframe animations, or creating custom timing curves.
---

# SwiftUI Animations

Expert guidance for creating fluid animations and transitions in SwiftUI.

## Implicit Animations

### Basic Animation Modifier
```swift
@State private var scale: CGFloat = 1.0

Image(systemName: "star.fill")
    .scaleEffect(scale)
    .animation(.easeInOut(duration: 0.3), value: scale)
    .onTapGesture {
        scale = scale == 1.0 ? 1.5 : 1.0
    }
```

### Multiple Properties
```swift
@State private var isExpanded = false

Rectangle()
    .fill(isExpanded ? .blue : .red)
    .frame(width: isExpanded ? 200 : 100, height: isExpanded ? 200 : 100)
    .animation(.spring(response: 0.5, dampingFraction: 0.6), value: isExpanded)
```

## Explicit Animations

### withAnimation
```swift
@State private var offset: CGFloat = 0

Button("Animate") {
    withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
        offset = offset == 0 ? 100 : 0
    }
}

Rectangle()
    .offset(x: offset)
```

### Animation Completion (iOS 17+)
```swift
withAnimation(.easeInOut(duration: 0.5)) {
    isVisible = false
} completion: {
    removeItem()
}
```

## Animation Types

### Built-in Animations
```swift
// Linear
.animation(.linear(duration: 0.3), value: state)

// Ease In/Out
.animation(.easeIn(duration: 0.3), value: state)
.animation(.easeOut(duration: 0.3), value: state)
.animation(.easeInOut(duration: 0.3), value: state)

// Spring
.animation(.spring(response: 0.5, dampingFraction: 0.6, blendDuration: 0), value: state)
.animation(.spring(duration: 0.5, bounce: 0.3), value: state)  // iOS 17+

// Bouncy
.animation(.bouncy, value: state)
.animation(.bouncy(duration: 0.5, extraBounce: 0.2), value: state)

// Smooth
.animation(.smooth, value: state)
.animation(.smooth(duration: 0.3), value: state)

// Snappy
.animation(.snappy, value: state)
```

### Custom Timing Curve
```swift
.animation(.timingCurve(0.2, 0.8, 0.2, 1.0, duration: 0.5), value: state)
```

### Repeat & Delay
```swift
// Repeating
.animation(.easeInOut(duration: 1).repeatForever(autoreverses: true), value: state)

// With delay
.animation(.easeInOut.delay(0.2), value: state)

// Speed modifier
.animation(.easeInOut.speed(2), value: state)
```

## Transitions

### Built-in Transitions
```swift
@State private var showView = false

if showView {
    Text("Hello")
        .transition(.opacity)              // Fade
        .transition(.scale)                // Scale from center
        .transition(.slide)                // Slide from edge
        .transition(.move(edge: .bottom))  // Move from edge
        .transition(.push(from: .leading)) // Push (iOS 16+)
}

Button("Toggle") {
    withAnimation {
        showView.toggle()
    }
}
```

### Combined Transitions
```swift
.transition(.opacity.combined(with: .scale))
.transition(.asymmetric(insertion: .scale, removal: .opacity))
.transition(.move(edge: .bottom).combined(with: .opacity))
```

### Custom Transition
```swift
extension AnyTransition {
    static var slideAndFade: AnyTransition {
        .asymmetric(
            insertion: .move(edge: .trailing).combined(with: .opacity),
            removal: .move(edge: .leading).combined(with: .opacity)
        )
    }
}

// Usage
Text("Custom")
    .transition(.slideAndFade)
```

## matchedGeometryEffect

### Hero Animation
```swift
@Namespace private var animation
@State private var isExpanded = false

VStack {
    if isExpanded {
        RoundedRectangle(cornerRadius: 20)
            .fill(.blue)
            .matchedGeometryEffect(id: "shape", in: animation)
            .frame(width: 300, height: 400)
    } else {
        RoundedRectangle(cornerRadius: 10)
            .fill(.blue)
            .matchedGeometryEffect(id: "shape", in: animation)
            .frame(width: 100, height: 100)
    }
}
.onTapGesture {
    withAnimation(.spring(response: 0.5, dampingFraction: 0.7)) {
        isExpanded.toggle()
    }
}
```

### List to Detail
```swift
@Namespace private var namespace
@State private var selectedItem: Item?

// Grid view
LazyVGrid(columns: columns) {
    ForEach(items) { item in
        if selectedItem?.id != item.id {
            ItemCard(item: item)
                .matchedGeometryEffect(id: item.id, in: namespace)
                .onTapGesture {
                    withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                        selectedItem = item
                    }
                }
        }
    }
}
.overlay {
    if let item = selectedItem {
        ItemDetailView(item: item)
            .matchedGeometryEffect(id: item.id, in: namespace)
            .onTapGesture {
                withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                    selectedItem = nil
                }
            }
    }
}
```

## Gesture-Driven Animations

### Drag Animation
```swift
@State private var offset = CGSize.zero

Circle()
    .fill(.blue)
    .frame(width: 100, height: 100)
    .offset(offset)
    .gesture(
        DragGesture()
            .onChanged { value in
                offset = value.translation
            }
            .onEnded { _ in
                withAnimation(.spring(response: 0.3, dampingFraction: 0.6)) {
                    offset = .zero
                }
            }
    )
```

### Rotation Gesture
```swift
@State private var angle: Angle = .zero

Image(systemName: "arrow.up")
    .font(.largeTitle)
    .rotationEffect(angle)
    .gesture(
        RotationGesture()
            .onChanged { value in
                angle = value
            }
            .onEnded { _ in
                withAnimation(.spring()) {
                    angle = .zero
                }
            }
    )
```

## Keyframe Animations (iOS 17+)

```swift
@State private var isAnimating = false

Circle()
    .fill(.blue)
    .keyframeAnimator(initialValue: AnimationValues(), trigger: isAnimating) { content, value in
        content
            .scaleEffect(value.scale)
            .offset(y: value.verticalOffset)
    } keyframes: { _ in
        KeyframeTrack(\.scale) {
            SpringKeyframe(1.2, duration: 0.2)
            SpringKeyframe(0.9, duration: 0.2)
            SpringKeyframe(1.0, duration: 0.2)
        }
        KeyframeTrack(\.verticalOffset) {
            LinearKeyframe(-30, duration: 0.2)
            LinearKeyframe(0, duration: 0.4)
        }
    }

struct AnimationValues {
    var scale: CGFloat = 1.0
    var verticalOffset: CGFloat = 0
}
```

## Phase Animations (iOS 17+)

```swift
@State private var isAnimating = false

Circle()
    .fill(.blue)
    .phaseAnimator([false, true], trigger: isAnimating) { content, phase in
        content
            .scaleEffect(phase ? 1.2 : 1.0)
            .opacity(phase ? 0.5 : 1.0)
    } animation: { phase in
        phase ? .easeIn(duration: 0.3) : .easeOut(duration: 0.3)
    }
```

## Continuous Animation

```swift
@State private var isRotating = false

Image(systemName: "gear")
    .rotationEffect(isRotating ? .degrees(360) : .degrees(0))
    .animation(.linear(duration: 2).repeatForever(autoreverses: false), value: isRotating)
    .onAppear {
        isRotating = true
    }
```

## Content Transition

```swift
@State private var count = 0

Text("\(count)")
    .font(.largeTitle)
    .contentTransition(.numericText())

Button("Increment") {
    withAnimation {
        count += 1
    }
}
```

## Apple Documentation

- [Animation](https://developer.apple.com/documentation/swiftui/animation)
- [Transition](https://developer.apple.com/documentation/swiftui/anytransition)
- [matchedGeometryEffect](https://developer.apple.com/documentation/swiftui/view/matchedgeometryeffect(id:in:properties:anchor:issource:))
- [Keyframe Animations](https://developer.apple.com/documentation/swiftui/keyframeanimator)
