"use client";

import Link from "next/link";
import { FC } from "react";
import { SearchIcon } from "lucide-react";

import type { TAnime, TManga } from "@/types";
import { Button } from "@/components/ui/button";
import { AnimeList } from "@/components/layout/anime-list";
import { MangaList } from "@/components/layout/manga-list";
import { Separator } from "@/components/ui/separator";

interface SearchAnimeProps {
  keyword: string;
  searchAnime: TAnime;
  searchManga: TManga;
}
const SearchAnime: FC<SearchAnimeProps> = ({
  keyword,
  searchAnime,
  searchManga,
}) => {
  return (
    <>
      <section id="anime">
        <h1 className="lg:text-2xl text-xs font-bold text-color-accent underline">
          Pencarian untuk Anime {`"`}
          {keyword}
          {`"`}
        </h1>
        {searchAnime.data.length <= 0 ? (
          <div className="gap-3 flex flex-col items-center justify-center h-[50dvh]">
            <SearchIcon className="h-12 w-10 text-neutral-400" />
            <p className="text-lg">Tidak ditemukan</p>
            <Link href="/">
              <Button>Kembali ke halaman utama</Button>
            </Link>
          </div>
        ) : (
          <AnimeList api={searchAnime} large />
        )}
      </section>
      <Separator className="my-10" />
      <section id="anime">
        <h1 className="lg:text-2xl text-xs font-bold text-color-accent underline">
          Pencarian untuk Manga {`"`}
          {keyword}
          {`"`}
        </h1>
        {searchManga.data.length <= 0 ? (
          <div className="gap-3 flex flex-col items-center justify-center h-[50dvh]">
            <SearchIcon className="h-12 w-10 text-neutral-400" />
            <p className="text-lg">Tidak ditemukan</p>
            <Link href="/">
              <Button>Kembali ke halaman utama</Button>
            </Link>
          </div>
        ) : (
          <MangaList api={searchManga} large />
        )}
      </section>
    </>
  );
};

export default SearchAnime;
