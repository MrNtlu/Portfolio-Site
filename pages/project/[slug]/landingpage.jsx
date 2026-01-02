import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../../components/landingpage/Header'
import Description from '../../../components/landingpage/Description'
import ErrorPage from 'next/error'
import { FindSlug } from '../../../constants/LandingPages'
import Hero from '../../../components/landingpage/Hero'
import LinksaverLanding from '../../../components/landingpage/LinksaverLanding'

const useSlugLandingPage = () => {
    const router = useRouter()
    const { slug } = router.query
    const title = (slug + "").charAt(0).toUpperCase() + (slug + "").slice(1)

    let project = FindSlug(slug)

    if (router.isReady) {
        // Use custom landing page for linksaver
        if (slug === 'linksaver') {
            return <LinksaverLanding />
        }

        if (project != undefined) {
            return (
                <div className='text-white overflow-hidden w-[100%]'>
                    <Head>
                        <title>{title} | MrNtlu</title>

                        <meta name="title" content={project.name} />
                        <meta name="description" content={project.subTitle} />

                        <meta property="og:type" content="website" />
                        <meta property="og:url" content={router.asPath} />
                        <meta property="og:title" content={project.name} />
                        <meta property="og:description" content={project.subTitle} />

                        <link rel="icon" href={"/favicon.ico"} />
                    </Head>

                    <Header slug={project.slug} logoSrc={project.logoSrc} />

                    <Hero
                        slug={project.slug}
                        title={project.title}
                        sTitle={project.sTitle}
                        subTitle={project.subTitle}
                        google={project.playstore}
                        ios={project.appstore}
                        screenshots={project.screenshots}
                    />

                    <Description description={project.description} features={project.features} />
                </div>
            )
        } else {
            return <ErrorPage statusCode={404} />
        }
    } else {
        return <div></div>
    }
}

export default useSlugLandingPage
