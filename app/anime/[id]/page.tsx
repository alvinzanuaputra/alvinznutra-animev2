import { Metadata } from "next";
import AnimeDetail from "@/components/anime-detail";
import prisma from "@/lib/prisma";
import { getAnimeFullById } from "@/lib/apis";
import { authUserSession } from "@/lib/utils";
// import { ButtonAddCollection } from "@/components/layout/button-add-collection";
// import { CommentSection } from "@/components/layout/comment-section";
// import { CommentInput } from "@/components/layout/comment-input";

import type { TFullAnime } from "@/types";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const dataAnime = await getAnimeFullById(id);

  return {
    title: dataAnime.data?.title || "Anime",
  };
}

const Anime = async ({ params }: { params: { id: string } }) => {
  const dataAnime: TFullAnime = await getAnimeFullById(params.id);
  // const user = await authUserSession();

  // const data = {
  //   user_email: user?.email || "",
  //   anime_mal_id: params.id,
  //   anime_image_url: dataAnime.data.images.webp.large_image_url,
  //   anime_title: dataAnime.data.title,
  // };

  // const dataComment = {
  //   username: user?.name || "",
  //   user_email: user?.email || "",
  //   user_image: user?.image || "",
  //   anime_mal_id: params.id,
  //   anime_title: dataAnime.data.title,
  // };

  // const collection = await prisma.collection.findFirst({
  //   where: { user_email: user?.email || "", anime_mal_id: params.id },
  // });

  return (
    <div>
      <section className="rounded-md pt-2 px-2 pb-2 md:px-10 bg-color-white dark:bg-color-dark dark:text-color-primary text-color-hitam">
        {/* {user && !collection && <ButtonAddCollection data={data} />} */}
        <AnimeDetail dataAnime={dataAnime} />
        {/* {user && <CommentInput data={dataComment} />} */}
        {/* <CommentSection anime_mal_id={params.id} /> */}
        {/* <div className="h-20">
          <h1 className="text-xl font-medium text-center dark:text-color-white">
            Fitur Komentar Akan Datang !!!
          </h1>
        </div> */}
      </section>
    </div>
  );
};

export default Anime;
