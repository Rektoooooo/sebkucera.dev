# App Store Style Projects Integration Guide

I've created a new App Store-style projects section for your site. Here's how to integrate it:

## Files Created

1. **projects-appstore.html** - Standalone preview of the new design
2. **projects-appstore.css** - CSS styles you need to add
3. **This guide** - Integration instructions

## Preview

Open `projects-appstore.html` in your browser to see the new design!

## Integration Steps

Since your site is a compiled React app, here's the easiest way to integrate:

### Option 1: Quick CSS Addition (Recommended)

1. Add the CSS from `projects-appstore.css` to your `dist/output.css` file
2. The HTML structure in the compiled `assets/index-BWqsQ4x5.js` needs to be updated

### Option 2: Direct HTML Replacement

Replace the projects section in your compiled JavaScript with this structure:

```html
<div class="projects-grid">
    <!-- Fitness App -->
    <a href="https://sebkucera.dev/Fitness" target="_blank" class="project-card">
        <img src="/images/App icons/LogoGymlyBlack copy.jpg" alt="Fitness App" class="app-icon">
        <div class="project-info">
            <div class="project-category">Health & Fitness</div>
            <h3 class="project-title">Fitness App</h3>
            <p class="project-description">Track strength progress and optimize your workouts.</p>
            <span class="get-button">VIEW</span>
        </div>
    </a>

    <!-- BattleShips -->
    <a href="https://github.com/Rektoooooo/SwiftUIBattleShips/tree/main/Battleship-SwiftUI" target="_blank" class="project-card">
        <img src="/images/App icons/Battle ships logo.png" alt="BattleShips" class="app-icon">
        <div class="project-info">
            <div class="project-category">Games</div>
            <h3 class="project-title">BattleShips</h3>
            <p class="project-description">Classic strategy game with smart AI opponent.</p>
            <span class="get-button">VIEW</span>
        </div>
    </a>

    <!-- Smart ID -->
    <a href="https://apps.apple.com/us/app/fl-smart-id-thales/id1560687532" target="_blank" class="project-card">
        <img src="/images/App icons/Smart id logo.png" alt="Smart ID" class="app-icon">
        <div class="project-info">
            <div class="project-category">Utilities</div>
            <h3 class="project-title">Smart ID Sample</h3>
            <p class="project-description">Sample app showcasing Smart ID SDK integration.</p>
            <span class="get-button">VIEW</span>
        </div>
    </a>

    <!-- Pushly -->
    <a href="https://github.com/Rektoooooo/Pushly" target="_blank" class="project-card">
        <img src="/images/App icons/Puhsly logo.png" alt="Pushly" class="app-icon">
        <div class="project-info">
            <div class="project-category">Health & Fitness</div>
            <h3 class="project-title">Pushly</h3>
            <p class="project-description">Friendly nudges to help you stay active.</p>
            <span class="get-button">VIEW</span>
        </div>
    </a>

    <!-- Rick & Morty -->
    <a href="https://github.com/Rektoooooo/Rick-Morty" target="_blank" class="project-card">
        <img src="/images/App icons/Rick and morty.jpg" alt="Rick & Morty" class="app-icon">
        <div class="project-info">
            <div class="project-category">Entertainment</div>
            <h3 class="project-title">Rick & Morty API</h3>
            <p class="project-description">SwiftUI app demonstrating modern API integration.</p>
            <span class="get-button">VIEW</span>
        </div>
    </a>
</div>
```

## Key Features

- **App Icons**: 80x80px with 18px border radius (iPhone style)
- **Card Design**: Glass morphism effect with hover animations
- **Categories**: Each project has a category label (Health & Fitness, Games, etc.)
- **Responsive**: Works on mobile and desktop
- **Hover Effects**: Smooth lift and shadow on hover
- **Purple Accent**: Matches your site's purple theme

## App Icon Paths

Make sure these paths are correct:
- `/images/App icons/LogoGymlyBlack copy.jpg`
- `/images/App icons/Battle ships logo.png`
- `/images/App icons/Smart id logo.png`
- `/images/App icons/Puhsly logo.png`
- `/images/App icons/Rick and morty.jpg`

Would you like me to help you integrate this into the compiled assets?
