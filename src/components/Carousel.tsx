import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Spin to Win',
    subtitle: 'Get free spins every 2 hours',
    bgColor: 'from-slate-800 to-slate-700',
  },
  {
    id: 2,
    title: 'Exclusive Rewards',
    subtitle: 'Deposit and play for 3 days',
    bgColor: 'from-slate-700 to-slate-800',
  },
  {
    id: 3,
    title: 'Premium Games',
    subtitle: 'Play with thousands of winners',
    bgColor: 'from-slate-800 to-slate-700',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="aspect-video md:aspect-auto md:h-96 relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`}></div>

            <div className="absolute inset-0">
              <div className="absolute top-8 right-12 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"></div>
              <div className="absolute bottom-8 left-12 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80">
                  {slide.subtitle}
                </p>
                <div className="pt-6">
                  <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-cyan-500/80 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-cyan-500/80 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === current
                ? 'w-8 bg-cyan-400'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
