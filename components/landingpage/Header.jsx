import React from 'react'
import Image from 'next/image'

function Header({ slug, logoSrc }) {
    const resolvedLogoSrc =
        typeof logoSrc === "string" && logoSrc.trim().length > 0
            ? logoSrc
            : require(`../../public/static/assets/projects/${slug}.png`)

    return (
        <div className="header flex justify-center text-[0.8rem] p-[0.2rem]" style={{ backgroundColor: '#2E0BA0' }}>
            <Image
                src={resolvedLogoSrc}
                alt={`${slug} app icon`}
                className='flex justify-end rounded-full'
                width={120}
                height={120}
                priority
            />
            <div className="menu flex">
                <ul className='flex w-[100%] justify-between'>

                </ul>
            </div>
        </div>
    )
}

export default Header