import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import Navbar from "./components/navbar";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kalimah - كلمة",
  description: "Podcast App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        <Navbar />
        <main className="container mx-auto mt-4 px-4">{children}</main>
      </body>
    </html>
  );
}
