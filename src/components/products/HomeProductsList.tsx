import React, { useRef, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookThumbnail1 from '@/assets/images/books/thumbnail-1.png'
import BookThumbnail2 from '@/assets/images/books/thumbnail-2.png'
import BookThumbnail3 from '@/assets/images/books/thumbnail-3.png'
import Image from 'next/image';
import SingleProduct from './SingleProduct';
import { Product } from '@/types/Product';

const HomeProductsList = () => {

    const products: Product[] = [
        {
            id: 1,
            thumbnail: BookThumbnail1,
            title: "بوصلة المصلح",
            url: "#"
        },
        {
            id: 2,
            thumbnail: BookThumbnail2,
            title: "بوصلة المصلح",
            url: "#"
        },
        {
            id: 3,
            thumbnail: BookThumbnail3,
            title: "بوصلة المصلح",
            url: "#"
        },
        {
            id: 4,
            thumbnail: BookThumbnail1,
            title: "بوصلة المصلح",
            url: "#"
        },
    ]

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    return (
        <section className='container mx-auto py-12 px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full justify-between'>
            <div className='flex flex-col items-start justify-center gap-2 md:gap-3 text-start'>
                <p className='text-muted-foreground'>على خطى الأنبياء والصالحين</p>
                <h2 className='text-[22px] md:text-[28px] font-bold'> كتب المشروع الإصلاحي </h2>
                <p className='text-muted-foreground md:max-w-md'>مجموعة مختارة من الكتب التي تستلهم من القرآن الكريم والسنة النبوية الشريفة، وتركز على تنمية الذات، إصلاح القلوب، وبناء أمة صالحة وقوية.</p>
                <button className='mt-2 items-center justify-center px-6 py-2 border border-primary text-white dark:border-gray-50/60 rounded-full text-md font-normal dark:text-white/90 bg-primary dark:bg-transparent dark:hover:bg-primary dark:hover:border-primary transition-all'>
                    اكتشف كل المجموعة
                </button>
            </div>
            <div className='flex flex-col items-end justify-center gap-2 md:gap-3 w-full'>
                <Swiper
                    className='w-full'
                    spaceBetween={18}
                    slidesPerView={2}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{
                        type: 'fraction',
                        el: '.home_products_slider_navigation_fraction',
                    }}
                    modules={[Pagination, Navigation]}
                    onSlideChange={(swiper) => {
                        setCurrentIndex(swiper.realIndex + 1)
                        setTotalPages(swiper.snapGrid.length);

                        console.log("current index: ", currentIndex);
                        console.log("total pages: ", totalPages);
                        console.log("filled width of the progressbar: ", (currentIndex/totalPages) * 100 + "%" );

                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    onSwiper={(swiper) => setTimeout(() => {
                        if (swiper?.params?.navigation && typeof swiper.params.navigation === 'object') {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                        setTotalPages(swiper.snapGrid.length);

                        console.log("current index: ", currentIndex);
                        console.log("total pages: ", totalPages);
                        console.log("filled width of the progressbar: ", (currentIndex/totalPages) * 100 + "%" );
                    })}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <SingleProduct {...product} />
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className='w-full flex justify-between items-center mt-2'>
                    <div className='home_products_slider_navigation_fraction'></div>
                    <div className="relative w-[60%] h-0.5 rounded-full bg-gray-600/20 dark:bg-gray-300/50 ">
                        <div
                            className="h-full bg-black/70 dark:bg-white/80 transition-all duration-300 rounded-full"
                            style={{ width: `${(currentIndex / totalPages) * 100}%` }}
                        ></div>
                    </div>
                    <div className="default-slider-swiper-actions-start navigation-start-style">
                        <button ref={prevRef} className="default-slider-swiper-actions-start-prev prev-nav-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180 rtl:rotate-0" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z" /></svg>
                        </button>
                        <button ref={nextRef} className="default-slider-swiper-actions-start-next next-nav-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="rotate-0 rtl:rotate-180" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z" /></svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeProductsList