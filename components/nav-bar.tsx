"use client";

import * as React from "react";
import Link from "next/link";

import logo from "../app/favicon.ico";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import { ModeToggle } from "./ui/mode-toggle";

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Text to Image",
    href: "/text-to-image",
    description: "Convert text to image using AI technology.",
  },
  {
    title: "Summarization",
    href: "/summarization",
    description: "Summarize text, articles using AI technology.",
  },
];

const NavBar = () => {
  return (
    <nav className={"sticky top-0 z-50 py-3 backdrop-blur-lg"}>
      <div className="px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <NavigationMenu>
            <Link href="/" className="flex items-center space-x-2 mr-3">
              <Image src={logo} alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Calculator Hub
              </span>
            </Link>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
