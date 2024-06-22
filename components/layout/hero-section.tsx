"use client"
import React, { useState, useEffect } from 'react';
import { FC } from "react";
import 'animate.css';
import { HeroSection2 } from './Hero2';
import { HeroSection3 } from './Hero3';
import 'animate.css';
import Image from 'next/image';


export const HeroSection: FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const getImageSrc: string[] = [
    "/images/op-dark.png",
    "/images/ds-dark.png",
    "/images/jj-dark.png",
    "/images/aot-dark.png",
  ];

  const totalImages: number = getImageSrc.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Scroll to the next image every 5 seconds
      setCurrentImage((current) => (current + 1) % totalImages);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [totalImages]);

  // const handleNext = () => {
  //   // Scroll to the next image
  //   setCurrentImage((current) => (current + 1) % totalImages);
  // };

  // const handlePrevious = () => {
  //   // Scroll to the previous image
  //   setCurrentImage((current) => (current - 1 + totalImages) % totalImages);
  // };
  return (
    <div className="relative overflow-hidden shadow-inner shadow-color-hitam dark:shadow-color-blue animate__animated animate__fadeInUp animate__delay-0.3s">
      <div className="max-h-[500px] flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        {Array.from({ length: totalImages }).map((_, index) => (
          <Image
            key={index}
            className={`max-h-[500px] min-w-full opacity-0 backdrop-sepia-0 ${index === currentImage ? 'opacity-100' : 'opacity-100'}`}
            width={1280}
            height={462}
            layout="responsive"
            src={getImageSrc[index]}
            alt={`Hero Section ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>

      <section className="absolute top-6 left-6 md:top-20 md:left-14 lg:top-40 lg:left-14 animate__animated animate__slideInLeft animate__delay-2s">
        <HeroSection2 />
      </section>
      <section className="absolute xs:mt-6 top-16 left-6 md:mt-1 md:top-32 md:left-14 lg:top-60 lg:left-14 animate__animated animate__slideInLeft animate__delay-2s">
        <HeroSection3 />
      </section>




























      {/* <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1">
        <CaretLeft
          size={26}
          className="text-color-primary"
          style={{ filter: 'drop-shadow(6px 9px 18px rgba(0, 0, 0, 255))' }}
        />
      </button>

      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1">
        <CaretRight
          size={26}
          className="text-color-primary"
          style={{ filter: 'drop-shadow(6px 9px 18px rgba(0, 0, 0, 255))' }}
        />
      </button> */}

    </div>
  );
};



// import React, { useState, useEffect } from 'react';
// import { CaretLeft, CaretRight } from '@phosphor-icons/react';

// const Hero: React.FC = () => {
//     const [currentImage, setCurrentImage] = useState<number>(0);
//     const images: string[] = [
//         "/image/onepiecee.png",
//         "/image/demonn.png",
//         "/image/jjj.png",
//         "/image/aott.png"
//     ];

//     const totalImages: number = images.length;

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             // Scroll to the next image every 5 seconds
//             setCurrentImage((current) => (current + 1) % totalImages);
//         }, 5000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [totalImages]);

//     const handleNext = () => {
//         // Scroll to the next image
//         setCurrentImage((current) => (current + 1) % totalImages);
//     };

//     const handlePrevious = () => {
//         // Scroll to the previous image
//         setCurrentImage((current) => (current - 1 + totalImages) % totalImages);
//     };

//     return (
//         <div className="relative overflow-hidden">
//             <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
//                 {images.map((src, index) => (
//                     <Image
//                         key={index}
//                         className={`h-screen-lg min-w-full opacity-0 backdrop-sepia-0 ${index === currentImage ? 'opacity-100' : 'opacity-20'}`}
//                         src={src}
//                         alt={`Hero Section ${index + 1}`}
//                     />
//                 ))}
//             </div>

//             <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1">
//                 <CaretLeft
//                     size={32}
//                     className="text-color-primary"
//                     style={{ filter: 'drop-shadow(6px 9px 18px rgba(0, 0, 0, 255))' }}
//                 />
//             </button>

//             <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1">
//                 <CaretRight
//                     size={32}
//                     className="text-color-primary"
//                     style={{ filter: 'drop-shadow(6px 9px 18px rgba(0, 0, 0, 255))' }}
//                 />
//             </button>
//         </div>
//     );
// };

export default HeroSection;




// <>
//   {/* <Image
//     src="/images/hero-light.png"
//     alt="Hero Section"
//     width={1400}
//     height={200}
//     className="max-h-[500px] w-full object-cover dark:hidden"
//   />
//   <Image
//     src="/images/hero-dark.png"
//     alt="Hero Section"
//     width={1400}
//     height={200}
//     className="max-h-[500px] w-full object-cover hidden dark:block"
//   /> */}
// </>


//     import React, { useState, useEffect } from 'react';
// import { CaretLeft, CaretRight } from '@phosphor-icons/react';
// import { FC } from "react";

// export const HeroSection: FC = () => {
//     const [currentImage, setCurrentImage] = useState<number>(0);
//     const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

//     const darkImages: string[] = [
//         "/images/op-dark.png",
//         "/images/ds-dark.png",
//         "/images/jj-dark.png",
//         "/images/aot-dark.png",
//     ];

//     const lightImages: string[] = [
//         "/images/op-light.png",
//         "/images/ds-light.png",
//         "/images/jj-light.png",
//         "/images/aot-light.png",
//     ];

//     const totalImages: number = darkImages.length + lightImages.length;

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentImage((current) => (current + 1) % totalImages);
//         }, 5000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [totalImages]);

//     const handleNext = () => {
//         setCurrentImage((current) => (current + 1) % totalImages);
//     };

//     const handlePrevious = () => {
//         setCurrentImage((current) => (current - 1 + totalImages) % totalImages);
//     };

//     const getImageSrc = (index: number) => {
//         const images = isDarkMode ? darkImages : lightImages;
//         return images[index];
//     };

//     const toggleMode = () => {
//         setIsDarkMode((prevMode) => !prevMode);
//     };

//     return (
//         <div className="relative overflow-hidden">

//             <div className="max-h-[500px] flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
//                 {Array.from({ length: totalImages }).map((_, index) => (
//                     <img
//                         key={index}
//                         className={`max-h-[500px] min-w-full opacity-0 backdrop-sepia-0 ${index === currentImage ? 'opacity-100' : 'opacity-20'}`}
//                         style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
//                         src={getImageSrc(index)}
//                         alt={`Hero Section ${index + 1}`}
//                     />
//                 ))}
//             </div>

//             <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1">
//                 <CaretLeft
//                     size={26}
//                     className="text-color-primary"
//                     style={{ filter: 'drop-shadow(6px 9px 18px rgba(0, 0, 0, 255))' }}
//                 />
//             </button>

//             <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1">
//                 <CaretRight
//                     size={26}
//                     className="text-color-primary"
//                     style={{ filter: 'drop-shadow(6px 9px 18px rgba(0, 0, 0, 255))' }}
//                 />
//             </button>

//             <button onClick={toggleMode} className="absolute bottom-4 right-4 bg-gray-800 text-white px-2 py-1">
//                 Toggle Mode
//             </button>
//         </div>
//     );
// };
