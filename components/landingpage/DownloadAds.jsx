import React from 'react'
import Image from 'next/image'

function DownloadAds({ google, ios }) {
    const shouldRenderIOS = typeof ios === "string" && ios.trim().length > 0
    const shouldRenderGoogle = typeof google === "string" && google.trim().length > 0

    if (!shouldRenderIOS && !shouldRenderGoogle) {
        return null
    }

    const handleKeyDown = (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
            return
        }

        event.preventDefault()
        event.currentTarget.click()
    }

    return (
        <div className="download">
            <div className="download_images flex">
                {shouldRenderIOS ? (
                    <a
                        className="mr-[1.6rem]"
                        href={ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={0}
                        aria-label="Download on the App Store"
                        onKeyDown={handleKeyDown}
                    >
                        <Image src={require("../../public/static/assets/app_store.png")} alt="App Store" height={42} width={150} />
                    </a>
                ) : null}
                {shouldRenderGoogle ? (
                    <a
                        href={google}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={0}
                        aria-label="Get it on Google Play"
                        onKeyDown={handleKeyDown}
                    >
                        <Image src={require("../../public/static/assets/google_play.png")} alt="Google Play" height={42} width={151} />
                    </a>
                ) : null}
            </div>
        </div>
    )
}

export default DownloadAds