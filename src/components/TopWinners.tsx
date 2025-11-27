import { Trophy, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const nameLists = [
  ['Linda Peach', 'Amanda Rey', 'Matthew Anderson'],
  ['John Doe', 'Jane Smith', 'Peter Jones'],
  ['Chris Green', 'Emily White', 'David Black'],
  ['Sarah Miller', 'Michael Brown', 'Jessica Davis'],
];

const generateWinners = (nameList: string[]) => {
  return [
    { rank: 1, name: nameList[0], amount: (Math.random() * (800 - 500) + 500).toFixed(2) },
    { rank: 2, name: nameList[1], amount: (Math.random() * (500 - 300) + 300).toFixed(2) },
    { rank: 3, name: nameList[2], amount: (Math.random() * (300 - 200) + 200).toFixed(2) },
  ];
};

export default function TopWinners() {
  const [winners, setWinners] = useState(generateWinners(nameLists[0]));

  useEffect(() => {
    const updateWinners = () => {
      const currentHour = new Date().getHours();
      const listIndex = Math.floor(currentHour / 5) % nameLists.length;
      const newWinners = generateWinners(nameLists[listIndex]);
      setWinners(newWinners);
    };

    updateWinners();
    const intervalId = setInterval(updateWinners, 3600000); // Check every hour

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 mb-4">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Top Winners Today</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-around items-center gap-2 mx-auto">
        {winners.map((winner, index) => (
          <div
            key={winner.rank}
            className={`relative p-3 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl flex justify-between items-center bg-black/50 w-full md:w-1/3 ${
              index === 0
                ? 'border-yellow-500/50 shadow-yellow-500/20'
                : index === 1
                ? 'border-slate-600/50'
                : 'border-orange-700/50'
            }`}
          >
            <p className="text-white font-semibold text-sm md:text-base">{winner.name}</p>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-yellow-400" />
              <span className="text-base md:text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                ${winner.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
