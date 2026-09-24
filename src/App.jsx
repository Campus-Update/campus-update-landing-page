import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import ReasonsSection from "./components/ReasonsSection.jsx";
import EarlyAccessBanner from "./components/EarlyAccessBanner.jsx";
import CampusShowcase from "./components/CampusShowcase.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturesSection />
        <ReasonsSection />
        <EarlyAccessBanner />
        <CampusShowcase />
      </main>
      <Footer />
    </div>
  );
}
