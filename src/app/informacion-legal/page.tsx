import Footer from "@/components/landingPage/footer";
import { NavBar } from "@/components/landingPage/Header";
import HeaderComponent from "@/components/informacion-legal/header";
import FAQ from "@/components/informacion-legal/faq";

export default function Home() {
  return (
    <main className="relative bg-white">
      <NavBar />
      <div className="flex flex-col space-y-5 md:space-y-32">
        <HeaderComponent />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
