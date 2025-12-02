# 📝 How to Edit Text in Your Portfolio

This guide shows you exactly where to edit every piece of text in your portfolio.

---

## 🎯 Quick Reference - What File to Edit

| Section | File to Edit |
|---------|--------------|
| Hero (Main headline) | `src/components/Hero.jsx` |
| About section | `src/components/About.jsx` |
| Services | `src/components/Services.jsx` |
| Projects | `src/data/projects.js` |
| Contact info | `src/components/Contact.jsx` |
| Footer | `src/components/Footer.jsx` |
| Navbar | `src/components/Navbar.jsx` |

---

## 📂 Step-by-Step Editing Guide

### **1. HERO SECTION** (Main page heading)

**File:** `src/components/Hero.jsx`

**What you see:**
```
Hi, We're VEXTR
Building Websites Students & Companies Can Actually Understand
```

**How to edit:**
1. Open `src/components/Hero.jsx` in VS Code
2. Find line 40-45:
```jsx
<h1>
  Hi, We're <span className="highlight">VEXTR</span>
</h1>
```
3. Change "VEXTR" to your name or team name
4. Find line 54-58:
```jsx
<p className="hero-tagline">
  Building Websites Students & Companies<br />
  Can Actually Understand
</p>
```
5. Change this to your own tagline

**Example:**
```jsx
<h1>
  Hi, We're <span className="highlight">YOUR NAME</span>
</h1>

<p className="hero-tagline">
  Your Custom Tagline Here<br />
  Make It Catchy!
</p>
```

---

### **2. ABOUT SECTION** (Description of your team)

**File:** `src/components/About.jsx`

**What you see:**
```
We are a duo team passionate about making web development accessible...
```

**How to edit:**
1. Open `src/components/About.jsx`
2. Find line 44-48:
```jsx
<p className="about-intro text-center">
  We are a duo team passionate about making web development accessible. 
  We help students and companies create websites that are not just functional, 
  but easy to understand and maintain.
</p>
```
3. Change this text to your own description

**Example:**
```jsx
<p className="about-intro text-center">
  Your custom about text here. Tell visitors who you are
  and what makes your services special.
</p>
```

**Change Experience Years:**
Find line 70:
```jsx
<div className="stat-number">2</div>
```
Change "2" to your years of experience

---

### **3. SERVICES SECTION** (What you offer)

**File:** `src/components/Services.jsx`

**What you see:**
- Custom Website Development
- Web Applications
- CMS Systems

**How to edit:**
1. Open `src/components/Services.jsx`
2. Find line 12-30 (the services array):
```jsx
const services = [
  {
    id: 1,
    title: "Custom Website Development",
    description: "Tailored websites built specifically for your needs...",
    icon: <FaCode />
  },
  // ... more services
];
```
3. Change `title` and `description` for each service

**Change Timeline:**
Find line 32-37:
```jsx
const timeline = [
  { phase: "Planning", duration: "1-2 weeks" },
  { phase: "Development", duration: "4-8 weeks" },
  { phase: "Testing", duration: "1-2 weeks" },
  { phase: "Launch & Support", duration: "Ongoing" }
];
```
Change the phase names or durations

---

### **4. PROJECTS** (Your portfolio items)

**File:** `src/data/projects.js` ⭐ **MOST IMPORTANT**

**How to edit:**
1. Open `src/data/projects.js`
2. You'll see your two projects:

```javascript
export const projects = [
  {
    id: 1,
    title: "University Website",  // ← Change this
    slug: "university-website",
    description: "A comprehensive educational platform...",  // ← Change this
    shortDescription: "Educational platform...",  // ← Change this
    technologies: ["React", "Node.js", "Express", "MySQL", "Vite"],  // ← Change this
    features: [  // ← Change these
      "Student Portal with Dashboard",
      "News & Events Management",
      // ... more features
    ],
    demoUrl: "https://your-demo-url.com",  // ← Change this
    videoPlaceholder: true,
    category: "Web Application",
    year: "2024"
  },
  // ... second project
];
```

**To add a new project:**
Copy an existing project and change all the details:
```javascript
{
  id: 3,  // ← Increment the ID
  title: "Your New Project Name",
  slug: "your-new-project",  // ← URL-friendly name
  description: "Full description here",
  shortDescription: "Short version",
  technologies: ["Tech1", "Tech2"],
  features: ["Feature 1", "Feature 2"],
  demoUrl: "https://demo-url.com",
  videoPlaceholder: true,
  category: "Web Application",
  year: "2024"
}
```

---

### **5. CONTACT SECTION** (Email & Facebook)

**File:** `src/components/Contact.jsx`

**How to edit:**
1. Open `src/components/Contact.jsx`
2. Find line 38 (Email placeholder):
```jsx
<div className="contact-placeholder">
  <p>Coming Soon</p>
  <span>We're setting up our email</span>
</div>
```

**Replace with real email:**
```jsx
<a href="mailto:your-email@example.com" className="contact-link">
  <p>your-email@example.com</p>
</a>
```

3. Find line 54 (Facebook placeholder):
```jsx
<div className="contact-placeholder">
  <p>Coming Soon</p>
  <span>Follow us on Facebook</span>
</div>
```

**Replace with real Facebook:**
```jsx
<a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="contact-link">
  <p>facebook.com/yourpage</p>
</a>
```

---

### **6. FOOTER** (Bottom of page)

**File:** `src/components/Footer.jsx`

**How to edit:**
1. Open `src/components/Footer.jsx`
2. Find line 22:
```jsx
<p className="footer-tagline">
  Building websites that make sense
</p>
```
3. Change to your tagline

4. Find line 52 (Email):
```jsx
<a href="mailto:contact@vextr.dev" className="contact-item">
  <FaEnvelope />
  <span>Coming Soon</span>
</a>
```
Change to your email

---

### **7. TECH STACK** (Technologies you use)

**File:** `src/components/About.jsx`

**How to edit:**
1. Open `src/components/About.jsx`
2. Find line 15-23:
```jsx
const techStack = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'PHP', icon: <FaPhp /> },
  // ... more tech
];
```
3. Add, remove, or change technologies

**To add new tech:**
```jsx
{ name: 'Python', icon: <FaPython /> },
```

---

## 🎨 Editing Tips

### **Auto-Save in VS Code:**
1. Go to File → Preferences → Settings
2. Search for "Auto Save"
3. Select "afterDelay"
4. Changes save automatically!

### **See Changes Live:**
Your dev server (http://localhost:5174) automatically refreshes when you save files!

### **Multi-Cursor Editing:**
- Hold `Alt` and click to place multiple cursors
- Edit multiple places at once

### **Find & Replace:**
- Press `Ctrl + F` to find
- Press `Ctrl + H` to find and replace
- Replace "VEXTR" everywhere at once!

---

## 🔍 Quick Find Guide

### **To find specific text:**
1. Press `Ctrl + Shift + F` (search all files)
2. Type the text you want to change
3. VS Code shows all files with that text
4. Click to open and edit

### **Example searches:**
- Search: `"VEXTR"` → Find all mentions of your brand name
- Search: `"Coming Soon"` → Find all placeholders
- Search: `"2 years"` → Find experience mentions
- Search: `"duo team"` → Find team descriptions

---

## ✅ After Editing

1. **Save your file** (`Ctrl + S`)
2. **Check browser** (http://localhost:5174) - it auto-refreshes!
3. **If changes don't show:**
   - Hard refresh: `Ctrl + Shift + R`
   - Or restart server: Stop and run `npm run dev` again

---

## 🆘 Common Issues

**Problem:** Changes don't appear
**Solution:** Make sure you saved the file (`Ctrl + S`)

**Problem:** Website breaks
**Solution:** Check the Terminal in VS Code for error messages

**Problem:** Can't find a file
**Solution:** Use `Ctrl + P` and type the file name

---

## 📚 Files Reference

```
vextr-portfolio-website/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          ← Main headline & tagline
│   │   ├── About.jsx         ← About section & tech stack
│   │   ├── Services.jsx      ← What you offer & timeline
│   │   ├── Projects.jsx      ← Projects display
│   │   ├── Contact.jsx       ← Contact info
│   │   └── Footer.jsx        ← Footer content
│   ├── data/
│   │   └── projects.js       ← ⭐ PROJECT DATA (EDIT HERE)
│   └── index.css            ← Colors & styles
```

---

## 🎯 Quick Edit Checklist

- [ ] Change "VEXTR" to your name (Hero.jsx)
- [ ] Update tagline (Hero.jsx)
- [ ] Change about description (About.jsx)
- [ ] Update years of experience (About.jsx)
- [ ] Edit services (Services.jsx)
- [ ] Update project info (data/projects.js)
- [ ] Add email address (Contact.jsx & Footer.jsx)
- [ ] Add Facebook link (Contact.jsx & Footer.jsx)
- [ ] Update tech stack (About.jsx)
- [ ] Change footer tagline (Footer.jsx)

---

## 🚀 Ready to Edit!

1. Open VS Code (already done!)
2. Use `Ctrl + P` to quickly open files
3. Edit the text
4. Save (`Ctrl + S`)
5. Check browser!

**Happy editing!** 🎉
