export type HeroType = {
    id: number,
    name: string,
    description: string,
    modified: string,
    thumbnail: {
        path: string,
        extension: string,
    },
    resourceURI: string,
    comics: {
        available: number,
        collectionURI: string,
        items: Array<Ressource>,
        returned: number,
    },
    series: {
        available: number,
        collectionURI: string,
        items: Array<Ressource>,
        returned: number,
    },
    stories: {
        available: number,
        collectionURI: string,
        items: Array<RessourceWithType>,
        returned: number
    },
    events: {
        available: number,
        collectionURI: string,
        items: Array<Ressource>,
        returned: number
    },
    urls: Array<HeroUrl>
}

type Ressource = {
    resourceURI: string,
    name: string
}

type RessourceWithType = {
    resourceURI: string,
    name: string,
    type: string,
}

type HeroUrl = {
    type: string,
    url: string,
}