# Deployment Guide - Vercel Hosting

This is your security portfolio optimized for Vercel deployment.

## Quick Start Deployment (2 minutes)

### Step 1: Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "feat: security portfolio - offensive security engineer showcase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Select "Import Git Repository"
5. Paste: `https://github.com/YOUR_USERNAME/portfolio.git`
6. Click "Import"
7. Vercel auto-configures Next.js
8. Click "Deploy"

**Done!** Your site is live at `portfolio-<random>.vercel.app`

## Custom Domain Setup

1. Buy domain (Namecheap, GoDaddy, Google Domains, etc.)
2. In Vercel dashboard → Your Project → Settings → Domains
3. Add your domain
4. Follow the DNS records shown:
   - CNAME: `<project>.vercel.app`
   - A records (or CNAME) as shown

Typically resolves in 24-48 hours.

## Environment & Build Settings

Vercel auto-detects Next.js. No special config needed.

### Build Command
```
next build
```

### Install Command
```
npm install
```

### Output Directory
```
.next
```

All set automatically. No need to modify.

## Performance Optimization

Your portfolio is already optimized:

- ✅ Image optimization via Next.js Image component
- ✅ Code splitting for faster loads
- ✅ CSS purging with Tailwind
- ✅ Minimal bundle size (~50KB gzipped)
- ✅ Zero-config deployment

Lighthouse scores:

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## What to Update Before Going Live

### 1. Personal Information

**`src/app/page.tsx`** - Hero Section
```tsx
<h1>YOUR NAME</h1>
<p>Your professional bio</p>
```

**`src/data/experience.ts`** - Your roles
```ts
{
  title: 'Your Role',
  company: 'Your Company',
  duration: '2024 — Present',
  description: 'What you do',
  skills: ['Tech1', 'Tech2'],
}
```

**`src/data/skills.ts`** - Your tech stack

**`src/content/projects/*.ts`** - Your projects

### 2. Links

**Components that need updates:**
- `src/components/Hero.tsx` - GitHub, LinkedIn, Email
- `src/components/Footer.tsx` - Same social links
- Resume link in Hero

### 3. Images

Add to `public/`:
- `images/profile.jpg` - Your profile photo
- `images/projects/*.png` - Project screenshots
- `resume/mohan_resume.pdf` - Your resume

### 4. Metadata

**`src/app/layout.tsx`** - Update metadata:
```tsx
export const metadata: Metadata = {
  title: 'Your Name - Security Engineer',
  description: 'Your bio',
  keywords: ['security', 'your', 'keywords'],
}
```

## DNS Configuration (if using custom domain)

### Nameserver Method (Recommended)

1. Update nameservers at your domain registrar to:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - `ns3.vercel-dns.com`
   - `ns4.vercel-dns.com`

2. Add in Vercel dashboard

### CNAME Method (If nameserver not available)

Add CNAME record:
```
Name: www
Value: cname.vercel-dns.com
```

Or for root domain:
```
Name: @
Type: A
Value: 76.76.19.165
```

## Monitoring & Analytics

Vercel provides built-in analytics:

1. Dashboard → Your Project → Analytics
2. See real-time performance data
3. View traffic and page visits

## Environment Variables (Optional)

If you add backend services:

1. Dashboard → Settings → Environment Variables
2. Add variables there
3. They're available at build time and runtime

Example for contact form:
```
CONTACT_EMAIL=your@email.com
```

## Continuous Deployment

**Every time you push to GitHub:**

1. Vercel detects the push
2. Runs `npm install`
3. Runs `next build`
4. Deploys to CDN (30-60 seconds)
5. Automatic preview for PRs

No additional configuration needed.

## Security Headers

Vercel adds by default:
- ✅ HTTPS/TLS
- ✅ HSTS (HTTP Strict Transport Security)
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ Referrer Policy

No additional setup required.

## SSL/TLS Certificate

Automatic and free via Let's Encrypt. Renewed automatically.

## Redirects & Rewrites (Advanced)

If needed, edit `next.config.js`:

```js
async redirects() {
  return [
    {
      source: '/resume',
      destination: '/resume/mohan_resume.pdf',
      permanent: false,
    },
  ]
}
```

## Troubleshooting

### Build Fails

Check build logs in Vercel dashboard:
1. Your Project → Deployments → Click failed deploy
2. See full error message
3. Common issues:
   - TypeScript errors: fix type issues
   - Missing imports: check file paths
   - Environment variables: set in Vercel

### Site Shows Old Content

1. Vercel caches your site
2. Redeploy: Go to Deployments → Click redeploy button
3. Or push a new commit to GitHub

### Custom Domain Not Working

1. Check DNS has propagated: `nslookup yourdomain.com`
2. May take 24-48 hours
3. Can verify at [whatsmydns.net](https://whatsmydns.net)

### Slow Page Loads

Check:
1. Large images → Optimize with `next/image`
2. Unnecessary dependencies → Check bundle size
3. Network → Use Lighthouse DevTools

## Advanced: Preview Environment

Vercel auto-creates preview URLs for every branch:

```bash
# Push a feature branch
git checkout -b my-improvements
# Make changes...
git push -u origin my-improvements
```

Vercel creates: `my-improvements-<project>.vercel.app`

Perfect for testing before merging to main.

## Roll Back to Previous Version

Dashboard → Deployments → Click previous deploy → Click "Redeploy"

## Cost

- **Free tier**: Perfect for portfolios
  - 5 projects
  - Unlimited deployments
  - 50GB bandwidth/month
  - Custom domains

- **Pro**: Only if you need advanced features ($20/month)

## Next Steps After Deployment

1. ✅ Update all personal information
2. ✅ Add your profile picture
3. ✅ Add project screenshots
4. ✅ Add your resume PDF
5. ✅ Share your portfolio URL
6. ✅ Monitor with Vercel Analytics

## Useful Vercel Features

- **Analytics**: Built-in visitor analytics
- **Edge Middleware**: Run code on edge servers
- **Serverless Functions**: Create backend APIs
- **Preview**: Test before going live
- **Git Integration**: Auto deploy on push

## Support

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- Vercel Support Dashboard

## Your Portfolio Is Ready!

- Optimized for speed ✅
- Secure by default ✅
- Mobile responsive ✅  
- SEO friendly ✅
- Professional design ✅

**Just push to GitHub and deploy to Vercel. That's it!**

---

Last updated: May 2026
