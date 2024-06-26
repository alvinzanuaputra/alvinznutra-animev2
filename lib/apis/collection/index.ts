import { TAnimeCollection, TMangaCollection } from "@/types";

const APICollection = {
  addCollection: async (data: TAnimeCollection) => {
    try {
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw new Error("Gagal menambahkan ke koleksi");
    }
  },
  addMangaCollection: async (dataManga: TMangaCollection) => {
    try {
      const response = await fetch("/api/v1/collection/manga", {
        method: "POST",
        body: JSON.stringify(dataManga),
      });
      return response.json();
    } catch (error) {
      throw new Error("Gagal menambahkan ke koleksi");
    }
  },
  deleteCollection: async (id: number) => {
    try {
      const response = await fetch(`/api/v1/collection/${id}`, {
        method: "DELETE",
      });
      return response.json();
    } catch (error) {
      throw new Error("Gagal menghapus dari koleksi");
    }
  },
  deleteMangaCollection: async (id: number) => {
    try {
      const response = await fetch(`/api/v1/collection/manga/${id}`, {
        method: "DELETE",
      });
      return response.json();
    } catch (error) {
      throw new Error("Gagal menghapus dari koleksi");
    }
  },
};

export default APICollection;
