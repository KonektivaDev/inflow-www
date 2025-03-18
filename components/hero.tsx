import React from "react";
import Image from "next/image";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import SectionBadge from "./ui/section-badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <Wrapper>
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <Container>
        <div className="flex flex-col items-center justify-center py-20 h-full">
          <SectionBadge title="Przedstawiamy InFlow" />
          <div className="flex flex-col items-center mt-8 max-w-4xl w-11/12 md:w-full">
            <h1 className="text-3xl md:text-4xl lg:text-4xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-950 to-gray-800 dark:from-gray-50 dark:to-gray-400 text-transparent">
              InFlow to system do zarządzania finansami i dokumentami projektów
              oraz organizacji.
            </h1>
            <p className="text-sm md:text-lg font-medium text-foreground mt-6 text-center">
              To system typu All in One. To prosta w obsłudze, a zarazem
              zaawansowana dygitalizacja.
              <br />
              InFlow to prawdziwy gamechanger dla Twojego NGO.
            </p>
            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
              <Link
                href="#pricing"
                className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
              >
                <p className="text-foreground text-sm text-center md:text-lg font-medium pl-4 pr-4 lg:pr-0">
                  InFlow już wkrótce dostępny w formie subskrypcji ze stałą
                  miesięczną opłatą.
                </p>
                <Button
                  size="sm"
                  className="rounded-full hidden lg:flex border border-foreground/20"
                >
                  Szczegóły
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center py-10 md:py-20 w-full">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <Image
                src="/assets/dashboard.svg"
                alt="banner image"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
              />
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
