"use client";

import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProcedureImg } from "../Images/img";
import Link from "next/link";

export default function Procedure() {
  return (
    <main className="grid md:grid-cols-procedure mt-44 pt-32 gap-30 px-5 md:px-32 pb-20 auto-rows-fr md:auto-cols-min bg-procedure bg-no-repeat bg-cover bg-zinc-200 bg-blend-screen">
      <div className="flex flex-col space-x-3 items-start">
        <div className="flex flex-col space-y-2">
          <p className="text-[20px] text-[#254FFF] font-bold">
            Tu Casillero en Estados Unidos
          </p>
          <h3 className="md:text-[47px] text-[30px] text-[#003440] font-bold pb-[25px]">
            Una Dirección Física Donde Llegarán Todas Tus Compras.
          </h3>
        </div>
        <div className="flex flex-col space-y-10 m-0 px-0 text-[18px] text-[#888888]">
          <p className="px-0">
            Brindamos un casillero en Estados Unidos, con una dirección válida
            donde llegaran todas tus compras realizadas en el extranjero. Dentro
            de nuestras bodegas contamos con personal especalizado en la
            recepción, clasificación, y almacenamiento de tus paquetes.
          </p>

          {/* list */}
          <ul className="flex flex-col space-y-7">
            <li className="flex space-x-5 ">
              <Check className="w-5 h-5 stroke-white bg-blue-500 rounded-full font-bold" />
              <p>
                Te brindamos un código único de identificación de tu casillero.
              </p>
            </li>

            <li className="flex space-x-5 ">
              <Check className="w-5 h-5 stroke-white bg-blue-500 rounded-full font-bold" />
              <p>Tendrás una dirección física y válida en Estados Unidos.</p>
            </li>

            <li className="flex space-x-5 ">
              <Check className="w-5 h-5 stroke-white bg-blue-500 rounded-full font-bold" />
              <p>
                Un casillero libre de cargos por registro o mantenimiento
                mensual. (sin costos ocultos).
              </p>
            </li>

            <li className="flex space-x-5 ">
              <Check className="w-5 h-5 stroke-white bg-blue-500 rounded-full font-bold" />
              <p>
                Contamos con personal especializado encargado de brindarte
                asesoría y atender todas tus dudas.
              </p>
            </li>

            <li className="flex space-x-5 ">
              <Check className="w-5 h-5 stroke-white bg-blue-500 rounded-full font-bold" />
              <p>
                Tenemos a tu disposición canales de atención todos los días:
                teléfono, chat, whatsapp, o correo.
              </p>
            </li>

            <li className="flex space-x-5 ">
              <Check className="w-5 h-5 stroke-white bg-blue-500 rounded-full font-bold" />
              <p>
                Recuerda que el uso de tu casillero es{" "}
                <span className="bold">¡Gratis!</span>
              </p>
            </li>
          </ul>
        </div>
        <Link href="#">
          <Button className="mt-[40px] flex space-x-3 hover:space-x-6 hover:transition-all hover:duration-150 ease-out px-0 py-0 w-[180px] h-[55px] bg-[#00044B] hover:bg-[#00044B]">
            <p>Ver más </p>
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="relative">
        <ProcedureImg />
      </div>
    </main>
  );
}
