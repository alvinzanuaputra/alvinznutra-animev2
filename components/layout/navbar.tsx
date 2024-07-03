import Link from "next/link";
import { FC } from "react";
import { LogoText } from "./logo-text";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { AuthButton } from "@/components/auth/auth-button";
import { InputSearch } from "./input-search";
import { SheetNavbar } from "./sheet-navbar";
import 'animate.css'; 

export const Navbar: FC = () => {
  return (
    <header className="bg-color-primary px-3 py-3 sm:px-10 dark:bg-color-hitam dark:text-color-primary overflow-hidden ">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between md:w-[40%]">
          <Link href="/" className="animate__animated animate__zoomIn animate__delay-1s">
            <LogoText />
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitcher />
            <AuthButton />
            <SheetNavbar />
          </div>
        </div>
        <nav
          className="absolute z-50 left-0 w-full pb-5 px-11 font-semibold bg-color-primary dark:bg-color-hitam
      md:static md:z-auto md:flex md:w-auto md:items-center md:gap-6 md:pb-0 md:pl-0 lg:gap-11 
    top-[-300px] hidden transition-all duration-500 ease-in-out"
        >
          <ul className="block md:flex space-x-2 space-y-4 mb-4 md:mb-0 md:space-y-0 md:space-x-5">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="ps-2 flex items-center outline-none  hover:text-color-accent hover:underline transition-all duration-500">
                  <span className="animate__animated animate__fadeInUp animate__delay-2s">Selebihnya</span>
                  <ChevronDown className="ml-1 animate__animated animate__bounceIn animate__delay-1s" size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 ">
                  <Link href="/anime/top">
                    <DropdownMenuItem className=" hover:text-color-accent hover:underline transition-all duration-500 animate__animated animate__fadeInDown animate__delay-0.1s">Anime Terpopuler</DropdownMenuItem>
                  </Link>
                  <Link href="/manga/top">
                    <DropdownMenuItem className="hover:text-color-accent hover:underline transition-all duration-500 animate__animated animate__fadeInDown animate__delay-0.2s">Manga Terpopuler</DropdownMenuItem>
                  </Link>
                  <Link href="/anime/recommendations">
                    <DropdownMenuItem className="hover:text-color-accent hover:underline transition-all duration-500 animate__animated animate__fadeInDown animate__delay-0.3s">Rekomendasi Anime</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/anime" className=" hover:text-color-accent hover:underline transition-all duration-500 animate__animated animate__fadeInDown animate__delay-1.5s">
                Anime
              </Link>
            </li>
            <li>
              <Link href="/manga" className=" hover:text-color-accent hover:underline transition-all duration-500 animate__animated animate__fadeInUp animate__delay-1s">
                Manga
              </Link>
            </li>
          </ul>
          <div className="md:flex items-center space-x-2 space-y-4 justify-end md:space-y-0">
            <InputSearch />
            <div className="hidden md:flex items-center gap-1 ">
              <ThemeSwitcher />
              <AuthButton />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
