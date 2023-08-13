import Hero from "./components/Hero";
import InSights from "./components/InSights";
import NavBar from "./components/NavBar";
import Vision from "./components/Vision";
import Features from "./components/Features";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="w-full flex items-center justify-center flex-col">
      <NavBar />
      <Hero />
      <Vision />
      <InSights />
      {/* <Features /> */}
      <Team />
      <Contact />
      <Footer />
    </section>
  );
}
