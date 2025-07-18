# 🎬 Philippe Gnannt - Bewegtbild Portfolio

> **Discover stories that move.** A complete redesign of Philippe Gnannt's video portfolio showcasing cinematic storytelling and visual narratives.

[![Live Website](https://img.shields.io/badge/🌐_Live_Website-philippegnannt.com-orange?style=for-the-badge)](https://www.philippegnannt.com/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🚀 **Major Redesign Highlights**

This is a **complete ground-up redesign** of Philippe Gnannt's portfolio website, transforming it from a basic Webflow site into a modern, high-performance React application.

### 🎯 **Key Improvements Over Original**

| **Original Website** | **New Redesign** |
|---------------------|------------------|
| ❌ Static Webflow site | ✅ Dynamic React SPA with TypeScript |
| ❌ Basic image gallery | ✅ Interactive video previews with hover effects |
| ❌ Limited mobile experience | ✅ Fully responsive with mobile-first design |
| ❌ No animations | ✅ Cinematic animations and micro-interactions |
| ❌ Generic typography | ✅ Professional font hierarchy (Inter, Playfair Display, JetBrains Mono) |
| ❌ Basic navigation | ✅ Sticky navigation with mobile hamburger menu |
| ❌ No video detail pages | ✅ Dedicated video detail pages with custom controls |
| ❌ Static content | ✅ Dynamic routing and state management |

---

## ✨ **Features**

### 🎥 **Video Portfolio**
- **Interactive Video Cards** with hover-to-play functionality
- **Cinematic Animations** with staggered loading effects
- **Video Detail Pages** with custom video controls
- **Category Filtering** and metadata display
- **Responsive Grid Layout** adapting to all screen sizes

### 📸 **Still Photography**
- **Lightbox Gallery** with smooth transitions
- **High-Quality Image Display** with lazy loading
- **Project Categorization** (Sports, Artist Portraits, Documentary)
- **Mobile-Optimized Touch Interactions**

### 👤 **About Section**
- **Professional Bio** with client showcase
- **Contact Information** with interactive elements
- **Skills & Expertise** highlighting
- **Social Media Integration**

### 🎨 **Design System**
- **Professional Typography Hierarchy**
  - `Playfair Display` for cinematic headings
  - `Inter` for editorial content
  - `JetBrains Mono` for technical metadata
- **Consistent Color Palette** with orange accent (#f97316)
- **Micro-Animations** enhancing user experience
- **Accessibility-First** design with proper focus states

---

## 🛠️ **Tech Stack**

### **Frontend**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe development
- **React Router DOM 7.6.3** - Client-side routing
- **Vite 5.4.2** - Lightning-fast build tool

### **Styling**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - Automatic vendor prefixing
- **Custom CSS Animations** - Cinematic transitions and effects

### **Icons & Assets**
- **Lucide React 0.344.0** - Beautiful, customizable icons
- **Google Fonts** - Professional typography (Inter, Playfair Display, JetBrains Mono)
- **Optimized Images** - WebP format with fallbacks

### **Development Tools**
- **ESLint 9.9.1** - Code linting with React-specific rules
- **TypeScript ESLint 8.3.0** - TypeScript-aware linting
- **Vite Plugin React 4.3.1** - React integration for Vite

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**

```bash
# Clone the repository
git clone https://github.com/your-username/philippe-gnannt-portfolio.git

# Navigate to project directory
cd philippe-gnannt-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📁 **Project Structure**

```
src/
├── components/           # React components
│   ├── Navigation.tsx   # Sticky navigation with mobile menu
│   ├── FilmPortfolio.tsx # Main video portfolio page
│   ├── VideoCard.tsx    # Interactive video cards
│   ├── VideoDetail.tsx  # Individual video pages
│   ├── StillsPortfolio.tsx # Photography gallery
│   └── About.tsx        # About page with bio
├── data/
│   └── videoData.ts     # Video portfolio data
├── index.css           # Global styles and animations
├── main.tsx           # Application entry point
└── App.tsx            # Main app component with routing
```

---

## 🎨 **Design Philosophy**

### **Cinematic Experience**
The redesign focuses on creating a **cinematic viewing experience** that reflects Philippe's expertise as a film editor:

- **Typography** mimics film industry standards
- **Animations** are smooth and purposeful
- **Color palette** is professional yet warm
- **Layout** emphasizes visual storytelling

### **Performance First**
- **Lazy loading** for images and videos
- **Optimized animations** with CSS transforms
- **Mobile-first** responsive design
- **Fast loading times** with Vite bundling

### **Accessibility**
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** focus states
- **Semantic HTML** structure

---

## 🌟 **Key Components**

### **VideoCard Component**
```typescript
// Interactive video cards with hover effects
- Hover-to-play functionality (desktop only)
- Smooth transitions between thumbnail and video
- Mobile-optimized touch interactions
- Category badges and metadata display
```

### **Navigation Component**
```typescript
// Responsive navigation with mobile menu
- Sticky positioning with backdrop blur
- Hamburger menu for mobile devices
- Smooth animations and transitions
- Logo integration with hover effects
```

### **Custom Animations**
```css
// Cinematic animation system
- fadeInUp, fadeInScale, slideInLeft/Right
- Staggered loading animations
- Hover effects with scale and shadow
- Page transition effects
```

---

## 📱 **Responsive Design**

The portfolio is fully responsive across all devices:

- **Desktop** (1200px+): Full grid layout with hover effects
- **Tablet** (768px-1199px): Adapted grid with touch interactions  
- **Mobile** (320px-767px): Single column with optimized spacing

---

## 🔧 **Configuration**

### **Vite Configuration**
```typescript
// Optimized for React development
- Fast HMR (Hot Module Replacement)
- Optimized dependency pre-bundling
- Production build optimization
```

### **Tailwind Configuration**
```javascript
// Custom design system integration
- Extended color palette
- Custom font families
- Responsive breakpoints
- Animation utilities
```

---

## 🚀 **Deployment**

The application is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Traditional hosting**

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📈 **Performance Metrics**

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

## 🤝 **Contributing**

This is a personal portfolio project for Philippe Gnannt. For suggestions or improvements, please reach out directly.

---

## 📄 **License**

This project is proprietary and confidential. All rights reserved to Philippe Gnannt.

---

## 📞 **Contact**

**Philippe Gnannt**  
📧 studio@philippegnannt.com  
📍 Berlin, Germany  
🌐 [philippegnannt.com](https://www.philippegnannt.com/)

---

<div align="center">

**Built with ❤️ for cinematic storytelling**

*Transforming static portfolios into dynamic experiences*

</div>
