# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow Requirements

1. **Always use the `ios-developer` skill** for every task in this codebase
2. **Build after every task** using the MCP build tool to verify the code compiles
3. **Fix any build errors** before considering a task complete

## Build Commands

This is an iOS SwiftUI app using Xcode. Build and run commands:

```bash
# Build the project
xcodebuild -project MealPrepAI.xcodeproj -scheme MealPrepAI -configuration Debug build

# Run tests
xcodebuild -project MealPrepAI.xcodeproj -scheme MealPrepAI -destination 'platform=iOS Simulator,name=iPhone 16' test

# Run a specific test
xcodebuild -project MealPrepAI.xcodeproj -scheme MealPrepAI -destination 'platform=iOS Simulator,name=iPhone 16' test -only-testing:MealPrepAITests/MealPrepAITests/example
```

Tests use Swift Testing framework (`import Testing`, `@Test` macros, `#expect()` assertions).

## Architecture

**MVVM with @Observable pattern** - The app follows MVVM architecture with SwiftUI's modern `@Observable` pattern (planned for ViewModels).

### Data Layer (SwiftData)

Nine interconnected `@Model` classes with cascade delete rules:

```
UserProfile (goals, restrictions, allergies, preferences)
    └── MealPlan (weekly)
            └── Day (7 per plan)
                    └── Meal (breakfast, lunch, dinner, snacks)
                            └── Recipe
                                    └── RecipeIngredient
                                            └── Ingredient

GroceryList ← linked to MealPlan
    └── GroceryItem ← linked to Ingredient
```

The `ModelContainer` is configured in `MealPrepAIApp.swift` with all 9 models and injected via `.modelContainer()` modifier.

### Navigation Structure

5-tab `TabView` in `ContentView.swift`:
- **Today** - Daily meals with progress tracking
- **Plan** - Weekly 7-day view with day selector
- **Grocery** - Smart shopping list by category
- **Recipes** - Library with search and favorites
- **Profile** - Settings and dietary preferences

### Design System

`App/DesignSystem.swift` contains the complete design system:
- **Color extensions** - `Color.brandGreen`, `Color.proteinColor`, meal type gradients
- **LinearGradient presets** - `.brandGradient`, `.sunriseGradient` (breakfast), `.freshGradient` (lunch), `.eveningGradient` (dinner), `.skyGradient` (snacks)
- **Design tokens** - `Design.Spacing`, `Design.Radius`, `Design.Shadow`, `Design.Animation`
- **View modifiers** - `.glassCard()`, `.premiumCard()`, `.gradientCard()`, `.floatingButton()`, `.shimmer()`

Reusable UI components in `Views/Components/UIComponents.swift`: `HeroHeaderCard`, `PremiumMealCard`, `NutritionRingCard`, `MacroProgressBar`, `ProgressRing`, `DayPillSelector`, `FloatingPrimaryButton`, `EmptyStateView`, `PremiumGroceryItem`, `PremiumRecipeCard`.

### Enums

`Models/Enums/AppEnums.swift` defines all app enums: `MealType`, `DietaryRestriction`, `Allergy`, `CookingSkill`, `CookingTime`, `CuisineType`, `WeightGoal`, `GroceryCategory`, `MeasurementUnit`, `RecipeComplexity`, `ActivityLevel`, `Gender`. All are `Codable`, `CaseIterable`, and `Identifiable`.

## Implementation Status

Currently in **Phase 1 (Foundation)** - UI scaffolding complete with placeholder data. See `PLAN.md` for roadmap:
- Phase 2: Onboarding flow
- Phase 3: Claude API integration (via backend proxy)
- Phase 4: Meal plan display
- Phase 5: Editing & swapping
- Phase 6: Grocery list logic
- Phase 7: Recipe library features

## Key Design Decisions

- **Local-first with SwiftData** - Offline support, plans cached locally
- **Dual measurements** - Volume (cups/tbsp) + weight (grams) for ingredients
- **Backend proxy for AI** - Users don't need their own API key; app calls a backend that holds the Claude API key
- **Variety engine** - Recipes track `timesUsed` and `lastUsedDate` to enforce diversity
