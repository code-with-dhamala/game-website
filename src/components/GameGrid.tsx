import { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';

const games = [
  { id: 1, name: 'Fire Kirin', category: 'popular', rating: 4.8 },
  { id: 2, name: 'Orion Star', category: 'popular', rating: 4.7 },
  { id: 3, name: 'Juwa', category: 'popular', rating: 4.9 },
  { id: 4, name: 'Game Vault', category: 'popular', rating: 4.6 },
  { id: 5, name: 'Casino Royale', category: 'casino', rating: 4.8 },
  { id: 6, name: 'Vegas Sweep', category: 'slots', rating: 4.5 },
  { id: 7, name: 'Milky Way', category: 'slots', rating: 4.7 },
  { id: 8, name: 'Ultra Panda', category: 'popular', rating: 4.9 },
  { id: 9, name: 'Cash Frenzy', category: 'casino', rating: 4.4 },
  { id: 10, name: 'Panda Master', category: 'popular', rating: 4.8 },
  { id: 11, name: 'Vblink', category: 'slots', rating: 4.6 },
  { id: 12, name: 'River Sweeps', category: 'popular', rating: 4.7 },
];

const categories = [
  { id: 'all', name: 'All Games' },
  { id: 'popular', name: 'Popular' },
  { id: 'casino', name: 'Casino' },
  { id: 'slots', name: 'Slots' },
];

export default function GameGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredGames = activeCategory === 'all'
    ? games
    : games.filter(game => game.category === activeCategory);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Game Collection</h2>
        <p className="text-slate-400 text-lg">Choose from our premium selection of games</p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 scale-105'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-slate-600/50 group-hover:text-slate-500/50 transition-colors">
                  {game.name.charAt(0)}
                </div>
              </div>

              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-white font-semibold">{game.rating}</span>
              </div>

              <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                  Play Now
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                {game.name}
              </h3>
              <p className="text-slate-400 text-sm capitalize">{game.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
