"use client";
import 'animate.css'
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { GithubIcon } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/hooks";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

interface Props {
  classNames?: string;
  pathname?: string;
}

export const LoginDialog: FC<Props> = ({ classNames, pathname }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          className={cn(
            "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-color-accent",
            classNames
          )}
        >
          Masuk
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-color-accent underline">Pilih akun kamu</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-color-hitam">
            Saat kamu masuk, kamu dapat menambahkan anime/manga ke daftar koleksi kamu sendiri, lalu kamu juga bisa
            tambahkan komentar kamu untuk anime/manga.
          </DialogDescription>
          {pathname ? (
            <div className="flex flex-col gap-2">
              <DialogClose asChild>
                <Button
                  onClick={() => signIn("github", { callbackUrl: `${pathname}` })}
                  className="w-full bg-color-primary dark:text-color-white dark:bg-color-dark  dark:hover:bg-color-dark"
                >
                  Lanjutkan dengan GitHub
                  <GithubIcon className="ml-2 w-5 h-5" />
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  onClick={() => signIn("google", { callbackUrl: `${pathname}` })}
                  className="w-full dark:text-color-white dark:bg-color-dark  dark:hover:bg-color-dark"
                >
                  Lanjutkan dengan Google
                  <FaGoogle className="ml-2 text-base font-thin" />
                </Button>
              </DialogClose>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <DialogClose asChild>
                <Button
                  onClick={() => signIn("github")}
                  className="w-full dark:text-color-white dark:bg-color-dark  dark:hover:bg-color-dark"
                >
                  Lanjutkan dengan GitHub
                  <GithubIcon className="ml-2 w-5 h-5" />
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  onClick={() => signIn("google")}
                  className="w-full dark:text-color-white dark:bg-color-dark dark:hover:bg-color-dark"
                >
                  Lanjutkan dengan Google
                  <FaGoogle className="ml-2 text-base font-thin" />
                </Button>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
  </div>
    );
  }

  return (
    <div>
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        className={cn(
          "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-color-dark hover:text-color-accent dark:hover:bg-neutral-800 dark:hover:text-red-600",
          classNames
        )}
      >
        Masuk
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-color-accent underline">Pilih akun kamu</DrawerTitle>
        </DrawerHeader>
        <DrawerDescription className="p-5">
        Saat kamu masuk, kamu dapat menambahkan anime atau manga ke daftar koleksi kamu sendiri, lalu kamu juga bisa tambahkan komentar kamu untuk anime atau manga.
        </DrawerDescription>
        {pathname ? (
          <div className="flex flex-col gap-2 p-5 pb-10">
            <DrawerClose asChild>
              <Button
                onClick={() => signIn("github", { callbackUrl: `${pathname}` })}
                className="w-full bg-color-primary dark:text-color-white dark:bg-color-dark dark:hover:bg-color-dark"
              >
                Lanjutkan dengan GitHub
                <GithubIcon className="ml-2 w-5 h-5" />
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                onClick={() => signIn("google", { callbackUrl: `${pathname}` })}
                className="w-full dark:text-color-white dark:bg-color-hitam dark:hover:bg-color-dark"
              >
                Lanjutkan dengan Google
                <FaGoogle className="ml-2 text-base font-thin" />
              </Button>
            </DrawerClose>
          </div>
        ) : (
          <div className="flex flex-col gap-2 p-5 pb-10">
            <DrawerClose asChild>
              <Button
                onClick={() => signIn("github")}
                className="w-full dark:text-color-white dark:bg-color-dark dark:hover:bg-color-dark"
              >
                Lanjutkan dengan GitHub
                <GithubIcon className="ml-2 w-5 h-5" />
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                onClick={() => signIn("google")}
                className="w-full bg-color-primary dark:text-color-white dark:bg-color-dark dark:hover:bg-color-dark"
              >
                Lanjutkan dengan Google
                <FaGoogle className="ml-2 text-base font-thin" />
              </Button>
            </DrawerClose>
          </div>
        )}
      </DrawerContent>
    </Drawer>
    </div>
  );
};
