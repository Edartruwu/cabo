"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { CalendarClock, Globe, Plane, Truck } from "lucide-react";
interface largeContent {
  title: string;
  content: string;
}

interface Accordion {
  id: string;
  trigger: string;
  content: string[];
  largeContent?: largeContent[];
  extraText?: boolean;
}

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function FAQ() {
  const accordion: Accordion[] = [
    {
      id: "1",
      trigger: "Debo pagar por mi casillero?",
      content: [
        "No, los casilleros que ofrecemos son gratis. No cobramos por brindar un espacio para almacenar tus paquetes. Tampoco te vamos a cobrar una renta mensual de mantenimiento.",
      ],
    },
    {
      id: "2",
      trigger:
        "Cómo debo indicar mi número de casilla y dirección al momento de finalizar la compra de mis productos?",
      content: [
        "Primero debes registrarte como cielnte o socio de CABO Courier desde la página de Registro. Una vez que validemos tu correo te estaremos enviando tu CodeBox y dirección de la bodega, además de las instrucciones para el correcto registro de la información al momento de finalizar tu compra:",
        "El CodeBox (CBOXXXX) es un código que empieza por las letras CBO seguido del número DNI, CE o RUC registrado.",
        "La dirección es 8296 NW 56Th St.",
        "La ciudad: Doral",
        "El estado: Florida",
        "Código Postal: 33166",
      ],
    },
    {
      id: "3",
      trigger: "Cuanto tiempo puedo mantener mis paquetes en mi casillero?",
      content: [
        "Nuestro servicio es asesorarte para que el envío de tus compras o paquetes sea rentable para ti. En caso de que acumules compras por más de quince (15) días nos pondremos en comunicación contigo para programar los envíos, en caso de no hacerlo debemos de cobrarte por almacenamiento",
      ],
    },
    {
      id: "4",
      trigger:
        "Puedo programar en cualquier momento el envío de mis paquetes a Perú?",
      content: [
        "Si, recuerda que puedes programar tus envíos en cualquier momento. Tenemos dos vuelos de carga semanal (miercoles y sábados), es importante que programes con tiempo tus envíos. Recuerda que si tienes paquetes o compras en tu casillero por más de quince (15) días de recibido en la bodega, se generará una renta por almacenamiento.",
      ],
    },
    {
      id: "5",
      trigger: "Cómo programo el envío de mis compras a Perú?",
      content: [
        "Nuestro principal objetivo es que el proceso sea lo más fácil para ti, es por ello que a traves de nuestros canales de atención puedes programar tus envíos a Perú:",
        "Chat a través de la Web",
        "Whatsapp Business +51 936 068 310",
        "Correo: info@cabocourier.com",

        "Nuestro compromiso es cuidar cada una de tus compras como nuestras, por lo que implementamos procesos de calidad en cada una de las etapas, garantizando el más alto estandar de calidad y seguridad en los envíos.",
      ],
    },
    {
      id: "6",
      trigger: "Qué documentación necesito para que envien mis compras?",
      content: [
        "Los documentos que vamos a solicitarte para programar un envío a Perú son los siguientes:",
      ],
      largeContent: [
        {
          title: "Archivo en PDF del Invoice, recibo o Factura:",
          content:
            "Cuando finalizas la compra de tus artículos en determinada tienda, te harán llegar por correo un invoice, recibo o factura donde se detallan los artículos, peso, impuesto o tax y el costo de shipping o envío hacia tu casillero en Miami.",
        },
        {
          title: "Archivo en PDF de tu documento de",
          content:
            "Si el envío lo programaras como persona natural nos haces llegar DNI o CE, si lo haces a través de empresa o persona jurídica debes hacernos llegar el PDF de la ficha RUC que expide SUNAT",
        },
        {
          title: "Número de WareHouse (WR)",
          content:
            "El WR es un código que se genera al momento de registrar la llegada de tus paquetes a tu casillero en nuestras bodegas. Nuestro personal especializado revisa cada paquete que esta identificado con tú numero de Casillero, verifica el número de tracking y lo relaciona con tu WR, enviando esta información a tu cuenta de correo para tu seguimiento.",
        },
      ],
    },
    {
      id: "7",
      trigger: "Qué productos estan prohibidos ingresar a Perú?",
      content: [
        "Los productos que a continuación se mencionan son considerados prohibidos por la legislación peruana e internacional, y no se aceptarán para transporte.",
      ],
      largeContent: [
        {
          title: "Prohibidos por la legislación peruana: ",
          content:
            " Armas con o sin licencia, componentes de cualquier tipo de arma, marihuana, cocaína, bienes regulados por el ministerio de cultura, restos arqueológicos, joyas incaicas, entre otros.",
        },
        {
          title: "Prohibidos por legislación aérea:",
          content:
            "Joyas, objetos enchapados en plata, oro, cheques al portador, entre otros.",
        },
        {
          title: "Productos perecibles:",
          content: "Frutas, carnes (bobino, vacuno, aves), entre otros.",
        },
      ],
      extraText: true,
    },
  ];

  const cardProps: CardProps[] = [
    {
      icon: Globe,
      title: "Reempaque",
      description:
        "Prestamos el servicio a solicitud de nuests socios y clientes.",
    },
    {
      icon: CalendarClock,
      title: "Entregas a Tiempo",
      description:
        "Brindamos un delivery seguro y ágil, cumpliendo con nuestros clientes.",
    },
    {
      icon: Truck,
      title: "Enviamos a todas partes",
      description:
        "Realizamos envíos con movilidad propia en Lima metropolitana.",
    },
    {
      icon: Plane,
      title: "Vuelos semanales",
      description: "Tenemos contratado 2 vuelos de carga por semana.",
    },
  ];

  return (
    <section className="py-10 px-2 lg:px-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-5">
        <div className="flex flex-col space-y-3">
          <h3 className="text-[#003440] text-[36px] font-[700]">
            Preguntas frecuentes
          </h3>

          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col space-y-5"
          >
            {accordion.map((items, index) => (
              <AccordionItem
                key={index}
                value={items.id}
                className="border-2 border-zinc-300 pt-[18px] pr-[40px] pb-[17px] pl-[20px]"
              >
                <AccordionTrigger className="text-start">
                  {items.trigger}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-5">
                  {items.content.map((text, idx) => (
                    <React.Fragment key={idx}>
                      {text}
                      {idx !== items.content.length - 1 && <br />}{" "}
                      {/* Add <br /> after each line except the last */}
                    </React.Fragment>
                  ))}
                  {items.largeContent && (
                    <div className="flex flex-col mt-3 space-y-5">
                      {items.largeContent.map((item, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                          <h3 className="font-bold text-zinc-500">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.content}
                          </p>
                        </div>
                      ))}

                      {items.extraText === true && (
                        <p className="text-muted-foreground">
                          Click en este
                          <Link
                            className="font-bold cursor-pointer"
                            href="http://www.aduanet.gob.pe/aduanas/infoaduanas/clasifica/clasificacionarancelaria/entidad/anexosRestProhib.htm"
                          >
                            {" "}
                            enlace{" "}
                          </Link>
                          para informacion sobre los anexos del procedimiento de
                          mercancias restringidas y prohibidas INTA-PE.00.06
                        </p>
                      )}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col space-y-3">
          <h3 className="text-[#003440] text-[36px] font-[700]">
            ¿Por qué Elegirnos?
          </h3>
          <div className="grid lg:grid-cols-2 gap-x-5 gap-y-10">
            {cardProps.map((items, index) => (
              <Card key={index} className="shadow-2xl group pt-5">
                <CardContent className=" flex flex-col space-y-5">
                  <items.icon className="stroke-blue-500 w-[35px] group-hover:animate-bounce h-[35px]" />
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-bold text-[18px]">{items.title}</h3>
                    <p className="text-muted-foreground text-[14px]">
                      {items.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
