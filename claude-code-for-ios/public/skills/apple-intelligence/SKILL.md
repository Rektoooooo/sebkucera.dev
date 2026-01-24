# Apple Intelligence Implementation Guide

You are an expert in implementing Apple Intelligence features using the Foundation Models framework and App Intents. This skill contains comprehensive knowledge from Apple's official documentation to help developers integrate on-device AI capabilities into iOS/macOS/visionOS apps.

## Overview

The **Foundation Models framework** provides direct access to Apple's on-device Large Language Model (LLM) that powers Apple Intelligence. Key characteristics:

- **On-device**: All data stays private, works offline
- **Built into OS**: No app size increase
- **Swift-native API**: Simple integration with as few as 3 lines of code
- **Available on**: iOS 26+, iPadOS 26+, macOS 26+, visionOS 26+

### Model Specifications

- 3 billion parameters, quantized to 2 bits
- Context window: **4,096 tokens per session**
- Token size: ~3-4 characters in Latin languages, ~1 character in CJK languages

### Best Use Cases

| Optimized For | Avoid |
|--------------|-------|
| Summarization | Math/counting |
| Entity extraction | Code generation |
| Text classification | Complex reasoning |
| Text composition | World knowledge |
| Tag generation | Multi-step logic |
| Game dialog | |

---

## Getting Started

### Check Model Availability

Always verify model availability before use:

```swift
import FoundationModels

let model = SystemLanguageModel.default

switch model.availability {
case .available:
    // Model is ready to use
    break
case .unavailable(let reason):
    switch reason {
    case .deviceNotEligible:
        // Device doesn't support Apple Intelligence
        break
    case .appleIntelligenceNotEnabled:
        // User needs to enable Apple Intelligence in Settings
        break
    case .modelNotReady:
        // Model still downloading, try again later
        break
    }
}
```

### Basic Usage

```swift
import FoundationModels

// Create a session
let session = LanguageModelSession()

// Simple prompt
let response = try await session.respond(to: "Summarize this article in 3 sentences.")
print(response.content)
```

---

## Guided Generation (@Generable)

Guided Generation is the core feature that guarantees structured output using **constrained decoding**. Instead of parsing unreliable JSON, you define Swift types that the model generates directly.

### Basic Generable Type

```swift
import FoundationModels

@Generable
struct TripItinerary {
    var title: String
    var description: String
    var days: [DayPlan]
}

@Generable
struct DayPlan {
    var activities: [String]
    var hotel: String
    var restaurant: String
}

// Generate structured output
let session = LanguageModelSession()
let itinerary: TripItinerary = try await session.respond(
    to: "Create a 3-day trip itinerary for Tokyo",
    generating: TripItinerary.self
)
```

### Using @Guide for Constraints

Guides let you control generated values with descriptions, ranges, counts, and patterns:

```swift
@Generable
struct NPC {
    @Guide(description: "A full name with first and last name")
    var name: String

    @Guide(.range(1...10))
    var level: Int

    @Guide(.count(3))
    var attributes: [String]

    @Guide(.anyOf(["warrior", "mage", "healer"]))
    var characterClass: String
}
```

### Guide Options by Type

| Type | Available Guides |
|------|-----------------|
| Int/Double | `.minimum()`, `.maximum()`, `.range()` |
| String | `.anyOf([])`, `.regex()`, `description:` |
| Array | `.count()`, `.minimumCount()`, `.maximumCount()` |
| All types | `description:` (natural language) |

### Regex Pattern Guide

```swift
@Generable
struct Contact {
    @Guide(.regex(/[A-Z][a-z]+ [A-Z][a-z]+/))
    var fullName: String

    @Guide(.regex(/\d{3}-\d{3}-\d{4}/))
    var phoneNumber: String
}
```

### Generable Enums

```swift
@Generable
enum Encounter {
    case orderCoffee(drink: String, size: String)
    case complaint(reason: String)
    case greeting
}

// Model will generate one of the enum cases
let encounter: Encounter = try await session.respond(
    to: "Generate a random coffee shop encounter",
    generating: Encounter.self
)
```

### Property Order Matters

Properties are generated in declaration order. This affects:
- **Quality**: Put summary/analysis properties last for best results
- **Streaming**: Earlier properties appear first in UI
- **Dependencies**: Properties can influence subsequent ones

```swift
@Generable
struct Article {
    var title: String      // Generated first
    var content: String    // Generated second
    var summary: String    // Generated last (best quality)
}
```

---

## Streaming Responses

Foundation Models uses **snapshots** instead of deltas for streaming, making it easy to work with structured output.

### Basic Streaming

```swift
@Generable
struct Story {
    var title: String
    var chapters: [String]
}

let session = LanguageModelSession()

// Stream returns an AsyncSequence of PartiallyGenerated types
for try await partial in session.streamResponse(
    to: "Write a short story",
    generating: Story.self
) {
    // Properties are optional in partial responses
    if let title = partial.title {
        print("Title: \(title)")
    }
    if let chapters = partial.chapters {
        print("Chapters so far: \(chapters.count)")
    }
}
```

### SwiftUI Integration

```swift
struct StoryView: View {
    @State private var story: Story.PartiallyGenerated?

    var body: some View {
        VStack {
            if let title = story?.title {
                Text(title)
                    .font(.title)
                    .contentTransition(.opacity)
            }

            if let chapters = story?.chapters {
                ForEach(chapters, id: \.self) { chapter in
                    Text(chapter)
                }
            }
        }
        .animation(.easeInOut, value: story)
        .task {
            let session = LanguageModelSession()
            for try await partial in session.streamResponse(
                to: "Write a story",
                generating: Story.self
            ) {
                story = partial
            }
        }
    }
}
```

### Streaming Best Practices

1. Use SwiftUI animations and transitions to hide latency
2. Consider view identity when generating arrays (use stable IDs)
3. Properties stream in declaration order
4. PartiallyGenerated types are automatically Identifiable

---

## Tool Calling

Tools let the model call your code to fetch external data or perform actions. The model autonomously decides when to invoke tools.

### Defining a Tool

```swift
import FoundationModels
import MapKit

struct FindPointsOfInterestTool: Tool {
    // Short, readable name (avoid abbreviations)
    let name = "findPointsOfInterest"

    // One sentence description (put in prompt automatically)
    let description = "Find nearby hotels, restaurants, and activities for a location"

    // Tool input - must be Generable
    @Generable
    struct Arguments {
        var query: String
        var category: Category

        @Generable
        enum Category: String {
            case hotel, restaurant, activity
        }
    }

    // Landmark context passed at initialization
    let landmark: Landmark

    // Called when model invokes the tool
    func call(arguments: Arguments) async throws -> ToolOutput {
        let request = MKLocalSearch.Request()
        request.naturalLanguageQuery = arguments.query
        request.region = MKCoordinateRegion(
            center: landmark.coordinates,
            latitudinalMeters: 20000,
            longitudinalMeters: 20000
        )

        let search = MKLocalSearch(request: request)
        let response = try await search.start()

        let names = response.mapItems.map { $0.name ?? "" }
        return ToolOutput(names.joined(separator: ", "))
    }
}
```

### Using Tools with Sessions

```swift
let landmark = Landmark(name: "Joshua Tree", coordinates: ...)

// Create tool instance with context
let poiTool = FindPointsOfInterestTool(landmark: landmark)

// Pass tool to session
let session = LanguageModelSession(
    instructions: "You are a travel planner. Use findPointsOfInterest to get real locations.",
    tools: [poiTool]
)

let itinerary: Itinerary = try await session.respond(
    to: "Create a 3-day itinerary for \(landmark.name)",
    generating: Itinerary.self
)
```

### Tool Calling Mechanics

1. Tools are presented to model along with instructions
2. Model generates tool arguments using Guided Generation
3. Your `call` method is invoked
4. Output is added to transcript
5. Model uses output to generate final response

### Tool Best Practices

- Keep name and description concise (more tokens = more latency)
- Maximum 3-5 tools per session
- Tools can be called multiple times per request
- Tool calls can happen in parallel
- Consider running tools directly if model should always use them

### Stateful Tools

Tools can maintain state across calls:

```swift
class UniqueContactTool: Tool {
    let name = "findContact"
    let description = "Find a contact from the user's address book"

    @Generable
    struct Arguments {
        var ageGroup: AgeGroup
    }

    // Track used contacts
    private var usedContacts: Set<String> = []

    func call(arguments: Arguments) async throws -> ToolOutput {
        let contact = try await fetchContact(ageGroup: arguments.ageGroup)

        // Avoid duplicates
        guard !usedContacts.contains(contact.id) else {
            return try await call(arguments: arguments) // Try again
        }

        usedContacts.insert(contact.id)
        return ToolOutput(contact.name)
    }
}
```

---

## Sessions and Context

### Session Configuration

```swift
// Basic session
let session = LanguageModelSession()

// Session with instructions
let session = LanguageModelSession(
    instructions: """
    You are a friendly barista at a coffee shop.
    Respond briefly and in character.
    Today's date is \(Date.now.formatted()).
    """
)

// Session with tools
let session = LanguageModelSession(
    instructions: "You are a travel planner.",
    tools: [poiTool, weatherTool]
)
```

### Instructions vs Prompts

| Instructions | Prompts |
|-------------|---------|
| From developer | From user |
| Higher priority | Lower priority |
| Static content | Dynamic input |
| Define role/behavior | Define task |
| **Never** interpolate user input | User input OK |

### Multi-turn Conversations

```swift
let session = LanguageModelSession(
    instructions: "You are a helpful assistant."
)

// First turn
let response1 = try await session.respond(to: "Write a haiku about coffee")

// Second turn - model remembers context
let response2 = try await session.respond(to: "Now write another one about tea")

// Access conversation history
for entry in session.transcript {
    print(entry)
}
```

### Check Response State

```swift
// Don't send new prompt while responding
guard !session.isResponding else {
    print("Please wait...")
    return
}

let response = try await session.respond(to: prompt)
```

### Handling Context Window Exceeded

```swift
do {
    let response = try await session.respond(to: prompt)
} catch LanguageModelSession.GenerationError.exceededContextWindowSize {
    // Create new session with partial history
    let firstEntry = session.transcript.first!  // Instructions
    let lastEntry = session.transcript.last!    // Last response

    let newSession = LanguageModelSession(
        instructions: firstEntry.content,
        priorTranscriptEntries: [lastEntry]
    )
}
```

---

## Context Window Management

The on-device model has a **4,096 token limit per session**. All of the following consume tokens:
- Instructions
- All prompts
- All responses
- Tool schemas, inputs, and outputs
- Generable schemas

### Token Budget Strategies

1. **Ask for less content**
   ```swift
   // Instead of: "Summarize this article"
   // Use: "Summarize this article in 3 sentences"

   @Guide(.maximumCount(5))
   var tags: [String]
   ```

2. **Write shorter prompts**
   - Use concise, imperative language
   - Avoid background info in instructions
   - Aim for 1-3 paragraphs max

3. **Optimize Generable types**
   - Use short, clear property names
   - Only add @Guide where needed
   - Reduce type complexity

4. **Use tools efficiently**
   - Keep descriptions short
   - Limit to 3-5 tools
   - Skip tool calling when you can run tools directly

5. **Split large tasks**
   ```swift
   // For long articles, summarize in chunks
   for chunk in article.chunks(ofSize: 1000) {
       let chunkSession = LanguageModelSession()
       let summary = try await chunkSession.respond(
           to: "Summarize: \(chunk)",
           generating: Summary.self
       )
       summaries.append(summary)
   }

   // Combine summaries
   let finalSession = LanguageModelSession()
   let final = try await finalSession.respond(
       to: "Combine these summaries: \(summaries)",
       generating: FinalSummary.self
   )
   ```

### Use Instruments for Profiling

Use the **Foundation Models Instrument** in Xcode to observe:
- Token consumption
- Asset loading time
- Inference time
- Tool calling duration

---

## Dynamic Schemas

When you don't know the structure at compile time, use `DynamicGenerationSchema`:

```swift
// Define schema at runtime
let questionSchema = DynamicGenerationSchema.object([
    .init(key: "question", schema: .string),
    .init(key: "answers", schema: .array(of: .object([
        .init(key: "text", schema: .string),
        .init(key: "isCorrect", schema: .bool)
    ])))
])

// Validate schema
let validatedSchema = try GenericGenerationSchema(
    rootSchema: questionSchema,
    referencedSchemas: []
)

// Generate
let session = LanguageModelSession()
let result: GeneratedContent = try await session.respond(
    to: "Create a trivia question about coffee",
    generating: validatedSchema
)

// Access values
let question = result["question"] as? String
let answers = result["answers"] as? [GeneratedContent]
```

---

## Performance Optimization

### Prewarming

Load the model before making requests:

```swift
// Prewarm when user shows intent (e.g., opens a screen)
Task {
    try await session.prewarm()
}

// Later, respond is faster
let response = try await session.respond(to: prompt)
```

### Skip Schema in Prompt

When the model already knows the schema:

```swift
// First request includes schema
let response1: Itinerary = try await session.respond(
    to: "Plan a trip to Paris",
    generating: Itinerary.self
)

// Subsequent requests can skip schema
let response2: Itinerary = try await session.respond(
    to: "Now plan one for Tokyo",
    generating: Itinerary.self,
    options: GenerationOptions(includeSchemaInPrompt: false)
)
```

Also works if instructions contain a complete example of the Generable type.

### Sampling Options

```swift
// Deterministic output (for demos/testing)
let options = GenerationOptions(samplingMode: .greedy)

// Varied output (default)
let options = GenerationOptions(samplingMode: .random(temperature: 0.7))

// More creative
let options = GenerationOptions(samplingMode: .random(temperature: 1.2))
```

---

## Custom Adapters

Adapters specialize the model for domain-specific tasks. They require:
- Python training toolkit
- 100-5000+ training samples
- Retraining for each OS model version
- ~160MB per adapter

### Built-in Adapters

The **content tagging adapter** supports:
- Tag generation
- Entity extraction
- Topic detection

```swift
let model = SystemLanguageModel(useCase: .contentTagging)
let session = LanguageModelSession(model: model)

@Generable
struct Tags {
    var topics: [String]
}

let tags: Tags = try await session.respond(
    to: "Extract topics from: \(articleText)",
    generating: Tags.self
)
```

### Loading Custom Adapters

```swift
// Load adapter from file
let adapter = try SystemLanguageModel.Adapter(
    fileURL: adapterURL
)

// Create model with adapter
let model = SystemLanguageModel(adapter: adapter)
let session = LanguageModelSession(model: model)
```

Custom adapters require:
- `com.apple.developer.foundation-model-adapter` entitlement
- Hosting via Background Assets framework
- Version management for OS updates

---

## App Intents Integration

App Intents lets you expose your app's AI features to Siri, Shortcuts, and Spotlight.

### Basic App Intent

```swift
import AppIntents

struct GenerateItineraryIntent: AppIntent {
    static var title: LocalizedStringResource = "Generate Trip Itinerary"

    @Parameter(title: "Destination")
    var destination: String

    static var parameterSummary: some ParameterSummary {
        Summary("Generate itinerary for \(\.$destination)")
    }

    func perform() async throws -> some IntentResult & ReturnsValue<String> {
        let session = LanguageModelSession()
        let itinerary: Itinerary = try await session.respond(
            to: "Create a 3-day itinerary for \(destination)",
            generating: Itinerary.self
        )
        return .result(value: itinerary.description)
    }
}
```

### App Shortcuts

```swift
struct MyAppShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(
            intent: GenerateItineraryIntent(),
            phrases: [
                "Plan a trip with \(.applicationName)",
                "Generate itinerary in \(.applicationName)"
            ],
            shortTitle: "Plan Trip",
            systemImageName: "airplane"
        )
    }
}
```

---

## Error Handling

```swift
do {
    let response = try await session.respond(to: prompt)
} catch LanguageModelSession.GenerationError.exceededContextWindowSize(let details) {
    // Start new session, optionally with transcript summary
    print("Context exceeded: \(details)")
} catch LanguageModelSession.GenerationError.unsupportedLanguageOrLocale {
    // Show language not supported message
    print("Language not supported")
} catch LanguageModelSession.GenerationError.guardrailViolation {
    // Content was blocked by safety guardrails
    print("Request blocked by safety guardrails")
} catch {
    print("Unexpected error: \(error)")
}
```

### Check Language Support

```swift
let locale = Locale.current
if SystemLanguageModel.default.supportsLanguage(for: locale) {
    // Proceed with generation
} else {
    // Show unsupported language UI
}
```

---

## Testing in Xcode

### Playgrounds for Prompt Iteration

```swift
import Playgrounds
import FoundationModels

#Playground {
    let session = LanguageModelSession()

    // Results appear in canvas immediately
    let response = try await session.respond(
        to: "Generate a coffee shop menu",
        generating: Menu.self
    )

    print(response)
}
```

### Availability Override in Scheme

Test unavailability scenarios without disabling Apple Intelligence:

1. Edit Scheme > Run > Options
2. Foundation Models Availability Override:
   - Device Not Eligible
   - Apple Intelligence Not Enabled
   - Model Not Ready

### Foundation Models Instrument

Profile your app to understand:
- Asset loading time
- Token counts (input/output)
- Inference duration
- Tool calling overhead

---

## Best Practices Summary

### Prompting
- Use conversational, imperative language
- Be specific about output length ("in 3 sentences")
- Break complex tasks into smaller prompts
- Keep instructions static, prompts dynamic

### Generable Types
- Use @Guide only where needed
- Order properties by generation priority
- Put summaries/analysis last
- Keep types simple

### Performance
- Prewarm sessions before use
- Skip schema in multi-turn conversations
- Use tools sparingly (3-5 max)
- Profile with Instruments

### Error Handling
- Always check availability first
- Handle context window exceeded
- Catch unsupported language errors
- Provide fallback experiences

---

## Quick Reference

### Imports
```swift
import FoundationModels
```

### Essential Types
- `SystemLanguageModel` - The on-device model
- `LanguageModelSession` - Stateful conversation
- `@Generable` - Macro for structured output
- `@Guide` - Macro for constraining values
- `Tool` - Protocol for tool calling
- `GenerationOptions` - Sampling and behavior options

### Key Methods
- `session.respond(to:)` - Generate response
- `session.respond(to:generating:)` - Generate typed response
- `session.streamResponse(to:generating:)` - Stream typed response
- `session.prewarm()` - Preload model
- `model.availability` - Check availability
