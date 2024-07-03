import { Metadata } from "next";
import AnimeDetail from "@/components/anime-detail";
import prisma from "@/lib/prisma";
import { getAnimeFullById } from "@/lib/apis";
import { authUserSession } from "@/lib/utils";
import { ButtonAddCollection } from "@/components/layout/button-add-collection";
import { CommentSection } from "@/components/layout/comment-section";
import { CommentInput } from "@/components/layout/comment-input";

import type { TFullAnime } from "@/types";
type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const dataAnime = await getAnimeFullById(params.id);


  return {
    title: `${dataAnime.data?.title}` || "Anime",
  };


  // const title = dataAnime?.data?.title || "Anime"; (ini adalah suatu validasi untuk agar fungsi tidak dikemmblikan)
}

const Anime = async ({ params }: { params: { id: string } }) => {
  const dataAnime: TFullAnime = await getAnimeFullById(params.id);
  const user = await authUserSession();
  const data = {
    user_email: user?.email as string,
    anime_mal_id: params.id,
    anime_image_url: dataAnime.data.images.webp.large_image_url,
    anime_title: dataAnime.data.title,
  };

  const dataComment = {
    username: user?.name as string,
    user_email: user?.email as string,
    user_image: user?.image as string,
    anime_mal_id: params.id,
    anime_title: dataAnime.data.title,
  };

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email as string, anime_mal_id: params.id },
  });

  return (
    <div className="">
      <section className="rounded-md pt-2 px-2 pb-2 md:px-10 bg-color-white dark:bg-color-dark dark:text-color-primary text-color-hitam">
        {user && !collection && <ButtonAddCollection data={data} />}
        <AnimeDetail dataAnime={dataAnime} />
        {user && <CommentInput data={dataComment} />}
        <CommentSection anime_mal_id={params.id} />
      </section>
    </div>
  );
};

export default Anime;
