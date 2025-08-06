import React, {useState, useEffect} from 'react'
import TournamentCard from './TournamentCard';


function Home() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      const res = await fetch("data/tournaments.json"); // Local JSON or real API
      const data = await res.json();
      setTournaments(data);
    };

    fetchTournaments();
  }, []);
  return (
    <>
      <div className="lg:flex  py-6 justify-between items-center">
        
      <h1 className="text-2xl lg:text-3xl text-white font-bold text-center lg:text-start">BGMI-Battleground Mobile India</h1>
      <ul className='flex justify-center gap-3 lg:m-0 mt-4'>
        <li>Game : <select name="Game" id="" className='bg-eerie-black p-2 rounded'>
          <option value="bgmi" defaultChecked hidden>Bgmi</option>
          <option value="freefiremax">Free Fire Max</option>
          <option value="Ludo">Ludo</option>
          </select></li>
        <li>Mode : <select name="Game" id="" className='bg-eerie-black p-2 rounded'>
          <option value="bgmi" defaultChecked hidden>Team death match</option>
          <option value="freefiremax">Battle Royal</option>
          </select></li>
      </ul>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {tournaments.map((t) => (
          <TournamentCard key={t.id} {...t} />
        ))}
      </div>
  </>
  )
}

export default Home
