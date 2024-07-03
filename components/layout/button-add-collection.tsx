"use client";
import { useState, type MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import 'animate.css'

import APICollection from "@/lib/apis/collection";
import type { TAnimeCollection, TMangaCollection } from "@/types";

type Props = {
  data?: TAnimeCollection;
  dataManga?: TMangaCollection;
};

export const ButtonAddCollection = ({ data, dataManga }: Props) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (data) {
      toast.promise(APICollection.addCollection(data), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Gagal menambahkan ke koleksi, coba lagi !",
        finally: () => {
          router.refresh();
          setIsSubmitting(false);
        },
      });
    }
    if (dataManga) {
      toast.promise(APICollection.addMangaCollection(dataManga), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Gagal menambahkan ke koleksi, coba lagi !",
        finally: () => {
          router.refresh();
          setIsSubmitting(false);
        },
      });
    }
  };

  return (
    <div className=" animate__animated animate__fadeInUp animate__delay-0.3s flex items-center justify-end  text-color-white dark:text-color-hitam px-5 bg-color-white border-none dark:bg-color-dark">
      <button className="mt-4 flex items-center mb-3 rounded-[4px] border lg:text-md text-[9px] border-color-hitam dark:border-color-white hover:bg-color-dark dark:hover:bg-color-white duration-500 transition-all bg-color-accent px-2 py-1 hover:text-color-secondary hover:fill-color-accent" onClick={handleClick} disabled={isSubmitting}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000" className="fill-color-white dark:fill-color-hitam" viewBox="0 0 256 256"><path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Zm0,152.46-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96ZM208,40V192a8,8,0,0,1-16,0V40H88a8,8,0,0,1,0-16H192A16,16,0,0,1,208,40Z"></path></svg> Tambah ke koleksi
      </button>
    </div>
  );
};
