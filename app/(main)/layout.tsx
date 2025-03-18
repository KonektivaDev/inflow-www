import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="sticky top-0 z-50 py-2 bg-background/60 backdrop-blur">
        <div className="flex justify-between items-center container mx-auto">
          <Link href="/">
            <span className="font-bold text-xl">Konektiva</span>
          </Link>
          <div className="hidden lg:block">
            <div className="flex items-center">
              <NavigationMenu className="mr-48 ">
                <NavigationMenuList>
                  {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                        
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem> */}

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Produkty</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] p-4 md:w-[500px] lg:w-[600px] ">
                        <ListItem title="Inflow" href="/inflow">
                          Zarządzanie finansami i dokumentami projektów oraz
                          organizacji.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-accent-foreground">
                        Blog
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem> */}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex gap-2"></div>
            </div>
          </div>
        </div>
        <Separator />
      </header>
      {children}
    </main>
  );
}

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
