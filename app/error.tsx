"use client";

import Link from "next/link";
import { HeroSmall } from "@/components/layout/hero-small";
import { Button } from "@/components/ui/button";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <>
      <HeroSmall title="Ada suatu kesalahan !" />
      <section className="flex justify-center px-10 h-screen bg-color-blue dark:bg-color-dark">
        <div className="p-10 text-center space-y-10">
          <h1 className="text-lg font-medium text-color-accent">
            Ada kesalahan !
          </h1>
          <p className="text-md md:text-md font-black">{error.message}</p>
          <p className="text-xs md:text-sm font-medium text-color-dark dark:text-color-primary">
            Silakan coba lagi nanti atau hubungi saya jika masalah terus berlanjut.
          </p>
          <div className="space-x-2">
            <Link href="/">
              <Button
                variant="outline"
                className="hover:text-color-accent dark:hover:text-color-accent transition-all duration-500"
              >
                Coba lagi !
              </Button>
            </Link>
            <Link href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=zanualvin06@gmail.com">
              <Button variant="ghost">Hubungi saya</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
