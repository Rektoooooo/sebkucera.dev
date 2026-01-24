export const claudeMdExample = `# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Workflow Requirements

1. **Always use the \`ios-developer\` skill** for every task
2. **Build after every task** using MCP build tool to verify compilation
3. **Fix any build errors** before considering a task complete

## Build Commands

\`\`\`bash
# Build the project
xcodebuild -project MealPrepAI.xcodeproj -scheme MealPrepAI build

# Run tests
xcodebuild -project MealPrepAI.xcodeproj -scheme MealPrepAI test
\`\`\`

## Architecture

**MVVM with @Observable pattern**

\`\`\`
UserProfile (goals, restrictions, preferences)
    └── MealPlan (weekly)
            └── Day (7 per plan)
                    └── Meal (breakfast, lunch, dinner)
                            └── Recipe
                                    └── RecipeIngredient
\`\`\`

## Key Design Decisions

- **Local-first with SwiftData** - Offline support
- **Dual measurements** - Volume + weight for ingredients
- **Backend proxy for AI** - Users don't need API keys`;

export const planMdExample = `# MealPrepAI - Implementation Plan

## Competitor Pain Points We're Solving

| Problem | Competitor | Our Solution |
|---------|-----------|--------------|
| Recipes too complicated | Mealime | "Simple Mode" toggle |
| Can't modify meals | MealPrepPro | Granular editing with "lock" |
| Can't swap ingredients | MealPrepPro | AI substitution + macro recalc |
| Only uses ounces | MealPrepPro | Dual measurements |
| Recipes repeat constantly | Eat This Much | Variety engine |

## Implementation Phases

### Phase 1: Foundation (UI ONLY)
- SwiftData models (9 core models)
- Tab navigation structure
- All Views with placeholder UI

### Phase 2: Onboarding
- 8-screen onboarding flow
- Profile creation and persistence

### Phase 3: Claude API Integration
- ClaudeAPIService with async/await
- Secure API key storage (Keychain)
- Prompt engineering for meal plans

### Phase 4: Meal Plan Display
- WeeklyPlanView with day selector
- RecipeDetailView
- Mark meals as eaten

### Phase 5: Editing & Swapping
- MealSwapView for changing meals
- Ingredient substitution

### Phase 6: Grocery List
- Smart aggregation and rounding
- Category grouping

### Phase 7: Recipe Library
- Search and favorites
- Custom recipe creation`;

export const skillsList = [
  {
    name: 'ios-developer',
    description: 'Comprehensive iOS development hub that routes to specialized SwiftUI and iOS skills. Use when asking general iOS questions, starting new projects, or when the specific area is unclear. Routes to skills for UI, data, networking, testing, Apple frameworks, and App Store submission.',
    category: 'Core'
  },
  {
    name: 'swift-architecture',
    description: 'Swift architecture expert for app structure and patterns. Use when working with MVVM, @Observable, ObservableObject, dependency injection, state management, coordinator pattern, repository pattern, or designing app architecture.',
    category: 'Architecture'
  },
  {
    name: 'swiftui-views',
    description: 'SwiftUI view components expert for building UI elements. Use when creating views, buttons, text, images, lists, forms, pickers, toggles, sliders, or custom controls. Covers view modifiers, styling, @ViewBuilder, and reusable components.',
    category: 'UI'
  },
  {
    name: 'swiftui-layout',
    description: 'SwiftUI layout and container expert for arranging views. Use when working with VStack, HStack, ZStack, Grid, LazyVGrid, LazyHGrid, GeometryReader, spacing, padding, alignment, frames, safe areas, or responsive layouts.',
    category: 'UI'
  },
  {
    name: 'swiftui-navigation',
    description: 'SwiftUI navigation expert for app routing and flow. Use when implementing NavigationStack, NavigationLink, NavigationPath, TabView, sheets, fullScreenCover, alerts, confirmation dialogs, popovers, deep linking, or programmatic navigation.',
    category: 'UI'
  },
  {
    name: 'swiftui-animations',
    description: 'SwiftUI animation and transition expert. Use when adding animations, transitions, withAnimation, implicit animations, spring animations, matchedGeometryEffect, gesture-driven animations, keyframe animations, or creating custom timing curves.',
    category: 'UI'
  },
  {
    name: 'ios-ui-designer',
    description: 'Senior SwiftUI UI designer that creates visually consistent, polished iOS interfaces. Use when designing new screens, creating UI components, adding features, or when you want to make something look good. Handles colors, typography, spacing, and ensures UI consistency.',
    category: 'UI'
  },
  {
    name: 'swift-data-persistence',
    description: 'Swift data persistence expert for storing app data. Use when working with SwiftData, Core Data, UserDefaults, Keychain, file storage, @Query, @Model, ModelContainer, ModelContext, or data migration.',
    category: 'Data'
  },
  {
    name: 'swift-networking',
    description: 'Swift networking expert for API communication. Use when working with URLSession, REST APIs, JSON encoding/decoding, async data fetching, network requests, HTTP methods, authentication headers, or API error handling.',
    category: 'Data'
  },
  {
    name: 'swift-concurrency',
    description: 'Swift concurrency expert for async programming. Use when working with async/await, actors, Task, TaskGroup, MainActor, Sendable, continuations, or managing concurrent operations safely.',
    category: 'Data'
  },
  {
    name: 'ios-cloudkit',
    description: 'CloudKit expert for iCloud data sync. Use when working with iCloud sync, CKRecord, CKDatabase, CKQuery, subscriptions, sharing, zones, or cross-device data synchronization.',
    category: 'Data'
  },
  {
    name: 'ios-testing',
    description: 'iOS testing expert for XCTest and test automation. Use when writing unit tests, UI tests, performance tests, mocking, test doubles, async testing, or setting up test infrastructure with Swift Testing framework.',
    category: 'Quality'
  },
  {
    name: 'ios-debugging',
    description: 'iOS debugging expert for troubleshooting and profiling. Use when working with Instruments, Time Profiler, Memory Graph, Allocations, LLDB, breakpoints, console logging, or performance analysis.',
    category: 'Quality'
  },
  {
    name: 'swift-code-reviewer',
    description: 'Senior Swift/SwiftUI code reviewer that analyzes feature flows, logic, and code quality. Use when reviewing Swift code, checking if features work correctly, finding bugs, or asking for code improvements.',
    category: 'Quality'
  },
  {
    name: 'swift-optimizer',
    description: 'Senior Swift/SwiftUI performance expert for code optimization. Use when analyzing Swift code for performance issues, hangs, lag, memory leaks, main thread blocking, slow UI, or when you want to optimize code.',
    category: 'Quality'
  },
  {
    name: 'ios-release-manager',
    description: 'Senior iOS Release Manager that reviews SwiftUI codebases for release readiness. Analyzes UX flows, UI consistency, edge cases, error handling, accessibility, and App Store compliance.',
    category: 'Quality'
  },
  {
    name: 'ios-healthkit',
    description: 'HealthKit expert for health and fitness data. Use when working with health data, workouts, step counts, heart rate, sleep analysis, permissions, or syncing with Apple Health.',
    category: 'Frameworks'
  },
  {
    name: 'ios-storekit',
    description: 'StoreKit expert for in-app purchases and subscriptions. Use when working with StoreKit 2, subscriptions, consumables, non-consumables, receipt validation, or App Store transactions.',
    category: 'Frameworks'
  },
  {
    name: 'ios-mapkit',
    description: 'MapKit and CoreLocation expert for maps and location. Use when working with MapKit, maps, annotations, routes, geocoding, CoreLocation, user location tracking, or geofencing.',
    category: 'Frameworks'
  },
  {
    name: 'ios-authentication',
    description: 'iOS authentication expert for user sign-in. Use when working with Sign in with Apple, biometric authentication (Face ID, Touch ID), Keychain credentials, or password autofill.',
    category: 'Frameworks'
  },
  {
    name: 'ios-notifications',
    description: 'iOS notifications expert for push and local notifications. Use when working with UNUserNotificationCenter, push notifications, local notifications, notification actions, badges, or notification extensions.',
    category: 'Frameworks'
  },
  {
    name: 'apple-intelligence',
    description: 'Apple Intelligence integration expert. Use when working with on-device AI features, Writing Tools, Image Playground, Genmoji, or integrating Apple Intelligence capabilities into your app.',
    category: 'Frameworks'
  },
  {
    name: 'ios-accessibility',
    description: 'iOS accessibility expert for inclusive app design. Use when working with VoiceOver, Dynamic Type, accessibility labels, traits, hints, color contrast, or assistive technologies.',
    category: 'Polish'
  },
  {
    name: 'ios-localization',
    description: 'iOS localization expert for internationalization. Use when working with String Catalogs, XLIFF, localized strings, date/number formatting, pluralization, or multi-language support.',
    category: 'Polish'
  },
  {
    name: 'ios-app-lifecycle',
    description: 'iOS app lifecycle expert for app structure and scenes. Use when working with App struct, WindowGroup, scenes, ScenePhase, background tasks, app states, or launch configuration.',
    category: 'Polish'
  },
  {
    name: 'ios-app-store',
    description: 'App Store expert for iOS app submission and distribution. Use when preparing for App Store submission, review guidelines, metadata, screenshots, TestFlight, app signing, or resolving rejection issues.',
    category: 'Polish'
  },
  {
    name: 'ios-app-planner',
    description: 'iOS app planning expert that transforms simple app ideas into comprehensive development plans. Use when you have an app idea and want a full plan including features, architecture, data models, screens, and implementation roadmap.',
    category: 'Planning'
  },
  {
    name: 'skill-writer',
    description: 'Guide for creating Agent Skills for Claude Code. Use when you want to create, write, author, or design a new Skill, or need help with SKILL.md files, frontmatter, or skill structure.',
    category: 'Meta'
  },
];

export const xcodeMcpConfig = `{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anthropics/xcodebuildmcp"
      ]
    }
  }
}

// Or install via Smithery (recommended):
// npx -y @smithery/cli@latest install cameroncooke/xcodebuildmcp --client claude-code`;

export const githubMcpConfig = `{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_GITHUB_PAT"
      }
    }
  }
}`;

export const commitCommand = `# /commit command example
$ /commit

# Claude analyzes changes, creates semantic commit:
# "feat(auth): add biometric login with Face ID support"`;

export const reviewCommand = `# /review-pr command example
$ /review-pr 42

# Claude reviews the PR, checking:
# - Code quality and patterns
# - Potential bugs
# - SwiftUI best practices
# - Accessibility concerns`;

export const workflowSteps = [
  {
    step: 1,
    title: "Project Setup",
    description: "Create Xcode project, configure CLAUDE.md, set up MCP servers",
    command: "$ claude 'Set up new iOS project with SwiftUI and SwiftData'"
  },
  {
    step: 2,
    title: "Plan Mode",
    description: "Use plan mode to design architecture before coding",
    command: "$ claude 'Plan the implementation for user authentication'"
  },
  {
    step: 3,
    title: "Feature Development",
    description: "Use ios-developer skills to build features iteratively",
    command: "$ claude 'Add user authentication with Sign in with Apple'"
  },
  {
    step: 4,
    title: "Testing & Polish",
    description: "Generate tests, fix issues, prepare for App Store",
    command: "$ claude 'Write tests and prepare for submission'"
  }
];

export const tips = [
  {
    title: "Keep CLAUDE.md Updated",
    description: "Update your project context as you build. Include current focus, known issues, and architectural decisions."
  },
  {
    title: "Use Plan Mode First",
    description: "Before coding complex features, use plan mode to design the architecture and get alignment."
  },
  {
    title: "Leverage Xcode MCP",
    description: "Let Claude build and test directly. It catches errors faster than manual verification."
  },
  {
    title: "Iterate with Git",
    description: "Use /commit frequently. Small, atomic commits make it easy to track and revert changes."
  },
  {
    title: "Test on Device Early",
    description: "Don't wait until the end. Test on real devices throughout development."
  },
  {
    title: "Document Edge Cases",
    description: "Add edge cases and error scenarios to CLAUDE.md so Claude handles them proactively."
  }
];

export const gettingStartedSteps = [
  {
    step: 1,
    title: "Install Claude Code",
    description: "Install via npm globally",
    command: "npm install -g @anthropic-ai/claude-code"
  },
  {
    step: 2,
    title: "Authenticate",
    description: "Sign in with your Anthropic account",
    command: "claude auth"
  },
  {
    step: 3,
    title: "Open Your Project",
    description: "Navigate to your Xcode project directory",
    command: "cd ~/Developer/MyApp && claude"
  },
  {
    step: 4,
    title: "Create CLAUDE.md",
    description: "Add project context at the root",
    command: "claude 'Create a CLAUDE.md for this iOS project'"
  }
];

export const prerequisites = [
  { name: "Node.js 18+", description: "Required for Claude Code CLI" },
  { name: "Xcode 15+", description: "For iOS development and simulator" },
  { name: "Anthropic Account", description: "With Claude API access" },
  { name: "GitHub Account", description: "Optional, for GitHub MCP integration" }
];

export const xcodeMcpInstallSteps = [
  "Open your Claude Code settings file",
  "Add the XcodeBuildServer configuration",
  "Restart Claude Code to load the MCP",
  "Verify with 'What MCP servers are available?'"
];

export const githubTokenSteps = [
  { step: "1", text: "Go to GitHub Settings → Developer settings → Personal access tokens" },
  { step: "2", text: "Click 'Generate new token (classic)'" },
  { step: "3", text: "Select scopes: repo, workflow, read:org" },
  { step: "4", text: "Copy token and add to settings.json" }
];

export const customCommandExample = `# ~/.claude/commands/swiftui-component.md

Generate a reusable SwiftUI component with:
- @Observable view model if needed
- Preview provider with sample data
- Accessibility labels
- Dark mode support

Component name: $ARGUMENTS`;

export const troubleshootingItems = [
  {
    question: "Claude doesn't see my Xcode project",
    answer: "Make sure you're in the project root directory (where .xcodeproj is). Run 'ls' to verify, then restart Claude."
  },
  {
    question: "MCP server not connecting",
    answer: "Check your settings.json syntax. Ensure npx is in your PATH. Try running the npx command manually to see errors."
  },
  {
    question: "Build errors not showing",
    answer: "Verify the Xcode MCP is loaded with 'What MCP tools are available?'. Make sure your scheme name is correct."
  },
  {
    question: "GitHub token not working",
    answer: "Ensure your token has the correct scopes (repo, workflow). Check if it's expired. Regenerate if needed."
  },
  {
    question: "Skills not loading",
    answer: "Verify skills are in ~/.claude/skills/[skill-name]/SKILL.md. Check folder permissions. Restart Claude Code."
  },
  {
    question: "Claude forgetting context",
    answer: "Keep CLAUDE.md updated. For long sessions, periodically remind Claude of key architecture decisions."
  }
];

export const resources = [
  {
    title: "Claude Code Docs",
    description: "Official documentation and guides",
    url: "https://docs.anthropic.com/claude-code",
    icon: "bi-book"
  },
  {
    title: "MCP Specification",
    description: "Model Context Protocol details",
    url: "https://modelcontextprotocol.io",
    icon: "bi-diagram-3"
  },
  {
    title: "Apple Developer",
    description: "SwiftUI and iOS documentation",
    url: "https://developer.apple.com/documentation/swiftui",
    icon: "bi-apple"
  },
  {
    title: "Swift.org",
    description: "Swift language reference",
    url: "https://swift.org/documentation",
    icon: "bi-code-slash"
  }
];
