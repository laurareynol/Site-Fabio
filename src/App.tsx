import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import About from "./components/About";
import Methods from "./components/Methods";
import Mechanism from "./components/Mechanism";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Methods />
        <Mechanism />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
