import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import "./globals.css";

export const metadata: Metadata = {
  title: "eBay Project Clone",
  description: "eBay Project Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
