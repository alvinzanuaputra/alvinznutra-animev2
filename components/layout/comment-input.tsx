"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { toast } from "sonner";
import { IoWarning } from "react-icons/io5";
import { useRouter } from "next/navigation";
import APIComment from "@/lib/apis/comment";
// import { Button } from "@/components/ui/button";
import { StarRatingInput } from "./star-rating-input";

import type { TAnimeComment, TMangaComment } from "@/types";

interface CommentInputProps {
  data?: Omit<TAnimeComment, "comment" | "rating">;
  dataManga?: Omit<TMangaComment, "comment" | "rating">;
}
export interface Errors {
  comment?: {
    message: string;
  };
  rating?: {
    message: string;
  };
}

export const CommentInput = ({ data, dataManga }: CommentInputProps) => {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors | null>(null);

  const payloadAnime = {
    ...data,
    comment,
    rating,
  };

  const payloadManga = {
    ...dataManga,
    comment,
    rating,
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (comment.length < 10) {
      setErrors({
        comment: {
          message: "Komentar minimal harus 10 karakter",
        },
      });
      return;
    }
    if (rating < 1) {
      setErrors({
        rating: {
          message: "Kamu perlu memberi peringkat",
        },
      });
      return;
    }
    if (data) {
      toast.promise(APIComment.addComment(payloadAnime), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Gagal menambahkan komentar",
        finally: () => {
          router.refresh();
          setIsSubmitting(false);
          setComment("");
          setRating(0);
        },
      });
    }
    if (dataManga) {
      toast.promise(APIComment.addMangaComment(payloadManga), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Gagal menambahkan komentar",
        finally: () => {
          router.refresh();
          setIsSubmitting(false);
          setComment("");
          setRating(0);
        },
      });
    }
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setComment(e.target.value);
    if (comment.length > 10) {
      setErrors(null);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mt-10 flex-col gap-4 py-3 px-5 w-full rounded drop-shadow-md bg-color-white dark:bg-color-dark">
        <h1 className="text-xl font-semibold w-full">Tambahkan komentar kamu</h1>
        <textarea
          name="comment"
          id="comment"
          cols={10}
          rows={5}
          value={comment}
          onChange={handleChange}
          className="shadow-lg shadow-color-hitam hover:shadow-none border border-color-accent hover:border-color-secondary p-3 w-full focus:outline-none text-sm md:text-base focus:ring bg-gray-100 bg-color-primary dark:bg-color-hitam focus:ring-color-hitam dark:focus:ring-color-white duration-1000 transition-all"
        />
        <StarRatingInput
          rating={rating}
          setRating={setRating}
          setErrors={setErrors}
          setIsSubmitting={setIsSubmitting}
        />
        <div className="py-1">
          {errors?.comment?.message && (
            <p className="text-red-600 flex items-center gap-2 text-sm font-normal bg-color-red p-2 rounded border border-color-accent">
              <IoWarning className="text-lg" />
              {errors.comment.message}
            </p>
          )}
          {errors?.rating?.message && (
            <p className="text-red-600 flex items-center gap-2 text-sm font-normal bg-color-red p-2 rounded border border-color-accent">
              <IoWarning className="text-lg" />
              {errors.rating.message}
            </p>
          )}
        </div>
        <button className="border border-color-accent py-2 bg-color-primary dark:bg-color-hitam duration-1000 transition-all shadow-lg shadow-color-hitam hover:shadow-none" type="submit" disabled={isSubmitting}>
          Kirim 
        </button>
      </div>
    </form>
  );
};
