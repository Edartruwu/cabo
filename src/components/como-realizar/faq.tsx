"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FAQImg } from "@/components/Images/img";

interface largeContent {
  content: string;
  link: string;
}

interface Accordion {
  id: string;
  trigger: string;
  content: string[];
  largeContent?: largeContent[];
  list?: string[];
  link?: linkProps[];
}

interface textProps {
  text: string[];
  // link: string
}
interface linkProps {
  text: string[];
  link: string;
}

export default function FAQ() {
  const accordion: Accordion[] = [
    {
      id: "1",
      trigger: "Equipos que requieren permiso del MTC",
      content: [
        "La importacion de cualquier equipo de telecomunicaciones, ya sea radio, algun articulo que emita o reciba señal wifi, o similar, estan obligados a tener el Permiso de Internamiento emitido por el MTC (Ministerio de Transportes y Comunicaciones), para poder culminar el proceso de desaduanaje",
        "Es importante que en el permiso figuren obligatoriamente la marca y modelo correctos del articulo para que Aduana no lo rechace.",
        "Si cuenta con RUC debe solicitar el permiso virtualmente desde la pagina web del vuce indicando su usuario y clave sol, si no cuenta con la clave sol, debera solicitarla en la sunat.",
        "Si solo cuenta con DNI, debe apersonarse al Ministerio de Transportes y Comunicaciones con su DNI, factura donde figure la marca y modelo del articulo y debera llenar el formulario que el MTC le entregara.",
        "El proceso del tramite toma entre 5 a 7 dias laborables y si es tramitado virtualmente lo recibira via e-mail y lo podra descargar haciendo login en la web del vuce.",
        "Estos son las páginas del MTC dodne encontrará los pasos a seguir para tramitar el permiso de internamiento:",
      ],
      link: [
        {
          text: ["MTC - Internamiento de Equipos y Aparatos de"],
          link: "https://www.gob.pe/institucion/mtc/colecciones/364-internamiento-de-equipos-y-aparatos-de-telecomunicaciones-dgppc",
        },
        {
          text: ["Telecomunicaciones"],
          link: "https://www.gob.pe/institucion/mtc/colecciones/364-internamiento-de-equipos-y-aparatos-de-telecomunicaciones-dgppc",
        },
        {
          text: ["Formato de solicitud"],
          link: "https://www.gob.pe/institucion/mtc/informes-publicaciones/355284-formatos-de-solicitud-internamiento",
        },
        {
          text: ["Equipos que no requieren permisos"],
          link: "https://www.gob.pe/institucion/mtc/informes-publicaciones/355259-informacion-de-interes-internamiento",
        },
        {
          text: ["Manual para trámite VUCE - Internamiento"],
          link: "https://www.gob.pe/institucion/mtc/informes-publicaciones/355274-manual-para-tramite-vuce-internamiento",
        },
      ],
    },
    {
      id: "2",
      trigger: "¿Cuantas veces puedo importar?",
      content: [
        "Si no posees RUC el límite es de 3 importaciones al año con DNI, una vez superes el límite comunícate con nosotros para poder guiarte en el trámite.",
        "Si posees RUC no existe límite en las veces que puedes importar, realizarlo con RUC no se generarán costos adicionales como impuestos, multas, entre otros.",
      ],
    },
    {
      id: "3",
      trigger: "¿Cuál es el tiempo de entrega de tus paquetes?",
      content: [
        "El tiempo de entrega que manejamos es de 7 a 10 días hábiles, desde el momento que recibimos tus instrucciones de embarque (por correo electrónico) adjuntando la documentación requerida. El tiempo estimado puede variar teniendo en cuenta las fechas especiales (acción de gracias, navidad), feriados locales o de Estados Unidos, condiciones climatológicas (retraso de vuelos) y variaciones en itinerarios aéreos",
      ],
    },
    {
      id: "4",
      trigger: "¿Cuándo se deberá pagar impuestos y aranceles en la aduana?",
      content: [
        "Los envíos cuyo valor FOB es menor a 200 dólares (incluido Shipping dentro de USA e impuestos de USA) no estarán afectos al pago de aranceles (ad-valorem, ni IGV). Cualquier artículo que cueste entre US$ 200.01 y US$ 2,000 estará sujeto al pago de aranceles (ad-valórem, IGV, entre otros según corresponda según el tipo de producto), para más información ingresar al siguiente link",
      ],
      link: [
        {
          text: ["(http://www.aduanet.gob.pe/itarancel/arancelS01Alias )"],
          link: "http://www.aduanet.gob.pe/itarancel/arancelS01Alias",
        },
      ],
    },
    {
      id: "5",
      trigger: "¿Cómo rastrear mis paquetes hasta Perú?",
      content: [
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Fusce consectetur tincidunt odio ac malesuada. Praesent maximus pretium.",
      ],
    },
    {
      id: "6",
      trigger: "¿Puedo importar de otros países aparte de Estados Unidos?",
      content: [
        "Sí, el único requisito es que todas las compras que realices debes enviarlo a tu casillero registrado en Doral, Flórida. Una vez recepcionado en nuestras bodegas y registriado con un WR (Wearehouse), queda disponible para que puedas enviarn os instrucciónes para el envío de tus paquetes a Perú. ",
      ],
    },
    {
      id: "7",
      trigger: "¿Qué pasa cuando mis compras llegan al almacén en Miami?",
      content: [
        "Por cada compra que realice y llegue a nuestros almacenes, recibirá por correo un número de Warehouse (Ej. WR0000001), Esto será útil para completar el siguiente paso",
      ],
    },
    {
      id: "8",
      trigger: "¿Cuánto cuesta?",
      content: [
        "Las tarifas se calculan de acuerdo con el peso de tus paquetes, además de la tarifa por entrega dentro de Lima metropolitana de acuerdo con el distrito. Si el envío es para provincias se gestiona a través del operador local. Para productos con un costo mayor a US$ 200 dólares, se recomienda previamente comunicarse con nosotros para brindarle los costos aproximados en relación al pago de aranceles a los que su producto estaría afecto o en caso de que tus productos tengan alguna restricción y requiere algún tipo de permiso para la importación (MTC – DIGESA – DIGEMID, etc.)",
      ],
    },
    {
      id: "9",
      trigger: "¿Cómo funciona mi casillero virtual?",
      content: [
        "Antes de iniciar tu proceso de compra en tu tienda favorita dentro de estados Unidos, o cualquier país debes registrarte para obtener un casillero virtual: Completa todos tus datos A vuelta de correo recibirás un número de casillero y dirección física de nuestra bodega. Realiza tus compras. Recuerda ingresar la dirección física de nuestras bodegas, tu número de casillero según muestra. La entrega de tus paquetes de realizará en la dirección que envíes por correo de acuerdo con tus instrucciones.",
      ],
    },
  ];

  const text: textProps[] = [
    {
      text: [
        "Esta es la forma correcta como debes registrar la dirección de tu casillero. Tomando como ejemplo, el registro en amazon.com",
      ],
    },
  ];

  return (
    <section className="py-10  px-2 lg:px-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-10">
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
                <AccordionContent className="flex text-md text-muted-foreground flex-col space-y-5">
                  <div className=" flex flex-col space-y-3">
                    {items.content.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>

                  {items.list && (
                    <div className="flex px-10 flex-col space-y-3">
                      {items.list.map((item, index) => (
                        <p className="text-muted-foreground" key={index}>
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  {items.largeContent && (
                    <div>
                      {items.largeContent.map((items, index) => (
                        <div key={index} className="">
                          <p className="inline">{items.content} </p>
                          <Link className="inline" href={items.link}>
                            {items.link}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}

                  {items.link && (
                    <div className="flex flex-col space-y-3">
                      {items.link.map((item, index) => (
                        <Link
                          href={item.link}
                          className="font-bold"
                          key={index}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-3">
          <h3 className="text-[#003440] text-[36px] font-[700] lg:w-[80%]">
            Registro de dirección del casillero
          </h3>
          <div className="flex flex-col space-y-2">
            {text.map((items, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-1 text-muted-foreground text-md">
                  {items.text.map((items, index) => (
                    <p key={index}>{items}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="relative w-full h-[500px]">
              <FAQImg />
            </div>

            <div className="text-muted-foreground text-md lg:mt-auto mt-5 ">
              Si tiene alguna duda, nos puede contcatar a traves de nuestro
              servicio de antención al cliente por whatsapp{" "}
              <Link
                href="https://wa.me/51936068310"
                className="font-bold space-x-2 items-baseline inline-flex"
              >
                <Phone className="stroke-green-500 w-5 h-5" />
                <p className="">+51 936 068 310</p>
              </Link>{" "}
              o por correo a
              <Link href="mailto:info@cabocourier.com" className="font-bold">
                {" "}
                info@cabocourier.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
