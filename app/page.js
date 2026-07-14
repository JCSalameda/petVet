import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Philosophy from "./_components/Philosophy";
import Testimonials from "./_components/Testimonials";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import MouseParallax from "./_components/MouseParallax";
import HubModal from "./_components/HubModal";

export default function Home() {
  return (
    <>
      <MouseParallax />
      <HubModal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
