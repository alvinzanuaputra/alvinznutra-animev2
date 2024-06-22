"use client"
import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import 'animate.css';
// import Link from 'next/link';

export const HeroSection2: FC = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const textContents: string[] = [
        "One Piece Red",
        "Demon Slayer",
        "Jujutsu Kaisen",
        "Attack on Titan",
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
            <div className="max-h-[500px] flex transition-transform duration-2000 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                {textContents.map((text, index) => (
                    <div
                        key={index}
                        className={`max-h-[500px] min-w-full opacity-0 backdrop-sepia-0 ${index === currentImage ? 'opacity-100 animate__animated animate__fadeInUp' : 'opacity-0'}`}
                        style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', position: 'relative' }}
                    >
                        <span className="lg:text-4xl md:text-[9px] font-bold dark:text-color-white text-color-white">{text}</span>
                        <div className="flex flex-col max-w-[600px]">
                            <p className="flex items-center">
                                <span className="font-semibold lg:text-xl md:text-[12px] text-[8px] flex items-center rounded-[2px] border border-color-accent text-color-white text-center bg-color-hitam px-1 mb-1 ">Top-6</span>
                                <span className="font-semibold lg:text-xl md:text-[12px] text-[8px] rounded-[2px] border border-color-hitam text-color-hitam text-center bg-color-blue bg-opacity-70 px-1 inline-block mb-1 ml-[1px]">Populer</span>
                                <span className="font-semibold lg:text-xl md:text-[12px] text-[8px] flex items-center rounded-[2px] border border-color-accent text-color-white text-center bg-color-hitam px-1 mb-1 ml-2">Original</span>
                            </p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};
