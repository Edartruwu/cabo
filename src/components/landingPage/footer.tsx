"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Clock,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  Email: z.string().email({
    message: "It must be a valid email",
  }),
});

interface socialLinks {
  icon: React.ElementType;
  url: string;
}

interface navLinks {
  url: string;
  text: string;
}

interface contact {
  icon: React.ElementType;
  longText: string[];
}

export default function Footer() {
  const link: socialLinks[] = [
    {
      icon: Facebook,
      url: "www.facebook.com",
    },
    {
      icon: Twitter,
      url: "www.twitter.com",
    },
    {
      icon: Instagram,
      url: "www.instagram.com",
    },
    {
      icon: Linkedin,
      url: "www.linkedin.com",
    },
  ];

  const conoceUrl: navLinks[] = [
    {
      url: "/",
      text: "Inicio",
    },
    {
      url: "/conócenos",
      text: "Conócenos",
    },
    {
      url: "/calcula-tu-envío",
      text: "Calcula tu envío",
    },
    {
      url: "registro",
      text: "Regístrate",
    },
    {
      url: "/como-realizar-tus-envios",
      text: "Cómo enviar",
    },
    {
      url: "/contáctanos",
      text: "Contáctanos",
    },
  ];

  const InformesUrl: contact[] = [
    {
      longText: [
        "Atención al Cliente ",
        " (+51) 936 068 310 ",
        "(+1 ) 786 600 1289",
      ],
      icon: PhoneIcon,
    },

    {
      longText: ["Escríbenos ", "info@cabocourier.com"],
      icon: Mail,
    },
    {
      longText: [
        "Nuevas Bodegas en: ",
        "7270 Nw 35th Terrace Suite 101 ",
        "Miami, Florida, 33122",
      ],
      icon: MapPin,
    },
    {
      longText: [
        "Nuestro Horario ",
        "Lunes – Viernes: 9am a 6pm ",
        "Sábados: 9am a 1pm",
      ],
      icon: Clock,
    },
  ];
  const ConsultasUrl: navLinks[] = [
    {
      url: "/informacion-legal",
      text: "Preguntas frecuentes",
    },
    {
      url: "/informacion-legal",
      text: "Mercancías restringida y prohibida",
    },
    {
      url: "/informacion-legal/",
      text: "Política de Privacidad",
    },
    {
      url: "/informacion-legal",
      text: "Términos y Condiciones",
    },
    {
      url: "/informacion-legal/",
      text: "Aviso Legal",
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <footer className="py-10 bg-[#071125] px-5 md:px-20  flex flex-col space-y-8">
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-7">
          <div className="relative w-[237.45px] h-[81.8px]">
            <Image src="/logos/logocabo-blanco.png" alt="cabo logo" fill />
          </div>

          <div className="flex flex-col space-y-3">
            {/* text div */}
            <div className="text-white text-[16px]">
              <p className="mb-[16px]">
                Somos una empresa que ofrece el servicio de casillero
                internacional y Courier para el envío de paquetería, carga y
                documentación desde el extranjero y Estados Unidos hacia Perú.
              </p>
              <p>Cabo Courier, marca registrada por Terramare Group S.A.C.</p>
            </div>
            {/* icons div */}
            <div className="flex space-x-5">
              {link.map((item, index) => (
                <Link key={index} href={item.url}>
                  <item.icon
                    className={`${item.icon === Instagram ? "stroke-white fill-transparent" : "fill-white stroke-none"} ${item.icon === Linkedin && "fill-[#10203f] stroke-white px-1"} `}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-7">
          <h4 className="text-white font-bold text-[22px] relative after:absolute after:w-1/4 after:h-[3px] after:bg-white after:-bottom-2 after:left-0">
            Conoce más
          </h4>

          <ul className="space-y-2 flex flex-col text-white text-[16px] font-semibold">
            {conoceUrl.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-[#254FFF] animate-all duration-75"
              >
                {item.text}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-7">
          <h4 className="text-white font-bold text-[22px] relative after:absolute after:w-1/4 after:h-[3px] after:bg-white after:-bottom-2 after:left-0">
            Informes
          </h4>

          <ul className="space-y-2 flex flex-col text-white text-[16px] font-semibold">
            {InformesUrl.map((item, index) => (
              <div
                key={index}
                className="flex items-center cursor-pointer hover:text-[#254FFF] animate-all duration-75 space-x-3"
              >
                <item.icon
                  className={`${item.icon === Clock || item.icon === MapPin ? "stroke-[#10203f] fill-[#254FFF] w-7 h-7" : "w-5 h-5 stroke-[#254FFF] fill-transparent"} `}
                />
                <p className="">
                  {item.longText.map((text, idx) => (
                    <React.Fragment key={idx}>
                      {text}
                      {idx !== item.longText.length - 1 && <br />}{" "}
                      {/* Add <br /> after each line except the last */}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-7">
          <h4 className="text-white font-bold text-[22px] relative after:absolute after:w-1/4 after:h-[3px] after:bg-white after:-bottom-2 after:left-0">
            Suscríbete
          </h4>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-end"
            >
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Ingrese E-mail"
                        {...field}
                        className="border-none rounded-r-none bg-[#003C4A] text-white placeholder:text-white py-7 placeholder-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-blue-600 rounded-l-none text-white hover:bg-blue-700 py-7"
              >
                <PaperPlaneIcon />
              </Button>
            </form>
          </Form>

          <div className="flex flex-col space-y-7">
            <h4 className="text-white font-bold text-[22px] relative after:absolute after:w-1/4 after:h-[3px] after:bg-white after:-bottom-2 after:left-0">
              Consultas
            </h4>

            <ul className="space-y-2 flex flex-col text-white text-[16px] font-semibold">
              {ConsultasUrl.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="hover:text-[#254FFF] animate-all duration-75"
                >
                  {item.text}
                </Link>
              ))}
            </ul>
            <Link
              href="/libro-reclamaciones/"
              className="relative w-[170px] h-[74px]"
            >
              <Image src={"/icons/libro-de-reclamaciones.png"} alt="" fill />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <hr />
        <p className="text-muted-foreground mt-2">
          Copyright © 2022 CABO Courier. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
