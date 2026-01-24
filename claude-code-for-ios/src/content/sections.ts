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
    title: "Project Setup & Planning",
    description: "Create Xcode project, configure CLAUDE.md with architecture details, install MCP servers. Use ios-app-planner skill to define your app's scope, features, and data models before writing any code.",
    command: "$ claude 'Plan a habit tracking app with streaks, reminders, and statistics'"
  },
  {
    step: 2,
    title: "Architecture & Data Models",
    description: "Enter plan mode to design your app structure. Claude creates PLAN.md with SwiftData models, view hierarchy, and implementation phases. Review and approve before coding begins.",
    command: "$ claude 'Plan the data model for habits with daily completions and streaks'"
  },
  {
    step: 3,
    title: "Core Feature Development",
    description: "Build features iteratively using ios-developer skill. Claude writes code, builds with Xcode MCP to verify compilation, and fixes errors automatically. Commit frequently with /commit.",
    command: "$ claude 'Implement the habit list view with swipe to complete'"
  },
  {
    step: 4,
    title: "UI Polish & Animations",
    description: "Use swiftui-animations and ios-ui-designer skills to add visual polish. Create smooth transitions, haptic feedback, and consistent styling across all screens.",
    command: "$ claude 'Add celebration animation when completing a habit streak'"
  },
  {
    step: 5,
    title: "Testing & Edge Cases",
    description: "Generate unit tests with ios-testing skill. Test on real devices, handle edge cases like no data states, error handling, and offline scenarios.",
    command: "$ claude 'Write tests for HabitViewModel and add empty state handling'"
  },
  {
    step: 6,
    title: "App Store Preparation",
    description: "Use ios-release-manager and ios-app-store skills to prepare for submission. Create screenshots, write descriptions, configure App Store Connect, and ensure compliance with guidelines.",
    command: "$ claude 'Review this app for App Store submission and create metadata'"
  }
];

export const tips = [
  {
    title: "Keep CLAUDE.md Updated",
    description: "Update your project context as you build. Include current focus, known issues, architectural decisions, and which skills to use. The more context you provide, the better Claude performs."
  },
  {
    title: "Use Plan Mode First",
    description: "Before coding complex features, use plan mode to design the architecture and get alignment. This prevents wasted effort on wrong approaches and documents decisions."
  },
  {
    title: "Leverage Xcode MCP",
    description: "Let Claude build and test directly. It catches errors faster than manual verification. Tell Claude to 'build after every change' in CLAUDE.md for tight feedback loops."
  },
  {
    title: "Commit Frequently",
    description: "Use /commit after completing each logical unit of work. Small, atomic commits make it easy to track progress and revert if something breaks."
  },
  {
    title: "Test on Device Early",
    description: "Don't wait until the end. Test on real devices throughout development. Simulator can miss performance issues and doesn't support all features."
  },
  {
    title: "Document Edge Cases",
    description: "Add edge cases and error scenarios to CLAUDE.md so Claude handles them proactively. Include empty states, network errors, and permission denials."
  },
  {
    title: "Use Specific Skills",
    description: "While ios-developer auto-routes, calling specific skills directly (e.g., 'use swift-data-persistence skill') gives more focused results for specialized tasks."
  },
  {
    title: "Review Before Accepting",
    description: "Always review Claude's changes before committing. Claude is a collaborator, not a replacement for your judgment on architecture and UX decisions."
  },
  {
    title: "Break Down Large Tasks",
    description: "Instead of 'build my entire app', break work into focused tasks: 'create the data model', 'build the list view', 'add the detail screen'. Smaller tasks = better results."
  },
  {
    title: "Use Preview Providers",
    description: "Ask Claude to include SwiftUI preview providers with sample data. This speeds up UI iteration without running the full app."
  },
  {
    title: "Handle Permissions Early",
    description: "Request camera, notifications, health data, and location permissions at appropriate times. Add usage descriptions to Info.plist during initial setup."
  },
  {
    title: "Version Your Skills",
    description: "Keep your custom skills in version control. As your workflow improves, update skills with new patterns and learnings."
  }
];

export const gettingStartedSteps = [
  {
    step: 1,
    title: "Install Claude Code",
    description: "Install via npm globally. Requires Node.js 18+ installed on your Mac.",
    command: "npm install -g @anthropic-ai/claude-code"
  },
  {
    step: 2,
    title: "Authenticate",
    description: "Sign in with your Anthropic account. This opens a browser window for authentication.",
    command: "claude auth"
  },
  {
    step: 3,
    title: "Open Your Project",
    description: "Navigate to your Xcode project directory (where .xcodeproj or .xcworkspace lives)",
    command: "cd ~/Developer/MyApp && claude"
  },
  {
    step: 4,
    title: "Create CLAUDE.md",
    description: "Let Claude analyze your project and create a context file automatically",
    command: "claude 'Create a CLAUDE.md for this iOS project'"
  },
  {
    step: 5,
    title: "Install Xcode MCP",
    description: "Add the Xcode build server so Claude can compile and test your code",
    command: "npx -y @smithery/cli@latest install cameroncooke/xcodebuildmcp --client claude-code"
  },
  {
    step: 6,
    title: "Verify Setup",
    description: "Test that everything is working correctly",
    command: "claude 'What MCP tools do you have? Build this project.'"
  }
];

export const prerequisites = [
  { name: "Node.js 18+", description: "Required for Claude Code CLI. Install via brew install node" },
  { name: "Xcode 16+", description: "For iOS development, simulator, and command line tools" },
  { name: "Anthropic Account", description: "Free tier available, Pro recommended for heavy use" },
  { name: "macOS Sonoma+", description: "Required for latest SwiftUI features and Xcode" },
  { name: "Git", description: "For version control and GitHub MCP integration" },
  { name: "Terminal Basics", description: "Familiarity with cd, ls, and basic shell commands" }
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

export const customCommandExamples = [
  {
    name: "swiftui-view",
    filename: "swiftui-view.md",
    description: "Generate a complete SwiftUI view with ViewModel",
    content: `Create a SwiftUI view with:
- @Observable ViewModel with proper state management
- Preview provider with sample data
- Accessibility labels and traits
- Dark mode support
- Loading and error states

View name: $ARGUMENTS`
  },
  {
    name: "test-viewmodel",
    filename: "test-viewmodel.md",
    description: "Generate unit tests for a ViewModel",
    content: `Write comprehensive unit tests for the specified ViewModel:
- Test all public methods
- Test state changes
- Test error handling
- Use Swift Testing framework (@Test macro)
- Mock dependencies where needed

ViewModel to test: $ARGUMENTS`
  },
  {
    name: "swiftdata-model",
    filename: "swiftdata-model.md",
    description: "Create a SwiftData model with relationships",
    content: `Create a SwiftData @Model with:
- Appropriate property wrappers (@Attribute, @Relationship)
- Codable conformance if needed
- Custom initializer
- Computed properties for common queries
- Documentation comments

Model name and properties: $ARGUMENTS`
  },
  {
    name: "api-service",
    filename: "api-service.md",
    description: "Create a networking service",
    content: `Create an async/await API service with:
- Protocol for dependency injection
- Proper error handling with custom errors
- Request/Response models (Codable)
- URLSession configuration
- Retry logic for transient failures

API endpoint: $ARGUMENTS`
  },
  {
    name: "localize",
    filename: "localize.md",
    description: "Add localization to a view",
    content: `Localize the specified view:
- Extract all user-facing strings
- Add to String Catalog
- Use LocalizedStringKey where appropriate
- Handle pluralization
- Add accessibility labels

View to localize: $ARGUMENTS`
  }
];

export const troubleshootingItems = [
  {
    question: "Claude doesn't see my Xcode project",
    answer: "Make sure you're in the project root directory (where .xcodeproj is). Run 'ls' to verify, then restart Claude. If using workspaces, navigate to where .xcworkspace is located."
  },
  {
    question: "MCP server not connecting",
    answer: "Check your settings.json syntax (must be valid JSON). Ensure npx is in your PATH. Try running the npx command manually to see errors. Run 'claude mcp list' to verify installed servers."
  },
  {
    question: "Build errors not showing",
    answer: "Verify the Xcode MCP is loaded with 'What MCP tools are available?'. Make sure your scheme name matches exactly (case-sensitive). Try 'xcode_schemes' to list available schemes."
  },
  {
    question: "GitHub token not working",
    answer: "Ensure your token has the correct scopes (repo, workflow, read:org). Check if it's expired. Fine-grained tokens need explicit repository access. Regenerate if needed."
  },
  {
    question: "Skills not loading",
    answer: "Verify skills are in ~/.claude/skills/[skill-name]/SKILL.md (exact path structure matters). Check folder permissions (chmod 755). Restart Claude Code after adding new skills."
  },
  {
    question: "Claude forgetting context",
    answer: "Keep CLAUDE.md updated with current focus. For long sessions, periodically summarize key decisions. If context gets too long, start a new session with clear CLAUDE.md."
  },
  {
    question: "Xcode build times out",
    answer: "Clean your build folder in Xcode (Cmd+Shift+K). Delete DerivedData folder. Large projects may need longer timeouts. Consider building specific targets instead of whole workspace."
  },
  {
    question: "Simulator not launching",
    answer: "Ensure Xcode command line tools are installed: 'xcode-select --install'. Check that a simulator runtime is available in Xcode > Settings > Platforms."
  },
  {
    question: "SwiftData migration issues",
    answer: "SwiftData auto-migrates lightweight changes. For complex migrations, create a custom migration plan. Ask Claude to review your model changes and suggest migration strategy."
  },
  {
    question: "Claude creates code that doesn't match my style",
    answer: "Add coding conventions to CLAUDE.md: naming patterns, architectural preferences, formatting rules. Claude will follow your documented standards."
  },
  {
    question: "Preview provider not working",
    answer: "Ensure preview code is wrapped in #Preview macro (Swift 5.9+). Check that sample data is valid. Previews need a valid SwiftData ModelContainer if using @Query."
  },
  {
    question: "Claude suggests deprecated APIs",
    answer: "Specify your minimum iOS target in CLAUDE.md (e.g., 'Target: iOS 17+'). Claude will avoid deprecated APIs and use modern alternatives."
  }
];

export const hooksConfigExample = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "swiftlint lint --path"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Read|Grep",
        "hooks": [
          {
            "type": "command",
            "command": "node ./hooks/protect-secrets.js"
          }
        ]
      }
    ]
  }
}`;

export const hooksProtectSecretsExample = `// hooks/protect-secrets.js
async function main() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  const toolArgs = JSON.parse(Buffer.concat(chunks).toString());
  const filePath = toolArgs.tool_input?.file_path ||
                   toolArgs.tool_input?.path || "";

  // Block access to sensitive iOS config files
  const blocked = ['.xcconfig', 'Secrets.swift',
                   'GoogleService-Info.plist', '.env'];

  if (blocked.some(f => filePath.includes(f))) {
    console.error("Access blocked: This file contains secrets");
    process.exit(2);  // Exit code 2 blocks the operation
  }
}
main();`;

export const hooksSwiftLintExample = `// After Claude edits a Swift file, run SwiftLint
{
  "PostToolUse": [
    {
      "matcher": "Write|Edit",
      "hooks": [
        {
          "type": "command",
          "command": "if [[ \\"$CLAUDE_FILE_PATH\\" == *.swift ]]; then swiftlint lint --path \\"$CLAUDE_FILE_PATH\\"; fi"
        }
      ]
    }
  ]
}`;

export const hooksUseCases = [
  {
    title: "Auto-run SwiftLint",
    description: "Run SwiftLint after every Swift file edit to catch style issues immediately",
    type: "PostToolUse",
    icon: "bi-check2-square"
  },
  {
    title: "Protect Secrets",
    description: "Block Claude from reading .xcconfig files, API keys, or GoogleService-Info.plist",
    type: "PreToolUse",
    icon: "bi-shield-lock"
  },
  {
    title: "Auto-build Verification",
    description: "Run xcodebuild after file changes to catch compile errors immediately",
    type: "PostToolUse",
    icon: "bi-hammer"
  },
  {
    title: "Format Swift Code",
    description: "Run swift-format or SwiftFormat after edits to maintain code style",
    type: "PostToolUse",
    icon: "bi-braces"
  }
];

// App Store Submission Content
export const appStorePreparationSteps = [
  {
    step: 1,
    title: "Apple Developer Account",
    description: "Enroll in the Apple Developer Program ($99/year). Required for App Store distribution.",
    icon: "bi-person-badge"
  },
  {
    step: 2,
    title: "Bundle ID & App Record",
    description: "Register a unique Bundle ID in the Developer Portal and create an app record in App Store Connect.",
    icon: "bi-app-indicator"
  },
  {
    step: 3,
    title: "Signing & Capabilities",
    description: "Configure signing certificates and provisioning profiles. Enable required capabilities (Push, HealthKit, etc.).",
    icon: "bi-shield-check"
  },
  {
    step: 4,
    title: "App Icons & Launch Screen",
    description: "Add a 1024x1024 App Store icon and configure your launch screen storyboard or SwiftUI scene.",
    icon: "bi-image"
  },
  {
    step: 5,
    title: "Info.plist Configuration",
    description: "Add required keys: privacy descriptions (camera, photos, location), supported orientations, and device requirements.",
    icon: "bi-file-earmark-code"
  },
  {
    step: 6,
    title: "Version & Build Numbers",
    description: "Set your marketing version (1.0.0) and build number (1). Build number must increment with each upload.",
    icon: "bi-123"
  }
];

export const appStoreUploadSteps = [
  {
    step: 1,
    title: "Archive Your App",
    description: "In Xcode: Product → Archive. Select 'Any iOS Device' as destination first.",
    command: "Product → Archive (or Cmd+Shift+B for build, then archive)"
  },
  {
    step: 2,
    title: "Validate Archive",
    description: "In Organizer, select archive → Validate App. Fixes issues before upload.",
    command: "Window → Organizer → Select Archive → Validate App"
  },
  {
    step: 3,
    title: "Distribute to App Store",
    description: "Click 'Distribute App' → App Store Connect → Upload. Follow signing prompts.",
    command: "Distribute App → App Store Connect → Upload"
  },
  {
    step: 4,
    title: "Wait for Processing",
    description: "Apple processes your build (5-30 minutes). You'll receive an email when ready.",
    command: "Check App Store Connect → TestFlight → Builds"
  }
];

export const appStoreMetadata = [
  { field: "App Name", description: "30 characters max. Unique on the App Store.", required: true },
  { field: "Subtitle", description: "30 characters max. Appears below app name.", required: false },
  { field: "Description", description: "4000 characters max. First 3 lines most visible.", required: true },
  { field: "Keywords", description: "100 characters total, comma-separated.", required: true },
  { field: "Screenshots", description: "6.7\" and 5.5\" required. Up to 10 per size.", required: true },
  { field: "App Preview", description: "15-30 second video. Optional but recommended.", required: false },
  { field: "Promotional Text", description: "170 characters. Can update without new build.", required: false },
  { field: "Support URL", description: "Link to your support page or contact.", required: true },
  { field: "Privacy Policy URL", description: "Required for all apps.", required: true },
  { field: "Age Rating", description: "Complete questionnaire about content.", required: true }
];

export const appReviewGuidelines = [
  {
    category: "Safety",
    items: [
      "No objectionable content",
      "User-generated content needs moderation",
      "Physical harm prevention",
      "Accurate health/medical information"
    ]
  },
  {
    category: "Performance",
    items: [
      "App must be complete and functional",
      "Accurate metadata and screenshots",
      "No hidden features",
      "Hardware compatibility"
    ]
  },
  {
    category: "Business",
    items: [
      "Use Apple's in-app purchase for digital goods",
      "Accurate pricing and subscriptions",
      "No bait-and-switch tactics",
      "Clear terms of service"
    ]
  },
  {
    category: "Design",
    items: [
      "Follow Human Interface Guidelines",
      "No copycat apps",
      "Minimum functionality required",
      "Consistent with platform conventions"
    ]
  },
  {
    category: "Legal",
    items: [
      "Privacy policy required",
      "No illegal content",
      "Respect intellectual property",
      "Data handling transparency"
    ]
  }
];

export const commonRejectionReasons = [
  {
    reason: "Crashes or Bugs",
    solution: "Test thoroughly on real devices. Use TestFlight with external testers before submission."
  },
  {
    reason: "Broken Links",
    solution: "Verify all URLs work, including privacy policy and support links."
  },
  {
    reason: "Incomplete Information",
    solution: "Provide demo account credentials if login required. Explain non-obvious features."
  },
  {
    reason: "Misleading Metadata",
    solution: "Screenshots must show actual app. Description must match functionality."
  },
  {
    reason: "Privacy Issues",
    solution: "Add all required privacy descriptions to Info.plist. Complete App Privacy questionnaire."
  },
  {
    reason: "In-App Purchase Issues",
    solution: "Digital goods must use Apple IAP. Physical goods/services can use external payment."
  }
];

export const testFlightSteps = [
  {
    step: 1,
    title: "Internal Testing",
    description: "Add up to 100 team members. No review required. Instant access after upload."
  },
  {
    step: 2,
    title: "Beta App Review",
    description: "Required before external testing. Usually 24-48 hours."
  },
  {
    step: 3,
    title: "External Testing",
    description: "Invite up to 10,000 testers via email or public link."
  },
  {
    step: 4,
    title: "Collect Feedback",
    description: "Testers can submit screenshots and feedback directly from TestFlight app."
  }
];

export const resources = [
  {
    title: "Claude Code Docs",
    description: "Official documentation, tutorials, and API reference",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    icon: "bi-book"
  },
  {
    title: "MCP Specification",
    description: "Model Context Protocol details and server development",
    url: "https://modelcontextprotocol.io",
    icon: "bi-diagram-3"
  },
  {
    title: "Apple Developer",
    description: "SwiftUI, SwiftData, and iOS framework documentation",
    url: "https://developer.apple.com/documentation/swiftui",
    icon: "bi-apple"
  },
  {
    title: "Swift.org",
    description: "Swift language reference and evolution proposals",
    url: "https://swift.org/documentation",
    icon: "bi-code-slash"
  },
  {
    title: "Smithery MCP Registry",
    description: "Browse and install community MCP servers",
    url: "https://smithery.ai",
    icon: "bi-box-seam"
  },
  {
    title: "Xcode Build MCP",
    description: "GitHub repo for the Xcode MCP server",
    url: "https://github.com/cameroncooke/XcodeBuildMCP",
    icon: "bi-github"
  },
  {
    title: "Human Interface Guidelines",
    description: "Apple's design guidelines for iOS apps",
    url: "https://developer.apple.com/design/human-interface-guidelines",
    icon: "bi-phone"
  },
  {
    title: "App Store Review Guidelines",
    description: "Requirements for App Store submission",
    url: "https://developer.apple.com/app-store/review/guidelines",
    icon: "bi-shop"
  }
];
