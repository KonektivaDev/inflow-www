import { Mail, MapPinCheckInsideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto m-12 flex flex-col items-center justify-center p-12">
      <h1 className="text-2xl font-bold mb-3">Bądźmy w kontakcie!</h1>
      <p className="text-muted-foreground max-w-xl text-justify mb-5">
        Zawsze szukamy nowych klientów do współpracy. Jeśli jesteś
        zainteresowany współpracą z nami, skontaktuj się z nami w jeden z
        poniższych sposobów.
      </p>
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-lg font-bold">Konektiva S.C.</span>
          <div className="flex items-center justify-start gap-2">
            <span className="text-sm text-muted-foreground">
              NIP: 5214094857
            </span>
            <span className="text-sm text-muted-foreground">
              REGON: 540041707
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPinCheckInsideIcon className="w-10 h-10 text-primary" />
          <span>ul. Świeradowska 47, 02-662 Warszawa</span>
        </div>
        <Link
          href="mailto:info@konektiva.pl"
          className="flex items-center gap-2"
        >
          <Mail className="w-10 h-10 text-primary" />
          <span>info@konektiva.pl</span>
        </Link>
      </div>
    </div>
  );
}
