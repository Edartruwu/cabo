"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

interface image {
    src: string,
    id: number,
    url: string,
}

export function CompanyLogos() {
    const image: image[] = [
        {
            src:"/logos/Aliexpress-Logo.png",
            id: 1,
            url: "www.aliexpress.us/"
        },
        {
            src:"/logos/Amazon_logo.svg.webp",
            id: 2,
            url: "www.amazon.com"
        },
        {
            src:"/logos/Apple-Logo-PNG-Photos.png",
            id: 3,
            url: "www.apple.com/us/store"
        },
        {
            src:"/logos/Best_Buy_logo_2.png",
            id: 4,
            url: "www.bestbuy.com/"
        },
        {
            src:"/logos/Walmart-776760940-e1684945958133.png",
            id: 5,
            url: "www.walmart.com"
        },
        {
            src:"/logos/logo-ebay.png",
            id: 6,
            url: "www.ebay.com/"
        },
    ]
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <main className="mt-5 px-5 md:px-20 pb-20 pt-32 grid place-items-center">
        <div className="grid md:place-items-center text-center">
            <p className="text-[20px] text-[#254FFF] font-bold">
                Tiendas recomendadas
            </p>
            <h3 className="md:text-[47px] text-[30px] text-[#182D54] font-bold pb-[25px]">
                Compra seguro en <br /> tus tiendas favoritas
            </h3>
        </div>

        <div className="w-full relative max-w-full overflow-x-hidden">
            <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            >
            <CarouselContent className="h-full">
                {image.map((item) => (
                <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/4 h-full">
                    <div className="p-1">
                    <Card className="border-none p-0 shadow-none h-full">
                        <CardContent className="flex items-center w-full justify-center p-6">
                            <Link href={item.url} className="flex w-full h-14 justify-center items-center relative cursor-pointer">

                                <Image
                                    src={item.src || "/logos/logocabo.png"}
                                    alt="company logo image"
                                    className={`grayscale ${item.src == "/logos/Aliexpress-Logo.png" ? "object-cover" : "object-contain" }  hover:grayscale-0 transition-all duration-300`}
                                    fill
                                />
                            </Link>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    </main>
  )
}
