import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

interface CustomPaginationProps {
  currentPage: number;
  lastPage: number | undefined;
  pageNumberLimit: number;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  lastPage,
  pageNumberLimit,
}) => {
  const pages = [];
  if (lastPage) {
    for (let i = 1; i <= lastPage; i++) {
      pages.push(i);
    }
  }

  const totalPages = pages.length;

  const calculateLimits = () => {
    const halfLimit = Math.floor(pageNumberLimit / 2);

    if (currentPage > halfLimit) {
      const maxPageNumberLimit = Math.min(currentPage + halfLimit, totalPages);
      const minPageNumberLimit = Math.max(
        maxPageNumberLimit - pageNumberLimit + 1,
        1
      );

      return { minPageNumberLimit, maxPageNumberLimit };
    } else {
      return {
        minPageNumberLimit: 1,
        maxPageNumberLimit: Math.min(pageNumberLimit, totalPages),
      };
    }
  };

  const { minPageNumberLimit, maxPageNumberLimit } = calculateLimits();

  const renderPageNumbers = pages.map((number, index) => {
    if (number >= minPageNumberLimit && number <= maxPageNumberLimit) {
      return (
        <PaginationLink
          key={index}
          href={`?page=${number}`}
          isActive={currentPage === number}
          className={cn(
            "hidden md:flex",

            currentPage === number
              ? "pointer-events-none"
              : "pointer-events-auto  hover:bg-color-white dark:hover:bg-color-hitam"
          )}
        >
          {number}
        </PaginationLink>
      );
    } else {
      return null;
    }
  });

  const pageIncrementBtn =
    maxPageNumberLimit < totalPages ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <PaginationItem>
              <Link
                href={`?page=${
                  currentPage + 5 >= totalPages ? totalPages : currentPage + 5
                }`}
                className="hidden md:block"
              >
                <PaginationEllipsis />
              </Link>
            </PaginationItem>
          </TooltipTrigger>
          <TooltipContent className="text-xs bg-color-primary dark:bg-color-hitam py-2 px-5 rounded">
            Lompat halaman{" "}
            {currentPage + 5 >= totalPages ? totalPages : currentPage + 5}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : null;

  const pageDecrementBtn =
    minPageNumberLimit > 1 ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <PaginationItem>
              <Link
                href={`?page=${currentPage - 5 <= 0 ? 1 : currentPage - 5}`}
                className="hidden md:block"
              >
                <PaginationEllipsis />
              </Link>
            </PaginationItem>
          </TooltipTrigger>
          <TooltipContent className="text-xs bg-color-primary dark:bg-color-hitam py-2 px-5 rounded">
            Lompat halaman {currentPage - 5 <= 0 ? 1 : currentPage - 5}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : null;

  return (
    <Pagination className="flex justify-center py-8">
      <PaginationContent>
        <PaginationPrevious
          href={`?page=${currentPage - 1}`}
          className={
            currentPage === 1
              ? "pointer-events-none"
              : "pointer-events-auto hover:bg-color-white dark:hover:bg-color-dark"
          }
        />
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <PaginationNext
          href={`?page=${currentPage + 1}`}
          className={
            currentPage === totalPages
              ? "pointer-events-none"
              : "pointer-events-auto hover:bg-color-white dark:hover:bg-color-dark"
          }
        />
      </PaginationContent>
    </Pagination>
  );
};
