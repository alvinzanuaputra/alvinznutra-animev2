import Link from "next/link";

export const HeaderSection = ({
  highlight,
  title,
  href,
}: {
  highlight: string;
  title: string;
  href: string;
}) => {
  return (
    <div className="flex justify-between pr-5 items-center">
      <h1 className="text-xl md:text-2xl font-bold">
        <span className="text-color-hitam dark:text-color-white font-semibold"> | </span><span className="ml-1 text-color-secondary">{highlight}</span> {title}
      </h1>
      <Link
        href={href}
        className="text-xs md:text-sm transition-all text-color-hitam underline dark:text-color-white  hover:text-color-accent dark:hover:text-color-accent hover:underline underline-offset-2"
      >
        Lihat semua
      </Link>
    </div>
  );
};
