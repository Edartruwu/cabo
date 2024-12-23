import Footer from "@/components/landingPage/footer";
import { NavBar } from "@/components/landingPage/Header";
import HeaderComponent from "@/components/como-realizar/header";
import Steps from "@/components/como-realizar/steps";
import FAQ from "@/components/como-realizar/faq";

export default function Home() {
  return (
    <main className="relative bg-white">
      <NavBar />
      <div className="flex flex-col space-y-5 md:space-y-32">
        <HeaderComponent />
        <Steps />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
