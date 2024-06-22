import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-color-primary dark:bg-color-dark", className)}
      {...props}
    />
  )
}

export { Skeleton }
