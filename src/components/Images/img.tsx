import Image from "next/image";

export function AboutImg() {
  return (
    <>
      <Image
        src="/ServicioSeguroyConfiable2.webp"
        alt=""
        className="w-full object-contain"
        sizes="100%"
        // width={100}
        // height={0}
        // style={{ width: "100%", height: "100%" }}
        fill
      />
    </>
  );
}

export function ProcedureImg() {
  return (
    <>
      <Image
        src="/Direccionfisica2.webp"
        alt=""
        className="w-full object-contain"
        sizes="100%"
        // width={100}
        // height={0}
        fill
      />
    </>
  );
}

export function Slide1() {
  return (
    <>
      <Image
        src="/banners/Banner_1.png"
        alt=""
        className="hidden lg:block w-full object-top object-contain"
        sizes="100%"
        // width={100}
        // height={0}
        fill
      />
      <Image
        src="/banners/banner1.png"
        alt=""
        className="block md:hidden w-full object-top object-cover"
        sizes="100%"
        // width={100}
        // height={0}
        fill
      />
    </>
  );
}

export function Slide2() {
  return (
    <>
      <Image
        src="/banners/Banner_2.png"
        alt=""
        className="hidden lg:block w-full object-top object-contain"
        sizes="100%"
        // width={100}
        // height={0}
        fill
      />
      <Image
        src="/banners/banner2.png"
        alt=""
        className="block md:hidden w-full object-top object-cover"
        sizes="100%"
        // width={100}
        // height={0}
        fill
      />
    </>
  );
}

export function Slide3() {
  return (
    <>
      <Image
        src="/banners/Banner_4.png"
        alt=""
        className="w-full object-top object-contain"
        sizes="100%"
        // width={100}
        // height={0}
        fill
      />
    </>
  );
}

export function Slide4() {
  return (
    <>
      <Image
        src="/banners/Banner_3.png"
        alt=""
        className="w-full object-top object-contain"
        sizes="100%"
        // width={100}
        // height={0}
        fill
      />
    </>
  );
}

export function Slide5() {
  return (
    <>
      <Image
        src="/banners/Banner_5.png"
        alt=""
        className="w-full object-top object-contain"
        sizes="100%"
        // width={100}
        // height={0}
        fill
      />
    </>
  );
}
