import Head from 'next/head'
import dynamic from 'next/dynamic'

// Import components with dynamic imports for better error handling
const Main = dynamic(() => import('../components/Main'), { ssr: true })
const Experience = dynamic(() => import('../components/Experience'), { ssr: true })
const Skills = dynamic(() => import('../components/Skills'), { ssr: true })
const Projects = dynamic(() => import('../components/Projects'), { ssr: true })
const Blog = dynamic(() => import('../components/Blog'), { ssr: true })
const Contact = dynamic(() => import('../components/Contact'), { ssr: true })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Burak Fidan | Mobile & Backend Developer</title>
        <meta name="description" content="Burak Fidan's personal portfolio - Mobile and Backend Developer specializing in Flutter, Android, iOS, and Go" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Burak Fidan | Software Developer" />
        <meta property="og:description" content="Burak Fidan's Personal Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.burakfidan.com" />
        <meta property="og:image" content="https://www.burakfidan.com/static/assets/navLogo.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Burak Fidan | Software Developer" />
        <meta name="twitter:description" content="Burak Fidan's Personal Website" />
        <meta name="twitter:image" content="https://www.burakfidan.com/static/assets/navLogo.jpg" />
      </Head>

      <main className="bg-gray-50">
        <Main />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}