"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutImg } from "../Images/img";
import Link from "next/link";

export default function About() {
  return (
    <main className="grid md:grid-cols-2 mt-44 px-5 md:px-32 pb-20 auto-rows-fr">
      <div className="flex flex-col space-x-3 items-start">
        <div className="flex flex-col space-y-2">
          <p className="text-[20px] text-[#254FFF] font-bold">
            Nuestra Empresa
          </p>
          <h3 className="text-[36px] text-[#182D54] font-bold pb-[25px]">
            Brindamos un
            <br /> Servicio Seguro y <br /> Confiable
          </h3>
        </div>
        <div className="flex flex-col space-y-5 m-0 px-0 text-[18px] text-[#888888]">
          <p className="px-0">
            Somos una empresa que ofrecemos el servicio de casillero
            internacional y Courier para el envío de paquetería, carga y
            documentación desde Estados Unidos hacia Perú.
          </p>
          <p>
            Contamos con bodegas propias ubicadas en la ciudad de Miami (condado
            de Miami-Dade, Florida) con personal especializado en la recepción,
            clasificación, aislamiento y despacho de la carga.
          </p>
        </div>
        <Link href="#">
          <Button className="mt-[40px] flex space-x-3 hover:space-x-6 hover:transition-all hover:duration-150 ease-out px-0 py-0 w-[180px] h-[55px] bg-[#00044B] hover:bg-[#00044B]">
            <p>Ver más </p>
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="relative">
        <AboutImg />
      </div>
    </main>
  );
}
