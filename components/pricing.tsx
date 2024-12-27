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
            <SectionBadge title="Cennink" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  "flex flex-col w-full border-neutral-700",
                  card.title === "Pro" && "border-2 border-primary"
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
                    <div className="flex items-center gap-2" key={feature}>
                      <Zap name="h-4 w-4 fill-primary text-primary" />
                      <p className="">{feature}</p>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="mt-auto">
                  <Link
                    href={"#"}
                    className={cn(
                      "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                      card.title !== "Pro" && "!bg-foreground !text-background"
                    )}
                  >
                    {card.buttonText}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Pricing;
