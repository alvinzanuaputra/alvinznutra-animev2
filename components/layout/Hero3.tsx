"use client"
import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import 'animate.css';
import Link from 'next/link';


export const HeroSection3: FC = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const textContents: string[] = [
        "91,5   2022   904+  1hr  55min",
        "222,91   2024   139+   23min Per-ep",
        "248,18   2023   84+   23min Per-ep",
        "233,43   2023   82+   23min Per-ep",
    ];

    const destinations: string[] = [
        "/anime/50410",
        "/anime/38000",
        "/anime/40748",
        "/anime/35760",
    ];

    const totalImages: number = textContents.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((current) => (current + 1) % totalImages);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [totalImages]);

    return (
        <div className="relative overflow-hidden">
            <div className="max-h-[500px] flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                {textContents.map((text, index) => (
                    <div
                        key={index}
                        className={`mt-1 max-h-[500px] min-w-full opacity-0 backdrop-sepia-0  ${index === currentImage ? 'opacity-100 animate__animated animate__fadeInUp' : 'opacity-0'}`}
                        style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', position: 'relative' }}
                    >
                        <p className="lg:text-xl  font-semibold md:text-[12px] text-[8px] flex items-center rounded-[2px] text-color-white text-center ">{text}</p>
                        <div className="mt-1 flex items-center max-w-[100px] lg:max-w-[600px]  ">
                            <Link href={destinations[index]}>
                                <svg
                                    className="lg:w-12 md:w-8 w-6 lg:h-12 md:h-8 h-6 rounded-full bg-color-accent hover:bg-opacity-10 p-1 duration-500 transition-all"
                                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffff" viewBox="0 0 256 256">
                                    <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
                                </svg>
                            </Link>
                        <p className="ml-3 font-semibold text-color-white flex items-center lg:text-xl md:text-[12px] text-[8px] ">Play Trailer</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};
