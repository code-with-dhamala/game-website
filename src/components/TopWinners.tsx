import { Trophy, TrendingUp } from 'lucide-react';

const winners = [
  { rank: 1, name: 'Linda Peach', amount: 91.09 },
  { rank: 2, name: 'Amanda Rey', amount: 75.29 },
  { rank: 3, name: 'Matthew Anderson', amount: 55.85 },
];

export default function TopWinners() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <h2 className="text-3xl font-bold text-white">Top Winners Today</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {winners.map((winner, index) => (
          <div
            key={winner.rank}
            className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              index === 0
                ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50 shadow-yellow-500/20'
                : index === 1
                ? 'bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50'
                : 'bg-gradient-to-br from-orange-800/30 to-orange-900/30 border-orange-700/50'
            }`}
          >
            <div className="absolute -top-4 -left-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                index === 0
                  ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-slate-900'
                  : index === 1
                  ? 'bg-gradient-to-br from-slate-400 to-slate-600 text-white'
                  : 'bg-gradient-to-br from-orange-600 to-orange-800 text-white'
              }`}>
                #{winner.rank}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-slate-400 text-sm mb-2">Winner</p>
              <p className="text-white font-semibold text-lg mb-4">{winner.name}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-2xl font-bold text-green-400">
                    ${winner.amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
