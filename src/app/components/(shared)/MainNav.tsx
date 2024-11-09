"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Pickaxe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Pickaxe className="h-6 w-6" />
        <span className="font-semibold tracking-wide">{siteConfig.name}</span>
      </Link>
      <Link
        href="/components/accordian"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/components/accordian"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Components
      </Link>
    </nav>
  );
}
