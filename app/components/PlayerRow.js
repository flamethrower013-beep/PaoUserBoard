import React from 'react';

export default function PlayerRow({ player, rank }) {
  let bgColor = '';
  if (rank === 1) bgColor = 'bg-orange-500 border-b-1 border-raisin-black-1';
  else if (rank === 2) bgColor = 'bg-orange-800 border-b-1 border-raisin-black-1';
  else if (rank === 3) bgColor = 'bg-orange-900 border-b-1 border-raisin-black-1';
  else bgColor = 'bg-raisin-black-3 border-b-1 border-raisin-black-1';

  return (
    <>
      <td className={`px-4 py-3 font-semibold ${bgColor}`}>#{rank}</td>
      <td className={`px-4 py-3 flex items-center gap-3 ${bgColor}`}>
        <img src={player.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        {player.name}
      </td>
      <td className={`px-4 py-3 text-center ${bgColor}`}>{player.points}</td>
      <td className={`px-4 py-3 text-center ${bgColor}`}>{player.kills}</td>
    </>
  );
}
