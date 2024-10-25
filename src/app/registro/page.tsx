import Footer from "@/components/landingPage/footer";
import { NavBar } from "@/components/landingPage/Header";
import Registro from "@/components/registro/form";
import HeaderComponent from "@/components/registro/header";

export default function Home() {
  return (
    <main className="relative bg-white">
      <NavBar />
      <div className="flex flex-col space-y-5 md:space-y-32">
        <HeaderComponent />
        <Registro />
        <Footer />
      </div>
    </main>
  );
}
