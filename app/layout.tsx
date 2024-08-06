import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./components/Topbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill on time",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white overflow-hidden">
   {children}
      </body>
    </html>
  );
}

