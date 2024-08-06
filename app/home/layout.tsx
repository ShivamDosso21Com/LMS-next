import React from "react";
import Topbar from "../components/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Topbar />
        <main className="flex-1 ml-64 -mt-96">
          {children}
        </main>
      </body>
    </html>
  );
}
