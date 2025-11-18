import { Gamepad2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Gamepad2 className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            GameVerse
          </span>
        </div>
        <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
          Login
        </button>
      </nav>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Premium Gaming Experience</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Spin
            </span>
            <span className="text-white"> to </span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
              Win
            </span>
          </h1>

          <div className="space-y-4 text-slate-300 text-lg max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <p>Non-Deposit Players get a free spin every 2 hours for 24 hours</p>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <p>Deposit Players get a free spin every 2 hours for 3 days</p>
            </div>
          </div>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <button className="relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
              Start Playing Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
