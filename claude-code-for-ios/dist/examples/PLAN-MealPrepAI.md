# MealPrepAI - Implementation Plan

## Competitor Pain Points We're Solving

| Problem | Competitor | Our Solution |
|---------|-----------|--------------|
| Recipes too complicated | Mealime | "Simple Mode" toggle, complexity scoring |
| Can't modify meals without resetting grocery list | Mealime | Granular editing with "lock" feature |
| Can't swap individual ingredients | MealPrepPro | AI ingredient substitution with macro recalculation |
| Only uses ounces | MealPrepPro | Dual measurements (cups/tbsp + grams) |
| No search or favorites | MealPrepPro | Full search, favorites, recipe history |
| Recipes repeat constantly | Eat This Much | Variety engine tracking usage, enforcing diversity |
| Odd portions (3/16th tortilla) | Eat This Much | Practical measurement rounding |
| Can't import recipes | Eat This Much | URL recipe import with AI parsing |

---

## Core Features

1. **Onboarding** - Collect: dietary restrictions, allergies, meal count, calorie/macro goals, weight goals, cooking skill, time constraints, preferred cuisines
2. **AI Meal Plan Generation** - Claude Haiku generates personalized weekly plans
3. **Daily View** - Today's meals with progress tracking, mark meals eaten
4. **Plan Editing** - Swap meals/ingredients with macro-aware suggestions
5. **Smart Grocery List** - Auto-generated, grouped by aisle, practical quantities

---

## Data Models (SwiftData)

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

---

## App Navigation (5 Tabs)

```
Tab 1: Today       → Daily meals, progress, quick actions
Tab 2: Weekly Plan → 7-day view, day selector, generate new plan
Tab 3: Grocery     → Smart shopping list by category
Tab 4: Recipes     → Library, search, favorites, custom recipes
Tab 5: Profile     → Settings, goals, dietary preferences
```

---

## Files to Create

```
MealPrepAI/
├── App/
│   └── AppState.swift
├── Models/
│   ├── SwiftData/
│   │   ├── UserProfile.swift
│   │   ├── MealPlan.swift
│   │   ├── Day.swift
│   │   ├── Meal.swift
│   │   ├── Recipe.swift
│   │   ├── RecipeIngredient.swift
│   │   ├── Ingredient.swift
│   │   ├── GroceryList.swift
│   │   └── GroceryItem.swift
│   └── Enums/
│       └── (MealType, Allergy, DietaryRestriction, etc.)
├── Services/
│   ├── ClaudeAPI/
│   │   ├── ClaudeAPIService.swift
│   │   └── ClaudePromptBuilder.swift
│   ├── MealPlanService.swift
│   ├── GroceryListService.swift
│   └── NutritionCalculator.swift
├── ViewModels/
│   ├── OnboardingViewModel.swift
│   ├── TodayViewModel.swift
│   ├── WeeklyPlanViewModel.swift
│   ├── GroceryListViewModel.swift
│   └── ProfileViewModel.swift
└── Views/
    ├── Onboarding/ (8 screens)
    ├── Today/
    ├── WeeklyPlan/
    ├── Grocery/
    ├── Recipes/
    └── Profile/
```

---

## Implementation Phases

### Phase 1: Foundation (CURRENT - UI ONLY)
- SwiftData models (all 9 core models)
- Enum types
- Tab navigation structure
- All Views with placeholder UI

### Phase 2: Onboarding
- 8-screen onboarding flow
- Profile creation and persistence
- Validation logic

### Phase 3: Claude API Integration
- ClaudeAPIService with async/await
- Secure API key storage (Keychain)
- Prompt engineering for meal plans
- Response parsing and error handling

### Phase 4: Meal Plan Display
- WeeklyPlanView with day selector
- RecipeDetailView with ingredients/instructions
- TodayView with daily focus
- Mark meals as eaten

### Phase 5: Editing & Swapping
- MealSwapView for changing meals
- Ingredient substitution with macro recalc
- Variety engine for diverse suggestions

### Phase 6: Grocery List
- Smart aggregation and rounding
- Category grouping
- Lock feature to prevent reset
- Manual item addition

### Phase 7: Recipe Library
- Search and favorites
- Custom recipe creation
- Recipe import from URL

---

## Verification Plan

1. **Onboarding**: Complete flow, verify profile saves to SwiftData
2. **API**: Generate plan, verify JSON parsing works
3. **Meal Display**: View week, tap recipes, mark meals eaten
4. **Editing**: Swap a meal, verify grocery list updates correctly
5. **Grocery**: Check quantities are practical, items grouped properly
6. **End-to-end**: Full user journey from onboarding to shopping

---

## Key Technical Decisions

- **Architecture**: MVVM with @Observable pattern
- **Persistence**: SwiftData (local-first, offline support)
- **AI Model**: Claude Haiku (fast, cost-effective)
- **API Approach**: Backend proxy (users don't need their own API key)
- **Measurements**: Dual display (volume + weight)
- **Offline**: Generated plans cached locally, app works without internet

---

## Backend Service (Simple)

A lightweight backend to proxy Claude API requests:

```
Backend Options:
1. Cloudflare Workers (free tier, serverless)
2. Vercel Edge Functions (free tier)
3. AWS Lambda (pay per use)

Endpoints:
POST /api/generate-plan    → Proxies to Claude, returns meal plan
POST /api/swap-meal        → Generates alternative meals
POST /api/substitute       → Ingredient substitution suggestions

Security:
- App includes a bundled API key or uses app attestation
- Rate limiting per device
- No user accounts needed initially
```

The iOS app will call your backend, which holds the Claude API key securely.

---

## UI Color Scheme & Design

- Primary: Fresh green (#4CAF50)
- Secondary: Warm orange (#FF9800)
- Background: Light cream (#FFF8E1)
- Accent: Deep teal (#00796B)
- Typography: SF Pro with clear hierarchy
