# Personal Portfolio Website - Vivek Phuloria

A modern, sleek personal portfolio website built with React, TypeScript, and Bootstrap. Features a fully configurable JSON-based content system for easy updates without code changes.

## Features

- 🎨 Modern, gradient-based design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast loading with Vite
- 🔧 Configurable content via JSON file
- 🎭 Smooth scroll animations with AOS
- 🎯 TypeScript for type safety
- 💅 Bootstrap 5 + custom styling

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Configuration

### Update Website Content

All content is managed through `public/content.json`. Simply edit this file to update:

- Personal information (name, email, phone, LinkedIn)
- Professional summary
- Work experience
- Education
- Certifications
- Skills
- Contact information

**No code changes required!**

### Example: Add New Work Experience

Open `public/content.json` and add to the `experience` array:

```json
{
  "title": "Your Job Title",
  "company": "Company Name",
  "period": "Jan 2024 – Present",
  "duration": "6 months",
  "description": "Brief description of your role",
  "highlights": [
    "Key achievement 1",
    "Key achievement 2"
  ],
  "technologies": ["Tech1", "Tech2", "Tech3"]
}
```

### Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
}
```

## Project Structure

```
├── public/
│   └── content.json          # Configurable content
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Bootstrap 5** - CSS framework
- **React-Bootstrap** - Bootstrap components for React
- **AOS** - Scroll animations
- **Bootstrap Icons** - Icon library

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The built files in the `dist` folder can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist` folder or connect GitHub repo
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `dist` folder to S3 bucket

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Vivek Phuloria**
- LinkedIn: [linkedin.com/in/vivekphuloria](https://www.linkedin.com/in/vivekphuloria/)
- Email: vivekphuloria@gmail.com
