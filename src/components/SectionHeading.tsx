import React, { Ref } from 'react'

interface sectionHeading {
    title: string,
    link: string,
    type: string,
    navigation: {
        nextRef: Ref<null> | null,
        prevRef: Ref<null> | null
    } | null
}

const SectionHeading: React.FC<sectionHeading> = (sectionHeading) => {
    return (
        <div className='w-full flex items-center justify-between mb-6'>
            <h2 className='text-[22px] md:text-[28px] font-bold'>{sectionHeading.title}</h2>
            <div className="flex gap-4 md:gap-6 items-center">
                {
                    sectionHeading.link && (
                        <a href={sectionHeading.link} className='text-sm text-muted-foreground hover:underline flex items-center'>
                            <span>
                                عرض الكل
                            </span>
                            {
                                sectionHeading.type !== 'slider' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 32 33" fill="none">
                                        <path clipRule="evenodd" d="M20.6302 6.88752C20.7298 6.97017 20.8116 7.07101 20.8709 7.18429C20.9302 7.29756 20.9659 7.42104 20.9759 7.54768C20.9859 7.67431 20.97 7.80162 20.9292 7.92231C20.8884 8.04301 20.8234 8.15474 20.738 8.2511L13.3119 16.644L20.738 25.0368C20.8284 25.1324 20.898 25.2446 20.9427 25.3667C20.9874 25.4889 21.0062 25.6185 20.9982 25.7478C20.9901 25.8771 20.9553 26.0036 20.8958 26.1197C20.8363 26.2357 20.7533 26.339 20.6517 26.4234C20.5502 26.5077 20.4321 26.5714 20.3047 26.6107C20.1772 26.65 20.0428 26.6641 19.9096 26.6521C19.7764 26.6401 19.647 26.6023 19.5292 26.5409C19.4114 26.4795 19.3075 26.3958 19.2238 26.2947L11.2401 17.2729C11.0852 17.0977 11 16.8746 11 16.644C11 16.4133 11.0852 16.1902 11.2401 16.015L19.2238 6.9932C19.3961 6.79883 19.641 6.67865 19.9047 6.65908C20.1684 6.6395 20.4294 6.72213 20.6302 6.88881V6.88752Z" fill="currentColor" />
                                    </svg>
                                )
                            }
                        </a>
                    )
                }
                {
                    sectionHeading.type === 'slider' && (
                        <div className="default-slider-swiper-actions-start navigation-start-style">
                            <button ref={sectionHeading.navigation.prevRef} className="default-slider-swiper-actions-start-prev prev-nav-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180 rtl:rotate-0" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z" /></svg>
                            </button>
                            <button ref={sectionHeading.navigation.nextRef} className="default-slider-swiper-actions-start-next next-nav-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-0 rtl:rotate-180" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z" /></svg>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SectionHeading