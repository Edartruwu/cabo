import Footer from "@/components/landingPage/footer";
import { NavBar } from "@/components/landingPage/Header";
import HeaderComponent from "@/components/calcula/header";
import Calculate from "@/components/calcula/calculate";
import FAQ from "@/components/calcula/faq";

export default function Home() {
  return (
    <main className="relative bg-white">
      <NavBar />
      <div className="flex flex-col space-y-5 md:space-y-32">
        <HeaderComponent />
        <Calculate />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
