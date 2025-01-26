import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import { KBar } from "@/components/kbar";

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
      <body
        className={`${cairo.className} min-h-screen w-[90%] mx-auto antialiased`}
      >
        <KBar />
        <Navbar />
        {/* <KBarTrigger /> */}
        <Breadcrumb />
        <main className="container mx-auto mt-4 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
