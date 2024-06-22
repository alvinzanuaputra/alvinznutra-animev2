"use client";

import { DataNotFound } from "@/components/layout/data-not-found";
import { ListRecommended } from "./list-recommended";
import { TFullRecommendedAnime } from "@/types";
import { useDataPagination } from "@/lib/hooks";

const RecommendedAnimeList = () => {
  const { dataState } =
    useDataPagination<TFullRecommendedAnime>("recommendations/anime");
  return (
    <>
      {dataState && dataState.data?.length > 0 && <ListRecommended dataAnime={dataState} />}
      {dataState && dataState.data?.length <= 0 && <DataNotFound />}
      
        
    </>
  );
};

export default RecommendedAnimeList;
