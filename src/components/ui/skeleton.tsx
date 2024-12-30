import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "!text-transparent box-decoration-clone",
        "animate-pulse rounded-md bg-muted",
        "*:text-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
