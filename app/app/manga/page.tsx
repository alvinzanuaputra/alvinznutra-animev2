import { Metadata } from "next";

import { HeroSmall } from "@/components/layout/hero-small";
import MangaLists from "@/components/manga";

export const metadata: Metadata = {
  title: "Manga",
};

const Manga = () => {
  return (
    <>
      <HeroSmall title="All Manga" breadcrumb />
      <section className="px-5 md:px-10 bg-color-blue dark:bg-color-dark dark:text-color-primary">
        <MangaLists />
      </section>
    </>
  );
};

export default Manga;
