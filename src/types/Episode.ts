import { StaticImageData } from "next/image";

export interface episode {
    id: number,
    title: string,
    description: string,
    thumbnail: StaticImageData
}