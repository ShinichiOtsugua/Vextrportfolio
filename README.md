# VEXTR Portfolio Website

Professional portfolio website showcasing web development projects.

## 🎨 Features

- **Professional Design**: Muted navy blue color scheme
- **Responsive**: Works on all devices
- **Smooth Animations**: Framer Motion animations
- **Project Showcases**: Detailed project pages with live demos
- **Easy to Customize**: CSS variables for quick theme changes
- **SEO Friendly**: Optimized for search engines

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit: http://localhost:5174

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📂 Project Structure

```
vextr-portfolio-website/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── data/            # Data files
│   │   └── projects.js  # Add more projects here
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & CSS variables
├── public/              # Static assets
├── package.json
└── vite.config.js
```

## 🎨 Customizing Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #2C3E50;      /* Dark Navy */
  --color-secondary: #34495E;    /* Lighter Navy */
  --color-accent: #5DADE2;       /* Soft Blue */
  /* ... more variables */
}
```

## ➕ Adding New Projects

Edit `src/data/projects.js`:

```javascript
export const projects = [
  // ... existing projects
  {
    id: 3,
    title: "Your New Project",
    slug: "your-new-project",
    description: "Project description",
    shortDescription: "Short description",
    technologies: ["React", "Node.js"],
    features: ["Feature 1", "Feature 2"],
    demoUrl: "https://your-demo-url.com",
    videoPlaceholder: true,
    category: "Web Application",
    year: "2024"
  }
];
```

## 📸 Adding Video/GIF Demos

Replace the video placeholders:

1. Add your video/GIF to `public/` folder
2. Update project in `src/data/projects.js`:
```javascript
{
  videoUrl: "/your-demo.gif",  // or .mp4
  videoPlaceholder: false
}
```

3. Update `Projects.jsx` and `ProjectDetail.jsx` to use actual media

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
vercel
```

### Deploy to Netlify
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📧 Contact Info

Update contact information in:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## 🔗 Live Demos

Your projects are already deployed:
- **University Demo**: https://university-demo-evy0f2lda-augustos-projects-5f2d55de.vercel.app
- **Barangay Demo**: https://barangay-demo-nfd4oh5qq-augustos-projects-5f2d55de.vercel.app

## 📝 License

© 2024 VEXTR. All rights reserved.
