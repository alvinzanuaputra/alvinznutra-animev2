import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Star } from "@/components/ui/star";

import type { TManga } from "@/types";

interface MangaListProps {
  api: TManga;
  large?: boolean;
}

export const MangaList: FC<MangaListProps> = ({ api, large }) => {
  return (
    <>
      <div
        className={cn(
          "dark:bg-color-dark bg-color-primary grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-5",
          large ? `xl:grid-cols-6` : `xl:grid-cols-4`
        )}
      >
        {api.data?.map((anime, index) => {
          return (
            <Card key={anime.mal_id} className="flex flex-col border-none h-full justify-between">
              <CardContent className="p-0">
            <Link
              href={`/manga/${anime.mal_id}`}
              className=" transition-all"
              key={index}
            >
            <div className="relative group">
                    <Image
                      src={anime.images.webp.large_image_url}
                      alt="image"
                      width={200}
                      height={350}
                      className="w-full max-h-72 object-cover rounded-sm transition-all transform-gpu group-hover:scale-110 group-hover:brightness-50 ease-in-out duration-300"
                      style={{ borderRadius: '0.75rem' }}
                    />
                    <div className="gap-1 absolute text-color-primary flex flex-row-2 bg-color-accent px-2 py-1 top-0 left-0 text-[8px] lg:px-2 lg:py-1 lg:top-0 lg:text-[10px] transition-all transform-gpu group-hover:scale-110 ease-in-out duration-300 rounded-tl-xl"
                    >
                      ZNUANIME
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white text-xl font-bold"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="#fff" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
                      </svg></span>
                    </div>
                  </div>
            </Link>
            
            </CardContent>
              <CardHeader className="py-2 px-0">
                <span className="text-xs dark:text-color-accent text-color-accent">
                  {anime.genres.map((genre) => genre.name).join(", ")}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <CardTitle className="line-clamp-1 p-0 text-start text-base sm:text-xl transition-all dark:text-color-primary dark:hover:text-color-accent text-color-dark hover:text-color-accent">
                        {anime.title_english ? anime.title_english : anime.title}
                      </CardTitle>
                    </TooltipTrigger>
                    <TooltipContent>
                      {anime.title_english ? anime.title_english : anime.title}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Star score={anime.score} scoredBy={anime.scored_by} />
              </CardHeader>
              <CardFooter className="flex justify-around items-end rounded p-2 bg-color-accent dark:bg-color-secondary">
                <div className="flex flex-col text-center">
                  <p className="text-sm font-semibold">{anime.members}</p>
                  <span className="text-xs">Ditonton</span>
                </div>
                <div className="flex flex-col text-center">
                  <p className="text-sm font-semibold">Movie</p>
                  <span className="text-xs ">Tipe</span>
                </div>
              </CardFooter>
            </Card> );
        })}
      </div>
    </>
  );
};
