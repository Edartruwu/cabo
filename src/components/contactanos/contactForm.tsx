"use client";

import { MailsIcon, MessageSquareMoreIcon, PhoneCall } from "lucide-react";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";

interface FormFeatures {
  icon: React.ElementType;
  content: string;
  link?: string;
  linkText?: string;
}
const formSchema = z.object({
  fullName: z
    .string({ message: "You need to add your first name" })
    .min(1, { message: "You need to add your first name" }),
  emailAddress: z.string().email(),
  phoneNumber: z.number(),
  Asunto: z.string(),
  message: z.string(),
});
export default function ContactForm() {
  const constactOptions: FormFeatures[] = [
    {
      icon: MailsIcon,
      content: "Si prefieres escribirnos directamente, este es nuestro correo",
      link: "mailto:info@cabocourier.com",
      linkText: "info@cabocourier.com",
    },
    {
      icon: PhoneCall,
      content:
        "Nos puedes llamar a través de nuestra línea de atención a nuestros clientes +51 936068310, uno de nuestros agentes especializados estará esperando tu llamada.",
    },
    {
      icon: MessageSquareMoreIcon,
      content:
        "También estamos en línea a través del chat online a través de la página web y whatsapp",
      link: "https://wa.me/51936068310",
    },
  ];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-3 md:px-[84px]">
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-3 max-w-[580px] md:max-w-full my-0 mx-auto md:space-y-5">
          <h3 className="text-[20px] font-[700] text-[#254FFF]">Contáctanos</h3>
          <h2 className="text-[#003440] text-[36px] font-[700] pt-[15px] pb-[15px]">
            Quieres tener seguridad y agilidad en el envío de tus compras hacia
            Perú?
          </h2>
          <div className="flex flex-col space-y-3">
            <p className="text-[14px] text-muted-foreground pb-[10px]">
              Te invitamos desde ahora a que valores todo lo que puedes ganar
              con nuestro servicios. Nos gustaría ser tu socio logístico para
              tus envíos hacia Perú desde el extranjero.
            </p>
            <p className="text-[14px] text-muted-foreground">
              Esperamos que todo lo que hayas leído en nuestra web te haya
              gustado, además haya despertado el emprendedor que llevas por
              dentro para convertir tu negocio en algo rentable e irresistible
              gracias a nuestra sociedad.
            </p>
            <p className="text-[14px] text-muted-foreground">
              Si tienes alguna consulta sobre nuestros servicios, por favor
              escríbenos, te responderemos dentro de las siguientes 24 horas,
              gracias
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          {constactOptions.map((items, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-8 bg-[#f4f4f4] p-[30px] border-t-[6px] border-t-[f4f4f4] animation-all ease hover:border-t-[#254FFF] box-border"
            >
              <div className="">
                <div className="bg-[#182d546e] w-[70px] h-[70px] mr-[30px] flex items-center justify-center rounded-[8px]">
                  <items.icon className="stroke-white w-14 h-14" />
                </div>
              </div>
              <div>
                <p className="text-[14px] inline text-[#888888]">
                  {items.content}
                </p>
                {items.link && (
                  <Link
                    href={items.link}
                    className="inline text-muted-foreground"
                  >
                    {" "}
                    {items.link}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <FormFields />
      </div>
    </section>
  );
}

export function FormFields() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: undefined,
      Asunto: "",
      message: "",
    },
  });

  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  //   const [isPersonalAcct, setIsPersonalAcct] = useState<boolean>(true)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-[#f4f4f4] space-y-5 md:px-10 py-10"
      >
        <h3 className="text-center font-bold text-[36px] text-[#003440]">
          Escríbenos!
        </h3>

        <div className="flex space-x-10 w-full items-baseline">
          <FormField
            name="fullName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    placeholder="Nombre y Apellid*"
                    className="bg-white w-full py-5"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="emailAddress"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    placeholder="Correno electonico"
                    className="bg-white w-full py-5"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-10 w-full items-baseline">
          <FormField
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    placeholder="Telefono de contacto"
                    className="bg-white w-full py-5"
                    type="tel"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="Asunto"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    placeholder="Asunto"
                    className="bg-white w-full py-5"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Tu mesanje..."
                  className="bg-white min-h-56"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            onClick={() => setAcceptedTerms(true)}
            className="zinc-500"
          />
          <label
            htmlFor="terms"
            className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            onClick={() => setAcceptedTerms(true)}
          >
            Accept terms and conditions
          </label>
        </div>

        <Button
          className="w-full bg-[#182D54] py-6 hover:bg-[#041a1f]"
          type="submit"
          disabled={!acceptedTerms}
        >
          Envia
        </Button>
      </form>
    </Form>
  );
}
