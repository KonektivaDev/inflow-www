import React from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import SectionBadge from "./ui/section-badge";
// import { features } from "@/constants";
import Icons from "./global/icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, Zap } from "lucide-react";
// import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { forWho } from "@/constants";

const Features = () => {
  return (
    <div id="features" className="pt-8">
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10" />
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10" />

        <Container>
          <div className="max-w-3xl mx-auto text-start md:text-center">
            <SectionBadge title="Funkcje" />

            <h2 className="text-3xl lg:text-4xl 2xl:text-4xl mt-6 font-semibold">
              Odkryj funkcje InFlow
            </h2>
            <p className="text-muted-foreground mt-6">
              InFlow to gamechanger dla Twojego NGO, który ułatwia nie tylko
              zarządzanie finansami, ale też usprawnia ekosystem funkcjonowania
              całej organizacji. To system, który automatyzuje procesy, po to
              byś Ty mógł się skupić na rozwoju swojego projektu i organizacji.
            </p>
          </div>
        </Container>

        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="w-auto h-60" />
          </div>
        </Container>

        <Container className="flex flex-col items-center justify-center mt-8">
          <div className="grid grid-cols-2 w-full gap-4 flex-wrap max-w-4xl">
            <Card className="flex flex-col w-full border-neutral-700">
              <CardHeader className="border-b border-border">
                <CardTitle>Czym jest InFlow</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">
                    To dygitalny obieg dokumentów, który zastępuje dokumentację
                    papierową
                  </p>
                </div>
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">
                    To automatyzacja czasochłonnych procesów.
                  </p>
                </div>
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">
                    To eliminacja najczęstszych błędów w zarządzaniu finansami
                    projektów.
                  </p>
                </div>
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">
                    To dostęp do wszystkich dokumentów z dowolnego miejsca.
                  </p>
                </div>
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">To pełna transparentność.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col w-full border-neutral-700">
              <CardHeader className="border-b border-border">
                <CardTitle>Czym nie jest InFlow</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">
                    To nie mały krok do digitalizacji.
                  </p>
                </div>
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">To nie połowiczne usprawnienie.</p>
                </div>
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">
                    To nie system równolegle funkcjonujący z dokumentacją
                    finansową, która nadal będziesz musiał prowadzić w wersji
                    papierowej.
                  </p>
                </div>
                <div className="grid grid-cols-12 items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                  <p className="col-span-11">
                    To nie tylko program do rozliczania projektów, to również
                    digitalny obieg dokumentów całej organizacji
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>

        <Container className="mt-8">
          <div className="max-w-3xl mx-auto text-start md:text-center">
            <p className="text-muted-foreground">
              To prosta i intuicyjna w obsłudze, a za razem zaawansowana
              dygitalizacja i prawdziwy gamechanger dla Twojego NGO.
            </p>
          </div>
          <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
            <Link
              href="/inflow/moduly"
              className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
            >
              <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                ✨ {"  "}Dowiedz się więcej o funkcjach poszczególnych modułów
                InFlow
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
        </Container>

        <Container className="mt-8">
          <div className="flex flex-col w-full gap-4 flex-wrap max-w-4xl">
            <Card className="flex flex-col w-full border-neutral-700">
              <CardHeader className="border-b border-border">
                <CardTitle>Dla kogo jest InFlow:</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                {forWho.map((item, index) => (
                  <div
                    className="grid grid-cols-12 items-center gap-2"
                    key={index}
                  >
                    <Zap className="h-5 w-5 text-blue-700 fill-blue-300" />
                    <p className="col-span-11">{item.info}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Container>

        {/* <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features?.map((feature) => (
                <div
                  className="flex flex-col items-start px-0"
                  key={feature.title}
                >
                  <div className="flex items-center justify-center w-12 h-12">
                    <feature.icon className={cn("w-10 h-10 text-primary")} />
                  </div>

                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>

                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container> */}
      </Wrapper>
    </div>
  );
};

export default Features;
