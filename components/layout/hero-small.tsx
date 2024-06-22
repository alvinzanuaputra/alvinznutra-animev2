"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import 'animate.css'

interface Genres {
  mal_id: 0;
  type: "string";
  name: "string";
  url: "string";
}
interface HeroSmallProps {
  title: string;
  breadcrumb?: boolean;
  genres?: Genres[];
  breadcrumbPage?: string;
}

export const HeroSmall: FC<HeroSmallProps> = ({ breadcrumb, genres, breadcrumbPage }) => {
  const path = usePathname();
  let arrayPath;
  if (breadcrumb || breadcrumbPage) {
    arrayPath = path.split("/").filter(Boolean);
  }
  return (
    <>
      <div className="p-5 md:p-10 pt-8 bg-color-white dark:bg-color-dark animate__animated animate__fadeInUp animate__delay-0.3s">
        <div className="bg-color-accent"></div>
        <div className="top-20 md:top-28 left-10 md:left-20">
          {breadcrumb && arrayPath && <Breadcrumb path={arrayPath} />}
          {breadcrumbPage && arrayPath && <Breadcrumb path={arrayPath} page={breadcrumbPage} />}
          {genres?.map((genre) => (
            <Badge key={genre.mal_id} variant="secondary" className="text-[10px] lg:text-xs mr-1">
              {genre.name}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};
