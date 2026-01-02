import { FindSlug } from '../../../constants/LandingPages'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../../components/landingpage/Header'

const usePrivacyPage = () => {
    const router = useRouter()
    const { slug } = router.query
    const title = (slug + "").charAt(0).toUpperCase() + (slug + "").slice(1)

    let project = FindSlug(slug)
    
    if (router.isReady) {
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

                    <div className="flex flex-col items-center justify-start px-[5rem] p-[5rem] relative z-[2] pt-[7rem] bg-[#FFFFFF]">
                        {project.privacy}
                    </div>
                </div>
            )
        }else {
            return <ErrorPage statusCode={404} />
        }
    } else {
        return <div></div>
    }
}

export default usePrivacyPage