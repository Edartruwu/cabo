import Footer from "@/components/landingPage/footer";
import { NavBar } from "@/components/landingPage/Header";
import HeaderComponent from "@/components/conocenos/header";
import ServiceDetails from "@/components/conocenos/serviceDetails";
import Stats from "@/components/landingPage/stats";

export default function Home() {
  return (
    <main className="relative bg-white">
      <NavBar />
      <div className="flex flex-col space-y-5 md:space-y-32">
        <HeaderComponent />
        <ServiceDetails />
        <Stats />
        <Footer />
      </div>
    </main>
  );
}
