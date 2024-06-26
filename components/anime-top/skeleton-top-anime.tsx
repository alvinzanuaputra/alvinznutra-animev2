import { HeroSmall } from "@/components/layout/hero-small";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const SkeletonTopAnime = () => {
  const large = true;
  return (
    <>
      <HeroSmall title="Top Anime" breadcrumb />
      <section className="px-5 md:px-10 bg-color-white dark:bg-color-dark dark:text-color-white">
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-5",
            large ? `xl:grid-cols-6` : `xl:grid-cols-4  bg-color-white dark:bg-color-dark`
          )}
        >
          {[...Array(24)].map((_, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <Skeleton className="p-3 w-full h-72"></Skeleton>
              </CardContent>
              <CardFooter className="flex py-2 px-3 flex-col items-start gap-1">
                <Skeleton className="w-1/2 h-[10px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkeletonTopAnime;
