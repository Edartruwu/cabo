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
        width={100}
        height={0}
      />
    </>
  );
}
