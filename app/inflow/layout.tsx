import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Inflow",
  description: "Elektroniczny Obieg Dokumentów by Konektiva S.C.",
};

interface Props {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default ContentLayout;
