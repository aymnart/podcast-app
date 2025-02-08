import React from 'react'
import SectionHeading from '../SectionHeading'
import SinglePlaylist from './SinglePlaylist'
import PlaylistThumbnail1 from '@/assets/images/playlists/thumbnail-1.png'
import PlaylistThumbnail2 from '@/assets/images/playlists/thumbnail-2.png'
import PlaylistThumbnail3 from '@/assets/images/playlists/thumbnail-3.png'
import PlaylistThumbnail4 from '@/assets/images/playlists/thumbnail-4.png'
 

const PlaylistsList = () => {

    const playlists = [
        {
            id: 1,
            title: 'رياض الصالحين',
            thumbnail: PlaylistThumbnail1,
            length: '32 حلقة'
        },
        {
            id: 2,
            title: 'رياض الصالحين',
            thumbnail: PlaylistThumbnail2,
            length: '32 حلقة'
        },
        {
            id: 3,
            title: 'رياض الصالحين',
            thumbnail: PlaylistThumbnail3,
            length: '32 حلقة'
        },
        {
            id: 4,
            title: 'رياض الصالحين',
            thumbnail: PlaylistThumbnail4,
            length: '32 حلقة'
        }
    ]

    return (
        <section className="container mx-auto pb-4 pt-6 md:py-8 px-4 md:px-8 lg:px-16">
            <SectionHeading title='البودكاستات' display_all_url='#' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 md:space-y-1'>
                {playlists.map((playlist) => (
                    <SinglePlaylist key={playlist.id} {...playlist} />
                ))}
            </div>
        </section>
    )
}

export default PlaylistsList