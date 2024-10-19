import About from "@/components/landingPage/about";
import { CompanyLogos } from "@/components/landingPage/companyLogos";
import Footer from "@/components/landingPage/footer";
import How from "@/components/landingPage/how";
import Procedure from "@/components/landingPage/procedure";
import Stats from "@/components/landingPage/stats";
import Testimonial from "@/components/landingPage/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col space-y-5 md:space-y-32">
      <Stats />
      <About />
      <Procedure />
      <How />
      <Testimonial />
      <CompanyLogos />
      <Footer />
    </main>
  );
}
