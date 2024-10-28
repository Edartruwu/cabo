"use client";

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
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Calcula } from "../Images/img";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  peso: z.number(),
  precio: z.number(),
  Entrega: z.string(),
});

export default function Calculate() {
  return (
    <main className="grid md:grid-cols-2 mt-44 px-5 md:px-32 pb-20 auto-rows-fr">
      <div className="relative">
        <Calcula />
      </div>
      <div className="flex flex-col space-x-3 items-start">
        <div className="flex items-start flex-col space-y-2">
          <p className="text-[20px] text-[#254FFF] font-bold">
            Calculadora de Envíos
          </p>
          <h3 className="text-[30px] lg:text-[48px] text-[#00044b] leading-tight font-bold pb-[25px]">
            Hagamos Cálculos para tus Envíos.
          </h3>
        </div>
        <div className="flex flex-col space-y-5 m-0 px-0 text-[18px] text-[#888888]">
          <p className="px-0 m-0">
            Ofrecemos tarifas competitivas para mejorar los costos, además
            brindamos la opción de acumular compras en tu casillero para
            realizar un solo envío y ahorrarte en costos operativos. Nuestros
            cáculos estan basados en el peso de tus productos y no en el volumen
            que estos ocupan.
          </p>
        </div>
        {/* form */}
        <div className="mt-5 flex flex-col space-y-5 w-full">
          <FormComponent />
          <div className="flex flex-col space-y-3">
            <p className="text-[14px] text-muted-foreground">
              <span className="text-muted-foreground font-bold">
                * Precio de productos:{" "}
              </span>
              Si tienes varios productos, debes ingresar la suma de estos
              incluyendo impuestos (taxes).
            </p>

            <p className="text-[14px] text-muted-foreground">
              <span className="text-muted-foreground font-bold">
                * Peso de productos:{" "}
              </span>
              Ingresar el total del peso aproximado que aparecen en las
              características de los productos o en la simulación de compra en
              la tienda donde lo esta realizando.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Entrega: "",
      peso: undefined,
      precio: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-5 box-border p-6 bg-[#f4f4f4]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="peso"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                Peso del producto en Kg.*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Peso*"
                  className="bg-white py-6 px-6 border-non rounded-lg"
                  type="number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="precio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                Precio del producto en USD$*
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Precio"
                  type="number"
                  className="bg-white py-6 px-6 border-non rounded-lg"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="Entrega"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                Entrega en Perú*
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Precio"
                  className="bg-white py-6 px-6 border-non rounded-lg"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-[40px] flex space-x-3 hover:space-x-6 hover:transition-all hover:duration-150 ease-out px-0 py-0 w-[180px] h-[55px] bg-[#00044B] hover:bg-[#00044B]"
        >
          <p>Calcular </p>
          <ArrowRight />
        </Button>
      </form>
    </Form>
  );
}
