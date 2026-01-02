# Landing Page Implementation Guide

This guide explains how to create landing pages for iOS/Android apps in this portfolio site.

## Quick Start

To create a new landing page for an app (e.g., "MyApp"):

### 1. Prepare Assets

Create a folder for your app assets:
```
public/static/assets/projects/myapp/
├── myapp_icon.png          # App icon (recommended: 1024x1024)
├── screenshot-1.png        # Main screenshot
├── screenshot-2.png        # Secondary screenshot
└── screenshot-3.png        # Third screenshot
```

**Note:** Use URL-safe filenames (no spaces). Rename files like `Simulator Screenshot...` to `screenshot-1.png`.

### 2. Create Privacy & Terms Pages

Add static HTML files:
```
public/project/myapp/
├── privacy.html            # Privacy Policy
└── terms.html              # Terms of Service
```

Use existing files as templates (e.g., `public/project/linksaver/privacy.html`).

### 3. Create Landing Page Component

Create a new component at `components/landingpage/MyappLanding.jsx`:

```jsx
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
// Import icons from react-icons as needed
import { HiStar, HiHeart } from 'react-icons/hi'

const APP_STORE_URL = 'https://apps.apple.com/...'  // Optional
const PLAY_STORE_URL = 'https://play.google.com/...'  // Optional

const MyappLanding = () => {
    const features = [
        {
            icon: HiStar,
            title: "Feature Name",
            description: "Feature description."
        },
        // Add 4-6 features
    ]

    return (
        <>
            <Head>
                <title>MyApp - Tagline</title>
                <meta name="description" content="App description" />
                {/* Add other meta tags */}
            </Head>

            <div className="min-h-screen bg-slate-50">
                {/* Hero Section */}
                {/* Features Section */}
                {/* Screenshots Section */}
                {/* CTA Section */}
                {/* Footer */}
            </div>
        </>
    )
}

export default MyappLanding
```

**Reference:** See `components/landingpage/LinksaverLanding.jsx` for a complete example.

### 4. Register the Landing Page Route

Update `pages/project/[slug]/landingpage.jsx`:

```jsx
import MyappLanding from '../../../components/landingpage/MyappLanding'

const useSlugLandingPage = () => {
    // ... existing code ...

    if (router.isReady) {
        // Add condition for your app
        if (slug === 'myapp') {
            return <MyappLanding />
        }

        // ... rest of the code ...
    }
}
```

### 5. Build & Test

```bash
npm run build   # Verify no errors
npm run dev     # Test locally at /project/myapp/landingpage
```

---

## File Structure

```
Portfolio-Site/
├── components/
│   └── landingpage/
│       ├── LinksaverLanding.jsx    # Example: Link Saver custom landing
│       ├── Hero.jsx                # Legacy hero (for LandingPages.js apps)
│       ├── Feature.jsx             # Legacy feature component
│       ├── Description.jsx         # Legacy description
│       ├── Header.jsx              # Legacy header
│       └── DownloadAds.jsx         # Legacy download buttons
│
├── constants/
│   └── LandingPages.js             # Legacy config (kanma, passvault)
│
├── pages/
│   └── project/
│       └── [slug]/
│           ├── landingpage.jsx     # Dynamic route handler
│           └── privacy.jsx         # Legacy privacy (uses LandingPages.js)
│
└── public/
    ├── static/
    │   └── assets/
    │       └── projects/
    │           └── [appname]/      # App assets (icon, screenshots)
    │
    └── project/
        └── [appname]/
            ├── privacy.html        # Static privacy policy
            └── terms.html          # Static terms of service
```

---

## Design Guidelines

### Color Scheme
- **Primary gradient:** `from-blue-600 via-blue-700 to-indigo-800` (customize per app)
- **Background:** `bg-slate-50` (light sections), `bg-white` (feature cards)
- **Dark sections:** `from-slate-800 to-slate-900`
- **Text:** `text-slate-800` (headings), `text-slate-600` (body)

### Layout Sections

1. **Hero Section**
   - App icon (100x100)
   - Title + tagline
   - Description paragraph
   - App Store / Play Store button(s)
   - Main screenshot with glow effect

2. **Features Section** (6 cards recommended)
   - Icon + title + description
   - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile

3. **Screenshots Section**
   - 3 screenshots in staggered layout
   - Center screenshot elevated (`-mt-8`, `scale-105`)
   - Side screenshots slightly faded (`opacity-80`)

4. **CTA Section**
   - App icon (smaller)
   - Heading + subtext
   - Download button

5. **Footer**
   - Copyright
   - Privacy Policy + Terms of Service links

### Images

Always add these props to `<Image />`:
```jsx
<Image
    src="/static/assets/projects/myapp/screenshot-1.png"
    alt="Descriptive alt text"
    width={280}
    height={560}
    className="rounded-[2rem] shadow-xl h-auto w-auto"  // h-auto w-auto fixes Next.js warnings
    priority  // Only for above-the-fold images
/>
```

### Icons

Use `react-icons` for feature icons:
```jsx
import { HiFolder, HiTag, HiSearch } from 'react-icons/hi'  // Heroicons
import { FaApple, FaGooglePlay } from 'react-icons/fa'      // Font Awesome
```

---

## Legacy System (LandingPages.js)

For apps that don't need custom landing pages, use the legacy system:

1. Add entry to `constants/LandingPages.js`:
```js
{
    slug: "myapp",
    name: "MyApp - Full Name",
    title: "MyApp",
    sTitle: "Short Tagline",
    subTitle: "Description",
    description: "Longer description for features section",
    playstore: "https://play.google.com/...",  // or null
    appstore: "https://apps.apple.com/...",    // or null
    features: [
        { icon: "iconname", title: "Feature", description: "..." },
        // Icons must exist in public/static/landingpage/
    ],
    // Optional: custom logo and screenshots
    logoSrc: "/static/assets/projects/myapp/icon.png",
    screenshots: [
        "/static/assets/projects/myapp/screenshot-1.png",
        "/static/assets/projects/myapp/screenshot-2.png",
        "/static/assets/projects/myapp/screenshot-3.png",
    ],
    privacy: (<body>...</body>)  // JSX for privacy page
}
```

**Note:** Custom landing page components (like `LinksaverLanding.jsx`) are preferred for new apps as they offer more flexibility.

---

## Checklist

- [ ] Assets prepared (icon + 3 screenshots, URL-safe names)
- [ ] Privacy policy HTML created
- [ ] Terms of service HTML created
- [ ] Landing page component created
- [ ] Route registered in `landingpage.jsx`
- [ ] `npm run build` passes
- [ ] Tested locally at `/project/[slug]/landingpage`
- [ ] Privacy/Terms links work
- [ ] App Store/Play Store links work (if applicable)
- [ ] Responsive design verified (mobile/tablet/desktop)

