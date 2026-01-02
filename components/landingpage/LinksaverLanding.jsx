import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { HiLink, HiFolder, HiTag, HiShare, HiCloudDownload, HiSearch } from 'react-icons/hi'

const APP_STORE_URL = 'https://apps.apple.com/us/app/link-saver-quick-easy-save/id6757252958'

const LinksaverLanding = () => {
    const features = [
        {
            icon: HiCloudDownload,
            title: "Offline Storage",
            description: "Save links locally and access them anytime, anywhere."
        },
        {
            icon: HiFolder,
            title: "Folder Organization",
            description: "Keep your links organized with custom folders."
        },
        {
            icon: HiTag,
            title: "Tag System",
            description: "Add tags for quick filtering and categorization."
        },
        {
            icon: HiShare,
            title: "Share Extension",
            description: "Save links directly from Safari and other apps."
        },
        {
            icon: HiSearch,
            title: "Quick Search",
            description: "Find any saved link instantly with powerful search."
        },
        {
            icon: HiLink,
            title: "Rich Previews",
            description: "Automatic metadata fetching with beautiful previews."
        }
    ]

    return (
        <>
            <Head>
                <title>Link Saver - Offline URL Organizer for iOS</title>
                <meta name="title" content="Link Saver - Offline URL Organizer for iOS" />
                <meta name="description" content="Save links offline with rich previews, folders/tags, and Share Extension support. A beautiful iOS app for organizing your bookmarks." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Link Saver - Offline URL Organizer for iOS" />
                <meta property="og:description" content="Save links offline with rich previews, folders/tags, and Share Extension support." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-slate-50">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full translate-x-1/3 translate-y-1/3" />
                    </div>

                    <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            {/* Left Content */}
                            <div className="flex-1 text-center lg:text-left">
                                {/* App Icon */}
                                <div className="inline-block mb-6">
                                    <Image
                                        src="/static/assets/projects/linksaver/linksaver_icon.png"
                                        alt="Link Saver App Icon"
                                        width={100}
                                        height={100}
                                        className="rounded-[22px] shadow-2xl h-auto w-auto"
                                        priority
                                    />
                                </div>

                                {/* Title */}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                    Link Saver
                                </h1>

                                {/* Tagline */}
                                <p className="text-xl md:text-2xl text-blue-100 mb-6">
                                    Offline URL Organizer for iOS
                                </p>

                                {/* Description */}
                                <p className="text-blue-200 text-lg max-w-md mx-auto lg:mx-0 mb-8">
                                    Save links offline with rich previews, organize with folders and tags, 
                                    and capture URLs instantly with Share Extension.
                                </p>

                                {/* App Store Button */}
                                <a
                                    href={APP_STORE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    aria-label="Download on App Store"
                                >
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs opacity-80">Download on the</div>
                                        <div className="text-lg -mt-1">App Store</div>
                                    </div>
                                </a>

                                {/* iOS Badge */}
                                <p className="mt-6 text-blue-300 text-sm">
                                    Requires iOS 18.0 or later
                                </p>
                            </div>

                            {/* Right - Screenshot */}
                            <div className="flex-1 flex justify-center">
                                <div className="relative">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-30 scale-90" />
                                    <Image
                                        src="/static/assets/projects/linksaver/screenshot-1.png"
                                        alt="Link Saver App Screenshot"
                                        width={280}
                                        height={560}
                                        className="relative rounded-[2.5rem] shadow-2xl h-auto w-auto max-w-[280px]"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                Everything You Need
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                A thoughtfully designed app to save and organize your links with ease.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                Beautiful & Intuitive
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Designed with SwiftUI for a native iOS experience.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                            <div className="relative">
                                <Image
                                    src="/static/assets/projects/linksaver/screenshot-1.png"
                                    alt="Links View"
                                    width={220}
                                    height={440}
                                    className="rounded-[2rem] shadow-xl h-auto w-auto opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="relative md:-mt-8 z-10">
                                <Image
                                    src="/static/assets/projects/linksaver/screenshot-2.png"
                                    alt="Folders View"
                                    width={240}
                                    height={480}
                                    className="rounded-[2rem] shadow-2xl h-auto w-auto scale-105"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src="/static/assets/projects/linksaver/screenshot-3.png"
                                    alt="Settings View"
                                    width={220}
                                    height={440}
                                    className="rounded-[2rem] shadow-xl h-auto w-auto opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="mb-6">
                            <Image
                                src="/static/assets/projects/linksaver/linksaver_icon.png"
                                alt="Link Saver"
                                width={80}
                                height={80}
                                className="mx-auto rounded-[18px] shadow-lg h-auto w-auto"
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Organize Your Links?
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            Download Link Saver now and start saving links offline.
                        </p>
                        <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-slate-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            aria-label="Download on App Store"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            Download Free
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
                        <p>© 2026 Link Saver. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a 
                                href="/project/linksaver/privacy.html" 
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a 
                                href="/project/linksaver/terms.html" 
                                className="hover:text-white transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default LinksaverLanding
