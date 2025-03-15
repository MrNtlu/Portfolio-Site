export const PortfolioProjects = [
    {
        slug: "watchlistfy",
        name: "Watchlistfy - AI & Tracker",
        description: `All-in-one content tracking application with AI integration. Users can track Movies, TV Shows, Anime, and Games.
        
        Features include AI suggestions based on user preferences, AI assistant for content summaries and review analysis, unlimited list management, and detailed progress tracking.`,
        tags: ["Flutter", "Go", "MongoDB", "Redis", "OpenAI", "TMDB API", "IGDB API", "Jikan API"],
        github: null,
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.watchlistfy",
        appstore: "https://apps.apple.com/us/app/watchlistfy-ai-tracker/id6474720355",
    },
    {
        slug: "kanma",
        name: "Kanma - Personal Finance Manager",
        description: `Open source personal finance manager that helps users track investments, transactions, subscriptions and detailed analytics.`,
        tags: ["Go", "MongoDB", "Flutter", "Redis", "Ope    n Api", "Scraper", "React", "TailwindCSS"],
        github: "https://github.com/MrNtlu/Asset-Manager",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.kantan",
        appstore: "https://apps.apple.com/tr/app/kanma-personal-finance/id1629419797",
    },
    {
        slug: "passvault",
        name: "PassVault - Online & Offline Manager",
        description: `App uses Jetpack Compose, Room Caching, Kotlin, Retrofit, MVVM, Hilt and Parse SDK.`,
        tags: ["Android", "Kotlin", "Jetpack Compose", "Room Caching", "Parse", "RealmDB", "MVVM", "Hilt" ],
        github: "https://github.com/MrNtlu/PassVault",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.PassVault",
        appstore: null,
    },
    {
        slug: "mai_2",
        name: "MyAnimeInfo 2 – MyAnimeList Anime & Manga Browser",
        description: `App uses Jikan API, SQLite, Room, MVVM with LiveData, Coroutines, Navigation Components and Retrofit.`,
        tags: ["Android", "Kotlin", "SQLite", "Room", "MVVM", "LiveData", "Coroutines", "Retrofit"],
        github: "https://github.com/MrNtlu/MyAnimeInfo2",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.myanimeinfo2",
        appstore: null,
    },
    {
        slug: "sugee",
        name: "Sugee Kansai",
        description: `Worked on Android & iOS Application with Firebase, Google Translate API, Google Maps API and some other libraries and API's.`,
        tags: ["Android", "iOS", "Firebase", "FCM", "Cloud Functions", "RxJava", "Kotlin", "Java", "Retrofit"],
        github: null,
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.solnetwork",
        appstore: "https://apps.apple.com/us/app/sugee-kansai/id1512411346",
    },
    // {
    //     slug: "subs",
    //     name: "Subscription Manager",
    //     description: `App w/Kotlin, MVVM, Coroutines, Navigation Components, Livedata, Retrofit and Room.

    //     App allows you to track all your subscriptions, set alarms and convert to other currencies.`,
    //     tags: ["Android", "Kotlin", "MVVM", "Coroutines", "LiveData", "Retrofit", "Room"],
    //     github: "https://github.com/MrNtlu/MySubscriptionManager",
    //     playstore: "https://github.com/MrNtlu/MySubscriptionManager",
    //     appstore: null,
    // },
    // {
    //     slug: "flt",
    //     name: "FriendsLeagueTable - Create Your Own League",
    //     description: `App uses Dagger 2, RxJava, SQLite, Room, MVVM with LiveData, Unit Testing, ButterKnife, Leak Canary and Glide.

    //     App allows you to create your own league to track your matches that you played with your friends.`,
    //     tags: ["Android", "Java", "MVVM", "RxJava", "LiveData", "SQLite", "Dagger 2", "Room"],
    //     github: "https://github.com/MrNtlu/FriendsLeagueTable",
    //     playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.friendsleaguetable",
    //     appstore: null,
    // },
    // {
    //     slug: "mai",
    //     name: "MyAnimeInfo - MyAnimeList Anime Browser APP",
    //     description: `MAL Anime Browser APP that you can search and find all the anime and user infos.`,
    //     tags: ["Android", "Java", "MVVM"],
    //     github: "https://github.com/MrNtlu/MyAnimeInfo",
    //     playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.myanimeinfo",
    //     appstore: null,
    // },
    // {
    //     slug: "wallmedia",
    //     name: "WallMedia APP",
    //     description: `Wallpaper APP that uses API and Firebase to retrive and save informations and image links.`,
    //     tags: ["Android", "Java", "Firebase"],
    //     github: "https://github.com/MrNtlu/WallMedia-APP",
    //     playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.socialmediaapp",
    //     appstore: null,
    // },
    // {
    //     slug: "todo",
    //     name: "WhatTODO",
    //     description: `ToDo APP with RealmDB and Widget`,
    //     tags: ["Android", "Java", "RealmDB"],
    //     github: "https://github.com/MrNtlu/WhatTODO",
    //     playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.whattodo",
    //     appstore: null,
    // },
    // {
    //     slug: "mad_planets",
    //     name: "Mad Planets 2D - Unity C#",
    //     description: `It's a Endless 2D game where you have to dodge incoming planets by using touch screen.`,
    //     tags: ["Unity", "2D", "C#"],
    //     github: "https://github.com/MrNtlu/MadPlanetsUnity2D",
    //     playstore: "https://play.google.com/store/apps/details?id=com.MadPlanets",
    //     appstore: null,
    // },
]

export const FindSlug = (slug) => {
    return PortfolioProjects.find(project => project.slug === slug);
}