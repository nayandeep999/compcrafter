"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Sidebar: FC = () => {
  const pathname = usePathname();
  return (
    <div className="hidden sm:flex sm:flex-col sm:items-start sm:h-full sm:w-64">
      <h2 className="py-2 px-4 text-sm font-bold">Getting Started</h2>
      <Link
        href="/introduction"
        className={cn(
          "py-2 px-4 text-sm transition-colors hover:text-gray-200",
          pathname === "/introduction"
            ? "text-gray-200"
            : "text-muted-foreground"
        )}
      >
        Introduction
      </Link>
      <Link
        href="/installation"
        className={cn(
          "py-2 px-4 text-sm transition-colors hover:text-gray-200",
          pathname === "/installation"
            ? "text-gray-200"
            : "text-muted-foreground"
        )}
      >
        Installation
      </Link>
      <h2 className="py-2 px-4 text-sm font-bold">Components</h2>
      <Link
        href="/components/accordian"
        className={cn(
          "py-2 px-4 text-sm transition-colors hover:text-gray-200",
          pathname === "/components/accordian"
            ? "text-gray-200"
            : "text-muted-foreground"
        )}
      >
        Accordian
      </Link>
      <Link
        href="/components/carousel"
        className={cn(
          "py-2 px-4 text-sm transition-colors hover:text-gray-200",
          pathname === "/components/carousel"
            ? "text-gray-200"
            : "text-muted-foreground"
        )}
      >
        Carousel
      </Link>
      <Link
        href="/components/dropdown"
        className={cn(
          "py-2 px-4 text-sm transition-colors hover:text-gray-200",
          pathname === "/components/dropdown"
            ? "text-gray-200"
            : "text-muted-foreground"
        )}
      >
        Dropdown
      </Link>
      <Link
        href="/components/modal"
        className={cn(
          "py-2 px-4 text-sm transition-colors hover:text-gray-200",
          pathname === "/components/modal"
            ? "text-gray-200"
            : "text-muted-foreground"
        )}
      >
        Modal
      </Link>
      <Link
        href="/components/plan-selector"
        className={cn(
          "py-2 px-4 text-sm transition-colors hover:text-gray-200",
          pathname === "/components/plan-selector"
            ? "text-gray-200"
            : "text-muted-foreground"
        )}
      >
        Plan Selector
      </Link>
      <Link
        href="/components/sidebar"
        className={cn(
          "py-2 px-4 text-sm transition-colors hover:text-gray-200",
          pathname === "/components/sidebar"
            ? "text-gray-200"
            : "text-muted-foreground"
        )}
      >
        Sidebar
      </Link>
    </div>
  );
};

export default Sidebar;
