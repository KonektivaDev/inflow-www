"use client";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import { modules, reports } from "@/constants";
import React from "react";

export default function InFlowModules() {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <div className="hidden md:block absolute top-0 -right1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10" />
      <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10" />

      <Container>
        <div className="max-w-3xl mx-auto text-start md:text-center">
          <SectionBadge title="Moduły" />

          <h2 className="text-3xl lg:text-4xl 2xl:text-4xl mt-6 font-semibold">
            W skład systemu InFlow wchodzą:
          </h2>
          <h3 className="text-2xl lg:text-3xl 2xl:text-3xl mt-6 font-semibold">
            Moduły ewidencyjne:
          </h3>
          <p className="text-muted-foreground mt-6">
            Kontrahenci, Pracownicy, Umowy, Projekty, Dokumenty Kosztowe,
            Dokumenty Przychodowe, Zakupy
          </p>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 gap-8">
            {modules?.map((module) => (
              <div
                className="flex flex-col items-start px-0"
                key={module.title}
              >
                <h3 className="text-lg font-medium mt-4">{module.title}</h3>

                <p className="text-muted-foreground mt-2 text-justify">
                  {module.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div className="max-w-3xl mx-auto text-start md:text-center">
          <h3 className="text-2xl lg:text-3xl 2xl:text-3xl mt-6 font-semibold">
            Moduły raportowe:
          </h3>
          <p className="text-muted-foreground mt-6">
            Dekretów, Personelu, Administracyjny
          </p>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 gap-8">
            {reports?.map((report) => (
              <div
                className="flex flex-col items-start px-0"
                key={report.title}
              >
                <h3 className="text-lg font-medium mt-4">{report.title}</h3>

                <p className="text-muted-foreground mt-2 text-justify">
                  {report.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
