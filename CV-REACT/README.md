# React CV Website 📊

A modern, professional CV website built with **React + Vite** featuring component-based architecture, smooth animations, and glassmorphism design.

## 🎯 Project Overview

This is a lab task demonstrating the use of **React components with props** to create a reusable, maintainable CV website. The entire application is built using functional components that receive data through props, showcasing proper component architecture and data flow in React.

## ✨ Features

### Component Architecture

- **Reusable Components**: Each section (Header, Experience, Projects, Education, Skills, Languages) is a separate component
- **Props-Driven Content**: All data is passed via props from centralized data file
- **Component Composition**: Nested components (ExperienceCard, ProjectCard) for better organization

### Design & UX

- **Modern UI**: Glassmorphism effects with gradient backgrounds
- **Smooth Animations**: Framer Motion for scroll-triggered animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Professional Icons**: React Icons library for consistent iconography
- **Print-Friendly**: Optimized CSS for professional printing

### Technical Features

- **Fast Performance**: Built with Vite for lightning-fast development
- **TypeScript Ready**: Structured for easy TypeScript migration
- **Modern CSS**: Custom properties, flexbox, grid layouts
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Modern styling

## 📁 Component Structure

```
CV-REACT/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Personal info header (props: name, title, contact)
│   │   ├── ExperienceSection.jsx   # Experience container (props: experiences array)
│   │   ├── ExperienceCard.jsx      # Individual experience (props: position, company, etc.)
│   │   ├── ProjectSection.jsx      # Projects container (props: projects array)
│   │   ├── ProjectCard.jsx         # Individual project (props: title, description, features)
│   │   ├── EducationSection.jsx    # Education container (props: education array)
│   │   ├── SkillsSection.jsx       # Skills display (props: skills object)
│   │   └── LanguageSection.jsx     # Languages display (props: languages array)
│   ├── data/
│   │   └── cvData.js              # Centralized data source
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # Entry point
```

## 🎨 Component Props Examples

### Header Component

```jsx
<Header
  name="Mehran Akhtar"
  title="COMPUTER SCIENCE STUDENT"
  email="mehran.dev.au@gmail.com"
  phone="+92 312 4447335"
  github="github.com/mehran-chaudhary"
  location="Islamabad, Pakistan"
/>
```

### ExperienceCard Component

```jsx
<ExperienceCard
  position="Full Stack Developer"
  company="Freelance Projects"
  location="Islamabad"
  date="2023 - Present"
  responsibilities={[
    "Built comprehensive applications...",
    "Developed scalable systems...",
  ]}
  index={0}
/>
```

### ProjectCard Component

```jsx
<ProjectCard
  title="Research Collaboration Platform"
  description="A comprehensive social platform..."
  features={["Developed paper exploration system", "Built community features"]}
  index={0}
/>
```

### SkillsSection Component

```jsx
<SkillsSection
  skills={{
    technical: "JavaScript, React.js, Node.js...",
    development: "Full Stack Web Development...",
    soft: "Research & Problem-Solving...",
  }}
/>
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to project directory:

```bash
cd CV-REACT
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## 📊 Data Management

All CV data is centralized in `src/data/cvData.js`:

```javascript
export const cvData = {
  personal: { name, title, email, phone, github, location },
  experience: [{ position, company, location, date, responsibilities }],
  projects: [{ title, description, features }],
  education: [{ degree, institution, date, details }],
  skills: { technical, development, soft },
  languages: [{ name, level }],
};
```

To update your CV, simply modify this file - all components will automatically reflect the changes!

## 🎨 Design Principles

### Color Palette

- **Primary**: Indigo (#6366f1) to Purple (#a855f7)
- **Secondary**: Orange (#f59e0b) to Red (#ef4444)
- **Success**: Green (#10b981)
- **Pink**: (#ec4899)
- **Neutrals**: Slate grays for text

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Hierarchy**: Clear size and weight differences

### Animations

- **Scroll Reveal**: Components fade and slide in
- **Hover Effects**: Cards lift and show shadows
- **Micro-interactions**: Smooth transitions on all interactive elements

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: < 480px

## 🎓 Learning Outcomes

This project demonstrates:

1. ✅ **Component Architecture**: Breaking UI into reusable components
2. ✅ **Props Usage**: Passing data from parent to child components
3. ✅ **Data Management**: Centralized data source pattern
4. ✅ **Modern React**: Functional components with hooks
5. ✅ **Animation Integration**: Framer Motion implementation
6. ✅ **Responsive Design**: Mobile-first CSS approach
7. ✅ **Performance**: Optimized builds with Vite
8. ✅ **Code Organization**: Proper file structure and separation of concerns

## 🌐 Deployment

Built files are in the `dist/` directory and ready for deployment to:

- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

## 👨‍💻 Author

**Mehran Akhtar**

- Email: mehran.dev.au@gmail.com
- GitHub: github.com/mehran-chaudhary
- University: Air University, Islamabad
- Program: BSCS 5th Semester

## 📄 License

This project is part of academic coursework for Full Stack Web Development course at Air University, Islamabad.

---

**Built with React ⚛️ • Styled with CSS3 🎨 • Animated with Framer Motion ✨**
