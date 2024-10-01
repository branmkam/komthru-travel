import type { Metadata } from "next";
import "./globals.css";
import { outfit_class } from "@/fonts";
import Navbar from "@/components/Navbar";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Komthru",
  description: "Where will you go next?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit_class} antialiased bg-[#b4b4c4]`}>
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
