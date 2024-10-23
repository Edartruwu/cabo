"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "../Images/img";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronLeft,
  ChevronRight,
  PhoneIcon,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface socialLinks {
  icon: React.ElementType;
  url: string;
}

export default function HeaderSection() {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [visibleSlide, setVisibleSlide] = useState<number>(0); // Secondary state to track visibility
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // State to handle transition delay

  function addingSlide() {
    setIsTransitioning(true);
    setTimeout(() => {
      if (slideNumber === 4) {
        setSlideNumber(0);
      } else {
        setSlideNumber(slideNumber + 1);
      }
    }, 1000);
  }

  function prevSlide() {
    setIsTransitioning(true);
    setTimeout(() => {
      if (slideNumber === 0) {
        setSlideNumber(4);
      } else {
        setSlideNumber(slideNumber - 1);
      }
    }, 1000);
  }

  // setTimeout(() => {
  //     setIsTransitioning(true)
  //     setTimeout(() => {
  //         if (slideNumber === 4) {
  //             setSlideNumber(0)
  //         } else {
  //             setSlideNumber(slideNumber + 1)
  //         }
  //     }, 1000);
  // }, 10000);

  useEffect(() => {
    // setIsTransitioning(true)
    setIsTransitioning(false);
    const timeout = setTimeout(() => {
      setVisibleSlide(slideNumber);
      setIsTransitioning(false);
    }, 200); // Adjust this delay as needed

    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, [slideNumber]);

  return (
    <main className="flex relative h-auto flex-col pb-5 space-y-15 lg:space-y-5 bg-background bg-no-repeat bg-cover">
      {/* text and image */}

      <div
        className="relative mt-0 pt-0 w-full md:h-[100vh] grid grid-cols-1  md:grid-cols-2 gap-5 md:auto-rows-fr py-0 lg:px-10 transition-opacity duration-300"
        // Fade out during transition
      >
        {visibleSlide === 0 && (
          <>
            {/* text */}
            <div className="h-full px-10 lg:px-0 flex items-center">
              <div className="w-full flex flex-col space-y-5">
                {/* header text */}
                <div className="h-50 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-3 translate-y-[-100%]
                                        ${visibleSlide === 0 && "animate-heroSlide1"}
                                        ${isTransitioning && "animate-opposite1"}
                                        }`}
                  >
                    <h1 className="uppercase text-[40px] text-[#254FFF]">
                      compra en usa.
                      <br />
                      Nosotros lo traemos <br />
                      facil rapido y seguro.
                    </h1>
                    <p className="text-zinc-700 text-[1.6rem]">
                      Te brindamos un casillero en Miami.
                    </p>
                  </div>
                </div>
                {/* button and other text */}
                <div className="h-15 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-1 translate-y-[109%] items-start
                                            ${visibleSlide === 0 && "animate-heroText1"}
                                            ${isTransitioning && "animate-oppositeText1"}`}
                  >
                    <h3 className="font-bold text-[#254FFF] text-xl">
                      Totalmente gratis
                    </h3>
                    <Link href="#">
                      <Button className="bg-[#00044B] hover:bg-[#00044B]">
                        Registrate
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div
              className={`relative row-start-1 md:row-start-2 h-[50vh] p-0 flex justify-start
                            ${visibleSlide === 0 && "animate-opacity1"}
                            ${isTransitioning && "animate-opacity2"}
                            `}
            >
              <Slide1 />
            </div>
          </>
        )}

        {visibleSlide === 1 && (
          <>
            {/* text */}
            <div className="h-full px-10 lg:px-0 flex items-center">
              <div className="w-full flex flex-col space-y-5">
                {/* header text */}
                <div className="h-50 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-3 
                                        ${visibleSlide === 1 && "animate-heroSlide1"}
                                        ${isTransitioning && "animate-opposite1"}
                                        }`}
                  >
                    <h1 className="uppercase text-[40px] text-[#254FFF]">
                      un casillero en
                      <br />
                      estados unidos es <br />
                      ideal para tus compras.
                    </h1>
                    <p className="text-zinc-700 text-[1.6rem]">
                      Unete a la familia CABO, mas que <br /> un cliente eres
                      nuestro socio.
                    </p>
                  </div>
                </div>

                {/* button and other text */}
                <div className="bg-green h-15 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-1 translate-y-[100%] items-start
                                            ${visibleSlide === 1 && "animate-heroText1"}
                                            ${isTransitioning && "animate-oppositeText1"}`}
                  >
                    <Link href="#">
                      <Button className="bg-[#00044B] hover:bg-[#00044B]">
                        Registrate
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div
              className={`relative row-start-1 md:row-start-2 h-[50vh] p-0 flex justify-start
                            ${visibleSlide === 1 && "animate-opacity1"}
                            ${isTransitioning && "animate-opacity2"}
                            `}
            >
              <Slide2 />
            </div>
          </>
        )}

        {visibleSlide === 2 && (
          <>
            {/* text */}
            <div className="h-full px-10 lg:px-0 flex items-center">
              <div className="w-full flex flex-col space-y-5">
                {/* header text */}
                <div className="h-15 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-3 
                                        ${visibleSlide === 2 && "animate-heroSlide1"}
                                        ${isTransitioning && "animate-opposite1"}
                                        }`}
                  >
                    <h1 className="uppercase text-[40px] text-[#254FFF]">
                      to casillero esta
                      <br />
                      seguro en nuestras <br />
                      bodegas.
                    </h1>
                  </div>
                </div>
                {/* button and other text */}
                <div className="h-15 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-1 translate-y-[100%] items-start
                                            ${visibleSlide === 2 && "animate-heroText1"}
                                            ${isTransitioning && "animate-oppositeText1"}`}
                  >
                    <Link href="#">
                      <Button className="bg-[#00044B] hover:bg-[#00044B]">
                        Registrate
                      </Button>
                    </Link>
                    <p className="text-zinc-700 text-[1.6rem]">
                      !Realizamous envios a todo Peru!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div
              className={`relative row-start-1 md:row-start-2 h-[50vh] p-0 flex justify-start
                            ${visibleSlide === 2 && "animate-opacity1"}
                            ${isTransitioning && "animate-opacity2"}
                            `}
            >
              <Slide3 />
            </div>
          </>
        )}

        {visibleSlide === 3 && (
          <>
            {/* image */}
            <div
              className={`relative row-start-1 md:row-start-2 h-[50vh] p-0 flex justify-start
                            ${visibleSlide === 3 && "animate-opacity1"}
                            ${isTransitioning && "animate-opacity2"}
                            `}
            >
              <Slide4 />
            </div>
            {/* text */}
            <div className="h-full px-10 lg:px-0 flex items-center">
              <div className="w-full flex flex-col items-end space-y-5">
                {/* header text */}
                <div className="h-72 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-3 
                                        ${visibleSlide === 3 && "animate-heroSlide1"}
                                        ${isTransitioning && "animate-opposite1"}
                                        }`}
                  >
                    <h1 className="uppercase text-[40px] text-right text-[#254FFF]">
                      nuestras entregas
                      <br />
                      son seguras y <br />
                      confiables.
                    </h1>
                    <p className="text-zinc-700 text-[1.6rem] text-right">
                      !En la direccion que <br />
                      nos indiques!
                    </p>
                  </div>
                </div>
                {/* button and other text */}
                <div className="h-15 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-1 translate-y-[100%] items-start
                                            ${visibleSlide === 3 && "animate-heroText1"}
                                            ${isTransitioning && "animate-oppositeText1"}`}
                  >
                    <Link href="#">
                      <Button className="bg-[#00044B] hover:bg-[#00044B]">
                        Registrate
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {visibleSlide === 4 && (
          <>
            {/* text */}
            <div className="h-full px-10 lg:px-0 flex items-center">
              <div className="w-full flex flex-col space-y-5">
                {/* header text */}
                <div className="h-82 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-3 
                                        ${visibleSlide === 4 && "animate-heroSlide1"}
                                        ${isTransitioning && "animate-opposite1"}
                                        }`}
                  >
                    <h1 className="uppercase text-[40px] text-[#254FFF]">
                      nos convertimos en
                      <br />
                      tu alidado para <br />
                      hacer crecer tu <br />
                      negocio.
                    </h1>
                    <p className="text-zinc-700 text-[1.6rem]">
                      Realizamos la importacion <br />
                      de tus productos internacionales.
                    </p>
                  </div>
                </div>
                {/* button and other text */}
                <div className="h-30 overflow-hidden">
                  <div
                    className={`flex flex-col space-y-1 translate-y-[100%] items-start
                                            ${visibleSlide === 4 && "animate-heroText1"}
                                            ${isTransitioning && "animate-oppositeText1"}`}
                  >
                    <Link href="#">
                      <Button className="bg-[#00044B] hover:bg-[#00044B]">
                        Registrate
                      </Button>
                    </Link>
                    <h3 className="font-bold text-[#254FFF] text-xl">
                      Totalmente gratis
                    </h3>
                    <p className="text-zinc-700 text-[1.6rem]">
                      Te brindamos un casillero en Miami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div
              className={`relative row-start-1 md:row-start-2 h-[50vh] p-0 flex justify-start
                            ${visibleSlide === 4 && "animate-opacity1"}
                            ${isTransitioning && "animate-opacity2"}
                            `}
            >
              <Slide5 />
            </div>
          </>
        )}
      </div>

      {/* next and prev slide buttons */}

      {/* prev */}
      <Button
        onClick={() => prevSlide()}
        className="hidden md:flex absolute hover:bg-zinc-600 left-2 bg-zinc-300 w-10 p-0 rounded-full bottom-1/2 items-center justify-center"
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={() => addingSlide()}
        className="hidden md:flex absolute right-3 hover:bg-zinc-600 bg-zinc-300 w-10 p-0 rounded-full  bottom-1/2 items-center justify-center"
      >
        <ChevronRight />
      </Button>

      {/* side controls */}
      <div className="w-full lg:mt-0 mt-10 mb-5 flex flex-col items-center">
        <div className="flex space-x-3">
          <Button
            className={`${slideNumber === 0 ? "bg-blue-600 hover:bg-blue-600" : "bg-transparent hover:bg-blue-600 border-blue-600 border"} rounded-full p-0 w-5 h-5`}
            onClick={() => setSlideNumber(0)}
          ></Button>
          <Button
            className={`${slideNumber === 1 ? "bg-blue-600 hover:bg-blue-600" : "bg-transparent hover:bg-blue-600 border-blue-600 border"} rounded-full p-0 w-5 h-5`}
            onClick={() => setSlideNumber(1)}
          ></Button>
          <Button
            className={`${slideNumber === 2 ? "bg-blue-600 hover:bg-blue-600" : "bg-transparent hover:bg-blue-600 border-blue-600 border"} rounded-full p-0 w-5 h-5`}
            onClick={() => setSlideNumber(2)}
          ></Button>
          <Button
            className={`${slideNumber === 3 ? "bg-blue-600 hover:bg-blue-600" : "bg-transparent hover:bg-blue-600 border-blue-600 border"} rounded-full p-0 w-5 h-5`}
            onClick={() => setSlideNumber(3)}
          ></Button>
          <Button
            className={`${slideNumber === 4 ? "bg-blue-600 hover:bg-blue-600" : "bg-transparent hover:bg-blue-600 border-blue-600 border"} rounded-full p-0 w-5 h-5`}
            onClick={() => setSlideNumber(4)}
          ></Button>
        </div>
      </div>
    </main>
  );
}

export function NavBar() {
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
  const nav = [
    {
      link: "/",
      text: "Incio",
    },
    {
      link: "/conocendos",
      text: "Conocendos",
    },
    {
      link: "/calcula",
      text: "Calcula tu envio",
    },
    {
      link: "/registre",
      text: "Registre",
    },
    {
      link: "/como-funciona",
      text: "Como Funciona",
    },
    {
      link: "/conatactanos",
      text: "Conatactanos",
    },
  ];

  const pathName = usePathname();

  return (
    <>
      {/* Nav */}
      <nav className="fixed pt-5 pb-10 top-0  bg-gradient-to-b from-[#00044B]  to-transparent   w-full z-50">
        <div className="flex  px-10 flex-col space-y-0">
          <div className="hidden lg:flex flex-col space-y-1">
            <div className="flex justify-end px-5 items-center">
              <div className="flex justify-between items-center text-white space-x-8">
                <div className="flex space-x-2">
                  {link.map((item, index) => (
                    <Link key={index} href={item.url}>
                      <item.icon
                        className={`w-5 h-5
                                            ${item.icon === Instagram ? "stroke-white fill-transparent" : "fill-white stroke-none"} 
                                            ${item.icon === Facebook && " px-1 stroke-[#00044B] fill-[#00044B] rounded-full bg-white"} 
                                            ${item.icon === Linkedin && " px-1 stroke-[#10203f] bg-white fill-[#00044B]"} `}
                      />
                    </Link>
                  ))}
                </div>

                <div>
                  <p className="text-sm">
                    Lunes a viernes de 9am a 6pm, sabados 9 a 1pm
                  </p>
                </div>

                <Link
                  href="telto:+51936068310"
                  className="flex space-x-1 items-center "
                >
                  <PhoneIcon className="fill-[#254FFF] stroke-none rotate-[270deg] w-4 h-4" />
                  <p className="text-sm">+51 936 068 310</p>
                </Link>
              </div>
            </div>
            <div className="w-full h-[2px] rounded-md bg-gradient-to-r from-transparent to-[#254FFF]"></div>
          </div>

          <div className="flex justify-between items-center text-md w-full">
            <div className="relative w-[100.8px] h-[45.8px]">
              <Image src="/logos/logocabo-blanco.png" alt="cabo logo" fill />
            </div>
            <ul className="hidden lg:flex space-x-10">
              {nav.map((item, index) => (
                <li
                  key={index}
                  className={`hover:underline text-white text-sm font-semibold
                         ${pathName === item.link && "underline"}`}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
            <Menu className="stroke-white" />
          </div>
        </div>
      </nav>
    </>
  );
}
