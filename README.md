# NOK Next.js Demo Website 🚀

A beautiful, modern website built with Next.js 14, showcasing the power of React components, server-side rendering, and Tailwind CSS.


## ✨ Features

- **🎨 Beautiful Design** - Modern gradient UI with smooth animations
- **⚡ Lightning Fast** - Optimized performance with Next.js
- **📱 Fully Responsive** - Works perfectly on all devices
- **♻️ Reusable Components** - See how components eliminate code duplication
- **🎭 Smooth Animations** - Engaging user experience with Tailwind animations
- **🧭 Multiple Pages** - Home, About, and Services pages demonstrating routing
- **🎯 SEO Optimized** - Built-in metadata and server-side rendering

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Navigate to the project folder:**
   ```bash
   cd nextjs-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextjs-demo/
├── app/                    # App Router (Next.js 14)
│   ├── layout.js          # Root layout (Header & Footer)
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── about/
│   │   └── page.js        # About page
│   └── services/
│       └── page.js        # Services page
├── components/            # Reusable components
│   ├── Header.js         # Navigation (used on all pages!)
│   ├── Footer.js         # Footer (used on all pages!)
│   ├── Hero.js           # Hero section
│   ├── FeatureCard.js    # Feature card component
│   └── AnimatedSection.js # Scroll animation wrapper
├── public/               # Static files
├── package.json          # Dependencies
└── tailwind.config.js    # Tailwind configuration
```

## 🎯 Key Concepts Demonstrated

### 1. **Reusable Components**
The `Header` component is written ONCE in `components/Header.js` and used on all pages through `app/layout.js`. Change it once, updates everywhere!

### 2. **File-Based Routing**
- `app/page.js` → Home page (/)
- `app/about/page.js` → About page (/about)
- `app/services/page.js` → Services page (/services)

No routing configuration needed!

### 3. **Server & Client Components**
- Most components are server-rendered by default (faster, SEO-friendly)
- Interactive components use `'use client'` directive (Header, FeatureCard)

### 4. **Modern Styling**
- Tailwind CSS for utility-first styling
- Custom animations defined in `tailwind.config.js`
- Gradient backgrounds and smooth transitions

## 🆚 Comparing to Plain HTML

### Plain HTML Way (Your Current Site):
```html
<!-- index.html -->
<header>...</header>  <!-- Copy/paste on every page -->

<!-- about.html -->
<header>...</header>  <!-- Same header, copied again -->

<!-- services.html -->
<header>...</header>  <!-- Same header, copied again -->
```

### Next.js Way (This Demo):
```jsx
// app/layout.js (ONE TIME)
<Header />  // Used on all pages automatically!
```

**Result:** Change the header once, it updates on all 3 pages instantly! ✅

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server (with hot reload)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
```

## 🎨 Customization

### Colors
Edit the gradient colors in `app/globals.css`:
```css
:root {
  --primary: #6366f1;     /* Change these! */
  --secondary: #8b5cf6;
  --accent: #ec4899;
}
```

### Animations
Add new animations in `tailwind.config.js`:
```js
animation: {
  'your-animation': 'animationName 1s ease-in',
}
```

### Content
- Edit page content in `app/page.js`, `app/about/page.js`, etc.
- Modify components in `components/` folder
- Add new pages by creating new folders in `app/`

## 📦 Building for Production

```bash
npm run build
npm run start
```

Or deploy to Vercel (free hosting):
```bash
npm install -g vercel
vercel
```

## 🤔 Why Next.js?

This demo shows the key benefits:

1. **No Repetition** - Write header/footer once, use everywhere
2. **Faster** - Automatic optimization and code splitting  
3. **SEO** - Server-side rendering for better search rankings
4. **Scalable** - Easy to add new pages and features
5. **Modern** - Built with React, the industry standard

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 🎉 Next Steps

1. Try editing `app/page.js` and see live updates
2. Add a new page by creating `app/contact/page.js`
3. Modify the Header component and watch it update everywhere
4. Experiment with the animations in Tailwind config

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**




