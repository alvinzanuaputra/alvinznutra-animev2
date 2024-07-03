import { Suspense } from "react";
import { Metadata } from "next";
import RecommendedAnimeList from "@/components/anime-recommendation";
import SkeletonListRecommended from "@/components/anime-recommendation/skeleton-list-recommended";
import { HeroSmall } from "@/components/layout/hero-small";
import 'animate.css'

export const metadata: Metadata = {
  title: "Rekomendasi Anime",
};

const AnimeRecommendations = () => {
  return (
    <Suspense fallback={<SkeletonListRecommended />}>
      <HeroSmall title="Anime Recommendations" breadcrumb />
      <section className="animate__animated animate__fadeInUp animate__delay-0.3s px-5 py-3 md:px-10 md:py-5 bg-color-secondary dark:bg-color-dark dark:text-color-primary">
        <RecommendedAnimeList />
      </section>
    </Suspense>
  );
};

export default AnimeRecommendations;
