import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Play } from '@phosphor-icons/react';
import { episode } from '@/types/Episode';



const SingleEpisode: React.FC<episode> = (episode) => {
    return (
        <div className='flex gap-4 items-center  h-20 md:h-20'>
            <div className='relative h-20 md:h-20 rounded-md aspect-video w-1/3 flex items-center'>
                <Image src={episode.thumbnail} alt={episode.title} className='aspect-video rounded-md h-fit object-cover ' />
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