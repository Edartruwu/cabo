"use client";

import { FactoryIcon, Globe } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { ServiceImg } from "../Images/img";

export default function ServicDetails() {
  return (
    <section className="py-10 md:px-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-end auto-rows-fr">
        {/* image */}
        <div className="relative px-10 lg:px-0 w-full items-center lg:items-end h-full flex justify-center lg:justify-end">
          <ServiceImg />
        </div>
        {/* text content */}
        <div className="flex items-start space-y-6 flex-col">
          <div className="flex flex-col space-y-5">
            <p className="text-[20px] font-[700] text-[#254FFF]">
              Nuestra Empresa
            </p>
            <h3 className="text-[#00044b] text-[48px] font-[700]">
              Empresa de Courier
            </h3>
            <p className="text-[14px] text-[#888888]">
              CABO Courier, es una marca comercial de la empresa TerraMare Group
              S.A.C., con la que ofrecemos el servicio de casillero
              internacional y courier para el envío de paquetería, carga y
              documentación desde Estados Unidos hacia todo el territorio
              peruano.
            </p>
          </div>

          <Card className="w-full border-none shadow-2xl py-5 px-3 group">
            <CardContent className="flex space-x-4 items-center">
              <div className="h-full flex items-center">
                <div className="rounded-full flex items-center justify-center w-[55px] h-[55px] bg-[#aaaaaa] group-hover:bg-[#00044b] animation-all duration-75 ease-in0out">
                  <Globe className="stroke-white w-10 h-10" />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <h3 className="text-[20px] font-[700] text-[#00044b]">
                  Servicio Global
                </h3>
                <p className="text-[14px] leading-normal text-[#888888]">
                  Brindamos a nuestros clientes y socios un espacio en nuestras
                  bodegas ubicadas en la ciudad de Doral (condado de Miami-Dade,
                  Florida, Estados Unidos). Contamos con personal especializado
                  encargado de la recepción, clasificación, aislamiento y
                  despacho de carga.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full border-none shadow-2xl py-5 px-3 group">
            <CardContent className="flex space-x-4 items-center">
              <div className="h-full flex items-center">
                <div className="rounded-full flex items-center justify-center w-[55px] h-[55px] bg-[#aaaaaa] group-hover:bg-[#00044b] animation-all duration-75 ease-in0out">
                  <FactoryIcon className="stroke-white w-10 h-10" />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <h3 className="text-[20px] font-[700] text-[#00044b]">
                  Servicio Local
                </h3>
                <p className="text-[14px] leading-normal text-[#888888]">
                  Nos encargamos del trámite administrativo y aduanero,
                  brindando una asesoría clara y precisa. Contamos con
                  transporte propio para la entrega de tus paquetes dentro de
                  Lima metropolitana, para aquellos casos de despacho a
                  provincias lo realizamos en coordinación con nuestros clientes
                  y socios.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
