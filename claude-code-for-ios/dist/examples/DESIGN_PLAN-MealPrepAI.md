# MealPrepAI Design Implementation Plan

Based on the design inspiration screenshot analysis.

---

## Design Analysis

### Screen 1 (Recipe Explorer - Left)
- Soft mint/light green gradient background
- Greeting header: circular avatar + "Hello" + username
- Large bold title "Explore New Recipes"
- Rounded search bar with icon
- Horizontal scrolling category pills with circular food images
- Large featured recipe card with:
  - Full-bleed food photo
  - Purple gradient overlay at bottom
  - Recipe name in white bold text
  - Time indicator with clock icon
  - Heart/favorite button
  - "See Recipe" pill button
- Bottom tab bar

### Screen 2 (Recipe Cards - Top Right)
- Soft green gradient background
- Stacked recipe cards with:
  - Large rounded food image
  - Recipe name below image
  - Time badge (clock + minutes)
  - Heart button
  - Purple "+" button to add
- Cards with depth/shadow

### Screen 3 (Meal Plan - Bottom Right)
- Clean white/light background
- "Meal Plan" title with fire emoji
- Yellow CTA banner: "Personalise Meal Plan" with button
- Section header "Lunch or Dinner" with "See all"
- Horizontal recipe cards

---

## 1. New Color Palette

### Primary Colors - Soft Mint Green
```swift
static let mintGreenLight = Color(red: 232/255, green: 245/255, blue: 233/255)  // #E8F5E9
static let mintGreenMedium = Color(red: 200/255, green: 230/255, blue: 201/255) // #C8E6C9
static let mintGreenDark = Color(red: 165/255, green: 214/255, blue: 167/255)   // #A5D6A7
```

### Accent 1 - Purple (buttons, overlays)
```swift
static let accentPurpleLight = Color(red: 179/255, green: 136/255, blue: 255/255) // #B388FF
static let accentPurpleDark = Color(red: 124/255, green: 77/255, blue: 255/255)   // #7C4DFF
static let accentPurpleDeep = Color(red: 103/255, green: 58/255, blue: 183/255)   // #673AB7
```

### Accent 2 - Yellow/Gold (CTAs)
```swift
static let accentYellowLight = Color(red: 255/255, green: 213/255, blue: 79/255)  // #FFD54F
static let accentYellowDark = Color(red: 255/255, green: 202/255, blue: 40/255)   // #FFCA28
```

---

## 2. New Gradients

```swift
// Main background gradient
static let mintBackgroundGradient = LinearGradient(
    colors: [Color.mintGreenLight, Color.mintGreenMedium.opacity(0.3), Color.white],
    startPoint: .top,
    endPoint: .bottom
)

// Featured card purple overlay
static let purpleCardOverlay = LinearGradient(
    colors: [Color.clear, Color.accentPurpleDeep.opacity(0.85)],
    startPoint: .center,
    endPoint: .bottom
)

// Yellow CTA button
static let yellowCTAGradient = LinearGradient(
    colors: [Color.accentYellowLight, Color.accentYellowDark],
    startPoint: .leading,
    endPoint: .trailing
)

// Purple button
static let purpleButtonGradient = LinearGradient(
    colors: [Color.accentPurpleLight, Color.accentPurpleDark],
    startPoint: .topLeading,
    endPoint: .bottomTrailing
)
```

---

## 3. Updated Design Tokens

```swift
struct Spacing {
    static let xs: CGFloat = 8
    static let sm: CGFloat = 12
    static let md: CGFloat = 20      // Increased from 16
    static let lg: CGFloat = 24      // Increased from 20
    static let xl: CGFloat = 32
    static let xxl: CGFloat = 40
}

struct Radius {
    static let sm: CGFloat = 12      // Increased from 8
    static let md: CGFloat = 16      // Increased from 12
    static let lg: CGFloat = 20
    static let xl: CGFloat = 24
    static let card: CGFloat = 28    // New - for main cards
    static let featured: CGFloat = 32 // New - for featured cards
}
```

---

## 4. New Components to Create

### 4.1 GreetingHeader
```
┌─────────────────────────────────────────────┐
│  [Avatar]  Hello                            │
│            Emily Ava                        │
└─────────────────────────────────────────────┘
```
- Circular avatar (50pt) with purple border
- "Hello" in secondary color
- Username in bold primary

### 4.2 CategoryPillScroller
```
┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
│ 🥗  │  │ 🍕  │  │ 🍔  │  │ 🥩  │
│Salad │  │Pizza │  │Burger│  │Steak │
└──────┘  └──────┘  └──────┘  └──────┘
```
- Horizontal ScrollView
- Circular food image (48pt)
- Category name below
- Selected state highlight

### 4.3 FeaturedRecipeCard
```
┌─────────────────────────────────────────────┐
│                              ♡              │
│                                             │
│      [Large Food Image - 200pt]             │
│                                             │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │
│  ▓  Aegean Breeze Salad                 ▓   │
│  ▓  ⏱ 20 minutes    [See Recipe]        ▓   │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │
└─────────────────────────────────────────────┘
```
- Full-bleed image
- Purple gradient overlay at bottom
- White text on gradient
- Heart button top-right
- "See Recipe" pill button

### 4.4 StackedRecipeCard
```
┌─────────────────────────┐
│                         │
│  [Food Image - 140pt]   │
│                      ⊕  │
│                         │
├─────────────────────────┤
│ Gnocchi Sorrentina      │
│ ⏱ 20 min         ♡     │
└─────────────────────────┘
```
- Large rounded image
- Purple "+" FAB button
- Name and time below
- Heart button

### 4.5 PersonalizationBanner
```
┌─────────────────────────────────────────────┐
│ 🔥                                          │
│ Personalise Meal Plan                       │
│ To personalize your menu...                 │
│                     [Fill in Data]          │
└─────────────────────────────────────────────┘
```
- Yellow/gold background
- Fire emoji
- Yellow CTA button

### 4.6 RoundedSearchBar
```
┌─────────────────────────────────────────────┐
│  🔍  Search recipes...                      │
└─────────────────────────────────────────────┘
```
- Full capsule shape
- Light gray background
- 44pt height

---

## 5. View Changes Required

### RecipesView (Recipe Explorer)
- [ ] Replace background with mint gradient
- [ ] Add GreetingHeader at top
- [ ] Add "Explore New Recipes" large title
- [ ] Replace filter chips with CategoryPillScroller
- [ ] Add FeaturedRecipeCard section
- [ ] Update recipe grid to StackedRecipeCard style
- [ ] Update search bar to RoundedSearchBar

### WeeklyPlanView (Meal Plan)
- [ ] Change background to light cream/white
- [ ] Update title to "Meal Plan 🔥"
- [ ] Add PersonalizationBanner at top
- [ ] Change meal sections to horizontal scrolling
- [ ] Update section headers with "See all" links

### TodayView
- [ ] Change background to mint gradient
- [ ] Update greeting to new avatar + text style
- [ ] Apply new card radii (28pt)
- [ ] Update buttons to purple gradient style

---

## 6. Implementation Phases

### Phase 1: Design System Update (Foundation)
**Files:** `DesignSystem.swift`
1. Add new color palette
2. Add new gradients
3. Update spacing tokens
4. Update radius tokens

### Phase 2: Create New Components
**Files:** New files in `/Views/Components/`
1. GreetingHeader.swift
2. RoundedSearchBar.swift
3. CategoryPillScroller.swift
4. FeaturedRecipeCard.swift
5. StackedRecipeCard.swift
6. PersonalizationBanner.swift

### Phase 3: Update RecipesView
**Files:** `RecipesView.swift`
- Complete layout restructure to match Screen 1

### Phase 4: Update TodayView
**Files:** `TodayView.swift`
- Background, cards, and button updates

### Phase 5: Update WeeklyPlanView
**Files:** `WeeklyPlanView.swift`
- Layout and banner additions

### Phase 6: Polish & Remaining Views
- GroceryListView, ProfileView updates
- Animation refinements
- Dark mode adjustments

---

## 7. Key Design Decisions

| Element | Current | New Design |
|---------|---------|------------|
| Primary Color | Green (#34C759) | Mint Green gradient |
| Accent | Orange/Blue | Purple + Yellow |
| Card Radius | 16pt | 24-28pt |
| Spacing | Compact | Generous (+20%) |
| Cards | Flat | Image-forward with overlays |
| Background | Subtle gradients | Bold mint gradients |

---

## 8. Asset Requirements

### Category Images Needed
- Salad (circular)
- Pizza (circular)
- Burger (circular)
- Steak (circular)
- Seafood (circular)
- Breakfast (circular)
- Healthy bowls (circular)

### Recipe Photos
- High-quality food photography
- 3:2 or 16:9 aspect ratios
- Consistent lighting

---

## Next Steps

1. **Start with Phase 1** - Update DesignSystem.swift with new colors and tokens
2. **Build components in Phase 2** - Create reusable UI components
3. **Refactor RecipesView** - This will have the biggest visual impact
4. **Iterate** - Test and refine each view

Ready to begin implementation when you are!
