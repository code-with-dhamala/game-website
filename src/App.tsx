import Hero from "./components/Hero";
import TopWinners from "./components/TopWinners";
import GameGrid from "./components/GameGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <TopWinners />
      <div id="game-grid-section">
        <GameGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
