"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, Pickaxe } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden rounded-xl">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-zinc-950">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <Pickaxe className="mr-2 h-6 w-6" />
          <span className="truncate font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col mt-7">
          <h2 className="text-sm py-2 px-2 font-bold">Getting Started</h2>
          <MobileLink
            onOpenChange={setOpen}
            href="/introduction"
            className={cn(
              "py-2 px-2 text-sm transition-colors",
              pathname === "/introduction"
                ? "text-gray-200"
                : "text-muted-foreground"
            )}
          >
            Introduction
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/installation"
            className={cn(
              "py-2 px-2 text-sm transition-colors",
              pathname === "/installation"
                ? "text-gray-200"
                : "text-muted-foreground"
            )}
          >
            Installation
          </MobileLink>
          <h2 className="text-sm py-2 px-2 font-bold">Components</h2>
          <MobileLink
            onOpenChange={setOpen}
            href="/components/accordian"
            className={cn(
              "py-2 px-2 text-sm transition-colors",
              pathname === "/components/accordian"
                ? "text-gray-200"
                : "text-muted-foreground"
            )}
          >
            Accordian
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/components/carousel"
            className={cn(
              "py-2 px-2 text-sm transition-colors",
              pathname === "/components/carousel"
                ? "text-gray-200"
                : "text-muted-foreground"
            )}
          >
            Carousel
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/components/dropdown"
            className={cn(
              "py-2 px-2 text-sm transition-colors",
              pathname === "/components/dropdown"
                ? "text-gray-200"
                : "text-muted-foreground"
            )}
          >
            Dropdown
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/components/modal"
            className={cn(
              "py-2 px-2 text-sm transition-colors",
              pathname === "/components/modal"
                ? "text-gray-200"
                : "text-muted-foreground"
            )}
          >
            Modal
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/components/plan-selector"
            className={cn(
              "py-2 px-2 text-sm transition-colors",
              pathname === "/components/plan-selector"
                ? "text-gray-200"
                : "text-muted-foreground"
            )}
          >
            Plan Selector
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/components/sidebar"
            className={cn(
              "py-2 px-2 text-sm transition-colors",
              pathname === "/components/sidebar"
                ? "text-gray-200"
                : "text-muted-foreground"
            )}
          >
            Sidebar
          </MobileLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  target?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  target,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
}
