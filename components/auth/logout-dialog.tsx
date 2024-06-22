"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import 'animate.css'

export const LogoutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="px-2 py-2 text-sm rounded-md border bg-color-white transition-all duration-500 border-color-dark hover:text-color-accent hover:border-color-primary  hover:bg-color-white dark:bg-color-hitam dark:hover:border-color-dark dark:hover:text-color-accent dark:border-color-blue  dark:hover:bg-color-hitam">
        Keluar
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-color-hitam dark:text-color-primary">Apakah kamu yakin ingin keluar ?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Cukup klik tombol merah jika Anda ingin keluar, namun jika Anda tidak{" "}bermaksud keluar,
          cukup klik yang lain atau tutup dialog ini.
        </DialogDescription>
        <DialogFooter className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:space-x-2">
          <DialogClose asChild>
            <Button 
            variant="destructive"
            onClick={() => signOut({ callbackUrl: "/" })}>
              Keluar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="bg-color-third border-color-hitam dark:border-color-white text-color-white dark:bg-color-dark">Batalkan</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
  );
};
