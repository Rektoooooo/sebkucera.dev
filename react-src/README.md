# sebkucera.dev - Portfolio Website

This is the source code for your portfolio website built with React, Vite, and Tailwind CSS.

## 📁 Project Structure

```
react-src/
├── src/
│   ├── components/
│   │   └── FluidBackground.jsx   # Animated background
│   ├── App.jsx                   # Main app component (EDIT THIS!)
│   ├── App.css                   # App Store styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🚀 Quick Start

### First Time Setup

1. **Install dependencies:**
   ```bash
   cd react-src
   npm install
   ```

### Development (Preview Changes)

2. **Start development server:**
   ```bash
   npm run dev
   ```
   - Open http://localhost:5173 in your browser
   - Changes auto-reload as you edit files

### Build for Production

3. **Build the site:**
   ```bash
   npm run build
   ```
   - This creates optimized files in `../dist/` and `../assets/`
   - These are the files GitHub Pages serves

4. **Copy to root for GitHub Pages:**
   ```bash
   cd ..
   cp dist/index.html .
   ```

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

## ✏️ How to Edit Your Site

### Editing Content

**Everything you want to edit is in `src/App.jsx`!**

#### Change Your Name or Title:
```jsx
<h1 className="text-4xl/tight md:text-5xl/tight font-bold tracking-tight">
  Sebastian Kučera  {/* ← Change here */}
</h1>
<p className="mt-3 text-lg">
  iOS Developer • Swift / SwiftUI • Student in Prague  {/* ← Change here */}
</p>
```

#### Add/Edit/Remove Projects:

Find the projects section around line 150. Each project looks like this:

```jsx
<a href="YOUR_LINK" target="_blank" rel="noopener noreferrer" className="project-card">
  <img src="/images/App icons/YOUR_ICON.png" alt="Project Name" className="app-icon" />
  <div className="project-info">
    <div className="project-category">Category Name</div>
    <h3 className="project-title">Project Title</h3>
    <p className="project-description">Your description here.</p>
    <span className="get-button">VIEW</span>
  </div>
</a>
```

**To add a new project:** Copy one of these blocks and change:
- `href` - the link
- `src` - path to your app icon (put icons in `/images/App icons/`)
- `alt` - accessibility text
- `project-category` - like "Games", "Health & Fitness", etc.
- `project-title` - the name
- `project-description` - short description

**To remove a project:** Delete the entire `<a>...</a>` block

#### Edit About Section:
Around line 107, change the paragraphs:
```jsx
<p className="mt-4 leading-relaxed">
  Your text here...  {/* ← Change here */}
</p>
```

#### Edit Skills:
Around line 122, each skill is:
```jsx
<article className="p-5 hover:shadow-sm transition">
  <h3 className="font-bold">Skill Name</h3>
  <p className="mt-2 text-sm">Description...</p>
</article>
```

#### Edit Contact Links:
Around line 215, change the links and text

### Changing Colors

**App Store button color:** In `src/App.css`, find `.get-button`:
```css
background: rgba(82, 39, 255, 0.9); /* ← Change this */
```

**Fluid background colors:** In `src/components/FluidBackground.jsx`, find:
```jsx
vec3 color1 = vec3(0.322, 0.153, 1.0); // #5227FF
vec3 color2 = vec3(1.0, 0.624, 0.988); // #FF9FFC
```

## 🎨 App Icons

Put your app icons in `/images/App icons/` (in the root directory, not react-src).

**Requirements:**
- Size: Any size works, but 512x512px or 1024x1024px recommended
- Format: PNG or JPG
- Shape: Square (will be rounded automatically)

## 🐛 Common Issues

**"npm: command not found"**
- Install Node.js from https://nodejs.org/

**Changes don't appear after `npm run build`**
- Make sure you ran `cp dist/index.html .` to copy to root
- Commit and push changes to GitHub
- Wait 1-2 minutes for GitHub Pages to rebuild

**Site is blank/broken**
- Check browser console (F12) for errors
- Make sure all image paths are correct
- Verify you ran `npm install` first

**Fluid background doesn't show**
- This uses Three.js which requires WebGL
- Check browser console for errors

## 📝 Workflow Summary

Every time you want to update your site:

1. `cd react-src`
2. `npm run dev` (test your changes)
3. Make edits in `src/App.jsx`
4. `npm run build` (create production files)
5. `cd ..`
6. `cp dist/index.html .`
7. `git add .`
8. `git commit -m "Update site"`
9. `git push`

## 🎓 Learning Resources

- **React:** https://react.dev/learn
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vite:** https://vitejs.dev/guide/

## 🆘 Need Help?

If something breaks or you need help:
1. Check the browser console (F12) for errors
2. Read the error message carefully
3. Google the error message
4. Check this README again

---

**Pro tip:** Always test with `npm run dev` before building for production!
