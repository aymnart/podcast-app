import React from 'react'
import SingleProgram from './SingleProgram'
import ProgramThumbnail1 from '@/assets/images/programs/thumbnail-1.png'

const ProgramsList = () => {

    const programs = [
        {
            id: 1,
            title: "برنامج البناء المنهجي",
            description: "برنامجٌ شرعيّ معرفي بنائيّ إلكتروني يجمع بين التأصيل الشرعي العميق وبين الثقافة",
            duration: "5 سنوات دراسة",
            thumbnail: ProgramThumbnail1,
            link: "#"
        },
        {
            id: 2,
            title: "برنامج البناء المنهجي",
            description: "برنامجٌ شرعيّ معرفي بنائيّ إلكتروني يجمع بين التأصيل الشرعي العميق وبين الثقافة",
            duration: "5 سنوات دراسة",
            thumbnail: ProgramThumbnail1,
            link: "#"
        },
        {
            id: 3,
            title: "برنامج البناء المنهجي",
            description: "برنامجٌ شرعيّ معرفي بنائيّ إلكتروني يجمع بين التأصيل الشرعي العميق وبين الثقافة",
            duration: "5 سنوات دراسة",
            thumbnail: ProgramThumbnail1,
            link: "#"
        },
        {
            id: 4,
            title: "برنامج البناء المنهجي",
            description: "برنامجٌ شرعيّ معرفي بنائيّ إلكتروني يجمع بين التأصيل الشرعي العميق وبين الثقافة",
            duration: "5 سنوات دراسة",
            thumbnail: ProgramThumbnail1,
            link: "#"
        },
        {
            id: 5,
            title: "برنامج البناء المنهجي",
            description: "برنامجٌ شرعيّ معرفي بنائيّ إلكتروني يجمع بين التأصيل الشرعي العميق وبين الثقافة",
            duration: "5 سنوات دراسة",
            thumbnail: ProgramThumbnail1,
            link: "#"
        },
        {
            id: 6,
            title: "برنامج البناء المنهجي",
            description: "برنامجٌ شرعيّ معرفي بنائيّ إلكتروني يجمع بين التأصيل الشرعي العميق وبين الثقافة",
            duration: "5 سنوات دراسة",
            thumbnail: ProgramThumbnail1,
            link: "#"
        }
    ]

    return (
        <section className="bg-muted dark:bg-[#1B1B1B] mt-4">
            <div className='container mx-auto py-12 px-4 md:px-8 lg:px-16'>
                <div className='flex flex-col gap-2 items-center justify-center text-center w-full mb-6 lg:mb-10'>
                    <p className='text-muted-foreground'>التحق وكن من أهل الأثر</p>
                    <h2 className='text-[22px] md:text-[28px] font-bold md:max-w-screen-md'>رحلة طويلة نحو الإصلاح تبدأ بخطوة</h2>
                    <p className='text-muted-foreground md:max-w-screen-md'>برامج تستند إلى القيم الإسلامية المستمدة من القرآن الكريم والسنة النبوية، وتغطي مجالات الإصلاح الذاتي، القيادة، وبناء المجتمع..</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {programs.map((program) => (
                        <SingleProgram key={program.id} {...program} />
                    ))}
                </div>
            </div>  
        </section>
    )
}

export default ProgramsList