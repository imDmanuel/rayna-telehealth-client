import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React from "react";
import ChartUpIcon from "@/images/chart-up-icon.svg";
import Image from "next/image";

export default function HealthMetricCard({
  title,
  value,
  unit,
  change,
  status,
  Icon,
}: {
  title: string;
  value: string;
  unit: string;
  change: string;
  status: string;
  Icon: LucideIcon;
}) {
  return (
    <Card>
      <CardContent className="p-4 flex gap-x-4 justify-between items-center">
        <div className="space-y-2">
          <div className="text-neutral-600 text-sm">{title}</div>
          <div className="text-neutral-700">
            <span className="font-semibold text-xl">{value}</span>{" "}
            <span className="text-sm">{unit}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="bg-success-50 text-xs text-success-700 px-1 py-0.5 inline-flex items-center rounded-full">
              <Image src={ChartUpIcon} alt="" className="h-4 inline" />
              <span>{change}</span>
            </span>
            <span className="text-success-600 text-xs font-medium">
              {status}
            </span>
          </div>
        </div>

        {/* ICON */}
        <div className="size-10 shrink-0 rounded-full border grid place-items-center">
          <Icon className="h-5" />
        </div>
        {/* END ICON */}
      </CardContent>
    </Card>
  );
}
