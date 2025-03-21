import Link from "next/link";
import React from "react";
import Icons from "../global/icons";

const Navbar = () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/inflow" className="flex items-center gap-x-2">
            <Icons.logo className="w-8 h-8" />
            <span className="text-lg font-medium">InFlow</span>
          </Link>
        </div>
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center justify-center gap-8">
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/inflow/#about-inflow"}>O InFlow</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/inflow/#features"}>Funkcje</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/inflow/#pricing"}>Cennik</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/inflow/moduly"}>Moduły</Link>
            </li>
            {/* <li className="hover:text-foreground/80 text-sm">
              <Link href={"#testimonials"}>Opinie</Link>
            </li> */}
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/inflow/faq"}>FAQ</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/inflow/o-nas"}>O nas</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"/inflow/kontakt"}>Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
