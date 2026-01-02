# Portfolio Site

A [Next.js](https://nextjs.org/) portfolio site with app landing pages.

## URL Map

| Path | Description | Example |
|------|-------------|---------|
| `/` | Main portfolio homepage | [localhost:3000](http://localhost:3000) |
| `/project/[slug]/landingpage` | App landing pages | [localhost:3000/project/linksaver/landingpage](http://localhost:3000/project/linksaver/landingpage) |
| `/project/[slug]/privacy` | Privacy policy (legacy) | [localhost:3000/project/kanma/privacy](http://localhost:3000/project/kanma/privacy) |
| `/project/[appname]/privacy.html` | Privacy policy (static) | [localhost:3000/project/linksaver/privacy.html](http://localhost:3000/project/linksaver/privacy.html) |
| `/project/[appname]/terms.html` | Terms of service (static) | [localhost:3000/project/linksaver/terms.html](http://localhost:3000/project/linksaver/terms.html) |

### Available Landing Pages

| App | Landing Page URL |
|-----|------------------|
| Link Saver | `/project/linksaver/landingpage` |
| Kanma | `/project/kanma/landingpage` |
| PassVault | `/project/passvault/landingpage` |

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```

## Project Structure

```
Portfolio-Site/
├── components/
│   └── landingpage/          # Landing page components
│       └── LinksaverLanding.jsx  # Custom landing page example
├── constants/
│   └── LandingPages.js       # Legacy landing page config
├── pages/
│   ├── index.js              # Homepage
│   ├── resume.jsx            # Resume page
│   └── project/
│       └── [slug]/
│           ├── landingpage.jsx   # Dynamic landing page route
│           └── privacy.jsx       # Legacy privacy route
├── public/
│   ├── static/assets/projects/   # App assets (icons, screenshots)
│   └── project/                  # Static HTML pages (privacy, terms)
└── CLAUDE.md                 # Landing page implementation guide
```

## Adding New Landing Pages

See [CLAUDE.md](./CLAUDE.md) for detailed instructions on creating landing pages for new apps.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
