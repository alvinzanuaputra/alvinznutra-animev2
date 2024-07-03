import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { LogoText } from "./logo-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { InputSearch } from "./input-search";

export const SheetNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className=" flex items-center min-h-[40px] rounded-md px-3 bg-color-white border border-color-secondary hover:border-color-primary hover:text-color-accent  dark:bg-color-third dark:hover:border-color-hitam transition-all duration-500"
      >
        <GiHamburgerMenu className=" text-base hover:text-color-accent transition-all duration-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <LogoText />
          </SheetTitle>
          <div className="flex flex-col justify-center w-full gap-1">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="top-list"
                className="border-t-2 border-color-secondary p-0 flex flex-col items-center justify-center sm:items-start"
              >
                <AccordionTrigger className="py-2 w-full hover:text-color-accent transition-all duration-500 cursor-pointer">
                  <p>Selebihnya</p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col w-full">
                  <Link
                    className="py-2 hover:text-color-accent hover:underline  transition-all duration-500 cursor-pointer"
                    href="/anime/top"
                  >
                    Anime Terpopuler
                  </Link>
                  <Link
                    href="/manga/top"
                    className="py-2 hover:text-color-accent hover:underline  transition-all duration-500 cursor-pointer"
                  >
                    Manga Terpopuler
                  </Link>
                  <Link
                    href="/anime/recommendations"
                    className="py-2 hover:text-color-accent hover:underline transition-all duration-500 cursor-pointer"
                  >
                    Rekomendasi Anime
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href="/anime">
              <p className="py-2 hover:text-color-accent hover:underline  transition-all duration-500 cursor-pointer">
                Anime
              </p>
            </Link>
            <Link href="/manga">
              <p className="py-2 hover:text-color-accent hover:underline transition-all duration-500 cursor-pointer">
                Manga
              </p>
            </Link>
          </div>
          <InputSearch />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
