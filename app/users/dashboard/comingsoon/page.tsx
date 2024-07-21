import Image from 'next/image';
import React from 'react';
import srccomingsoon from '@/public/comingsoon/com.gif';
import Link from 'next/link';

const ComingSoon: React.FC = () => {
    return (
        <div className="flex px-20 py-20 items-center justify-center bg-color-white dark:bg-color-dark">
            <div className="text-center">
                <Image
                    src={srccomingsoon}
                    alt='Coming Soon'
                    width={600}
                    height={90}
                    className='bg-center flex justify-center md:h-[200px] lg:h-[350px] max-w-full mx-auto'
                />
                <p className="my-8 mx-12 text-lg text-gray-600">Kami sedang mempersiapkan sesuatu yang luar biasa untuk Anda!</p>
                <Link
                    className='bg-color-blue dark:bg-color-hitam hover:bg-color-white dark:hover:bg-color-third duration-500 transition-all text-white rounded-md px-6 py-2 border border-color-accent'
                    href="/users/dashboard">
                    Back
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;