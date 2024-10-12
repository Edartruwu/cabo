"use client";

interface TestimonialProps {
  id: number;
  image: string;
  testimonial: string;
  name: string;
}

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    image: "/HenrryGuzman.webp",
    testimonial:
      "CABO Courier, ofrece a mi empresa un excelente servicio! Todas mis compras llegan a tiempo hasta Arequipa, Lo que más aprecio es que me mantienen informado en todo momento. Los recomiendo al 100%",
    name: "-Henry Guzman/Arequipa",
  },
  {
    id: 2,
    image: "/JhackPerez-2185340515-e1684961007140.webp",
    testimonial:
      "Me siento muy contento por el servicio que me brinda CABO Courier, tienen una excelente comunicación, procesos eficientes cumpliendo con los tiempos ofrecidos. Gracias por su servicios y sigan con esa excelente atención.",
    name: "-Jhack Perez/Junin",
  },
  {
    id: 3,
    image: "/YonatanPadilla-676769150-e1684782993282.webp",
    testimonial:
      "Satisfacción al 100% con los servicios de CABO Courier, brindan una atención personalizada y envíos en el tiempo correcto. En resumen, brindan tranquilidad a mi negocio en las importaciones realizadas desde EE.UU.",
    name: "-Yonatan Padilla /Lima",
  },
  {
    id: 4,
    image: "/HormanChang-756584265-e1684510984674.webp",
    testimonial:
      "Para HCF Representaciones SAC es importante cumplir con todos los clientes. En CABO Courier encontré un aliado logístico seguro, rápido y confiable. Me mantienen informado en todo momento hasta recibir mi carga.                                ",
    name: "-Horman Chang /Lima",
  },
  {
    id: 5,
    image: "/KarenMIranda-4265200189-e1684502466751.webp",
    testimonial:
      "CABO Courier se encarga de traer todas mis compras realizadas en Estados Unidos. Son muy profesionales y atentos, tienen un equipo humano excelente; siempre dispuestos a responder mis dudas y consultas. 100% recomendado! ",
    name: "-Karen Miranda /Arequipa",
  },
  {
    id: 6,
    image: "/MiluskaHuertas-e1675135020105.webp",
    testimonial:
      "CABO Courier es mi operador logístico para traer todos mis productos de Estados Unidos. Todo el personal siempre muy atentos a mis productos enviándolos a tiempo a mi domicilio. !Un excelente servicio! Recomendadisimo ",
    name: "-Miluska Huertas /Ica",
  },
  {
    id: 7,
    image: "/EleniseDiaz-e1674929762143.webp",
    testimonial:
      "Son una empresa súper recomendada todo su personal excelente, brindan los mejores servicios, orientación de primera, precios súper accesibles!! Todos los envíos llegan a tiempo y en perfectas condiciones. Súper recomendado !!!!                                ",
    name: "-Elenise Diaz /Arequipa",
  },
  {
    id: 8,
    image: "/MarianaRomero.webp",
    testimonial:
      "Siempre tenía miedo de realizar compras en USA por perderlos. CABO Courier, además de la confianza y seguridad que me brindó su personal, me mantuvieron informado en todo momento hasta recibir mis compras.                                ",
    name: "-Mariana Romero /Lima",
  },
  {
    id: 9,
    image: "/testimonio1.webp",
    testimonial:
      "Excelente servicio, totalmente confiables y seguros. He utilizado el servicio para traer varios productos comprados. Brindan un seguimiento constante hasta que lo tengo en mis manos. Los recomiendo 100% por ser confiables y seguros.",
    name: "-Zdenka Puh /Lima",
  },
  {
    id: 10,
    image: "/testimonio2.webp",
    testimonial:
      "Hace un año, trabajo con los servicios que presta CABO Courier, me gusta mucho el profesionalismo, la atención personalizada y el asesoramiento constante en las importaciones que realizo desde Estados Unidos. Excelente servicio!",
    name: "-María Grazia /Lima",
  },
  {
    id: 11,
    image: "/testimonio3.webp",
    testimonial:
      "Sus precios son muy buenos, competitivos y transparentes. Una empresa segura y confiable, todas mis compras las traigo de Estados Unidos con ellos. Tienen una excelente área de atención al cliente. ¡Recomendado!",
    name: "-Paola Palomino /Lima",
  },
];

export default function Testimonial() {
  return (
    <main className="mt-44 px-5 md:px-20 pb-20 pt-32 grid place-items-center bg-zinc-100">
      <div className="grid md:place-items-center text-center">
        <p className="text-[20px] text-[#254FFF] font-bold">
          Nuestros Socios y Clientes
        </p>
        <h3 className="md:text-[47px] text-[30px] text-[#182D54] font-bold pb-[25px]">
          ¿Qué dicen de <br /> nosotros?
        </h3>
      </div>
      <div className="w-full relative max-w-full overflow-x-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-[1260px] mx-auto overflow-hidden" // Limited max width to ensure fit
        >
          <CarouselContent className="w-full flex">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="md:basis-1/2 lg:basis-1/3 px-2 flex-shrink-0"
              >
                {/* flex-shrink-0 added to prevent shrinking */}
                <div className="md:p-1">
                  <Card className="bg-white">
                    <CardContent className="flex flex-col space-y-10 items-center aspect-square md:p-6">
                      <div className="relative mt-8">
                        <div className="rounded-full relative w-14 h-14 overflow-hidden">
                          <Image
                            src={
                              item.image ||
                              "/JhackPerez-2185340515-e1684961007140.webp"
                            }
                            alt="user-1"
                            width={100}
                            height={100}
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div className="absolute left-9 top-9">
                          <div className="relative bg-white border-2 rounded-full flex justify-center items-center w-6 h-6">
                            <Image
                              src="/quote.webp"
                              alt="user-1"
                              width={50}
                              height={50}
                              className="object-contain rounded-full"
                            />
                          </div>
                        </div>
                      </div>

                      <p className="text-center text-[18px] text-[#888888]">
                        {item.testimonial}
                      </p>
                    </CardContent>
                  </Card>
                  <div className="ribbon bg-[#182D54] w-[25%] bottom-0 font-bold py-3 px-5 h-10 z-20 absolute text-white">
                    {item.name}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      </div>
    </main>
  );
}
