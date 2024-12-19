import { Card, CardContent } from "@/components/ui/card";
import { ThermometerIcon } from "lucide-react";
import React from "react";
import ChartUpIcon from "@/images/chart-up-icon.svg";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function HealthMetricSkeleton() {
  return (
    <Card>
      <Skeleton>
        <CardContent className="p-4 flex gap-x-4 justify-between items-center">
          <div className="space-y-2">
            <div className="text-sm">Blood pressure</div>
            <div className="">
              <span className="font-semibold text-xl">118/75</span>
              <span className="text-sm">mm/hg</span>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="text-xs px-1 py-0.5 inline-flex items-center rounded-full">
                <Image
                  src={ChartUpIcon}
                  alt=""
                  className="h-4 inline invisible"
                />
                <span>5%</span>
              </span>
              <span className="text-xs font-medium">Healthy</span>
            </div>
          </div>

          {/* ICON */}
          <div className="size-10 shrink-0 rounded-full border grid place-items-center">
            <ThermometerIcon className="h-5" />
          </div>
          {/* END ICON */}
        </CardContent>
      </Skeleton>
    </Card>
  );
}
