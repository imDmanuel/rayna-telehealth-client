import React from "react";
import RaynaLogo from "@/images/rayna-logo.svg";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* AUTH NAVBAR */}
      <header className="">
        <div className="px-8 py-9">
          {/* LOGO */}
          <Image src={RaynaLogo} alt="" />
          {/* END LOGO */}
        </div>
      </header>
      {/* END AUTH NAVBAR */}
      {children}
    </>
  );
}
