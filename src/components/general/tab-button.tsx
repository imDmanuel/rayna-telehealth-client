import React from "react";
import { TabsTrigger } from "../ui/tabs";
import { LucideIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { TabsTriggerProps } from "@radix-ui/react-tabs";

export default function TabButton({
  children,
  Icon,
  tab,
  notificationCount,
  ...props
}: Omit<TabsTriggerProps, "value"> & {
  Icon: LucideIcon;
  tab: string;
  children: string;
  notificationCount: number;
}) {
  return (
    <TabsTrigger
      {...props}
      value={tab}
      className="shrink-0 p-3 gap-x-2 bg-neutral-100 border border-neutral-300 text-neutral-700 font-medium min-w-0 data-[state=active]:bg-primary-50 data-[state=active]:border-primary-75 data-[state=active]:text-neutral-900 [&[data-state=inactive]>.badge]:bg-neutral-200 [&[data-state=inactive]>.badge]:text-neutral-700 [&[data-state=inactive]>.icon]:text-neutral-400"
    >
      <Icon className="icon shrink-0 text-primary" size={16} />
      {children}
      <Badge className="badge bg-primary text-white font-medium">
        {notificationCount}
      </Badge>
    </TabsTrigger>
  );
}
