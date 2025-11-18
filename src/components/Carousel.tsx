import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Premium Gaming Experience',
    subtitle: 'Join thousands of winners today',
    gradient: 'from-cyan-600 to-blue-700',
    accent: 'cyan',
  },
  {
    id: 2,
    title: 'Spin Daily & Win Big',
    subtitle: 'Exclusive rewards for loyal players',
    gradient: 'from-blue-600 to-indigo-700',
    accent: 'blue',
  },
  {
    id: 3,
    title: 'Limited Time Bonuses',
    subtitle: 'Up to 300% bonus on your first deposit',
    gradient: 'from-teal-600 to-cyan-700',
    accent: 'teal',
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
    <div className="relative w-full h-screen max-h-[600px] md:max-h-[700px] overflow-hidden rounded-none md:rounded-3xl group">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}></div>

            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="absolute top-0 left-0 w-full h-full">
              <div className={`absolute top-10 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse`}></div>
              <div className={`absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700`}></div>
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                  {slide.subtitle}
                </p>

                <div className="pt-8">
                  <button className="relative px-10 py-4 bg-white text-slate-900 text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                    Claim Your Bonus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 group hover:scale-110 text-white"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={next}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 group hover:scale-110 text-white"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 backdrop-blur-md bg-slate-900/40 px-4 py-3 rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === current
                ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50'
                : 'w-3 bg-white/40 hover:bg-white/60'
            }`}
          ></button>
        ))}
      </div>

      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 backdrop-blur-md bg-slate-900/60 px-4 py-2 rounded-full border border-white/20">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-white/80 text-sm font-medium">{current + 1}/{slides.length}</span>
      </div>
    </div>
  );
}
