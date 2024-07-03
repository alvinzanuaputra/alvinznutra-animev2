"use client";
import { IoWarning } from "react-icons/io5";
import { LoginDialog } from "@/components/auth/login-dialog";
import { HeroSmall } from "@/components/layout/hero-small";
import { redirect, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const UnAuthorized = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  let pathname = "/";

  if (callbackUrl && callbackUrl !== "/") {
    const url = new URL(searchParams.get("callbackUrl")!);
    pathname = url.pathname;
  }
  if (session) {
    redirect(pathname);
  }

  return (
    <>
      <HeroSmall title="401 - Unauthorized" breadcrumbPage="UnAuthorized" />
      <section className="px-5 py-2 md:px-10 bg-color-blue dark:bg-color-dark dark:text-color-primary">
        <div className="flex flex-col mx-5 gap-5 sm:mx-10 h-[60dvh] justify-start items-center">
          <IoWarning className="text-5xl mx-auto" />
          <h1 className="text-4xl font-bold">Maaf !!</h1>
          <p className="text-xl font-medium mt-2 text-center">
            Kamu{""}belum tidak memiliki izin untuk mengakses halaman ini, silakan masuk terlebih dahulu !
          </p>
          <div className="w-full sm:w-[50dvh]">
            <LoginDialog
              classNames="py-2 bg-color-white dark:bg-color-dark dark:hover:bg-color-dark dark:border-none justify-center border font-semibold rounded"
              pathname={pathname}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UnAuthorized;
