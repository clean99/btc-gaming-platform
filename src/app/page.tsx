"use client";
import React, { useEffect } from "react";
import InscriptionButton from "@/components/create-inscription";
import {useInscription} from "@/hooks/useInscription";

export default function Home() {
  const inscription = useInscription('f30e558d8a4bfcae30fa6d72fadeb73b02f0b279400e6333cbd688a6920e3e17i0');
  console.log('inscription', inscription);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InscriptionButton  />
    </main>
  );
}
