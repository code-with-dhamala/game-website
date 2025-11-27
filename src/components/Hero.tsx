import Carousel from "./Carousel";
import topbarImage from "../assets/topbar.png";
// import { useRef } from "react";

export default function Hero() {
  // const scrollToRef = useRef(null);

  return (
    <div className="relative overflow-hidden">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <img src={topbarImage} alt="Solomon Casino" className="h-10 md:h-12" />
        </div>
        <button className="px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300">
          Login
        </button>
      </nav>
      <Carousel />
    </div>
  );
}