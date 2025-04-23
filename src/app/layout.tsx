import type { Metadata } from "next";
import "./globals.css";
import discordFont from "@/fonts/discordFont";
import Flag from "@/components/Flag";

export const metadata: Metadata = {
  title: "Discord YSWS",
  description: "lorum ipsum dolor sit amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${discordFont.className}`}>
        <Flag />
        {children}
      </body>
    </html>
  );
}
