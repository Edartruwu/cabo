// "use client";

// import { Medal, NotepadText, Trophy, Users2 } from "lucide-react";
// // import { far } from '@awesome.me/kit-KIT_CODE/icons'

// export default function Stats() {
//   return (
//     <main className="w-full pt-5 px-5 md:px-32">
//       <div className="bg-[#f4f4f4] py-[40px] box-border grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-3 px-10">

//         <div className="flex flex-col text-center items-center">
//           <NotepadText className="w-12 h-12 stroke-[#5f5f5f]" />
//           {/* <FontAwesomeIcon icon={faClipboard}/> */}
//           <div className="flex flex-col">
//             <div className="flex space-x-1 justify-center text-[#052E56] text-[45px] font-bold">
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp flex flex-col space-y-2'>
//                     <p className="">1</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">4</p>
//                 </div>
//               </div>
//               <div>,</div>
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp2 flex flex-col space-y-2'>
//                     <p className="">0</p>
//                     <p className="">1</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">4</p>
//                     <p className="">8</p>
//                     <p className="">9</p>
//                     <p className="">5</p>
//                 </div>
//               </div>
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp3 flex flex-col space-y-2'>
//                     <p className="">9</p>
//                     <p className="">1</p>
//                     <p className="">5</p>
//                     <p className="">4</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">8</p>
//                     <p className="">0</p>
//                 </div>
//               </div>
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp4 flex flex-col space-y-2'>
//                 <p className="">9</p>
//                     <p className="">1</p>
//                     <p className="">5</p>
//                     <p className="">4</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">8</p>
//                     <p className="">0</p>

//                 </div>
//               </div>
//             </div>
//             {/* <h3 className="text-[#052E56] text-[45px] font-bold">4,500</h3> */}
//             <p className="text-[15px] text-[#666666] font-bold">
//               Envíos de paquetes
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col items-center text-center">
//           <Users2 className="w-12 h-12 stroke-[#5f5f5f]" />
//           <div className="flex flex-col">

//             <div className="flex space-x-1 justify-center text-[#052E56] text-[45px] font-bold">
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp5 flex flex-col space-y-2'>
//                     <p className="">1</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">5</p>
//                 </div>
//               </div>
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp1 flex flex-col space-y-2'>
//                     <p className="">0</p>
//                     <p className="">1</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">4</p>
//                     <p className="">8</p>
//                     <p className="">9</p>
//                     <p className="">4</p>
//                 </div>
//               </div>
//               <div>+</div>

//             </div>
//             <p className="text-[15px] text-[#666666] font-bold">
//               Clientes y Socios
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col items-center text-center">
//           <Trophy className="w-12 h-12 stroke-[#5f5f5f]" />
//           <div className="flex flex-col">
//             <div className="flex space-x-1 justify-center text-[#052E56] text-[45px] font-bold">
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp5 flex flex-col space-y-2'>
//                     <p className="">1</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">1</p>
//                 </div>
//               </div>
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp1 flex flex-col space-y-2'>
//                     <p className="">0</p>
//                     <p className="">1</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">4</p>
//                     <p className="">8</p>
//                     <p className="">9</p>
//                     <p className="">4</p>
//                 </div>
//               </div>
//               <div>+</div>

//             </div>
//             <p className="text-[15px] text-[#666666] font-bold">
//               Clientes satisfechos
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col items-center text-center">
//           <Medal className="w-12 h-12 stroke-[#5f5f5f]" />
//           <div className="flex flex-col">
//             <div className="flex space-x-1 justify-center text-[#052E56] text-[45px] font-bold">
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp flex flex-col space-y-2'>
//                     <p className="">1</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">1</p>
//                 </div>
//               </div>

//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp3 flex flex-col space-y-2'>
//                     <p className="">9</p>
//                     <p className="">1</p>
//                     <p className="">5</p>
//                     <p className="">4</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">8</p>
//                     <p className="">0</p>
//                 </div>
//               </div>
//               <div className="h-20 overflow-hidden">

//                 <div className='relative animate-slideUp4 flex flex-col space-y-2'>
//                 <p className="">9</p>
//                     <p className="">1</p>
//                     <p className="">5</p>
//                     <p className="">4</p>
//                     <p className="">2</p>
//                     <p className="">3</p>
//                     <p className="">8</p>
//                     <p className="">0</p>

//                 </div>
//               </div>
//               <div>%</div>

//             </div>
//             <p className="text-[15px] text-[#666666] font-bold">
//               Paquetes entregados
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { Medal, NotepadText, Trophy, Users2 } from "lucide-react";

export default function Stats() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            entry.target.classList.add(`animate-slideUp${index}`);
            observer.unobserve(entry.target); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const setRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      elementsRef.current[index] = el;
    }
  };

  return (
    <main className="w-full pt-5 px-5 lg:px-32 bg-white">
      <div className="bg-[#f4f4f4] py-[40px] box-border grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 lg:gap-3 px-10">
        <div className="flex flex-col text-center items-center">
          <NotepadText className="w-12 h-12 stroke-[#5f5f5f]" />
          <div className="flex flex-col">
            <div className="flex space-x-1 justify-center text-[#052E56] text-[45px] font-bold">
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 0)} // Use index for tracking
                  data-index="1"
                  className="relative flex flex-col space-y-2"
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                </div>
              </div>
              <div>,</div>
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 1)} // Use index for tracking
                  data-index="2"
                  className="relative flex flex-col space-y-2"
                >
                  <p>0</p>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>8</p>
                  <p>9</p>
                  <p>5</p>
                </div>
              </div>
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 2)}
                  data-index="3"
                  className="relative flex flex-col space-y-2"
                >
                  <p>9</p>
                  <p>1</p>
                  <p>5</p>
                  <p>4</p>
                  <p>2</p>
                  <p>3</p>
                  <p>8</p>
                  <p>0</p>
                </div>
              </div>
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 3)}
                  data-index="4"
                  className="relative flex flex-col space-y-2"
                >
                  <p>9</p>
                  <p>1</p>
                  <p>5</p>
                  <p>4</p>
                  <p>2</p>
                  <p>3</p>
                  <p>8</p>
                  <p>0</p>
                </div>
              </div>
            </div>
            <p className="text-[15px] text-[#666666] font-bold">
              Envíos de paquetes
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Users2 className="w-12 h-12 stroke-[#5f5f5f]" />
          <div className="flex flex-col">
            <div className="flex space-x-1 justify-center text-[#052E56] text-[45px] font-bold">
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 4)}
                  data-index="5"
                  className="relative flex flex-col space-y-2"
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>5</p>
                </div>
              </div>
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 5)}
                  data-index="1"
                  className="relative flex flex-col space-y-2"
                >
                  <p>0</p>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>8</p>
                  <p>9</p>
                  <p>4</p>
                </div>
              </div>
              <div>+</div>
            </div>
            <p className="text-[15px] text-[#666666] font-bold">
              Clientes y Socios
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Trophy className="w-12 h-12 stroke-[#5f5f5f]" />
          <div className="flex flex-col">
            <div className="flex space-x-1 justify-center text-[#052E56] text-[45px] font-bold">
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 6)}
                  data-index="5"
                  className="relative flex flex-col space-y-2"
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>1</p>
                </div>
              </div>
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 7)}
                  data-index="1"
                  className="relative flex flex-col space-y-2"
                >
                  <p>0</p>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>8</p>
                  <p>9</p>
                  <p>4</p>
                </div>
              </div>
              <div>+</div>
            </div>
            <p className="text-[15px] text-[#666666] font-bold">
              Clientes satisfechos
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Medal className="w-12 h-12 stroke-[#5f5f5f]" />
          <div className="flex flex-col">
            <div className="flex space-x-1 justify-center text-[#052E56] text-[45px] font-bold">
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 8)}
                  data-index="1"
                  className="relative flex flex-col space-y-2"
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>1</p>
                </div>
              </div>
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 9)}
                  data-index="3"
                  className="relative flex flex-col space-y-2"
                >
                  <p>9</p>
                  <p>1</p>
                  <p>5</p>
                  <p>4</p>
                  <p>2</p>
                  <p>3</p>
                  <p>8</p>
                  <p>0</p>
                </div>
              </div>
              <div className="h-20 overflow-hidden">
                <div
                  ref={(el) => setRefs(el, 10)}
                  data-index="4"
                  className="relative flex flex-col space-y-2"
                >
                  <p>9</p>
                  <p>1</p>
                  <p>5</p>
                  <p>4</p>
                  <p>2</p>
                  <p>3</p>
                  <p>8</p>
                  <p>0</p>
                </div>
              </div>
              <div>%</div>
            </div>
            <p className="text-[15px] text-[#666666] font-bold">
              Paquetes entregados
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
