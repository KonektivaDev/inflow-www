import { abouts } from "@/constants";
import Container from "./global/container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const AboutInFlow = () => {
  return (
    <div id="about-inflow">
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-3xl mx-auto text-start md:text-center">
            <SectionBadge title="O InFlow" />

            <h2 className="text-2xl lg:text-3xl font-semibold mt-6">
              InFlow to innowacyjny system zarządzania finansami oraz
              dokumentami projektów i organizacji, stworzony przez NGO dla NGO.
            </h2>
            <p className="text-muted-foreground mt-6">
              To przełomowy i intuicyjny system, ułatwiający zarządzanie
              finansami i procesami i usprawniający ekosystem funkcjonowania
              całej organizacji.
            </p>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-2">
              {abouts?.map((about) => (
                <div
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 py-4 lg:py-8"
                  key={about.title}
                >
                  <div className="flex items-center justify-center">
                    <about.icon className="w-8 h-8 text-foreground/80 stroke-foreground/80 fill-foreground/80" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{about.title}</h3>
                  <p className="text-muted-foreground mt-2 text-justify">
                    {about.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <Container>
          <div className="max-w-3xl mx-auto text-start md:text-center">
            <p className="text-muted-foreground">
              Odkryj, jak InFlow ułatwia zarządzanie projektami, zwiększa
              efektywność, przyspiesza procesy operacyjne i pozwala skupić się
              na realizacji misji Twojej organizacji!
            </p>
          </div>
          <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
            <Link
              href="#pricing"
              className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
            >
              <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                ✨ {"  "}Sprawdź i wybierz pakiet dla swojej organizacji
              </p>
              <Button
                size="sm"
                className="rounded-full hidden lg:flex border border-foreground/20"
              >
                Zacznij teraz
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default AboutInFlow;
