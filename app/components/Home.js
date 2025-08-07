import React, {useState, useEffect} from 'react'
import TournamentCard from './TournamentCard';


function Home() {
  const [tournaments, setTournaments] = useState([]);
    const [selectedGame, setSelectedGame] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
      const filterTournaments = () => {
    return tournaments.filter((t) => {
      const gameMatch = selectedGame === 'All' || t.game === selectedGame;
      const typeMatch = selectedType === 'All' || t.type === selectedType;
      return gameMatch && typeMatch;
    });
  };
    const games = ['All', 'BGMI', 'Free Fire'];
  const types = ['All', 'Solo', 'Duo', 'Squad'];

  useEffect(() => {
    const fetchTournaments = async () => {
      const res = await fetch("data/tournaments.json"); // Local JSON or real API
      const data = await res.json();
      setTournaments(data);
    };
    fetchTournaments();
  }, []);
  return (
    <div className=''>
      <div className="lg:flex  py-6 justify-between items-center ">
        
      <h1 className="text-2xl lg:text-3xl text-white font-bold text-center lg:text-start">BGMI-Battleground Mobile India</h1>
            {/* Filters */}
      <div className="flex gap-4 my-6 flex-wrap justify-center items-center ">
       Game : <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="bg-raisin-black-2 px-4 py-2 rounded text-white"
        >
          {games.map((game) => (
            <option key={game} value={game}>{game}</option>
          ))}
        </select>

        Type : <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-raisin-black-2 px-4 py-2 rounded text-white"
        >
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Tournament Cards */}
        {filterTournaments().map((tournament) => (
          <TournamentCard key={tournament.id} {...tournament} />
        ))}
      </div>
  </div>
  )
}

export default Home
