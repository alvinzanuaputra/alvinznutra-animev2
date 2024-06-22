import { Metadata } from "next";
import TopMangaList from "@/components/manga-top";
import { HeroSmall } from "@/components/layout/hero-small";
import 'animate.css'

export const metadata: Metadata = {
  title: "Manga Terpopuler",
};
const TopManga = () => {
  return (
    <>
      <HeroSmall title="Top Manga" breadcrumb />
      <section className="px-5 md:px-10 bg-color-blue dark:bg-color-dark dark:text-color-primary animate__animated animate__fadeInLeft animate__delay-1s">
        <TopMangaList />
      </section>
    </>
  );
};

export default TopManga;
