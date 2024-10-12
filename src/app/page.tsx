import About from "@/components/landingPage/about";
import How from "@/components/landingPage/how";
import Procedure from "@/components/landingPage/procedure";
import Stats from "@/components/landingPage/stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col space-y-32">
      <Stats />
      <About />
      <Procedure />
      <How />
    </main>
  );
}
