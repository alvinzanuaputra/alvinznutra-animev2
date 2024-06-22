import Image from "next/image";
import Link from "next/link";
import { CircleUserRoundIcon } from "lucide-react";

import { authUserSession } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutDialog } from "./logout-dialog";
import { LoginDialog } from "./login-dialog";
import { Button } from "../ui/button";
import 'animate.css';

export const AuthButton = async () => {
  const user = await authUserSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="animate__animated animate__fadeInLeft animate__delay-4s flex items-center px-3 py-2 rounded-md bg-color-white border border-color-secondary hover:border-color-primary hover:text-color-accent  dark:bg-color-third dark:hover:border-color-hitam transition-all duration-500">
        <CircleUserRoundIcon className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {user ? (
          <div>
            <div className="w-[50dvh] flex items-center justify-center gap-3 p-3">
              <Image
                src={user.image as string}
                width={45}
                height={45}
                alt="logo"
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">
                  Selamat datang {" "}
                  {user.name?.split(" ")[1] ? user.name?.split(" ")[1] : user.name?.split(" ")[0]}
                </h1>
                <p className="text-xs dark:text-color-white text-color-hitam">{user.email as string}</p>
              </div>
            </div>
          </div>
        ) : null}
        {user ? (
          <div className="flex flex-col gap-1 p-2 m-2">
            <Link href="/users/dashboard">
              <Button
                variant="outline"
                className="py-2 w-full text-sm font-normal transition-all duration-500 border-color-dark  hover:text-color-accent 
                dark:bg-color-hitam dark:hover:border-color-dark dark:hover:text-color-accent dark:border-color-blue  dark:hover:bg-color-hitam"
              >
                Profil
              </Button>
            </Link>
            <LogoutDialog />
          </div>
        ) : (
          <div className="relative flex w-full">
            <LoginDialog />
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
