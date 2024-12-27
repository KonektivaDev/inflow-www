import React from "react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";
import SectionBadge from "./ui/section-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants";

const FAQ = () => {
  return (
    <div id="faq" className="pt-8">
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10" />
        <Container>
          <div className="max-w-xl mx-auto text-start md:text-center">
            <SectionBadge title="FAQ" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Najczęściej zadawane pytania
            </h2>
          </div>
        </Container>

        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Accordion
                type="single"
                collapsible
                className="w-full min-w-full max-w-lg mx-auto"
              >
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="w-full"
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                      {item.bullets && (
                        <ul className="list-disc list-inside">
                          {item.bullets.map((bullet, index) => (
                            <li key={index}>
                              <span className="font-bold">{bullet.title}</span>{" "}
                              {bullet.info}
                            </li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default FAQ;
