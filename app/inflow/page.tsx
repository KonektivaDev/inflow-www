"use client";
import AboutInFlow from "@/components/about-inflow";
// import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
// import HowItWorks from "@/components/how-it-works";
// import NewsLetter from "@/components/news-letter";
import Pricing from "@/components/pricing";
// import Testimonials from "@/components/testimonials";
import React from "react";

const HomePage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      <Hero />
      <AboutInFlow />
      {/* <HowItWorks /> */}
      <Features />
      <Pricing />
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      {/* <NewsLetter /> */}
    </section>
  );
};

export default HomePage;
