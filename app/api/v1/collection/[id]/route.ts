import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const id: number = Number(req.url.split("collection/")[1]);

    await prisma.collection.delete({ where: { id: id } });

    return NextResponse.json(
      { message: "Koleksi berhasil dihapus !" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}
