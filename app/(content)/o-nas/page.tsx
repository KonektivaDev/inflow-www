"use client";

import React from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { LampContainer } from "@/components/ui/lamp";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { Input } from "@/components/ui/input";

export default function AboutUsPage() {
  return (
    <div id="newsletter">
      <Wrapper className="flex flex-col items-center justify-center py-2 relative">
        <Container>
          <LampContainer className="-mt-64">
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-3xl lg:text-4xl 2xl:text-4xl font-semibold">
                O Nas
              </h2>
              {/* <Button variant={"white"} className="mt-6" asChild>
                <Link href={"#"}>
                  Get started for free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button> */}
            </div>
          </LampContainer>
        </Container>

        <Container className="-mt-44">
          <p className="text-foreground mt-6">
            Nazwa InFlow odnosi się do naturalnego przepływu wody, symbolizując
            dynamikę i lekkość. Takie podejście przekłada się na funkcje
            programu, które mają na celu ułatwienie zarządzania informacjami i
            dokumentami w sposób intuicyjny oraz efektywny. Dzięki InFlow
            użytkownicy mogą poczuć, że procesy są zharmonizowane i
            bezproblemowe, co pozwala im skupić się na kluczowych zadaniach,
            zamiast utknąć w chaosie organizacyjnym.
          </p>

          <p className="text-foreground mt-6">
            Digitalizacja sektora NGO jest niezbędna ze względu na zmieniające
            się przepisy prawne oraz potrzebę zwiększenia efektywności,
            transparentności i sprawności zarządzania. Własne doświadczenia
            Fundacji HumanDoc w wdrażaniu rozwiązań cyfrowych rozpoczęły się
            kilka lat temu od prostych narzędzi, takich jak Google Drive,
            SharePoint i dedykowanych aplikacji do zarządzania projektami w NGO.
            Mimo że te rozwiązania usprawniły część procesów, nie zapewniły
            kompleksowej digitalizacji ani nie wyeliminowały konieczności
            prowadzenia podwójnej dokumentacji – papierowej dla donatorów oraz
            elektronicznej do użytku wewnętrznego.
          </p>

          <p className="text-foreground mt-6">
            W odpowiedzi na te wyzwania, Fundacja HumanDoc podjęła współpracę z
            grupą bardzo doświadczonych, najwyższej klasy informatyków, mających
            doświadczenie w tworzeniu podobnych systemów dla firm, aby opracować
            system InFlow. Po setkach godzin pracy, udoskonalania i
            dostosowywania do zmieniających się potrzeb NGO, a także testowania
            systemu w różnych projektach, współpracy z różnymi donatorami i
            przejściu audytów, z radością udostępniamy nasz system innym
            organizacjom, które mogą skorzystać z jego zalet.
          </p>

          <p className="text-foreground mt-6">
            Jesteśmy dumni z faktu, że teraz InFlow zaczyna umożliwiać innym
            organizacjom pozarządowym lepsze, bardziej efektywne i przejrzyste
            zarządzanie dokumentami, a poprzez to daje im więcej spokoju,
            stabilności i redukuje poziom stresu związany z prowadzonymi
            projektami.
          </p>

          <p className="text-foreground mt-6">
            Jesteśmy dumni z faktu, że teraz InFlow zaczyna umożliwiać innym
            organizacjom pozarządowym lepsze, bardziej efektywne i przejrzyste
            zarządzanie dokumentami, a poprzez to daje im więcej spokoju,
            stabilności i redukuje poziom stresu związany z prowadzonymi
            projektami.
          </p>

          <p className="text-foreground mt-6">
            Dołącz do nas i odkryj, jak InFlow może zmienić Twoją organizację na
            lepsze!
          </p>
        </Container>
        {/* <Container className="relative z-[9999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="text-xl lg:text-2xl 2xl:text-2xl mt-6 font-semibold">
                  Join our Newsletter
                </h2>
                <p className="text-muted-foreground text-base">
                  Be up to date on everything Nexa
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Subscribe
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground">
                  By subscribing you agree with our{" "}
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container> */}
      </Wrapper>
    </div>
  );
}
