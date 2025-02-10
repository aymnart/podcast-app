import { StaticImageData } from "next/image";

export interface Episode {
    id: number,
    title: string,
    description: string,
    thumbnail: StaticImageData
}