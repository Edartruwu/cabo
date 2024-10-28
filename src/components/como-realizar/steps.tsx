"use client";
import { StepsImg } from "@/components/Images/img";
import { Card, CardContent } from "../ui/card";
import { Computer, Smile, ShoppingCart, UserRound } from "lucide-react";
import React from "react";

interface cardProps {
  icon: React.ElementType;
  title: string;
  content: string;
}

export default function Steps() {
  const cardContent: cardProps[] = [
    {
      icon: UserRound,
      title: "1. Regístrate",
      content:
        "Brinda tus datos personales, una vez que validemos tu información te asignamos un número de casillero junto con la dirección postal de nuestros almacenes en Estados Unidos.",
    },
    {
      icon: ShoppingCart,
      title: "2. Compra",
      content:
        "Realiza tus compras online en tus tiendas favoritas. Siempre brinda la información de tu casillero, dirección y código postal de nuestro almacen.",
    },
    {
      icon: Computer,
      title: "3. Programa tus envíos",
      content:
        "Siempre que recibamos tus compras en tu casillero, nuestros especialistas te enviaran un correo con toda la infomación, como número de warehouse, tracking de la tienda de compra, peso del paquete entre otros. Solo debes programar tus envíos comunicandote con nuestro servicio de antención al cliente por whatsapp +51 936068310 o por correo  info@cabocourier.com",
    },
    {
      icon: Smile,
      title: "4. Recibe tus compras",
      content:
        "Llevamos tus compras hasta la dirección que nos indiques. Así de fácil recibes tus paquetes en la comodidad de tu casa u oficina.",
    },
  ];
  return (
    <main className="grid lg:grid-cols-2 mt-44 px-5 lg:px-32 grid-cols-1 gap-10 pb-20 auto-rows-fr">
      <div className="relative place-content-center   ">
        <StepsImg />
      </div>
      <div className="flex flex-col space-y-3 items-start">
        <div className="flex items-start flex-col space-y-2">
          <p className="text-[20px] text-[#254FFF] font-bold">
            Fácil, Rápido y Seguro.
          </p>
          <h3 className="text-[30px] lg:text-[48px] lg:w-[80%] text-[#00044b] leading-tight font-bold pb-[25px]">
            En cuatro simples pasos
          </h3>
        </div>

        <div className="flex flex-col space-y-5">
          {cardContent.map((items, index) => (
            <Card
              key={index}
              className={`w-full border-none shadow-2xl py-5 px-3 group
                            ${index === 0 && "animate-visible"}
                            ${index === 1 && "animate-visible1"}
                            ${index === 2 && "animate-visible2"}
                            ${index === 3 && "animate-visible3"}
                        `}
            >
              <CardContent className="flex space-x-4 items-center">
                <div className="h-full flex items-center">
                  <div className="rounded-full flex items-center justify-center w-[55px] h-[55px] bg-[#aaaaaa] group-hover:duration-100 group-hover:bg-[#00044b] animation-all duration-75 ease-in0out">
                    <items.icon className="stroke-white w-10 h-10" />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <h3 className="text-[20px] font-[700] text-[#00044b]">
                    {items.title}
                  </h3>
                  <p className="text-[14px] leading-normal text-[#888888]">
                    {items.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
