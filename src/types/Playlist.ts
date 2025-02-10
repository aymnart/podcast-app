import { StaticImageData } from "next/image"

export interface Playlist {
    id: number
    title: string
    thumbnail: StaticImageData
    length: string
}