# Performance Optimization Guide

## Current Lighthouse Targets

- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

## Implemented Optimizations

✅ **Build Optimizations**
- Next.js automatic code splitting
- CSS minification with Tailwind
- JavaScript minification
- Dead code elimination

✅ **Image Optimization**
- Next.js Image component (lazy loading)
- WebP/AVIF format support
- Responsive sizes configuration
- Proper aspect ratios

✅ **Animation Optimizations**
- Scroll-triggered animations (no layout shift)
- GPU-accelerated transforms (Framer Motion)
- `will-change` CSS for smooth animations
- Respects `prefers-reduced-motion`

✅ **SEO & Meta Tags**
- Title and meta description
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Semantic HTML

✅ **Font Loading**
- System font stack (no custom fonts = faster load)
- Fallback fonts specified
- Font subsetting ready (add custom fonts with web-font-loader)

✅ **Accessibility (Performance Impact)**
- WCAG AA compliant (no accessibility tax)
- Semantic HTML (no additional overhead)
- Focus states (CSS-based, minimal impact)

---

## Next Steps to Maximize Performance

### 1. Image Optimization
```bash
# Add images and optimize:
# - Use WebP/AVIF formats
# - Compress with ImageOptim or TinyPNG
# - Use appropriate dimensions
# - Lazy load with Next.js Image component
```

**Current setup:** `next.config.js` is configured for WebP/AVIF
**To add images:**
```tsx
import Image from 'next/image';

<Image
  src="/images/hero.webp"
  alt="Hero section"
  width={1200}
  height={600}
  priority // Only for above-fold images
  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1200px"
/>
```

### 2. Font Optimization (Optional)
If adding custom fonts:

```css
/* Use font-display: swap for faster rendering */
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* Fallback shows immediately */
}
```

Or use Google Fonts with subsetting:
```tsx
// pages/_document.tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
  rel="stylesheet"
/>
```

### 3. Third-Party Scripts
If adding tracking/analytics:

```tsx
// pages/_document.tsx
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      {/* ... */}
      <body>
        {/* ... */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `}
        </Script>
      </body>
    </Html>
  );
}
```

**Performance tips:**
- Use `strategy="afterInteractive"` for non-critical scripts
- Use `strategy="lazyOnload"` for tracking pixels
- Defer loading until after page is interactive

### 4. API Route Optimization
For contact and newsletter forms:

```tsx
// pages/api/newsletter.ts
import { Ratelimit } from '@upstash/ratelimit';

// Enable rate limiting to prevent abuse
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
});

export default async function handler(req, res) {
  const { success } = await ratelimit.limit(req.ip || 'anonymous');
  
  if (!success) {
    return res.status(429).json({ error: 'Rate limited' });
  }

  // Process request...
}
```

### 5. Caching Strategy

**Static pages (Vercel):**
```bash
# On Vercel, pages are automatically cached
# For maximum performance, use ISR (Incremental Static Regeneration)
```

**Custom headers (in next.config.js):**
```js
async headers() {
  return [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Cache-Control', value: 'no-cache' },
      ],
    },
  ];
}
```

### 6. Bundle Analysis
```bash
# Install cross-env and next-bundle-analyzer (dev dependency)
npm install --save-dev cross-env @next/bundle-analyzer

# Run analyzer
npm run analyze

# This generates a visual breakdown of bundle size
```

### 7. Core Web Vitals Monitoring
Add analytics to track performance:

```tsx
// lib/vitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function reportWebVitals(metric: any) {
  // Send to analytics service
  console.log(metric);
}

// pages/_app.tsx
import { reportWebVitals } from '@/lib/vitals';

export { reportWebVitals };
```

---

## Performance Debugging

### 1. Check Load Time
```bash
# Using Next.js built-in timing
npm run build  # Shows build timing
npm start      # Run production build locally
# Open DevTools > Network tab to analyze
```

### 2. Identify Slow Routes
```bash
# Next.js 13+ shows which routes are slowest in output
npm run build  # Look for "route" timings
```

### 3. Bundle Size Analysis
- Install: `npm install --save-dev @next/bundle-analyzer`
- Run: `npm run analyze`
- Look for large dependencies that can be replaced

### 4. Real-World Performance Testing
- Use PageSpeed Insights: https://pagespeed.web.dev/
- Use WebPageTest: https://www.webpagetest.org/
- Monitor with Vercel Analytics (if deployed on Vercel)

---

## Performance Checklist

- [ ] Lighthouse Performance ≥ 90
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Total Blocking Time (TBT) < 200ms
- [ ] Images optimized (WebP, correct sizes)
- [ ] No unoptimized third-party scripts
- [ ] DNS prefetch/preconnect for critical resources
- [ ] CSS critical path optimized
- [ ] No render-blocking resources above the fold
- [ ] Mobile performance tested on Slow 4G

---

## Common Issues & Fixes

| Issue | Cause | Solution |
|-------|-------|----------|
| Layout Shift | Unspecified image dimensions | Add `width` and `height` to Image |
| Slow JavaScript | Large bundle | Code split with dynamic imports |
| Slow Fonts | Custom fonts not optimized | Use `font-display: swap` |
| Slow Third-party Scripts | Sync script loading | Load with `defer` or `async` |
| LCP Slow | Large hero image | Optimize image, preload with priority |
| CLS High | Late-loaded images/ads | Reserve space with aspect-ratio CSS |

---

## Monitoring for Production

### Vercel Analytics
If deployed on Vercel:
1. Go to Vercel dashboard
2. Project > Analytics
3. Monitor Web Vitals in real-time

### Custom Monitoring
```tsx
// Integrate with your analytics provider
import { getCLS, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getLCP(console.log);
getTTFB(console.log);
```

---

## References

- Next.js Optimization: https://nextjs.org/docs/advanced-features/performance-optimization
- Google Web Vitals: https://web.dev/vitals/
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- PageSpeed Insights: https://pagespeed.web.dev/
