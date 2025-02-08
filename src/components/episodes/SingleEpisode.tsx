import React from 'react'
import Image, { StaticImageData } from "next/image";
import { Button } from '../ui/button';
import { Play } from '@phosphor-icons/react';

interface episode {
    id: number | string,
    title: string,
    description: string,
    thumbnail: StaticImageData
}

const SingleEpisode: React.FC<episode> = (episode) => {
    return (
        <div className='flex gap-4 items-center'>
            <div className='relative h-[60px] md:h-20 rounded-md aspect-video w-1/3 flex items-center'>
                <Image src={episode.thumbnail} alt={episode.title} className='aspect-video rounded-md' />
                <Button
                    size="sm"
                    variant="play"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-10 w-10"
                >
                    <Play weight="fill" className="h-1 w-1 fill-white text-white" />
                    <span className="sr-only">تشغيل البودكاست المميز</span>
                </Button>
            </div>
            <div className='flex flex-col text-start flex-wrap w-2/3'>
                <h4 className='text-sm md:text-[16px] font-normal w-[90%] md:w-full'>{episode.title}</h4>
                <p className='text-sm text-muted-foreground truncate w-[90%]'>{episode.description}</p>
            </div>
        </div>
    )
}

export default SingleEpisode