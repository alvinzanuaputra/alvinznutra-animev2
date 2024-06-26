import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { mal_id, title, user_image, username, user_email, comment, rating } = await req.json();

  const data = {
    mal_id: mal_id,
    title: title,
    user_email: user_email,
    username: username,
    user_image: user_image,
    comment: comment,
    rating: rating,
  };

  const createComment = await prisma.mangaComment.create({
    data,
  });

  if (!createComment) {
    return Response.json({
      status: 500,
      message: "Gagal menambahkan komentar",
    });
  } else
    return Response.json({
      status: 200,
      message: "Sukses menambahkan komentar !",
    });
}
