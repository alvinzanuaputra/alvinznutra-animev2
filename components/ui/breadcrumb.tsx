import { removePath } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string[];
  page?: string;
  separator?: React.ReactNode;
}

const Separator = <p className="text-2xl">»</p>;
function Breadcrumb({ path, page, separator, ...props }: BreadcrumbProps) {
  let arrayPath = path;
  if (path[0] === "users") {
    arrayPath = removePath(path, "users");
  }
  if (path[0] === "search") {
    arrayPath = removePath(path, "search");
  }

  return (
    <div className="flex items-center space-x-1 capitalize text-sm" {...props}>
      <Link href="/" className=" hover:bg-color-accent rounded-[2px] border border-color-accent px-2">
        Beranda
      </Link>
      {separator || Separator}

      {arrayPath.map((item, index) => (
        <React.Fragment key={index}>
          {index !== arrayPath.length - 1 ? (
            <Link
              href={
                item !== "dashboard"
                  ? `/${path.slice(0, index + 1).join("/")}`
                  : `/${path.slice(0, index + 2).join("/")}`
              }
              key={index}
              className=" hover:bg-color-accent rounded-[2px] border border-color-accent px-2"
            >
              {item}
            </Link>
          ) : page ? (
            <div>{page.split('.').map((sentence, index) => (
              <p key={index} className="flex flex-rows-4">
                {sentence.split(' ').slice(0, 1).join(' ')}
              </p>
            ))}</div>
            
          ) : (
            <p key={index}>{item}</p>
          )}

          {index !== arrayPath.length - 1 ? (
            <>{separator || Separator}</>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export { Breadcrumb };
