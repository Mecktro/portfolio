# Customization Guide

Quick reference for updating your portfolio with your information.

## 🚀 Quick Start: Easy Updates

**Most content changes happen in these files:**

| What to Update | File |
|---|---|
| **Your Name, Bio, Links** | `src/components/Hero.tsx` |
| **Work Experience** | `src/data/experience.ts` |
| **Skills & Tech Stack** | `src/data/skills.ts` |
| **Certifications** | `src/data/certifications.ts` |
| **Projects** | `src/content/projects/` |
| **Achievements** | `src/data/achievements.ts` |
| **Social Links** | `src/components/Footer.tsx` |
| **Resume PDF** | `public/resume/` |
| **Images** | `public/images/` |

**To Update:**
1. Open the file in your editor
2. Make changes to the data
3. Save the file
4. Your browser will auto-refresh (dev server running)
5. Check `http://localhost:3000` to see changes

---

## File-by-File Customization

### 1. Hero Section & Main Bio

**File:** `src/app/page.tsx`

Update the About section with your bio:

```tsx
<p>
  I'm a security engineer focused on offensive security, cloud infrastructure, 
  and building automated threat detection systems.
</p>
```

### 2. Your Name & Introduction

**File:** `src/components/Hero.tsx`

```tsx
<h1 className="...">
  <span className="text-white">YOUR NAME</span>
</h1>
<p className="...">Your Professional Title</p>
<p className="...">
  Your bio / focus areas
</p>
```

Also update links:
```tsx
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_USERNAME"
href="mailto:your@email.com"
```

### 3. Experience & Roles

**File:** `src/data/experience.ts`

```ts
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Your Role Title',
    company: 'Company Name',
    duration: '2024 — Present',
    description: 'What you did/do here. 1-2 sentences.',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
  // Add more entries
]
```

### 4. Skills & Technologies

**File:** `src/data/skills.ts`

```ts
export const skills: Skill[] = [
  {
    category: 'Security',
    items: [
      'Skill1',
      'Skill2',
      'Your skills here',
    ],
  },
  // Add more categories as needed
]
```

**Categories to include:**
- Security
- Cloud & Infrastructure  
- Backend & Data
- Frontend & Tools
- AI & Automation
- Security Tools

### 5. Your Projects

**File:** `src/content/projects/` (create/edit files here)

#### Hero Project: `honeypot.ts`

```ts
export const honeypotProject = {
  id: 'unique-id',
  title: 'Your Project Title',
  description: 'One-liner about the project',
  longDescription: `
Your project description with:
• Key achievement 1
• Key achievement 2
• Impact or outcome
  `,
  image: '/images/projects/your-image.png',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  link: 'https://project-link.com',
  github: 'https://github.com/username/repo',
  highlights: [
    'Key metric 1',
    'Key metric 2',
  ],
}
```

#### Other Projects: `cybermap.ts`, `tradebot.ts`

Same structure as above.

### 6. Social Links

**File:** `src/components/Navbar.tsx` & `src/components/Footer.tsx`

Update all links:
```tsx
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_USERNAME"  
href="mailto:your@email.com"
```

### 7. Resume PDF

**File:** Place PDF at `public/resume/your_resume.pdf`

Update link in `src/components/Hero.tsx`:
```tsx
href="/resume/your_resume.pdf"
```

### 8. Profile Image

**File:** Place image at `public/images/profile.jpg`

Add to components if needed with Next.js Image:
```tsx
import Image from 'next/image'

<Image
  src="/images/profile.jpg"
  alt="Your Name"
  width={200}
  height={200}
/>
```

### 9. Project Images

**Files:** Place in `public/images/projects/`

Update in project files:
```ts
image: '/images/projects/your-project.png'
```

### 10. Metadata & Page Titles

**File:** `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'YOUR NAME - Your Title',
  description: 'Your bio/description',
  keywords: [
    'your',
    'relevant',
    'keywords',
  ],
}
```

### 11. Certifications

**File:** `src/data/certifications.ts`

```ts
export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Certification Name',
    issuer: 'Organization',
    date: '2024',
    credentialUrl: 'https://link-to-credential',
  },
]
```

### 12. Achievements

**File:** `src/data/achievements.ts`

```ts
export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Achievement Title',
    description: 'What you achieved',
    date: '2024',
    icon: 'optional-icon-name',
  },
]
```

### 13. Blog Posts (Optional)

**File:** `src/content/blog/` (create `.mdx` files)

```mdx
---
title: "Your Article Title"
slug: "your-article-slug"
date: "2024-01-15"
excerpt: "Short summary of the article."
---

# Your Article Title

Article content in Markdown...
```

## Styling Customization

### Colors

**File:** `tailwind.config.ts`

Default colors:
- Primary: Black (`#000000`)
- Text: Zinc 50 (`#FAFAFA`)
- Accent: Cyan 400 (`#22D3EE`)
- Borders: Zinc 800 (`#27272A`)

To change accent color:
```ts
colors: {
  cyan: {
    400: 'rgb(34, 211, 238)', // Change this
    500: 'rgb(6, 182, 212)',
  },
}
```

### Fonts

**File:** `tailwind.config.ts`

Change primary font:
```ts
fontFamily: {
  mono: ['IBM Plex Mono', 'JetBrains Mono', ...],
}
```

### Spacing & Layout

**File:** `tailwind.config.ts` or inline in components

Default max-width for content:
```tsx
<div className="mx-auto max-w-5xl"> {/* 64rem / 1024px */}
```

To change: find `max-w-5xl` and replace with `max-w-6xl` (1536px) or `max-w-4xl` (896px)

## Adding New Sections

### Add a New Page

1. Create file: `src/app/yourpage/page.tsx`
2. Structure:
   ```tsx
   'use client'
   import Navbar from '@/components/Navbar'
   import Footer from '@/components/Footer'
   
   export default function YourPage() {
     return (
       <>
         <Navbar />
         <main className="min-h-screen bg-black">
           {/* Your content */}
         </main>
         <Footer />
       </>
     )
   }
   ```
3. Update navigation in `src/components/Navbar.tsx`:
   ```tsx
   { label: 'Your Page', href: '/yourpage' }
   ```

### Add a New Component

1. Create file: `src/components/YourComponent.tsx`
2. Use in pages:
   ```tsx
   import YourComponent from '@/components/YourComponent'
   <YourComponent />
   ```

## Environment Variables (Advanced)

**File:** Create `.env.local` in root

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## SEO Optimization

### Page-Specific Metadata

**File:** Individual page files

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Page - Your Name',
  description: 'Page description',
}
```

### Open Graph for Social Sharing

**File:** `src/app/layout.tsx`

```tsx
openGraph: {
  title: 'Your Page Title',
  description: 'Description for social media',
  type: 'website',
  url: 'https://yourdomain.com',
}
```

## Performance Tips

### Image Optimization

Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image
  src="/images/project.png"
  alt="Project"
  width={1200}
  height={600}
  priority // Use only for above-fold images
/>
```

### Code Splitting

Next.js handles this automatically. Just use `'use client'` at top of files that need interactivity.

## Common Customizations Checklist

- [ ] Update name in Hero section
- [ ] Update professional bio
- [ ] Add GitHub link
- [ ] Add LinkedIn link
- [ ] Add email
- [ ] Update experience entries
- [ ] Update skills categories
- [ ] Add your projects (3+ recommended)
- [ ] Add project images
- [ ] Add resume PDF
- [ ] Update page metadata
- [ ] Change accent color if desired
- [ ] Add profile picture
- [ ] Update CTF rankings (if applicable)
- [ ] Test on mobile device

## Quick Copy-Paste Updates

### Update Brand Name
Find & Replace: "Bandi Mohan" → "Your Name" throughout codebase

### Update Email
Find & Replace: "your@email.com" → Your actual email

### Update GitHub
Find & Replace: "https://github.com" → Your GitHub profile

## Testing Changes Locally

```bash
# Start dev server
npm run dev

# View at http://localhost:3000

# Make your changes
# Refresh browser to see updates

# Test production build
npm run build
npm run start
```

## Deploy After Customization

```bash
git add .
git commit -m "feat: customize portfolio with personal info"
git push origin main

# Changes automatically deploy to Vercel
```

---

**Need Help?**

- Check component props in `src/types/index.ts`
- Review existing examples before creating new content
- Test changes locally before pushing to GitHub
- Vercel dashboard shows deployment logs if issues occur
