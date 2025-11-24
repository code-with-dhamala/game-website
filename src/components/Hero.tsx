import { Gamepad2, Sparkles } from "lucide-react";
import Carousel from "./Carousel";
// import { useRef } from "react";

export default function Hero() {
  // const scrollToRef = useRef(null);

  return (
    <div className="relative overflow-hidden">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Gamepad2 className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            SolomonCasino
          </span>
        </div>
        <button className="px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300">
          Login
        </button>
      </nav>
      <Carousel />
    </div>
  );
}