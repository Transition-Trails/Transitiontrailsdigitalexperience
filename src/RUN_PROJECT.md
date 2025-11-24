# 🚀 Run the Transition Trails Project

**Quick instructions to get the project running in under 5 minutes.**

## Prerequisites Check

Make sure you have these installed:

```bash
node --version   # Should show v18.x or higher
npm --version    # Should show 9.x or higher
```

Don't have Node.js? Download from: https://nodejs.org

## Step-by-Step Instructions

### 1. Install Dependencies (First Time Only)

Open your terminal in the project directory and run:

```bash
npm install
```

Wait for all packages to install (~2-3 minutes).

### 2. Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.4.1  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 3. Open in Browser

Open your web browser and go to:
```
http://localhost:5173
```

### 4. Explore the Application

Try visiting these pages:

- **Home**: `http://localhost:5173/`
- **Visitor Trail**: `http://localhost:5173/visitors-trail`
- **Guided Trail**: `http://localhost:5173/guided-trail`
- **Trail of Mastery**: `http://localhost:5173/trail-of-mastery`
- **Explorer's Journey**: `http://localhost:5173/explorers-journey`
- **About**: `http://localhost:5173/about`
- **Contact Us**: `http://localhost:5173/contact-us`
- **Sign In**: `http://localhost:5173/sign-in`
- **Dashboard**: `http://localhost:5173/dashboard`
- **Partner Portal**: `http://localhost:5173/partner-portal`
- **Academy Experience**: `http://localhost:5173/academy-experience`

### 5. Test Mobile Responsiveness

Resize your browser window or use Chrome DevTools:
1. Press `F12` to open DevTools
2. Click the device icon (Toggle Device Toolbar)
3. Select different devices (iPhone, iPad, etc.)

## Troubleshooting

### "npm: command not found"
➜ Install Node.js from https://nodejs.org

### Port 5173 is already in use
➜ Run on a different port:
```bash
npm run dev -- --port 3000
```

### "Module not found" errors
➜ Delete and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing up
➜ The dev server has hot reload. Just save the file and it should update automatically.
➜ If not, stop the server (Ctrl+C) and run `npm run dev` again.

### Build errors
➜ Check TypeScript errors:
```bash
npx tsc --noEmit
```

## Additional Commands

### Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Run Linter
```bash
npm run lint
```

### Type Check
```bash
npx tsc --noEmit
```

## Project Structure

```
transition-trails-digital-experience/
├── src/                    # Source code (FLAT structure)
│   ├── components/         # Reusable components
│   ├── pages/              # Page components
│   ├── styles/             # CSS files
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main app
│   └── index.tsx           # Entry point
├── docs/                   # Documentation
├── index.html              # HTML template
└── package.json            # Dependencies
```

## What to Look For

### ✅ Four Learning Trails
Each trail has unique functionality:
- **Visitor**: Public access, no login
- **Guided**: Progress tracking, phases
- **Mastery**: Specialized tracks
- **Explorer**: Resource library with search

### ✅ Integration Placeholders
Look for placeholder boxes showing where:
- Jotform forms will be embedded
- Substack newsletter will go
- Salesforce login will integrate
- CMS content will load

### ✅ Responsive Design
- Mobile navigation menu
- Flexible layouts
- Touch-friendly buttons
- Readable on all screen sizes

### ✅ SLDS-Inspired Design
- Salesforce Lightning colors
- Consistent spacing
- Clean typography
- Professional appearance

## Stopping the Server

Press `Ctrl+C` in the terminal where the dev server is running.

## Need Help?

1. **Check the documentation**: Look in `/docs` folder
2. **Read the README**: `/README.md`
3. **Quick Start Guide**: `/docs/QUICK_START.md`
4. **Contact**: dev@transitiontrails.org

## For Developers

Want to make changes? Key files:

- **Add a new page**: Create in `/src/pages/` and add route to `/src/App.tsx`
- **Create a component**: Add to `/src/components/`
- **Modify styles**: Edit `/src/styles/tokens.css` or `/src/styles/global.css`
- **Change colors**: Update design tokens in `/src/styles/tokens.css`

## Next Steps

1. ✅ Run the project
2. ✅ Explore all pages
3. ✅ Test on mobile
4. ✅ Review the code
5. ✅ Read the documentation
6. ✅ Start customizing!

---

**That's it!** The project should now be running. Navigate around, test the features, and explore the code.

🎉 **Happy exploring!**
