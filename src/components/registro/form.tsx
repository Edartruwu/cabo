"use client"

import { MailsIcon, MapPin, PhoneIcon } from "lucide-react"
import React from "react"

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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



interface FormFeatures{
    icon: React.ElementType,
    title: string,
    description: string
}
const formSchema =z.object({
    firstName: z
    .string({ message: "You need to add your first name" })
    .min(1, { message: "You need to add your first name" }),
    lastName: z
    .string({ message: "You need to add your last name" })
    .min(1, { message: "You need to add your last name" }),
    personalAccount: z.boolean(),
    companyAccount: z.boolean(),
    RucNumber: z.string(),
    companyName: z.string(),
    documentType:z.string(),
    documentNumber:z.string(),
    correo: z.string(),
    phoneNumber:z.string(),
    dirrecion: z.string(),
    department: z.string(), // should be a list of strings
    ciudad: z.string(), // should be a list of strings as well
})
export default function Registro(){
    const formFeatures: FormFeatures[] = [
        {
            icon: MapPin,
            title: 'Persona Natural o Jurídica',
            description: 'Recuerda llenar toda la información, si quieres registrarte como persona jurídica, debes ingresar correctamente el RUC y nombre de empresa como aparece en tu ficha RUC.'
        },
        {
            icon: PhoneIcon,
            title: 'Número Telefónico',
            description: 'Bríndanos un número de celular válido, donde podamos mantenerte informado sobre tu número de casillero, seguimiento de tus consultas, envíos, promociones, entre otros.'
        },
        {
            icon: MailsIcon,
            title: 'Correo Electrónico',
            description: 'Con este correo realizaremos la confirmación de tu casillero, es importante que configures el correo info@cabocourier.com como una cuenta segura para que las notificaciones no lleguen al SPAM o Correo no deseado. Debes utilizar tu cuenta de correo registrada para realizar tus compras en el extranjero y solicitar los envíos con nuestros agentes de operaciones.'
        },

    ]
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-3 md:px-[84px]">
            <div className="flex flex-col space-y-3">

                <div className="flex flex-col space-y-3 max-w-[580px] md:max-w-full my-0 mx-auto md:space-y-5">
                    <h3 className="text-[20px] font-[700] text-[#254FFF]">
                        Tu casillero fisico en Estados Unidos
                    </h3>
                    <h2 className="text-[#003440] text-[36px] font-[700] pt-[15px] pb-[15px]">Regístrate</h2>
                    <p className="text-[14px] text-muted-foreground pb-[10px]">
                        Necesitas un casillero en Estados Unidos para recibir tus compras. 
                        Nosotros te lo brindamos sin costo alguno, contamos con bodegas 
                        propias en Miami con personal especializado en logística, 
                        almacenamiento y clasificación de paquetería.
                    </p>

                </div>

                <div className="flex flex-col space-y-6">
                    {formFeatures.map((items,index) => (
                        <div key={index} className="flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-8 bg-[#f4f4f4] p-[30px] border-t-[6px] border-t-[f4f4f4] animation-all ease hover:border-t-[#254FFF] box-border">
                            <div className="">
                                <div className="bg-[#182d546e] w-[70px] h-[70px] mr-[30px] flex items-center justify-center rounded-[8px]">
                                    <items.icon className="stroke-white w-14 h-14" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-[10px]">
                                <h3 className="text-[#002a34] text-[20px] font-[700]">{items.title}</h3>
                                <p className="text-[14px] text-[#888888]">
                                    {items.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div>
                <FormFields/>
            </div>

        </section>
    )
}

export function FormFields(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: '',
          lastName: '',
          personalAccount: true,
          companyAccount: false,
          RucNumber: '',
          companyName: '',
          documentType: '',
          documentNumber: '',
          correo:'',
          phoneNumber: '',
          dirrecion: '',
          department: '',
          ciudad: '',
        },
      });
      function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
      }

    //   const [isPersonalAcct, setIsPersonalAcct] = useState<boolean>(true)
      const [acctType, setAccType] = useState<string>('option-one')

    return(
        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="bg-[#f4f4f4] space-y-5 md:px-10 py-10">
            {/* form elements */}
            <div className="flex-col space-y-5">
                {/* name */}
                <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 w-full md:justify-between items-ctart md:items-baseline">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Solor Primer Numbre*"
                            className="bg-white py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Apellidos*"
                            className="bg-white py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>

                {/* user type (radio groups) */}
                <RadioGroup defaultValue="option-one" className="flex space-x-3" onChange={(e) => setAccType(e.target)} >
                    <div className="flex flex-col items-center space-y-2">
                        <RadioGroupItem className="w-20 h-20" value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <RadioGroupItem className="w-20 h-20" value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                    </div>
                </RadioGroup>


                {/* document type and name */}
                <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 w-full md:justify-between items-ctart md:items-baseline">
                    {/* changeto select tage through prisma enum */}
                    <FormField
                        control={form.control}
                        name="documentType"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Tipo de documento*"
                            className="bg-white py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="documentNumber"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Numero de documento*"
                            className="bg-white py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>

                {/* company form */}
                <div className={`h-0 overflow-hidden animate-all ease-in-out flex-col space-y-3 flex
                    ${acctType === 'option-two' ? "animate-stretch": "h-0"}
                    `}>
                    <FormField
                        control={form.control}
                        name="RucNumber"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Numero de RUC*"
                            className="bg-white w-full py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Numbre de su emprea*"
                            className="bg-white w-full py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>

                {/* phone number & correo */}
                <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 w-full md:justify-between items-ctart md:items-baseline">
                    <FormField
                        control={form.control}
                        name="correo"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="correo*"
                            className="bg-white py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Numero de cellular*"
                            className="bg-white py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>

                {/* direccion */}
                <FormField
                    control={form.control}
                    name="dirrecion"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <Input 
                        placeholder="Direccion domicillo*"
                        className="bg-white w-full py-6 px-6 border-non rounded-lg" 
                        {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* department */}
                 <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 w-full md:justify-between items-ctart md:items-baseline">
                    <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Departamento*"
                            className="bg-white py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="ciudad"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input 
                            placeholder="Ciudad*"
                            className="bg-white py-6 px-6 border-non rounded-lg" 
                            {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                
            </div>

            <div className="flex space-x-3">
                {/* check box */}
                <p className="text-[14px] text-[#888888]">
                    Acepto los terminos y condiciones y tratamiento de datos personales.
                </p>
            </div>

            <Button className="w-full bg-[#182D54] py-6 hover:bg-[#041a1f]" type="submit">Registrate</Button>
                

            </form>
        </Form>
    )
}