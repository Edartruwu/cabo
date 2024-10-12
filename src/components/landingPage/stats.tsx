"use client";

import { Medal, NotepadText, Trophy, Users, Users2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { far } from '@awesome.me/kit-KIT_CODE/icons'
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

export default function Stats() {
  return (
    <main className="w-full pt-5 px-5 md:px-32">
      <div className="bg-[#f4f4f4] py-[40px] box-border grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-3 px-10">
        <div className="flex flex-col text-center items-center">
          <NotepadText className="w-12 h-12 stroke-[#5f5f5f]" />
          {/* <FontAwesomeIcon icon={faClipboard}/> */}
          <div className="flex flex-col">
            <h3 className="text-[#052E56] text-[45px] font-bold">4,500</h3>
            <p className="text-[15px] text-[#666666] font-bold">
              Envíos de paquetes
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <Users2 className="w-12 h-12 stroke-[#5f5f5f]" />
          <div className="flex flex-col">
            <h3 className="text-[#052E56] text-[45px] font-bold">54+</h3>
            <p className="text-[15px] text-[#666666] font-bold">
              Clientes y Socios
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <Trophy className="w-12 h-12 stroke-[#5f5f5f]" />
          <div className="flex flex-col">
            <h3 className="text-[#052E56] text-[45px] font-bold">14+</h3>
            <p className="text-[15px] text-[#666666] font-bold">
              Clientes satisfechos
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <Medal className="w-12 h-12 stroke-[#5f5f5f]" />
          <div className="flex flex-col">
            <h3 className="text-[#052E56] text-[45px] font-bold">100%</h3>
            <p className="text-[15px] text-[#666666] font-bold">
              Paquetes entregados
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
