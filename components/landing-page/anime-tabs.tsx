import Image from "next/image";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import type { TNowAnime, TUpcomingAnime } from "@/types";
type TabsAnimeProps = {
  dataNow: TNowAnime;
  dataUpcoming: TUpcomingAnime;
};

export const TabsAnime = ({ dataNow, dataUpcoming }: TabsAnimeProps) => {
  return (
    <Tabs defaultValue="now" className="w-full lg:w-[50dvh]">
      <TabsList className="w-full">
        <TabsTrigger className="w-full uppercase font-semibold text-sm" value="now">
          Musim Ini
        </TabsTrigger>
        <TabsTrigger className="w-full uppercase font-semibold text-sm" value="upcoming">
          Mendatang
        </TabsTrigger>
      </TabsList>
      <TabsContent value="now">
        <Card className="rounded-md border-none bg-color-white dark:bg-color-hitam">
          {dataNow.data?.map((anime, index) => (
            <Link href={`/anime/${anime.mal_id}`} key={index}>
              <CardContent className="p-3 pb-0">
                <div className="flex">
                  <Image
                    src={anime.images.webp.large_image_url}
                    width={50}
                    height={50}
                    alt="Hero Section"
                    className="hover-image max-h-20 w-14 object-cover"
                  />
                  <div className="ms-5">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <h1 className="line-clamp-2 text-start text-base font-semibold transition-all hover:text-color-accent">
                            {anime.title}
                          </h1>
                        </TooltipTrigger>
                        <TooltipContent>{anime.title}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <p className="text-xs">
                      Episode {anime.episodes}, Sumber: {anime.source}
                    </p>
                    <p className="text-xs font-semibold text-color-accent dark:text-color-accent">
                      {anime.popularity} Ditonton
                    </p>
                  </div>
                </div>
                {index !== dataNow.data?.length - 1 ? (
                  <Separator className="mt-3" />
                ) : (
                  <Separator className="mt-3 bg-inherit dark:bg-inherit" />
                )}
              </CardContent>
            </Link>
          ))}
        </Card>
      </TabsContent>
      <TabsContent value="upcoming">
        <Card className="rounded-md border-none bg-color-white dark:bg-color-hitam">
          {dataUpcoming.data?.map((anime, index) => (
            <Link href={`/anime/${anime.mal_id}`} key={index}>
              <CardContent className="p-3 pb-0">
                <div className="flex">
                  <Image
                    src={anime.images.webp.large_image_url}
                    width={50}
                    height={50}
                    alt="Hero Section"
                    className="hover-image max-h-20 w-14 object-cover"
                  />
                  <div className="ms-5">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <h1 className="line-clamp-2 text-start text-base font-semibold transition-all hover:text-color-accent">
                            {anime.title}
                          </h1>
                        </TooltipTrigger>
                        <TooltipContent>{anime.title}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <p className="text-xs">
                      Episode {anime.episodes}, Sumber: {anime.source}
                    </p>
                    <p className="text-xs font-semibold text-color-hitam dark:text-color-primary">
                      {anime.popularity} Ditonton
                    </p>
                  </div>
                </div>
                {index !== dataNow.data?.length - 1 ? (
                  <Separator className="mt-3" />
                ) : (
                  <Separator className="mt-3 bg-color-white dark:bg-color-hitam" />
                )}
              </CardContent>
            </Link>
          ))}
        </Card>
      </TabsContent>
    </Tabs>
  );
};
