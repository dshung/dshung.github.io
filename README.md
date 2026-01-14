# Dennis L. Shung MD PhD - Personal Website

Professional website for Dennis L. Shung MD PhD, Physician Scientist at Mayo Clinic Rochester.

🌐 **Live Site**: [https://dshung.github.io](https://dshung.github.io)

## Overview

A clean, professional single-page website showcasing research, experience, and contact information. Built with pure HTML, CSS, and minimal JavaScript for fast loading and optimal performance.

## Features

- ✨ Minimal, professional design
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (WCAG compliant)
- 🎨 Custom color palette (slate blue & muted orange accents)
- 📄 Direct CV download
- 🚀 Fast loading (no frameworks)

## Site Structure

```
Hero Section → About → CV Highlights → Contact
```

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **JavaScript**: Vanilla JS (smooth scroll, animations)
- **Fonts**: Inter (Google Fonts)

## Local Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (optional, for making changes)

### Running Locally

1. **Clone or download this repository**
2. **Open `index.html` in your browser**
   - Simply double-click the file, or
   - Right-click → Open with → Your browser

That's it! The site will run directly in your browser.

### Optional: Using a Local Server

For a more production-like environment:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (npx)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## GitHub Pages Deployment

### Step-by-Step Setup Instructions

#### Step 1: Create a GitHub Account (if needed)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the prompts to create your account
4. Verify your email address

#### Step 2: Create the Repository

1. **Log in to GitHub**
2. **Click the "+" icon** in the top-right corner
3. **Select "New repository"**
4. **Configure your repository:**
   - **Repository name**: `dshung.github.io` (IMPORTANT: must be exactly this)
   - **Description**: "Professional website for Dennis L. Shung MD PhD"
   - **Visibility**: Public (required for GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
5. **Click "Create repository"**

#### Step 3: Upload Files

You have two options:

**Option A: Upload via Web Interface (Easiest)**

1. On your new repository page, click **"uploading an existing file"** link
2. **Drag and drop** all files from this folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. **Create the `assets` folder:**
   - After uploading the main files, click "Add file" → "Create new file"
   - Type `assets/.gitkeep` in the filename field (this creates the folder)
   - Click "Commit new file"
4. **Upload your CV PDF:**
   - Click "Add file" → "Upload files"
   - Navigate into the `assets` folder first
   - Upload your PDF file (rename it to `CV_12_2025_DSHUNG.pdf`)
5. **Commit changes** with message: "Initial website deployment"

**Option B: Using Git Command Line**

```bash
# Navigate to this folder in terminal
cd /path/to/website

# Initialize git repository
git init

# Add remote repository
git remote add origin https://github.com/dshung/dshung.github.io.git

# Add all files
git add .

# Commit files
git commit -m "Initial website deployment"

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

#### Step 5: Verify Your Website

1. GitHub will show a message: "Your site is published at https://dshung.github.io"
2. Click the link or visit `https://dshung.github.io` in your browser
3. Your website should be live!

### Troubleshooting

**Issue: Website not loading after 5 minutes**
- Check that repository name is exactly `dshung.github.io`
- Ensure repository is Public
- Verify files are in the root directory (not in a subfolder)

**Issue: CV PDF not downloading**
- Make sure the PDF file is in the `assets` folder
- Verify filename matches: `CV_12_2025_DSHUNG.pdf`
- Check file path in `index.html` (line 107)

**Issue: Fonts not loading**
- Check internet connection (Inter font loads from Google Fonts)
- View browser console for errors (F12 → Console tab)

**Issue: Styling looks wrong**
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Verify `styles.css` uploaded correctly

## Making Updates

### Updating Content

1. Edit files locally in a text editor
2. Test changes by opening `index.html` in your browser
3. Upload changed files to GitHub:
   - Click the file in GitHub
   - Click the pencil icon (Edit)
   - Make your changes
   - Click "Commit changes"
4. Wait 1-2 minutes for GitHub Pages to rebuild

### Updating Your CV

1. Convert your updated CV to PDF
2. Rename to `CV_12_2025_DSHUNG.pdf` (or update the date)
3. Upload to the `assets` folder in GitHub
4. If you changed the filename, update line 107 in `index.html`

## File Reference

### Main Files

- **`index.html`** - Website structure and content
- **`styles.css`** - All styling (colors, layout, responsive design)
- **`script.js`** - Smooth scrolling and animations
- **`README.md`** - This file (documentation)

### Assets Folder

- **`assets/CV_12_2025_DSHUNG.pdf`** - Your CV PDF file

## Color Palette

- **Slate Blue**: `#64748b` (primary accent - headings, links)
- **Muted Orange**: `#ea8c55` (CTA - Download CV button)
- **Dark Charcoal**: `#1e293b` (main text)
- **Medium Gray**: `#64748b` (secondary text)
- **Light Gray**: `#f1f5f9` (section backgrounds)
- **Off-white**: `#f8fafc` (alternating sections)
- **White**: `#ffffff` (primary background)

## Typography

- **Font**: Inter (Google Fonts)
- **H1 (Name)**: 3rem / 48px
- **H2 (Sections)**: 2rem / 32px
- **H3 (Subsections)**: 1.5rem / 24px
- **Body**: 1.125rem / 18px
- **Line Height**: 1.6

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 markup
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios (WCAG AA compliant)
- Responsive text sizing
- Reduced motion support for accessibility preferences

## Performance

- No external dependencies (except Google Fonts)
- Minimal JavaScript (< 3KB)
- Optimized images (use web-optimized PDFs)
- Fast loading (< 1 second on broadband)

## License

© 2026 Dennis L. Shung. All rights reserved.

## Contact

- **Email**: shung.dennis@mayo.edu
- **LinkedIn**: [linkedin.com/in/dennis-shung-0310492b](https://www.linkedin.com/in/dennis-shung-0310492b)

---

**Need help?** Create an issue in this repository or reach out via email.
