import React from 'react'
import EpisodeThumbnail1 from '@/assets/images/episodes/thumbnail-1.png'
import EpisodeThumbnail2 from '@/assets/images/episodes/thumbnail-2.png'
import EpisodeThumbnail3 from '@/assets/images/episodes/thumbnail-3.png'
import EpisodeThumbnail4 from '@/assets/images/episodes/thumbnail-4.png'
import SingleEpisode from './SingleEpisode'
import SectionHeading from '@/components/SectionHeading'

const EpisodesList = () => {
    const episodes = [
        {
            id: 1,
            title: 'أنوار السنة المحمدية | رياض الصالحين 35',
            description: 'باب في الأمر بالمحافظة على السنة وآدابها',
            thumbnail: EpisodeThumbnail1,
        },
        {
            id: 2,
            title: 'أنوار السنة المحمدية | رياض الصالحين 35',
            description: 'باب في الأمر بالمحافظة على السنة وآدابها',
            thumbnail: EpisodeThumbnail2,
        },
        {
            id: 3,
            title: 'أنوار السنة المحمدية | رياض الصالحين 35',
            description: 'باب في الأمر بالمحافظة على السنة وآدابها',
            thumbnail: EpisodeThumbnail3,
        },
        {
            id: 4,
            title: 'أنوار السنة المحمدية | رياض الصالحين 35',
            description: 'باب في الأمر بالمحافظة على السنة وآدابها',
            thumbnail: EpisodeThumbnail4,
        },
        {
            id: 5,
            title: 'أنوار السنة المحمدية | رياض الصالحين 35',
            description: 'باب في الأمر بالمحافظة على السنة وآدابها',
            thumbnail: EpisodeThumbnail3,
        },
        {
            id: 6,
            title: 'أنوار السنة المحمدية | رياض الصالحين 35',
            description: 'باب في الأمر بالمحافظة على السنة وآدابها',
            thumbnail: EpisodeThumbnail2,
        }

    ]
    return (
        <section className="container mx-auto pb-4 pt-6 md:py-8 px-4 md:px-8 lg:px-16">
            <SectionHeading title='احدث الحلقات' link='#' type='grid' navigation={null} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 md:space-y-1'>
                {episodes.map((episode) => (
                    <SingleEpisode key={episode.id} {...episode} />
                ))}
            </div>
        </section>
    )
}

export default EpisodesList