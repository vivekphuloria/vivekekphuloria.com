# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Vivek Phuloria built with React, TypeScript, Vite, and Bootstrap. The website showcases professional experience, skills, education, and contact information with a modern, sleek design.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + React-Bootstrap + Custom CSS
- **Icons**: Bootstrap Icons
- **Animations**: AOS (Animate On Scroll)

## Development Commands

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The development server runs on `http://localhost:5173` with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
Builds the app to the `dist` folder. Runs TypeScript compiler first, then Vite build.

### Preview Production Build
```bash
npm run preview
```

### Run Linter
```bash
npm run lint
```
Runs ESLint on all `.ts` and `.tsx` files.

## Architecture

### Content Configuration

**All website content is configurable via `public/content.json`**. This is the single source of truth for:
- Personal information (name, title, email, phone, LinkedIn, location)
- Professional summary
- Work experience (with highlights and technologies)
- Education
- Certifications
- Skills (organized by category)
- Internships

To update website content, **edit `public/content.json`** - no code changes required.

### Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Sticky navigation bar
│   ├── Hero.tsx        # Hero section with intro and CTA
│   ├── About.tsx       # About section with summary
│   ├── Experience.tsx  # Work experience timeline
│   ├── Education.tsx   # Education and certifications
│   ├── Skills.tsx      # Skills categorized by domain
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer with social links
├── App.tsx             # Main app component that loads content.json
├── main.tsx            # Entry point
└── index.css           # Global styles and CSS variables

public/
└── content.json        # Configurable content (EDIT THIS TO UPDATE CONTENT)
```

### Component Architecture

1. **App.tsx**:
   - Fetches `content.json` on mount
   - Initializes AOS animations
   - Passes content data to child components via props
   - Shows loading spinner while fetching content

2. **Individual Components**:
   - Each section is a separate component with its own CSS file
   - Components receive data via props (typed interfaces)
   - Use Bootstrap components (Container, Row, Col, Card, etc.)
   - AOS data attributes for scroll animations

### Styling Approach

- **Bootstrap 5** for layout and responsive grid
- **Custom CSS** for gradients, animations, and brand colors
- **CSS Variables** defined in `index.css`:
  - `--primary-color`: #2c3e50
  - `--secondary-color`: #3498db
  - `--accent-color`: #e74c3c
  - `--light-bg`: #f8f9fa
- **Component-specific CSS** for each component (e.g., `Hero.css`, `About.css`)

### Key Design Patterns

1. **Gradient Backgrounds**: Hero and Contact sections use purple gradient (`#667eea` to `#764ba2`)
2. **Card Hover Effects**: Cards lift up (`translateY(-5px)`) and increase shadow on hover
3. **Icon Styling**: Circular gradient backgrounds for section icons
4. **Smooth Scrolling**: Enabled via `html { scroll-behavior: smooth; }`
5. **AOS Animations**: Fade-up animations with staggered delays

## Adding New Content

### Add a New Work Experience Entry

Edit `public/content.json`, add to the `experience` array:
```json
{
  "title": "Job Title",
  "company": "Company Name",
  "period": "Jan 2024 – Present",
  "duration": "X months",
  "description": "Brief role description",
  "highlights": [
    "Key achievement 1",
    "Key achievement 2"
  ],
  "technologies": ["Tech1", "Tech2"]
}
```

### Add a New Skill Category

Edit `public/content.json`, add to the `skills` object:
```json
"New Category": [
  "Skill 1",
  "Skill 2",
  "Skill 3"
]
```

Note: Update `skillIcons` mapping in `src/components/Skills.tsx` if you want a custom icon for the category.

### Add a New Certification

Edit `public/content.json`, add to the `certifications` array:
```json
{
  "name": "Certification Name",
  "issuer": "Issuing Organization",
  "date": "Month Year",
  "score": "Optional score",
  "description": "Brief description"
}
```

## Modifying Styles

### Change Brand Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
}
```

### Change Gradient Colors

Hero and Contact sections use the same gradient. Update in:
- `src/components/Hero.css`
- `src/components/Contact.css`

Look for: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Adjust Animations

AOS animations are configured in `App.tsx`:
```typescript
AOS.init({
  duration: 1000,  // Animation duration
  once: true,      // Animate only once
  offset: 100,     // Trigger offset from viewport
})
```

## TypeScript Interfaces

All data interfaces are defined in `App.tsx`. Key types:
- `ContentData`: Root content structure
- Component-specific prop interfaces in each component file

## Deployment

The website is a static SPA. After building (`npm run build`), deploy the `dist` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Configure the hosting service to serve `index.html` for all routes (SPA fallback).

## Browser Support

Modern browsers with ES2020 support. Uses:
- ES Modules
- CSS Grid & Flexbox
- CSS Custom Properties
- Fetch API
