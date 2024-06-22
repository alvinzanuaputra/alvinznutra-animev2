"use client";
import { TFullManga } from "@/types";
import Image from "next/image";
import { Card } from "../ui/card";
import { Star } from "../ui/star";
import Link from "next/link";
import { Breadcrumb } from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import { FC } from "react";
import 'animate.css';
import { HeroSmall } from "../layout/hero-small";

interface MangaDetailProps {
  dataManga: TFullManga;
}

const MangaDetail: FC<MangaDetailProps> = ({ dataManga }) => {
  let arrayPath;
  const path = usePathname();
  arrayPath = path.split("/").filter(Boolean);

  return (
    <>
      <div className="mb-4 bg-color-primary dark:bg-color-hitam text-left overflow-x-hidden animate__animated animate__fadeInUp animate__delay-0.3s">

        <Card className="py-2 min-h-full w-full bg-color-white dark:bg-color-hitam justify-between col-span-1">
          <div className="mx-8">
            <Breadcrumb path={arrayPath} page={dataManga.data.title} />

          </div>
        </Card>

        <HeroSmall title={dataManga.data.title} genres={dataManga.data.genres} />

        <div className="flex flex-rows-2 text-color-primary bg-color-white dark:bg-color-dark px-4 py-6 lg:py-8">


          <div className="w-8/7 lg:w-8/11 justify-center mb-4">
            <Image
              src={dataManga.data.images.webp.image_url}
              alt="image"
              width={323}
              height={150}
              className="shadow-color-hitam shadow-xl my-1 w-3/4 ml-4 lg:w-5/7 md:w-2/3"
            />
          </div>


          <div className="text-[11px] md:text-[10px] lg:text-lg sm:text-[19px] xs:pl-2">
            <h2 className="flex font-bold text-[14px] lg:font-semibold md:text-2xl lg:text-3xl sm:text-2xl text-color-accent underline">{dataManga.data.title}
            </h2>
            <p className="font-bold flex flex-row mb-4 lg:my-4 text-color-hitam dark:text-color-white">Original</p>
            <div className="w-full flex flex-rows-3 my-1 gap-2 mt-2 text-[8px] lg:gap-10 lg:text-lg text-color-hitam dark:text-color-white font-semibold">
              <p>{dataManga.data.rank}</p>
              <p>{dataManga.data.popularity}</p>
              <p className="flex flex-rows-4">
                {dataManga.data.members}
              </p>
              <p className="flex flex-rows-4">
                {dataManga.data.type}
              </p>

            </div>
            <div className="flex-rows-4">





              <div className="w-36 text-[9px] items-center my-1 lg:text-base lg:my-2 text-color-hitam font-semibold dark:text-color-white">
                <h1>Series : {dataManga.data.chapters}</h1>
              </div>
              <div className="text-[8px] md:text-xs sm:text-xs lg:text-base text-color-hitam dark:text-color-white font-semibold">
                <p className="">
                  {dataManga.data.score}
                  <span className=" text-color-accent mx-1 lg:mx-3">|</span>
                  {dataManga.data.status}
                  <span className=" text-color-accent mx-1 mb-1 lg:mx-3">|</span>
                  {dataManga.data.type}</p>

                <p className="mt-3"><Star
                  score={dataManga.data.score}
                  scoredBy={dataManga.data.scored_by}
                />
                </p>
              </div>
            </div>
          </div>


        </div>
        <section className="border-t-2 border-color-blue dark:border-color-accent"></section>
          <div className="border-color-t-2 border-color-accent px-8 py-3 my-4 bg-color-primary dark:bg-color-hitam ">
            <h1 className="text-color-hitam dark:text-color-white font-bold ">Sinopsis</h1>
            <p className="text-color-hitam dark:text-color-white mt-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">{dataManga.data.background}</p>
            <p className="text-color-hitam dark:text-color-white mb-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">{dataManga.data.synopsis}</p>
          </div>


      </div>
          <div className="px-8 pb-4 py-4 bg-color-primary dark:bg-color-hitam">
            <h1 className="text-color-hitam dark:text-color-white font-bold ">Studio dan Pembuat </h1>
            <p className="text-color-hitam dark:text-color-white mt-4 text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs">
              {dataManga.data.serializations.map((studio, index) => (
                <li key={index}>{studio.name}</li>
              ))}
              <ol className="list-disc" >
                {dataManga.data.authors.map((producer, index) => (
                  <li className="list-inside" key={index}>
                    {producer.name}
                  </li>
                ))}
              </ol>
            </p>
          </div>
        <section className="border-t-2 border-color-blue dark:border-color-accent mb-4">
        </section>
      <Link
        href={dataManga.data.url}
        target="_blank"
        className="underline mx-4 text-color-accent text-sm hover:text-color-hitam dark:hover:text-color-primary "
      >
        Kunjungi situs website resmi manga
      </Link>
    </>
  );
};

export default MangaDetail;
