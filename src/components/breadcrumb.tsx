"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { House, TagChevron } from "@phosphor-icons/react";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    return pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return {
        href,
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
      };
    });
  }, [pathname]);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-base">
        <motion.li
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <House className="w-5 h-5" />
            <span className="sr-only">Home</span>
          </Link>
        </motion.li>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.href}>
            <li className="text-gray-400">
              <TagChevron mirrored className="w-4 h-4" />
            </li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={breadcrumb.href}
                className={`hover:text-gray-700 transition-colors duration-200 ${
                  index === breadcrumbs.length - 1
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                }`}
                aria-current={
                  index === breadcrumbs.length - 1 ? "page" : undefined
                }
              >
                {breadcrumb.label}
              </Link>
            </motion.li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
