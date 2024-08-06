import React from 'react'
import Topbar from '../components/Topbar';
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="bg-white flex overflow-hidden">
      <Topbar/>
         <div className="mt-16">
         {children}
         </div>
        </body>
      </html>
    );
  }
  
  