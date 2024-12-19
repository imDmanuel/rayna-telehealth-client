import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import { Toaster } from "sonner";

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rayna Telehealth",
  description: "A telehealth application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ReactQueryProvider>
          {children}

          <Toaster richColors />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
