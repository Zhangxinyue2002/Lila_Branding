# Mooon Landing Page

A modern, interactive landing page for Mooon — emotional AI companionship through Lila.

## Features

✨ **Scroll-triggered animations** with Framer Motion
🎨 **Responsive design** with Tailwind CSS
📱 **Mobile-first approach** with optimized layouts
♿ **Accessibility first** with WCAG AA compliance
🚀 **Performance optimized** with code splitting & dynamic imports
🎯 **Interactive sections** including testimonials carousel, newsletter signup, and contact form
📊 **SEO optimized** with meta tags and structured data

## Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel (recommended) or any Node.js host

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd mooon-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
mooon-landing/
├── pages/
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # HTML document setup
│   ├── index.tsx         # Main landing page
│   └── api/              # API routes (e.g., contact, newsletter)
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── Problem.tsx       # Problem statement
│   ├── Lila.tsx          # Lila introduction
│   ├── HowWorks.tsx      # Features/How it works
│   ├── Transition.tsx    # Transition section
│   ├── Values.tsx        # Brand values
│   ├── Story.tsx         # Company story
│   ├── Vision.tsx        # Vision statement
│   ├── Testimonials.tsx  # Testimonials carousel
│   ├── Newsletter.tsx    # Newsletter signup
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── lib/
│   ├── animations.ts     # Framer Motion variants
│   ├── useInView.ts      # Scroll-trigger hook
│   └── hooks.ts          # Custom React hooks
├── styles/
│   └── globals.css       # Global styles
├── public/
│   └── images/           # Image assets
├── tailwind.config.js    # Tailwind config
├── next.config.js        # Next.js config
└── package.json          # Dependencies
```

## Scripts

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000

# Production
npm run build            # Build for production
npm start                # Start production server

# Analysis
npm run analyze          # Analyze bundle size

# Linting
npm run lint             # Run ESLint
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment variables:

```env
# Example (if using external APIs)
# NEXT_PUBLIC_API_URL=https://api.example.com
```

### Customization

#### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  cream: '#f7f3ee',     // Main background
  dark: '#2b2b2b',      // Text color
  lightCream: '#fffaf5', // Secondary background
}
```

#### Animations
Modify `lib/animations.ts` to add or adjust animation variants.

#### Content
Edit individual component files in `components/` to update text and layout.

## Sections Overview

| Component | Purpose |
|-----------|---------|
| **Hero** | Eye-catching headline with CTA button |
| **Problem** | Identify the problem Mooon solves |
| **Lila** | Introduce Lila, the AI companion |
| **HowWorks** | Explain core features (Understands, Responds, Guides) |
| **Transition** | Bridge section to next topic |
| **Values** | Show brand values (Empathy, Connection, Dignity) |
| **Story** | Tell Mooon's origin story |
| **Vision** | Share future vision |
| **Testimonials** | Carousel of user stories |
| **Newsletter** | Email signup form |
| **Contact** | Contact form for inquiries |
| **Footer** | Links and copyright |

## Performance Optimization

### Lighthouse Targets

- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

### Implemented Optimizations

✅ Scroll-triggered animations (no layout shift)
✅ Responsive images with Next.js Image component
✅ Semantic HTML for better accessibility
✅ WCAG AA color contrast compliance
✅ CSS-in-JS (Tailwind) for minimal CSS size
✅ Dynamic imports for below-the-fold sections
✅ Preconnect to Google Fonts
✅ Proper meta tags for SEO

### Next Steps for Further Optimization

- [ ] Add image optimization with WebP/AVIF
- [ ] Implement font subsetting
- [ ] Add service worker for offline support
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Enable compression on server
- [ ] Add caching headers

## Accessibility

Fully compliant with WCAG 2.1 Level AA:

✅ Semantic HTML (`<section>`, `<nav>`, `<article>`, `<footer>`)
✅ ARIA labels on interactive elements
✅ Color contrast ≥ 4.5:1 (WCAG AA)
✅ Keyboard navigation support
✅ Respects `prefers-reduced-motion` preference
✅ Alt text on all images (when added)
✅ Form validation and error messages

### Accessibility Testing

```bash
# Manual testing checklist:
# 1. Tab through page — all interactive elements are reachable
# 2. Test with screen reader (NVDA, JAWS, VoiceOver)
# 3. Run axe DevTools browser extension (0 violations target)
# 4. Check color contrast with WebAIM Contrast Checker
# 5. Verify animations respect prefers-reduced-motion
```

## Forms & API Integration

### Newsletter Form
Currently simulates API call. To connect to a real service:

**Option 1: Formspree (easiest)**
```bash
# No backend needed, free tier available
# Update Newsletter.tsx to use Formspree endpoint
```

**Option 2: Custom API Route**
```bash
# Create pages/api/newsletter.ts
# Integrate with your email service (SendGrid, Mailgun, etc.)
```

**Option 3: Third-party Service**
- Mailchimp, Substack, ConvertKit, etc.

### Contact Form
Same as above — update `Contact.tsx` when backend is ready.

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then:
# 1. Go to vercel.com
# 2. Import your repository
# 3. Deploy with one click
```

### Other Hosts

```bash
# Build and deploy
npm run build
npm start

# Or use Docker, PM2, nginx, etc.
```

## SEO

- ✅ Title and meta description set
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ Canonical URL
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast Core Web Vitals

### Meta Tags to Update

In `pages/index.tsx`, update:
- `<title>` — Page title
- Open Graph image (`og:image`)
- `og:url` — Your actual domain

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test responsiveness and accessibility
4. Submit a pull request

## License

MIT License — feel free to fork and modify.

## Support

For questions or issues, please open a GitHub issue or email contact@mooon.com.

---

**Made with ❤️ by Mooon**
