"use client";

import React from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { LampContainer } from "@/components/ui/lamp";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { Input } from "@/components/ui/input";

export default function AboutUsPage() {
  return (
    <div id="newsletter">
      <Wrapper className="flex flex-col items-center justify-center py-2 relative">
        <Container>
          <LampContainer className="-mt-80">
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-3xl lg:text-4xl 2xl:text-4xl font-semibold -mt-60">
                Konektiva: Rozwiązania IT dla NGO
              </h2>
            </div>
          </LampContainer>
        </Container>

        <Container className="-mt-60">
          <p className="text-foreground mt-6 text-justify">
            Konektiva to firma technologiczna specjalizująca się w tworzeniu
            innowacyjnych rozwiązań IT dla organizacji pozarządowych. Jesteśmy
            zespołem ekspertów, łączącym doświadczenie specjalistów IT z
            praktyczną wiedzą o pracy w sektorze non-profit. To unikalne
            połączenie pozwala nam tworzyć rozwiązania idealnie dopasowane do
            specyfiki działalności NGO i uzupełniać istotną lukę rynkową w
            zakresie dostępnych rozwiązań IT dla tego sektora.
          </p>
          <p className="text-foreground mt-6 text-justify">
            W Konektiva rozumiemy, że sektor NGO charakteryzuje się ogromną
            różnorodnością działań i struktur organizacyjnych. Dostępność
            zaawansowanych rozwiązań informatycznych i digitalizacja jest
            kluczowa dla efektywnego funkcjonowania organizacji. Jednak
            oferowane na rynku produkty często nie są dopasowane do specyfiki
            sektora non-profit. Konektiva odpowiada na to wyzwanie, oferując
            kompleksowe systemy, które usprawnią procesy zarządzania w
            organizacjach, zwiększają efektywność i przezroczystość działania.
            Nasze rozwiązania są oparte na najnowszych technologiach i stale
            udoskonalane w oparciu o współpracę z organizacjami z sektora NGO,
            co gwarantuje ich doskonałe dopasowanie do potrzeb NGO.
          </p>
          <p className="text-foreground mt-6 text-justify">
            W Konektiva dbamy nie tylko o dostarczanie nowoczesnych technologii,
            ale i o pełne wsparcie w procesie wdrożenia i szkolenia
            użytkowników. Opracowujemy też szyte na miarę rozwiązania
            technologiczne tworzone na zamówienie poszczególnych NGO. Budujemy
            długoterminowe relacje z naszymi klientami, oferując nieprzerwane
            wsparcie i dostęp do nowych funkcjonalności
          </p>
          {/* <p className="text-foreground mt-6">
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
          </p> */}
        </Container>
      </Wrapper>
    </div>
  );
}
