import React, { useState } from 'react';

const tournamentsData = [
  {
    id: 1,
    title: 'BGMI Solo Showdown',
    game: 'BGMI',
    type: 'Solo',
    status: 'Created',
    createdByUser: true,
  },
  {
    id: 2,
    title: 'Free Fire Squad Battle',
    game: 'Free Fire',
    type: 'Squad',
    status: 'Upcoming',
    createdByUser: false,
  },
  {
    id: 3,
    title: 'BGMI Duo Blitz',
    game: 'BGMI',
    type: 'Duo',
    status: 'Live',
    createdByUser: false,
  },
  {
    id: 4,
    title: 'Free Fire Solo Throwdown',
    game: 'Free Fire',
    type: 'Solo',
    status: 'Past',
    createdByUser: true,
  },
];

const TournamentCard = ({ tournament }) => {
  return (
    <div className="bg-raisin-black-2 text-white rounded-xl p-4 shadow-md w-full sm:w-[48%] md:w-[31%]">
      <h3 className="text-xl font-semibold mb-2">{tournament.title}</h3>
      <p className="text-sm">🎮 {tournament.game} | 👥 {tournament.type}</p>
      <p className="text-sm mt-1">Status: <span className="font-medium">{tournament.status}</span></p>
      {tournament.createdByUser ? (
        <div className="mt-2 text-green-400 text-sm">You created this tournament</div>
      ) : (
        <div className="mt-2 text-yellow-400 text-sm">Created by another organizer</div>
      )}
      {tournament.createdByUser && (
        <div className="mt-3 space-x-2">
          <button className="bg-orange text-white px-3 py-1 text-sm rounded">Manage</button>
          <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">View Players</button>
        </div>
      )}
    </div>
  );
};

const UserTournaments = () => {
  const [activeTab, setActiveTab] = useState('Created');
  const [selectedGame, setSelectedGame] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filterTournaments = () => {
    return tournamentsData.filter((t) => {
      const statusMatch =
        activeTab === 'Created'
          ? t.createdByUser
          : t.status === activeTab && !t.createdByUser;
      const gameMatch = selectedGame === 'All' || t.game === selectedGame;
      const typeMatch = selectedType === 'All' || t.type === selectedType;
      return statusMatch && gameMatch && typeMatch;
    });
  };

  const tabs = ['Created', 'Upcoming', 'Live', 'Past'];
  const games = ['All', 'BGMI', 'Free Fire'];
  const types = ['All', 'Solo', 'Duo', 'Squad'];

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Your Tournaments</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab ? 'bg-orange text-white' : 'bg-raisin-black-2'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="bg-raisin-black-2 px-4 py-2 rounded text-white"
        >
          {games.map((game) => (
            <option key={game} value={game}>{game}</option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-raisin-black-2 px-4 py-2 rounded text-white"
        >
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Tournament Cards */}
      <div className="flex flex-wrap gap-4">
        {filterTournaments().map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};

export default UserTournaments;
