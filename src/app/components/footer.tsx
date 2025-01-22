"use client";
import Link from "next/link";
import React from "react";
import Hr from "./hr";

interface LinkItem {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: LinkItem[];
}

const footerData: FooterSection[] = [
  {
    title: "البودكاست",
    links: [
      { name: "حول البودكاست", href: "#" },
      { name: "الحلقات", href: "#" },
      { name: "المدونة", href: "#" },
      { name: "اتصل بنا", href: "#" },
    ],
  },
  {
    title: "تابعنا",
    links: [
      { name: "تويتر", href: "#" },
      { name: "فيسبوك", href: "#" },
      { name: "إنستغرام", href: "#" },
      { name: "يوتيوب", href: "#" },
    ],
  },
  {
    title: "قانوني",
    links: [
      { name: "سياسة الخصوصية", href: "#" },
      { name: "الشروط والأحكام", href: "#" },
    ],
  },
  {
    title: "تحميل التطبيق",
    links: [
      { name: "iOS", href: "#" },
      { name: "أندرويد", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-background max-w-screen-lg mx-auto pb-2">
      <Hr className="mb-12" />
      <div className="mx-auto w-full">
        <div className="grid mx-auto w-full text-center grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {footerData.map((item) => (
            <div key={item.title}>
              <h2 className="mb-6 font-bold text-md text-foreground uppercase">
                {item.title}
              </h2>
              <ul className="text-foreground/60 font-medium">
                {item.links.map((link) => (
                  <li key={link.name} className="mb-4">
                    <Link href={link.href} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mx-auto w-full pt-6 pb-2">
          <span className="text-xs text-foreground">
            اللهم صلي وسلم على عبدك ونبيك محمد <br />
            .جميع الحقوق محفوظة. ©️ {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
