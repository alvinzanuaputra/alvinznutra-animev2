"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import YouTube from "react-youtube";
import { usePathname } from "next/navigation";
import { Star } from "@/components/ui/star";
import { Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { TFullAnime } from "@/types";
import 'animate.css';
import { HeroSmall } from "../layout/hero-small";
import YouTube, { YouTubeEvent } from 'react-youtube';



const AnimeDetail = ({ dataAnime }: { dataAnime: TFullAnime }) => {
  let arrayPath;
  const path = usePathname();
  arrayPath = path.split("/").filter(Boolean);


  useEffect(() => {
    updateMediaQuery();
    window.addEventListener("resize", updateMediaQuery);
    return () => {
      window.removeEventListener("resize", updateMediaQuery);
    };
  }, []);


  const updateMediaQuery = () => {
    setIsMobile(window.innerWidth <= 768);
    setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1200);
  };
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const option = {
    width: isMobile ? "auto" : isTablet ? "1024" : "1200",
    height: isMobile ? "360" : isTablet ? "768" : "640",
  };


  return (
    <>
      <div className="bg-color-primary dark:bg-color-hitam text-left overflow-x-hidden animate__animated animate__fadeInUp animate__delay-0.3s">

        <Card className="py-2 min-h-full w-full justify-between col-span-1">
          <div className="mx-8">
            <Breadcrumb path={arrayPath} page={dataAnime.data.title} />
          </div>
        </Card>


        <div className="gap-2 mx-8">
          <h2 className="mt-4 px-4 text-color-hitam dark:text-color-white bg-color-primary dark:bg-color-hitam">Trailer ...</h2>

        </div>
        <div className="flex py-4 justify-center">
          <YouTube
            className=""
            videoId={dataAnime?.data?.trailer?.youtube_id}
            onReady={(event: YouTubeEvent) => {
              event.target?.pauseVideo();
            }}
            opts={option}
            onError={() => alert("Video ini tidak tersedia lagi !")}
          />
        </div>
        <HeroSmall title={dataAnime.data.title} genres={dataAnime.data.genres} />
        <div className="flex flex-rows-2 text-color-primary bg-color-white dark:bg-color-dark px-4 py-6 lg:py-8">
          <div className="w-8/7 lg:w-8/11 justify-center">
            <Image
              src={
                dataAnime.data.images.webp.large_image_url
                  ? dataAnime.data.images.webp.large_image_url
                  : dataAnime.data.images.webp.large_image_url
              }
              alt="image"
              width={323}
              height={150}
              className="shadow-color-hitam shadow-xl my-1 w-3/4 ml-4 lg:w-5/7 md:w-2/3"
            />
          </div>


          <div className="text-[11px] md:text-[10px] lg:text-lg sm:text-[19px] xs:pl-2">
            <h2 className="flex font-bold text-[14px] lg:font-semibold md:text-2xl lg:text-3xl sm:text-2xl text-color-accent underline">{dataAnime.data.title}
            </h2>
            <p className="font-bold flex flex-row mb-4 lg:my-4 text-color-hitam dark:text-color-white">Original</p>
            <div className="w-full flex flex-rows-3 my-1 gap-2 mt-2 text-[8px] lg:gap-10 lg:text-lg text-color-hitam dark:text-color-white font-semibold">
              <p>V{dataAnime.data.rank}</p>
              <p>{dataAnime.data.source}</p>
              {dataAnime.data.duration.split('.').map((sentence, index) => (
                <p key={index} className="flex flex-rows-4">
                  {sentence.split(' ').slice(0, 2).join(' ')}
                </p>
              ))}
              {dataAnime.data.rating.split('.').map((sentence, index) => (
                <p key={index} className="flex flex-rows-4">
                  {sentence.split(' ').slice(0, 1).join(' ')}
                </p>
              ))}
            </div>
            <div className="flex-rows-4">
              <div className="w-36 text-[9px] items-center my-1 lg:text-base lg:my-2 text-color-hitam font-semibold dark:text-color-white">
                <h1>Episode : {dataAnime.data.episodes}</h1>
              </div>
              <div className="text-[8px] md:text-xs sm:text-xs lg:text-base text-color-hitam dark:text-color-white font-semibold">
                <p className="">
                  T {dataAnime.data.season}
                  <span className=" text-color-accent mx-1 lg:mx-3">|</span>
                  {dataAnime.data.status}
                  <span className=" text-color-accent mx-1 mb-1 lg:mx-3">|</span>
                  {dataAnime.data.type}</p>

                <p className="mt-3"><Star
                  score={dataAnime.data.score}
                  scoredBy={dataAnime.data.scored_by}
                />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 pb-14 text-sm md:text-base">
        <div className="border-color-t-2 border-color-accent px-8 py-6 my-4 bg-color-primary dark:bg-color-hitam ">
          <h1 className="text-color-hitam dark:text-color-white font-bold ">Sinopsis</h1>
          {/* <p className="text-color-hitam dark:text-color-white mt-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">{dataAnime.data.background}</p>
          <p className="text-color-hitam dark:text-color-white mb-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">{dataAnime.data.synopsis}</p> */}
          <p className="text-color-hitam dark:text-color-white mt-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">
            {dataAnime.data.background ? (
              dataAnime.data.background
            ) : (
              "Belum tersedia"
            )}
          </p>
          <p className="text-color-hitam dark:text-color-white mb-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">
            {dataAnime.data.synopsis ? (
              dataAnime.data.synopsis
            ) : (
              ""
            )}
          </p>

        </div>

        <div className="  px-8 py-6 my-4 bg-color-primary dark:bg-color-hitam">
          <h1 className="text-color-hitam dark:text-color-white font-bold ">Daftar Lagu </h1>
          {/* <p className="text-color-hitam dark:text-color-white my-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">{dataAnime.data.theme.openings.map((opening, index) => (
            <li key={index}>{opening}</li>
          ))}</p> */}

          <p className="text-color-hitam dark:text-color-white my-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">
            {dataAnime.data.theme.openings.length > 0 ? (
              <ul>
                {dataAnime.data.theme.openings.map((opening, index) => (
                  <li key={index}>{opening}</li>
                ))}
              </ul>
            ) : (
              <span>Belum tersedia</span>
            )}
          </p>
        </div>

        <div className=" px-8 py-6 my-4 bg-color-primary dark:bg-color-hitam">
          <h1 className="text-color-hitam dark:text-color-white font-bold ">Studio dan Pembuat </h1>
          <p className="text-color-hitam dark:text-color-white mt-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">
            {dataAnime.data.studios.map((studio, index) => (
              <li key={index}>{studio.name ? (
                studio.name
              ) : (
                "Belum tersedia"
              )}</li>
            ))}
            <ol className="list-disc">
              {dataAnime.data.producers.map((producer, index) => (
                <li key={index} className="list-inside">
                  {producer.name ? (
                    producer.name
                  ) : (
                    "Belum tersedia"
                  )}
                </li>
              ))}
            </ol>
          </p>
          {/* <p className="text-color-hitam dark:text-color-white mt-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">
            {dataAnime.data.studios.length > 0 && (
              <ul>
                {dataAnime.data.studios.map((studio, index) => (
                  <li key={index}>{studio.name}</li>
                ))}
              </ul>
            )}
            <ol className="list-disc">
              {dataAnime.data.producers.length > 0 ? (
                dataAnime.data.producers.map((producer, index) => (
                  <li key={index} className="list-inside">
                    {producer.name}
                  </li>
                ))
              ) : (
                <li className="list-inside">Belum tersedia</li>
              )}
            </ol>
          </p> */}

        </div>
        <section className="border-t-2 border-color-blue dark:border-color-accent mb-3"></section>
        <Link
          href={dataAnime.data.url}
          target="_blank"
          className="underline mx-4 text-color-accent text-sm hover:text-color-hitam dark:hover:text-color-primary "
        >
          Kunjungi situs website resmi anime
        </Link>
      </div>
    </>
  );
};

export default AnimeDetail;
