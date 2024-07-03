import { FC } from "react";
import { Metadata } from "next";

import prisma from "@/lib/prisma";
import { authUserSession } from "@/lib/utils";
import { MyCollections } from "@/components/collections";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "My Collections",
};

const Collections: FC = async () => {
  const user = await authUserSession();
  const collections = await prisma.collection.findMany({
    where: { user_email: user?.email as string },
  });
  const mangaCollections = await prisma.mangaCollection.findMany({
    where: { user_email: user?.email as string },
  });
  return (
    <>
      <HeroSmall title="Koleksi saya" breadcrumb />
      <section className="px-5 md:px-10 pt-5 pb-14 bg-color-blue dark:bg-color-dark dark:text-color-primary">
        {collections.length === 0 && mangaCollections.length === 0 ? (
          <div className="h-[60dvh]">
            <h1 className="text-xl font-medium text-center dark:text-color-white">
              Belum ada koleksi yang ditambahkan
            </h1>
          </div>
        ) : (
          <MyCollections data={collections} dataManga={mangaCollections} />
        )}
      </section>
    </>
  );
};

export default Collections;
