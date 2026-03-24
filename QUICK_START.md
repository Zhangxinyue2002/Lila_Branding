# Quick Start Guide

## Installation (2 minutes)

```bash
# Navigate to project directory
cd e:\ISDN2210

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** in your browser.

---

## Project Structure at a Glance

```
📁 mooon-landing/
├── 📁 pages/              # Next.js pages
│   ├── index.tsx          # Main landing page
│   ├── _app.tsx           # App wrapper
│   ├── _document.tsx      # HTML setup
│   └── 📁 api/            # API routes
│       ├── contact.ts     # Contact form endpoint
│       ├── newsletter.ts  # Newsletter endpoint
│       └── sitemap.ts     # SEO sitemap
│
├── 📁 components/         # Reusable sections
│   ├── Hero.tsx           # Hero section
│   ├── Problem.tsx        # Problem statement
│   ├── Lila.tsx           # Lila intro
│   ├── HowWorks.tsx       # Features
│   ├── Transition.tsx     # Transition
│   ├── Values.tsx         # Brand values
│   ├── Story.tsx          # Story
│   ├── Vision.tsx         # Vision
│   ├── Testimonials.tsx   # Carousel
│   ├── Newsletter.tsx     # Newsletter signup
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
│
├── 📁 lib/                # Utilities
│   ├── animations.ts      # Framer Motion variants
│   ├── useInView.ts       # Scroll-trigger hook
│   └── hooks.ts           # Custom hooks
│
├── 📁 styles/             # CSS
│   └── globals.css        # Global styles
│
├── 📁 public/             # Static assets
│   ├── images/            # (Add images here)
│   └── robots.txt         # SEO robots file
│
├── 📄 package.json        # Dependencies
├── 📄 next.config.js      # Next.js config
├── 📄 tailwind.config.js  # Tailwind config
├── 📄 tsconfig.json       # TypeScript config
└── 📄 .env.example        # Environment template
```

---

## Common Tasks

### 1. Edit a Section

Example: Change hero headline

```tsx
// components/Hero.tsx
<motion.h1 ...>
  Your new headline here
</motion.h1>
```

### 2. Add a New Section

1. Create `components/NewSection.tsx`
2. Add to `pages/index.tsx`

```tsx
import NewSection from '@/components/NewSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <NewSection />  // ← Add here
      <Footer />
    </main>
  );
}
```

### 3. Connect Contact Form

Update `pages/api/contact.ts`:

```ts
// Option 1: Nodemailer (SMTP)
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO,
  subject: `Contact from ${name}`,
  html: `<p>${message}</p>`,
});
```

### 4. Connect Newsletter

Update `pages/api/newsletter.ts` with your email service:

```ts
// Option 1: Mailchimp
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
  email_address: email,
  status: 'pending',
});
```

### 5. Add Images

```tsx
import Image from 'next/image';

<Image
  src="/images/hero.webp"
  alt="Hero section"
  width={1200}
  height={600}
  priority
/>
```

### 6. Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  cream: '#f7f3ee',      // Update these
  dark: '#2b2b2b',
  lightCream: '#fffaf5',
}
```

---

## Development Commands

```bash
# Start development server (auto-reload on changes)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Analyze bundle size
npm run analyze

# Run linter
npm run lint
```

---

## Testing Locally

### Full Test
```bash
npm run build  # Build
npm start      # Run production
# Open http://localhost:3000
```

### Mobile Testing
```bash
# Get your machine's IP
ipconfig getifaddr en0   # macOS
# or Windows: ipconfig

# Visit on mobile:
# http://{YOUR_IP}:3000
```

### Lighthouse Audit
1. Open DevTools (F12)
2. Click "Lighthouse"
3. Select "Desktop" or "Mobile"
4. Click "Generate report"
5. Target: All scores ≥ 90

### Accessibility Check
1. Install axe DevTools extension
2. Run scan
3. Fix any violations
4. Target: 0 violations

---

## Deployment

### Deploy to Vercel (Easiest)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Create account if prompted
# 4. Follow setup wizard
# 5. Done!
```

Or use the Vercel dashboard:
1. Connect GitHub repo at vercel.com
2. Vercel auto-detects Next.js
3. Click "Deploy"
4. Add custom domain under Settings

**See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for other options.**

---

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### Module not found error
```bash
npm install  # Reinstall dependencies
```

### Build fails
```bash
npm run build  # Check error message
# Fix the error in the file mentioned
npm run build  # Try again
```

### Styles not working
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Form not submitting
- Check `.env.local` has required variables
- Verify API routes exist in `pages/api/`
- Check browser console for errors (F12)

---

## Next Steps

1. **Edit Content**
   - Customize text in components
   - Add your brand images
   - Update colors

2. **Connect Forms**
   - Set up email service (Mailchimp, SendGrid, Nodemailer)
   - Update `.env.local`
   - Update API routes

3. **Test**
   - Run Lighthouse audit (target ≥ 90)
   - Test on mobile
   - Test forms
   - Test keyboard navigation

4. **Deploy**
   - Follow [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
   - Configure domain
   - Monitor with analytics

5. **Maintain**
   - Review [README.md](README.md) for features
   - Check [ACCESSIBILITY_TESTING.md](ACCESSIBILITY_TESTING.md) for a11y
   - Use [PERFORMANCE_GUIDE.md](PERFORMANCE_GUIDE.md) for optimization

---

## Files to Customize First

| File | What to Change |
|------|---|
| `components/Hero.tsx` | Headline, CTA button text |
| `pages/index.tsx` | Meta tags, OG image |
| `tailwind.config.js` | Colors (cream, dark, lightCream) |
| `components/Testimonials.tsx` | Customer quotes |
| `.env.example` → `.env.local` | Environment variables |

---

## Useful Links

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **WebAIM:** https://webaim.org/ (accessibility)
- **Vercel Docs:** https://vercel.com/docs

---

## Performance Checklist

Before deploying to production:

- [ ] Run Lighthouse audit (scores ≥ 90)
- [ ] Test on mobile (iPhone, Android)
- [ ] Test keyboard navigation (Tab through)
- [ ] Test forms (submit works)
- [ ] Check all links work
- [ ] Verify animations smooth
- [ ] Run accessibility audit (axe DevTools)

---

## Support & Questions

Refer to the comprehensive guides:
- [README.md](README.md) — Features, setup, project structure
- [ACCESSIBILITY_TESTING.md](ACCESSIBILITY_TESTING.md) — Testing for a11y
- [PERFORMANCE_GUIDE.md](PERFORMANCE_GUIDE.md) — Performance optimization
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) — Deployment options

---

**Ready to build? Start with:**
```bash
npm install
npm run dev
```

Visit http://localhost:3000 and start customizing! 🚀
