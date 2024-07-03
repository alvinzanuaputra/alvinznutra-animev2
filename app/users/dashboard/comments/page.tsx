import prisma from "@/lib/prisma";
import CommentLists from "@/components/comments";
import { HeroSmall } from "@/components/layout/hero-small";
import { authUserSession } from "@/lib/utils";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "My Comments",
};

const Comments: FC = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email as string },
  });
  const mangaComments = await prisma.mangaComment.findMany({
    where: { user_email: user?.email as string },
  });
  return (
    <>
      <HeroSmall title="Komentar saya" breadcrumb />
      <section className="px-5 md:px-10 py-5 bg-color-blue dark:bg-color-dark ">
        {comments.length === 0 ? (
          <div className="h-[60dvh]">
            <h1 className="text-xl font-medium text-center dark:bg-color-dark">
              Belum ada komentar
            </h1>
          </div>
        ) : (
          <CommentLists data={comments} dataManga={mangaComments} />
        )}
      </section>
    </>
  );
};

export default Comments;
