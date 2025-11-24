import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import fireKirin from "../assets/fireKirin.png"
import orionStars from "../assets/orionStars.png";
import juwaImage from "../assets/juwa.png";
import gameVault from "../assets/gameVault.png";
import vegasSweep from "../assets/vegasSweep.png";
import milkyWay from "../assets/milkyWay.png";
import ultraPanda from "../assets/ultraPanda.png";
import cashFrenzy from "../assets/cashFrenzy.png";
import pandaMaster from "../assets/pandaMaster.png";
import riverSweeps from "../assets/riverSweeps.png";
import vegasRoll from "../assets/vegasRoll.png";
import mafia7 from "../assets/mafia7.png";
import paraCasino from "../assets/paraCasino.png";
import megaSpin from "../assets/megaSpin.png";
import casinoIgnite from "../assets/casinoIgnite.png";
import goldenDragon from "../assets/goldenDragon.png";
import luckyStars from "../assets/luckyStars.png";
import gameRoom from "../assets/gameRoom.png";
import yoloGame from "../assets/yolo.png";
import juwaTwo from "../assets/juwaTwo.png";
import vegas from "../assets/vegas.png"; 

import vBlink from "../assets/vBlink.png";
const games = [
  {
    id: 1,
    name: "Fire Kirin",
    category: "popular",
    rating: 4.8,
    url: "http://start.firekirin.xyz:8580/",
    poster: fireKirin,
  },
  {
    id: 2,
    name: "Orion Star",
    category: "popular",
    rating: 4.7,
    url: "http://start.orionstars.vip:8580/",
    poster: orionStars,
  },
  {
    id: 3,
    name: "Juwa",
    category: "popular",
    rating: 4.9,
    url: "https://dl.juwa777.com/",
    poster: juwaImage,
  },
  {
    id: 4,
    name: "Game Vault",
    category: "popular",
    rating: 4.6,
    url: "https://download.gamevault999.com/",
    poster: gameVault,
  },
  // {
  //   id: 5,
  //   name: "Casino Royale",
  //   category: "casino",
  //   rating: 4.8,
  //   url: "https://casino-royale.en.softonic.com/android",
  //   poster: "https://via.placeholder.com/150",
  // },
  {
    id: 6,
    name: "Vegas Sweep",
    category: "slots",
    rating: 4.5,
    url: "https://vegassweeps.io/",
    poster: vegasSweep,
  },
  {
    id: 7,
    name: "Milky Way",
    category: "slots",
    rating: 4.7,
    url: "https://milkywayapp.xyz/",
    poster: milkyWay,
  },
  {
    id: 8,
    name: "Ultra Panda",
    category: "popular",
    rating: 4.9,
    url: "https://www.ultrapanda.mobi/index.html",
    poster: ultraPanda,
  },
  {
    id: 9,
    name: "Cash Frenzy",
    category: "casino",
    rating: 4.4,
    url: "https://www.cashfrenzy777.com/m",
    poster: cashFrenzy,
  },
  {
    id: 10,
    name: "Panda Master",
    category: "popular",
    rating: 4.8,
    url: "https://pandamaster.vip:8888",
    poster: pandaMaster,
  },
  {
    id: 11,
    name: "Vblink",
    category: "slots",
    rating: 4.6,
    url: "https://vblinkz.com/",
    poster: vBlink,
  },
  {
    id: 12,
    name: "River Sweeps",
    category: "popular",
    rating: 4.7,
    url: "https://river777.com/",
    poster: riverSweeps,
  },
  {
    id: 13,
    name: "Vegas Roll",
    category: "casino",
    rating: 4.5,
    url: "https://www.vegas-roll.com/m",
    poster: vegasRoll,
  },
  {
    id: 14,
    name: "Mafia 777",
    category: "popular",
    rating: 4.6,
    url: "https://www.mafia77777.com/m",
    poster: mafia7,
  },
  {
    id: 15,
    name: "Para Casino",
    category: "casino",
    rating: 4.7,
    url: "https://download.paracasino.net/",
    poster: paraCasino,
  },
  {
    id: 16,
    name: "Mega Spin Sweeps",
    category: "slots",
    rating: 4.8,
    url: "https://www.megaspinsweeps.com/",
    poster: megaSpin,
  },
  {
    id: 17,
    name: "Casino Ignite",
    category: "casino",
    rating: 4.6,
    url: "https://download.casinoignitee.vip/",
    poster: casinoIgnite,
  },
  {
    id: 18,
    name: "Golden Dragon City",
    category: "popular",
    rating: 4.9,
    url: "https://web.goldendragoncity.com/SSLobby/m5495.1/web-mobile/index.html?",
    poster: goldenDragon,
  },
  {
    id: 19,
    name: "Lucky Stars",
    category: "slots",
    rating: 4.7,
    url: "https://www.luckystars.games/m",
    poster: luckyStars,
  },
  {
    id: 20,
    name: "Game Room 777",
    category: "casino",
    rating: 4.5,
    url: "https://www.gameroom777.com/",
    poster: gameRoom,
  },
  {
    id: 21,
    name: "YOLO 777",
    category: "popular",
    rating: 4.8,
    url: "https://yolo777apk.com/",
    poster: yoloGame,
  },
  // {
  //   id: 22,
  //   name: "eGame99",
  //   category: "slots",
  //   rating: 4.6,
  //   url: "https://www.egame99.club/",
  //   poster: "https://via.placeholder.com/150",
  // },
  {
    id: 23,
    name: "Juwa 2",
    category: "popular",
    rating: 4.7,
    url: "https://m.juwa2.com/",
    poster: juwaTwo,
  },
  {
    id: 24,
    name: "Vegas X",
    category: "casino",
    rating: 4.8,
    url: "https://vegas-x.org/",
    poster: vegas,
  },
];

const categories = [
  { id: "all", name: "All Games" },
  { id: "popular", name: "Popular" },
  { id: "casino", name: "Casino" },
  { id: "slots", name: "Slots" },
];

export default function GameGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGames =
    activeCategory === "all"
      ? games
      : games.filter((game) => game.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">Game Collection</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full font-normal text-sm md:text-base transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-yellow-500/50 scale-105"
                : "bg-black/50 text-slate-300 hover:bg-black/70 border border-slate-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {filteredGames.map((game) => (
          <a
            key={game.id}
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 cursor-pointer"
          >
            <div className="aspect-square bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={game.poster}
                  alt={game.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-3 right-3 flex items-center gap-0.5 px-1.5 py-0.5 bg-black/80 backdrop-blur-sm rounded-full">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-white font-semibold">
                  {game.rating}
                </span>
              </div>

            </div>

            <div className="p-2">
              <h3 className="text-white font-semibold text-xs md:text-sm mb-1 group-hover:text-yellow-400 transition-colors">
                {game.name}
              </h3>
              <p className="text-slate-400 text-sm capitalize">
                {game.category}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
