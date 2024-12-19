import React from "react";
import DashboardSidebar from "./components/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        {/* SIDEBAR */}
        <DashboardSidebar />
        {/* END SIDEBAR */}

        {/* CONTENT */}
        <div className="w-full min-w-0">
          {/* DASHBOARD NAVBAR */}
          <Navbar />
          {/* END DASHBOARD NAVBAR */}

          {/* MAIN CONTENT */}
          {children}
          {/* END MAIN CONTENT */}
        </div>
        {/* END CONTENT */}
      </SidebarProvider>
    </>
  );
}
