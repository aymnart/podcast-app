import { StaticImageData } from "next/image"

export interface Product {
    id: number,
    thumbnail: StaticImageData,
    title: string
    url: string
}