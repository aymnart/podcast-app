import { StaticImageData } from "next/image"

export interface playlist {
    id: number | string
    title: string
    length: string
    thumbnail: StaticImageData
}