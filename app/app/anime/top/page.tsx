import { Metadata } from "next";

import TopAnimeList from "@/components/anime-top";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "Anime Terpopuler",
};
const TopAnime = () => {
  return (
    <>
      <HeroSmall title="Top Anime" breadcrumb />
      <section className="px-5 md:px-10 bg-color-primary dark:bg-color-dark dark:text-color-primary">
        <TopAnimeList />
      </section>
    </>
  );
};

export default TopAnime;
