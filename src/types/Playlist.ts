import { StaticImageData } from "next/image"

export interface Playlist {
    id: number | string
    title: string
    thumbnail: StaticImageData
    length: string
}