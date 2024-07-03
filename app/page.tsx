import { getAnimeResponse, getRandomAnimeResponse } from "@/lib/apis";
import { AnimeList } from "@/components/layout/anime-list";
import { TabsAnime } from "@/components/landing-page/anime-tabs";
import { Recommendations } from "@/components/landing-page/anime-recommendations";
import { HeroSection } from "@/components/layout/hero-section";
import { HeaderSection } from "@/components/landing-page/header-section";
import type { TNowAnime, TRandomAnime, TTopAnime, TUpcomingAnime } from "@/types";
import 'animate.css';

export default async function Home() {
  const topAnime: TTopAnime | null = await getAnimeResponse("top/anime", "limit=12&filter=favorite");
  const upcomingAnime: TUpcomingAnime | null = await getAnimeResponse(
    "seasons/upcoming",
    "limit=13"
  );
  const nowAnime: TNowAnime | null = await getAnimeResponse("seasons/now", "limit=13");
  const animeForYou: TRandomAnime | null = await getRandomAnimeResponse("random/anime");

  const recommendAnime: TTopAnime = await getAnimeResponse(
    "top/anime",
    "limit=12&filter=bypopularity"
  );

  return (
    <>
      <HeroSection />
      <section className="bg-color-primary dark:bg-color-dark dark:text-color-primary">
        <div className="flex flex-col lg:flex-row gap-4 py-5 sm:mx-10 h-auto">
          <div className="block animate__animated animate__fadeInUp animate__delay-0.3s">
            <HeaderSection highlight="Anime" title="Terpopuler" href="/anime/top" />
            <div className="mx-4">
              {topAnime ? (
                <AnimeList api={topAnime} />
              ) : (
                <div className="mx-4 mt-4 flex h-screen justify-center text-xl">
                  <h1> Terjadi suatu kesalahan !, Coba Lagi</h1>
                </div>
              )}
            </div>
          </div>
          <aside className="mx-4 animate__animated animate__fadeInUp animate__delay-0.3s">
            {nowAnime && upcomingAnime && animeForYou ? (
              <>
                <TabsAnime dataNow={nowAnime} dataUpcoming={upcomingAnime} />
              </>
            ) : (
              <div className="flex h-screen justify-center text-xl">
                <h1>Terjadi suatu kesalahan !, Coba Lagi</h1>
              </div>
            )}
          </aside>
        </div>
        <div className="block sm:mx-10 pb-11">
          <HeaderSection highlight="Rekomendasi" title="Anime" href="/anime/recommendations" />
          <div className="mx-4">
            <Recommendations dataAnime={recommendAnime} />
          </div>
        </div>
      </section>
    </>
  );
}


