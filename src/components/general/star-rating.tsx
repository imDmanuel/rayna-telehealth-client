import { cn } from "@/lib/utils";
import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

type StarRatingProps = {
  rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => {
        const isFilled = rating >= index;
        return (
          <StarFilledIcon className={cn(isFilled && "text-warning-300")} />
        );
      })}
    </div>
  );
}
