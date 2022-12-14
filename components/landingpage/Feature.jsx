import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Feature({icon, title, description}) {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const variant = {
        true: {
            transform: "scale(1)",
        },
        false: {
            transform: "scale(0.5)",
        },
    }

    return (
        <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)} partialVisibility={true} offset={{bottom: 5}}>
            <div className="feature flex items-center justify-center flex-col relative text-center mx-12 w-[20rem] mb-[1rem]">
                <motion.div 
                    variants={variant}
                    transition={{
                      duration: 1,
                      type: "ease-out",
                    }}
                    animate={`${elementIsVisible}`}
                    className="icon bg-[#081730] rounded-2xl p-4"
                    style={{ backgroundColor: "#EEEEEE" }}>
                    <Image src={require(`../../public/static/landingpage/${icon}.png`)} alt="" width={90} height={90}/>
                </motion.div>

                <span className="mt-5 text-3xl text-black">{title}</span>

                <span className="text-gray-700 mt-2 text-[1.1rem] h-[1rem]">
                    {description}
                </span>
            </div>
        </VisibilitySensor>
    )
}

export default Feature