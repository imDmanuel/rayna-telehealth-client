"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";
import RaynaLogo from "@/images/rayna-logo.svg";
import {
  CalendarIcon,
  CrossIcon,
  FileIcon,
  GiftIcon,
  HeadsetIcon,
  HomeIcon,
  LucideIcon,
  SettingsIcon,
  SubtitlesIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SidebarUser } from "./sidebar-user";

const sidebarMainLinks: {
  title: string;
  Icon: LucideIcon;
  href: string;
}[] = [
  {
    title: "Dashboard",
    Icon: HomeIcon,
    href: "/dashboard",
  },
  {
    title: "Consult a Doctor",
    Icon: SubtitlesIcon,
    href: "/consult-doctor",
  },
  {
    title: "Appointments",
    Icon: CalendarIcon,
    href: "/appointments",
  },
  {
    title: "Medical History",
    Icon: FileIcon,
    href: "/medical-history",
  },
  {
    title: "My Hospitals",
    Icon: CrossIcon,
    href: "/my-hospitals",
  },
] as const;

const sidebarFooterLinks: {
  title: string;
  Icon: LucideIcon;
  href: string;
}[] = [
  {
    title: "Settings",
    Icon: SettingsIcon,
    href: "/settings",
  },
  {
    title: "Help Center",
    Icon: HeadsetIcon,
    href: "#0",
  },
  {
    title: "Refer family & friends",
    Icon: GiftIcon,
    href: "#1",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="pb-6">
      <SidebarHeader>
        <Image src={RaynaLogo} alt="Rayna Logo" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>DASHBOARD</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMainLinks.map((sidebarLink) => {
                const isActive = pathname === sidebarLink.href ? true : false;
                return (
                  <SidebarMenuItem key={sidebarLink.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={sidebarLink.href}>
                        {
                          <sidebarLink.Icon
                            className={cn(
                              "text-neutral-500",
                              isActive && "text-primary-500"
                            )}
                          />
                        }
                        <span>{sidebarLink.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {sidebarFooterLinks.map((sidebarLink) => {
            const isActive = pathname === sidebarLink.href ? true : false;
            return (
              <SidebarMenuItem key={sidebarLink.href}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={sidebarLink.href}>
                    {
                      <sidebarLink.Icon
                        className={cn(
                          "text-neutral-500",
                          isActive && "text-primary-500"
                        )}
                      />
                    }
                    <span>{sidebarLink.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        <SidebarUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
