# Deployment Guide

## Pre-Deployment Checklist

- [ ] All components tested locally
- [ ] Lighthouse scores ≥ 90 on all metrics
- [ ] Accessibility testing completed (WCAG AA)
- [ ] Mobile responsiveness verified (320px, 768px, 1200px)
- [ ] Forms connected to email service (if applicable)
- [ ] Environment variables configured
- [ ] SEO meta tags updated with correct domain
- [ ] Social media meta tags (OG image, etc.)
- [ ] Analytics code added (Google Analytics, etc.)
- [ ] Error tracking configured (optional)
- [ ] No console errors or warnings
- [ ] Build completes successfully (`npm run build`)

---

## Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Native Next.js support
- Automatic deployments from Git
- Serverless functions for API routes
- Built-in analytics
- Edge caching
- Perfect for performance

**Step 1: Connect Repository**

```bash
# Push code to GitHub
git add .
git commit -m "Initial Mooon landing page"
git push origin main
```

**Step 2: Deploy on Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Vercel auto-detects Next.js
5. Configure environment variables:
   - Add `.env.local` variables to Vercel project settings
6. Click "Deploy"

**Step 3: Configure Domain**

1. In Vercel dashboard, go to Settings → Domains
2. Add custom domain (e.g., mooon.com)
3. Update DNS records at your domain registrar:
   - For subdomain: CNAME to `cname.vercel.com`
   - For root domain: A records to Vercel IPs
4. Wait for DNS propagation (5-30 minutes)

**Step 4: Enable Automatic Deployments**

- Every push to `main` triggers automatic deployment
- Preview deployments for pull requests
- Instant rollback if needed

---

### 2. Netlify

**Differences from Vercel:**
- Also great for Next.js
- Slightly simpler UI
- Good for JAMstack projects
- Requires build configuration

**Steps:**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add New Site" → "Import an existing project"
3. Connect GitHub account
4. Configure build:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables under Settings
6. Deploy
7. Configure domain same as Vercel

---

### 3. Self-Hosted (AWS, DigitalOcean, Linode)

**Build and Deploy:**

```bash
# Build production bundle
npm run build

# Start production server
npm start
# Server listens on http://localhost:3000
```

**Using PM2 (Process Manager):**

```bash
# Install PM2 globally
npm install -g pm2

# Start app
pm2 start npm --name "mooon" -- start

# Auto-restart on reboot
pm2 startup
pm2 save

# Monitor
pm2 monit
```

**Using Docker:**

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm ci --only=production

COPY .next ./
COPY public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run Docker image
docker build -t mooon .
docker run -p 3000:3000 mooon
```

**Using Systemd (Linux):**

Create `/etc/systemd/system/mooon.service`:

```ini
[Unit]
Description=Mooon Landing Page
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/mooon
ExecStart=/usr/bin/npm start
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable mooon
sudo systemctl start mooon
```

---

### 4. AWS Amplify

**Steps:**

1. Install AWS Amplify CLI: `npm install -g @aws-amplify/cli`
2. Configure: `amplify configure`
3. Initialize: `amplify init`
4. Deploy: 
   ```bash
   amplify publish
   ```
5. Auto-generated domain or connect custom domain

---

## Environment Setup

### Before Deploying, Create `.env.local`:

```env
# Copy from .env.example and fill in your values
NEXT_PUBLIC_SITE_URL=https://mooon.com
EMAIL_FROM=noreply@mooon.com
MAILCHIMP_API_KEY=your-key
# etc.
```

### Add to Deployment Platform:

**Vercel:**
- Settings → Environment Variables → Add each variable

**Netlify:**
- Site Settings → Build & Deploy → Environment → Add

**Self-Hosted:**
- Create `.env.local` on server
- Or pass via `docker run -e` flags

---

## Post-Deployment

### 1. Test Live Site

- [ ] Visit domain in browser
- [ ] Test all links and buttons
- [ ] Test forms (newsletter, contact)
- [ ] Check mobile responsiveness
- [ ] Verify animations work
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit on live site

### 2. Configure DNS

```bash
# Verify DNS is working
nslookup mooon.com

# Or using dig
dig mooon.com

# Should show A record pointing to server IP
```

### 3. Enable HTTPS

**Vercel/Netlify:**
- Automatic with Let's Encrypt
- No additional setup needed

**Self-Hosted:**
```bash
# Using Certbot (Let's Encrypt)
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d mooon.com
```

### 4. Set Up Monitoring

**Vercel Analytics:**
- Dashboard → Analytics → Enable Web Vitals

**Sentry (Error Tracking):**
```bash
npm install --save @sentry/nextjs
```

```tsx
// sentry.server.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.VERCEL_ENV,
});
```

**Google Analytics:**
```bash
npm install next-google-analytics
```

```tsx
// pages/_app.tsx
import GoogleAnalytics from 'next-google-analytics';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" gaMeasurementId="GA_ID" />
      <Component {...pageProps} />
    </>
  );
}
```

---

## Performance Verification

After deployment, verify performance:

```bash
# Check live site with PageSpeed Insights
# https://pagespeed.web.dev/

# Check with Lighthouse CI
npm install -g @lhci/cli@* @lhci/server
lhci collect --config=lighthouserc.json  # See PERFORMANCE_GUIDE.md for config
```

---

## Troubleshooting

### "Page not found" (404)

- **Cause:** Build didn't include pages
- **Fix:** 
  ```bash
  npm run build  # Verify locally
  Check build output for errors
  ```

### "Cannot find module"

- **Cause:** Missing dependencies
- **Fix:**
  ```bash
  npm install  # Reinstall all packages
  npm run build
  ```

### Forms not working

- **Cause:** API routes not deployed
- **Fix:**
  - Ensure `pages/api/` files are in repository
  - Check environment variables are set
  - Test with `curl` or Postman

### Slow performance

- **Cause:** Large bundle, unoptimized images
- **Fix:**
  - Run `npm run analyze` to check bundle size
  - Optimize images (convert to WebP)
  - Enable caching headers

### CORS errors

- **Cause:** API calls blocked by browser
- **Fix:** Add CORS headers in `next.config.js`:
  ```js
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' },
        ],
      },
    ];
  }
  ```

---

## Rollback Strategy

### Vercel
- Click deployment to revert to previous version
- Instant rollback with no downtime

### Self-Hosted
```bash
# Keep previous build
tar -czf mooon-v1.tar.gz .next/

# Rollback
pm2 delete mooon
# Restore old .next folder
npm start
```

---

## Monitoring & Maintenance

### Weekly
- [ ] Check Lighthouse score (maintain ≥ 90)
- [ ] Review error logs
- [ ] Check form submissions received

### Monthly
- [ ] Update content if needed
- [ ] Review analytics
- [ ] Check for security updates
- [ ] Test contact/newsletter forms

### Quarterly
- [ ] Audit accessibility
- [ ] Review Core Web Vitals
- [ ] Update dependencies
- [ ] Check for broken links

---

## Useful Commands

```bash
# Build for production
npm run build

# Test production locally
npm start

# Analyze bundle size
npm run analyze

# Format code
npm run format

# Check linting
npm run lint

# View Next.js telemetry
next telemetry
```

---

## Quick Reference

| Platform | Setup Time | Cost | Best For |
|----------|-----------|------|----------|
| **Vercel** | 5 min | Free/$20/mo | Best option, auto-scaling |
| **Netlify** | 5 min | Free/$19/mo | Good alternative |
| **AWS Amplify** | 15 min | Pay per use | Enterprise scale |
| **DigitalOcean** | 30 min | $5-$40/mo | Budget-friendly VPS |
| **Linode** | 30 min | $5-$40/mo | Powerful VPS |
| **Heroku** | 10 min | $0-$50+/mo | Easy but expensive |

**Recommendation:** Start with Vercel for easiest setup and best performance.

---

For detailed Vercel docs: https://vercel.com/docs
For detailed Next.js docs: https://nextjs.org/docs
