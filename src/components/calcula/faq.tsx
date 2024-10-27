"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Phone } from "lucide-react"
import Link from "next/link"
import React from "react"

interface largeContent {
    content: string
    link: string
}

interface Accordion {
    id:string,
    trigger: string,
    content: string[],
    largeContent?: largeContent[],
    list?: string[],
    link?: textProps[]
}

interface textProps {
    text: string[],
    link: string
}

export default function FAQ(){
    const accordion: Accordion[] = [
        {
            id:'1',
            trigger: 'Equipos que requieren permiso del MTC',
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
                    text:["MTC - Internamiento de Equipos y Aparatos de"],
                    link:"https://www.gob.pe/institucion/mtc/colecciones/364-internamiento-de-equipos-y-aparatos-de-telecomunicaciones-dgppc",
                },
                {
                    text:["Telecomunicaciones"],
                    link:"https://www.gob.pe/institucion/mtc/colecciones/364-internamiento-de-equipos-y-aparatos-de-telecomunicaciones-dgppc",
                },
                {
                    text:["Formato de solicitud"],
                    link:"https://www.gob.pe/institucion/mtc/informes-publicaciones/355284-formatos-de-solicitud-internamiento",
                },
                {
                    text:["Equipos que no requieren permisos"],
                    link:"https://www.gob.pe/institucion/mtc/informes-publicaciones/355259-informacion-de-interes-internamiento",
                },
                {
                    text:["Manual para trámite VUCE - Internamiento"],
                    link:"https://www.gob.pe/institucion/mtc/informes-publicaciones/355274-manual-para-tramite-vuce-internamiento",
                },
            ],

        }
        ,{
            id:'2',
            trigger: '¿Debo pagar algún impuesto por la importación?',
            content: [
                'Todo envío a Perú que no exceda los US$199.99, están inafectos al pago de impuestos. En caso de que la suma de todos tus productos exceda los US$200.00 y menor que US$2,000.00, los impuestos o derechos son calculados en base a:'
            ],
            list: [
                "FOB: valor del producto según factura",
                "CIF: flete + seguro",
                "Arancel: CIF x tasa de arancel (4%)",
                "IGV: Arancel x 18%"
            ],
            largeContent: [
                {
                    content:'La aduana en Perú calcula como costo de transporte y seguro cada libra x 3.5 dólares, pero muchas veces, tiene cantidades predefinidas y que dependen del valor y tipo de producto.',
                    link: 'www.sunat.gob.pe'
                }
            ]
        },
        {
            id:'3',
            trigger:'¿Qué debo tener en cuenta al brindar el costo de mis productos?',
            content: ['Debes tener en cuenta el valor total de la compra, incluyendo impuestos o taxes y costos de shipping hasta tu casillero.']
        },
        {
            id:'4',
            trigger: '¿Cómo calcular el peso de mis productos?',
            content:['En algunas tiendas de Internet al terminar de hacer la compra te brindan la información del peso. Otra forma de saber es cuando la tienda realiza el shipping o envío de los productos hacia tu casillero, esta información la encuentras en el tracking que te brindan.']
        },

    ]

    const text: textProps[] =[
        {
            text: [
                "El tiempo de entrega promedio es de 7 días dependiendo el destino en condiciones regulares.*",
                "No está considerado entre los tiempos de entrega los retrasos de aereolíneas y de aduanas.",
                "Siempre se va a requerir la factura comercial o la “Order Confirmation” para el desaduanaje en Lima.",
                "Recuerde contar con su DNI o RUC actualizado y activo.",
                "Todas las entregas son a domicilio sin excepción.",
                "Si el envío es hacia provincia, el cliente debe de cubrir el costo de envío a través de la agencia de su preferencia.",
                "CABO Courier no es responsable del embalaje de los productos comprados por el cliente, estos son enviados tal cual se reciben en nuestras bodegas (no abrimos paquetes). Es importante indicar a la tienda donde compra que protejan bien los productos.",
                "Existe productos que necesitan permisos especiales, recomendamos revisar la  página:"
            ],
            link:'http://www.aduanet.gob.pe/servlet/AICONSMrestri'
        }
    ]

    return(
        <section className="py-10  px-2 lg:px-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-10">
                <div className="flex flex-col space-y-3">
                    <h3 className="text-[#003440] text-[36px] font-[700]">Algunas Consultas</h3>

                    <Accordion type="single" collapsible className="w-full flex flex-col space-y-5">
                        {accordion.map((items, index) => (
                            <AccordionItem key={index} value={items.id} className="border-2 border-zinc-300 pt-[18px] pr-[40px] pb-[17px] pl-[20px]">
                                <AccordionTrigger className='text-start'>{items.trigger}</AccordionTrigger>
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
                                                    <p className="inline">{items.content}{" "}</p>
                                                    <Link className="inline" href={items.link}>{items.link}</Link>

                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {items.link && (
                                        <div className="flex flex-col space-y-3">
                                            {items.link.map((item, index) => (
                                                <Link href={item.link} className="font-bold" key={index}>{item.text}</Link>
                                            ))}
                                        </div>
                                    )}

                                   
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                
                <div className="flex flex-col space-y-3">
                    <h3 className="text-[#003440] text-[36px] font-[700]">Nos diferenciamos</h3>
                    <div className="flex flex-col space-y-2">
                        {text.map((items, index) => (
                            <div key={index} className="flex px-8 flex-col space-y-3">
                                <div className="flex flex-col space-y-1 text-muted-foreground text-md">
                                    {items.text.map((items, index) => (
                                        <p key={index}>{items}</p>
                                    ))}
                                </div>
                                <Link href={items.link} className="font-bold text-muted-foreground">{items.link}</Link>
                            </div>
                        ))}

                        <div className="text-muted-foreground text-md ">
                            Si tiene alguna duda, nos puede contcatar a traves de nuestro servicio de 
                            antención al cliente por whatsapp <Link 
                            href="https://wa.me/51936068310" 
                            className="font-bold space-x-2 items-baseline inline-flex">
                                <Phone className="stroke-green-500 w-5 h-5" />
                                <p className="">+51 936 068 310</p>
                            </Link> o por correo  a 
                            <Link href='mailto:info@cabocourier.com' className="font-bold"> info@cabocourier.com</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}