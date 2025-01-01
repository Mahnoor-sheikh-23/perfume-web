import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";
import ImagesShown from "./components/ImagesShown";

export default function Home() {
  return (
    

    <div className="overflow-hidden">
    
    <Navbar />
    <ImageSection />
    <HeroSection />
    <ImagesShown />
    <Footer />
    </div>
   

  
  );
}
