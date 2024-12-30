"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { BellIcon } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { getInitials } from "@/lib/utils";
import { useGetUser } from "../apis/user/user.queries";

export default function Navbar() {
  const userQuery = useGetUser();
  const userData = userQuery.data?.data.data;

  return (
    <header className="py-3 border-b sticky top-0 z-10 bg-background flex items-center gap-x-10 px-6">
      <SidebarTrigger />

      {/* NOTIFICATION AND PROFILE */}
      <div className="flex items-center gap-x-3 ml-auto">
        {/* NOTIFICATION ICON */}
        <div className="size-10 rounded-full bg-neutral-100 grid place-items-center">
          <BellIcon size={20} className="text-neutral-700" />
        </div>
        {/* END NOTIFICATION ICON */}

        {/* PROFILE */}
        <Avatar className="size-10">
          <AvatarImage src={userData?.profileImage} />
          <AvatarFallback>
            {getInitials([userData?.firstName, userData?.lastName]) ?? "CN"}
          </AvatarFallback>
        </Avatar>
        {/* <Image
          src={DemoProfilePic.src}
          alt=""
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
        /> */}
        {/* END PROFILE */}
      </div>
      {/* END NOTIFICATION AND PROFILE */}
    </header>
  );
}
