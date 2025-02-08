import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface playlist {
    id: number | string
    title: string
    length: string
    thumbnail: StaticImageData
}

const SinglePlaylist: React.FC<playlist> = (playlist) => {
    return (
        <div className='flex flex-col gap-2'>
            <Image src={playlist.thumbnail} alt='' className='aspect-video rounded-md w-full h-auto' />
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1 w-full'>
                    <h4 className='text-sm md:text-[16px] font-normal w-[90%]'>{playlist.title}</h4>
                    <p className='text-sm text-muted-foreground truncate w-[90%]'>{playlist.length}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 46 46" fill="none">
                    <path d="M45.4375 22.9238C45.4375 35.3071 35.3788 45.3475 22.9688 45.3475C10.5587 45.3475 0.5 35.3071 0.5 22.9238C0.5 10.5404 10.5587 0.5 22.9688 0.5C35.3788 0.5 45.4375 10.5404 45.4375 22.9238Z" stroke="currentColor" />
                    <path d="M30.0807 31.0339L15.9932 16.974L15.9932 27.6622C15.9932 27.8522 15.9176 28.0344 15.783 28.1688C15.6484 28.3031 15.4658 28.3786 15.2754 28.3786C15.0851 28.3786 14.9025 28.3031 14.7679 28.1688C14.6333 28.0344 14.5577 27.8522 14.5577 27.6622V15.2452C14.5577 15.0552 14.6333 14.873 14.7679 14.7386C14.9025 14.6043 15.0851 14.5288 15.2754 14.5288L27.7168 14.5288C27.9072 14.5288 28.0898 14.6043 28.2244 14.7386C28.359 14.873 28.4346 15.0552 28.4346 15.2452C28.4346 15.4352 28.359 15.6174 28.2244 15.7517C28.0898 15.8861 27.9072 15.9615 27.7168 15.9615L17.0077 15.9615L31.0952 30.0215C31.222 30.1573 31.291 30.3369 31.2877 30.5225C31.2844 30.708 31.2091 30.8851 31.0776 31.0164C30.9461 31.1476 30.7687 31.2228 30.5827 31.2261C30.3967 31.2293 30.2168 31.1605 30.0807 31.0339Z" fill="currentColor" />
                </svg>
            </div>
        </div>
    )
}

export default SinglePlaylist