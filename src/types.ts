export interface Photo {
    id: string,
    urls: {
        small: string,
        regular: string
    },
    alt_description: string
}

export interface OpenModal{
    (photo: Photo): void
}