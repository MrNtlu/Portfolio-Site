import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import DownloadAds from './DownloadAds';
import Image from 'next/image'

function Hero({ slug, title, sTitle, subTitle, google, ios, screenshots }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-300px 0px 0px 0px" })

    const leftImage = {
        visible: {
            marginLeft: "10rem",
        },
        hidden: {
            marginLeft: "0rem",
        },
    };
    const rightImage = {
        visible: {
            marginRight: "10rem",
        },
        hidden: {
            marginRight: "0rem",
        },
    }

    const shouldUseCustomScreenshots = Array.isArray(screenshots) && screenshots.length >= 3
    const centerScreenshotSrc = shouldUseCustomScreenshots
        ? screenshots[0]
        : require(`../../public/static/landingpage/screenshots/${slug}_1.png`)
    const leftScreenshotSrc = shouldUseCustomScreenshots
        ? screenshots[1]
        : require(`../../public/static/landingpage/screenshots/${slug}_2.png`)
    const rightScreenshotSrc = shouldUseCustomScreenshots
        ? screenshots[2]
        : require(`../../public/static/landingpage/screenshots/${slug}_3.png`)

    return (
        <div ref={ref} className="wrapper flex flex-col items-center relative z-[3]" style={{ backgroundColor: "#2E0BA0" }}>
            <div className="headings flex flex-col items-center justify-center text-[3rem] text-center">
                <span>{title}</span>{" "}
                <span><b>{sTitle}</b></span>
                <span className="text-[20px] text-gray-400">
                    {subTitle}
                </span>
                <div className='mt-[2rem] mb-[1rem]'>
                    <DownloadAds ios={ios} google={google} />
                </div>
            </div>
            <div className="flex flex-col items-center images relative w-[100%] mb-[-7rem]">
                <motion.div
                    variants={leftImage}
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        duration: 1,
                        type: "ease-out"
                    }}
                    className='absolute h-[31rem] ml-[10rem]'>
                    <Image
                        src={leftScreenshotSrc}
                        alt={`${title} screenshot`}
                        height={496}
                        width={262}
                        className="rounded-3xl shadow-2xl h-auto w-auto"
                    />
                </motion.div>
                <motion.div
                    variants={rightImage}
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        type: "ease-out",
                        duration: 1,
                    }}
                    className='absolute h-[31rem] mr-[10rem]'>
                    <Image
                        src={rightScreenshotSrc}
                        alt={`${title} screenshot`}
                        height={496}
                        width={262}
                        className="rounded-3xl shadow-2xl h-auto w-auto"
                    />
                </motion.div>
                <Image
                    className='absolute rounded-3xl shadow-2xl h-auto w-auto'
                    src={centerScreenshotSrc}
                    alt={`${title} screenshot`}
                    height={496}
                    width={262}
                    priority
                />
            </div>
        </div>
    )
}

export default Hero
