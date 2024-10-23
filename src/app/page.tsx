import About from "@/components/landingPage/about";
import { CompanyLogos } from "@/components/landingPage/companyLogos";
import Footer from "@/components/landingPage/footer";
import HeaderSection, { NavBar } from "@/components/landingPage/Header";
import How from "@/components/landingPage/how";
import Procedure from "@/components/landingPage/procedure";
import Stats from "@/components/landingPage/stats";
import Testimonial from "@/components/landingPage/testimonials";

export default function Home() {
  return (
    <main className="relative bg-white">
      <NavBar />
      <div className="flex flex-col space-y-5 md:space-y-32">
        <HeaderSection />
        <Stats />
        <About />
        <Procedure />
        <How />
        <Testimonial />
        <CompanyLogos />
        <Footer />
      </div>
    </main>
  );
}
