import React from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import SectionBadge from "./ui/section-badge";
import { pricingCards } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  return (
    <div id="pricing" className="pt-8">
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10" />

        <Container>
          <div className="max-w-3xl mx-auto text-start md:text-center">
            <SectionBadge title="Cennik" />
            <h2 className="text-3xl lg:text-4xl 2xl:text-4xl mt-6 font-semibold">
              Wybierz optymalny pakiet dla Twojej organizacji
            </h2>
            <p className="text-muted-foreground mt-6">
              InFlow to przełomowy krok do łatwiejszego zarządzanie finansami
              projektów i usprawnienie ekosystemu funkcjonowania całej
              organizacji. To system, który automatyzuje procesy, po to byś Ty
              mógł się skupić na rozwoju swojego projektu i organizacji.
            </p>
          </div>
        </Container>

        <Container className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  "flex flex-col w-full border-neutral-700 border-2 border-primary",
                  card.title === "Meso" && "border-2 border-primary"
                )}
              >
                <CardHeader className="border-b border-border">
                  <span className="">{card.title}</span>

                  <CardTitle
                    className={cn(
                      card.title !== "Pro" && "text-muted-foreground"
                    )}
                  >
                    {card.price}
                  </CardTitle>

                  <CardDescription className="">
                    {card.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6 space-y-3">
                  {card.features.map((feature) => (
                    <div
                      className="grid grid-cols-12 items-center gap-4"
                      key={feature}
                    >
                      <Zap
                        className="col-span-2"
                        name="h-4 w-4 fill-primary text-primary"
                      />
                      <p className="col-span-10">{feature}</p>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="mt-auto">
                  <Link
                    href="/inflow/kontakt"
                    className={cn(
                      "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium"
                    )}
                  >
                    {card.buttonText}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>

        <Container className="pt-14">
          <div className="max-w-3xl mx-auto text-start md:text-center">
            <SectionBadge title="Jak to działa?" />
            <h2 className="text-2xl lg:text-3xl 2xl:text-3xl mt-6 font-semibold">
              Tylko kilka kroków dzieli Cię od tego, by InFlow działał w Twoim
              NGO!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2 text-muted-foreground">
                Wybierz odpowiedni pakiet
              </h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2 text-muted-foreground">
                W ciągu 5 dni przygotujemy InFlow dla Twojej organizacji
              </h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2 text-muted-foreground">
                Rozpocznij korzystanie z InFlow
              </h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2 text-muted-foreground">
                Skorzystaj z 30-dniowego okresu próbnego i naszego wsparcia
              </h3>
            </div>
          </div>

          <div className="mt-16 space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Jak finansować subskrypcję systemu InFlow?
              </h3>
              <p className="mb-4">
                Subskrypcję systemu InFlow możesz finansować przede wszystkim z
                oszczędności, które wygeneruje jego użytkowanie:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Z InFlow zmniejszysz nakłady na zakup materiałów biurowych i
                  papierowych potrzebnych do tworzenia oraz przechowywania
                  dokumentacji finansowej, takich jak papier, tonery,
                  segregatory oraz regały do przechowywania.
                </li>
                <li>
                  InFlow pozwoli Ci zapanować nad wydatkami i zakupami w całej
                  organizacji, dzięki niemu zredukujesz niepotrzebne lub
                  nadmiarowe zakupy.
                </li>
                <li>
                  Koniec z nadgodzinami lub dotrudnianiem dodatkowych osób do
                  wsparcia w rozliczeniach, InFlow zastąpi dodatkowe ręce do
                  pracy.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Czy mogę skorzystać z innego planu płatności?
              </h3>
              <p className="text-justify">
                Tak, InFlow oferuje elastyczność w zakresie płatności. Optymalne
                rozwiązanie to płatna co miesiąc subskrypcja: stały i
                przewidywalny koszt. Doskonale znamy jednak potrzeby NGO i
                wiemy, że czasami potrzebujecie większej elastyczności. Dlatego
                możemy dostosować plan płatności do Waszych możliwości
                finansowych – oferujemy również rozliczenia kwartalne, półroczne
                oraz roczne. Skontaktuj się z nami i wybierzemy dogodne dla
                Ciebie rozwiązanie.
              </p>
            </div>
          </div>
        </Container>

        {/* TODO: Jak to działa? */}
      </Wrapper>
    </div>
  );
};

export default Pricing;
