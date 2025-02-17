import Image from 'next/image'
import React from 'react'
import { Product } from '@/types/Product'
import Link from 'next/link'

const SingleProduct: React.FC<Product> = (product) => {
    return (
        <div className='h-auto aspect-[3/4] w-auto rounded-md relative dark:bg-[#1B1B1B]'>
            <Link href={product.url}>
                <Image src={product.thumbnail} alt={product.title} className='h-full aspect-[3/4] w-auto rounded-md absolute top-0 left-0 object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md'></div>
                <h4 className='absolute bottom-4 right-4 text-sm md:text-[16px] ml-4 font-semibold text-white border-t-4 border-white pt-2' >{product.title}</h4>
            </Link>

        </div>
    )
}

export default SingleProduct