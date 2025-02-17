import type { Metadata } from "next";
import "./app.scss";
import { Cairo } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

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
        className={`${cairo.className} min-h-screen  antialiased relative `}
      >
        <ThemeProviderWrapper>
          <div className="absolute w-[70vw] -z-10 h-[800px] bg-[#6CBC74]  rounded-full blur-[100px] -top-[600px] left-1/2 -translate-x-1/2 opacity-0 dark:opacity-25 transition-all"></div>

          {/* <KBar />
        <Navbar /> */}
          {/* <KBarTrigger /> */}
          {/* <Breadcrumb /> */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
