# How to Edit Your Website

## Quick Start

Your website source code is in the `react-src/` directory.

### To Make Changes:

1. **Go to the source directory:**
   ```bash
   cd react-src
   ```

2. **Install dependencies (first time only):**
   ```bash
   npm install
   ```

3. **Start development server (to preview changes):**
   ```bash
   npm run dev
   ```
   - Opens at http://localhost:5173
   - Changes reload automatically

4. **Edit the site:**
   - Open `src/App.jsx` in your code editor
   - Make your changes
   - Save and see them instantly in the browser

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Copy to root:**
   ```bash
   cd ..
   cp dist/index.html .
   cp dist/assets/* assets/
   ```

7. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

## What to Edit

### Projects Section (App Store Style)
- **File:** `react-src/src/App.jsx`
- **Line:** Around 150
- **How:** Copy/paste project blocks, change text and image paths

### About/Skills/Contact
- **File:** `react-src/src/App.jsx`
- **Sections:** Clearly marked with comments

### Colors
- **File:** `react-src/src/App.css` (for project cards)
- **File:** `react-src/src/components/FluidBackground.jsx` (for background)

## Full Instructions

See `react-src/README.md` for detailed instructions.

## Need Help?

1. Read `react-src/README.md`
2. Check browser console (F12) for errors
3. Make sure you ran `npm install` first
