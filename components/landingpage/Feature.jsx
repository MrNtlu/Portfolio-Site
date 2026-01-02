import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function Feature({icon, title, description}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-5px 0px 0px 0px" })

    const variant = {
        visible: {
            transform: "scale(1)",
        },
        hidden: {
            transform: "scale(0.5)",
        },
    }

    return (
        <div ref={ref} className="feature flex items-center justify-center flex-col relative text-center mx-12 w-[20rem] mb-[1rem]">
            <motion.div 
                variants={variant}
                transition={{
                  duration: 1,
                  type: "ease-out",
                }}
                animate={isInView ? "visible" : "hidden"}
                className="icon bg-[#081730] rounded-2xl p-4"
                style={{ backgroundColor: "#EEEEEE" }}>
                <Image src={require(`../../public/static/landingpage/${icon}.png`)} alt="" width={90} height={90}/>
            </motion.div>

            <span className="mt-5 text-3xl text-black">{title}</span>

            <span className="text-gray-700 mt-2 text-[1.1rem] h-[1rem]">
                {description}
            </span>
        </div>
    )
}

export default Feature
