"use client";

import Image from "next/image";
import { Card } from "../ui/card";

export default function How() {
  return (
    <main className="mt-44 px-5 md:px-20 pb-20">
      <div className="grid place-items-center text-center">
        <p className="text-[20px] text-[#254FFF] font-bold">¡Cómo funciona!</p>
        <h3 className="md:text-[47px] text-[30px] text-[#182D54] font-bold pb-[25px]">
          Fácil, Rápido y Seguro en cuatro <br /> simples pasos
        </h3>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-3 mt-12 before:absolute before:border-2 before:border-dashed before:top-3 before:left-0 before:right-0 before:w-[95%] before:border-[#b4b4b4] before:z-10">
        <Card className="flex flex-col items-center space-y-10 border-none shadow-none">
          <div className="rounded-full text-md bg-blue-700 z-50 text-white w-8 flex justify-center items-center h-8">
            1
          </div>
          <div className="relative">
            <Image src="/Asset-1-1.webp" alt="asset-1" width={80} height={80} />
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <h4 className="text-[#254FFF] text-2xl uppercase font-bold">
              Regístrate
            </h4>
            <p className="text-[16px] text-[#888888]">
              Ingresa tus datos personales o de empresa en nuestro formulario.
              Validamos tu correo y enviaremos tu código único que identificará
              tu casillero en nuestras bodegas. Recuerda que es Gratis!
            </p>
          </div>
        </Card>

        <Card className="flex flex-col items-center space-y-10 border-none shadow-none">
          <div className="rounded-full text-md bg-blue-700 z-50 text-white w-8 flex justify-center items-center h-8">
            2
          </div>
          <div className="relative">
            <Image src="/Asset-2-1.webp" alt="asset-1" width={80} height={80} />
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <h4 className="text-[#254FFF] text-2xl uppercase font-bold">
              Compra
            </h4>
            <p className="text-[16px] text-[#888888]">
              Ingresa a tus tiendas favoritas y empieza a comprar. Recuerda
              siempre brindar tu código y dirección física de tu casillero. Es
              importante que guardes tus recibos y/o facturas de estas compras.
            </p>
          </div>
        </Card>

        <Card className="flex flex-col items-center space-y-10 border-none shadow-none">
          <div className="rounded-full text-md bg-blue-700 z-50 text-white w-8 flex justify-center items-center h-8">
            3
          </div>
          <div className="relative">
            <Image src="/Asset-3-1.webp" alt="asset-1" width={80} height={80} />
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <h4 className="text-[#254FFF] text-2xl uppercase font-bold">
              Programa
            </h4>
            <p className="text-[16px] text-[#888888]">
              Registra tus compras en la zona de clientes y comunícate con unos
              de nuestros asesores especializados por correo
              envios@cabocourier.cliqueale.com o whatsapp +51 936 068 310 para
              programar tus envíos a Perú.
            </p>
          </div>
        </Card>

        <Card className="flex flex-col items-center space-y-10 border-none shadow-none">
          <div className="rounded-full text-md bg-blue-700 z-50 text-white w-8 flex justify-center items-center h-8">
            4
          </div>
          <div className="relative">
            <Image src="/Asset-4-1.webp" alt="asset-1" width={80} height={80} />
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <h4 className="text-[#254FFF] text-2xl uppercase font-bold">
              Recibe
            </h4>
            <p className="text-[16px] text-[#888888]">
              Llevamos tus compras hasta la dirección que nos indiques. Así de
              fácil recibes tus paquetes en la comodidad de tu casa u oficina.
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}
