
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ProductSection from "./components/ProductSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <ProductSection />
      <ContactSection />
      <Footer />
    </>
  );
}
