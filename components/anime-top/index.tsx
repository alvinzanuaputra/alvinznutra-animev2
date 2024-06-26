"use client";
import { FC } from "react";
import { useDataPagination } from "@/lib/hooks";
import { AnimeList } from "@/components/layout/anime-list";
import { DataNotFound } from "@/components/layout/data-not-found";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { TTopAnime } from "@/types";
import 'animate.css'

const TopAnimeList: FC = () => {
  const { dataState, currentPage, pageNumberLimit } = useDataPagination<TTopAnime>(
    "top/anime",
    "limit=24"
  );
  return (
    <div className="bg-color-white dark:bg-color-dark animate__animated animate__fadeInUp animate__delay-0.3s">
      {dataState && dataState.data?.length > 0 && <AnimeList api={dataState} large />}
      {dataState && dataState.data?.length <= 0 && <DataNotFound />}
      {dataState?.pagination?.last_visible_page && (
        <CustomPagination
          currentPage={currentPage}
          lastPage={dataState?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      )}
    </div>
  );
};

export default TopAnimeList;
