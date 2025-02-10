import React, { useRef } from 'react'
import SectionHeading from '@/components/SectionHeading'
import SinglePlaylist from './SinglePlaylist'
import PlaylistThumbnail1 from '@/assets/images/playlists/thumbnail-1.png'
import PlaylistThumbnail2 from '@/assets/images/playlists/thumbnail-2.png'
import PlaylistThumbnail3 from '@/assets/images/playlists/thumbnail-3.png'
import PlaylistThumbnail4 from '@/assets/images/playlists/thumbnail-4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'



interface PlaylistsListProps {
    type: string;
}


const PlaylistsList: React.FC<PlaylistsListProps> = ({ type }) => {

    const playlists: Playlist[] = [
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
        },
        {
            id: 5,
            title: 'رياض الصالحين',
            thumbnail: PlaylistThumbnail3,
            length: '32 حلقة'
        },
        {
            id: 6,
            title: 'رياض الصالحين',
            thumbnail: PlaylistThumbnail1,
            length: '32 حلقة'
        },
        {
            id: 7,
            title: 'رياض الصالحين',
            thumbnail: PlaylistThumbnail2,
            length: '32 حلقة'
        },
        ,
        {
            id: 8,
            title: 'رياض الصالحين',
            thumbnail: PlaylistThumbnail4,
            length: '32 حلقة'
        }
    ]

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='pb-4 pt-6 md:py-8'>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex gap-1 justify-between items-center">
                <SectionHeading title='البودكاستات' link='#' type='slider' navigation={{prevRef, nextRef}} />  
            </div>

            {
                type === 'grid' ? (
                    <div className='container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 md:space-y-1'>
                        {playlists.map((playlist) => (
                            <SinglePlaylist key={playlist.id} {...playlist} />
                        ))}
                    </div>
                ) : (
                    <div className='container mx-auto !pl-0 md:!pl-8 lg:!pl-16 !pr-4 md:!pr-8 lg:!pr-16'>
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={1.4}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            modules={[Navigation]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.7,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => setTimeout(() => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.destroy()
                                swiper.navigation.init();
                                swiper.navigation.update();
                            })}
                        >
                            {playlists.map((playlist) => (
                                <SwiperSlide key={playlist.id}>
                                    <SinglePlaylist {...playlist} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )
            }

        </section>
    )
}

export default PlaylistsList