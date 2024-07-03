import Image from "next/image";
import { cn } from "@/lib/utils";

export const LogoText = ({ className }: { className?: string }) => {
  return (
    <div className="flex items-center">
      <Image src="/images/ken-red.png" width={50} height={50} alt="logo" />
      <h1 className={cn("text-xl md:text-2xl font-bold", className)}>
        ZNU<span className="text-color-accent">A</span>NIME
      </h1>
    </div>
  );
};
