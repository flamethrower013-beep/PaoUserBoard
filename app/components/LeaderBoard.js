import React from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PlayerRow from './PlayerRow';

function LeaderBoard() {
  const mockData = [
  { id: 1, name: 'AceHunter', points: 2500, kills: 43, avatar: '/avatars/1.png' },
  { id: 2, name: 'ShadowSniper', points: 2300, kills: 37, avatar: '/avatars/2.png' },
  { id: 3, name: 'BlazeKing', points: 2200, kills: 40, avatar: '/avatars/3.png' },
  { id: 4, name: 'IronFist', points: 2100, kills: 30, avatar: '/avatars/4.png' },
  { id: 5, name: 'DeadlyNinja', points: 2000, kills: 28, avatar: '/avatars/5.png' },
  { id: 6, name: 'DeadlyNinja', points: 2000, kills: 28, avatar: '/avatars/5.png' },
  { id: 7, name: 'DeadlyNinja', points: 2000, kills: 28, avatar: '/avatars/5.png' },
  { id: 8, name: 'IronFist', points: 2100, kills: 30, avatar: '/avatars/4.png' },
  { id: 9, name: 'ShadowSniper', points: 2300, kills: 37, avatar: '/avatars/2.png' },
  { id: 10, name: 'IronFist', points: 2100, kills: 30, avatar: '/avatars/4.png' },






];
  return (
        <div className='min-h-screen h-fit w-full  bg-eerie-black'>
      <div className="banner px-4 w-auto rounded min-h-[95vh] m-4 bg-raisin-black-1 py-3">
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

      {/* Table for desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm text-left rounded">
          <thead className="bg-eerie-black uppercase text-xs text-gray-400">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">Player</th>
              <th className="px-4 py-3 text-center">Points</th>
              <th className="px-4 py-3 text-center">Kills</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {mockData.map((player, index) => (
                <motion.tr
                  key={player.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <PlayerRow player={player} rank={index + 1} />
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="md:hidden space-y-4">
        {mockData.map((player, index) => (
          <motion.div
            key={player.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`flex items-center justify-between bg-raisin-black-1 rounded-xl p-4 shadow-md ${
              index === 0
                ? 'border-l-4 border-yellow-400'
                : index === 1
                ? 'border-l-4 border-gray-300'
                : index === 2
                ? 'border-l-4 border-amber-500'
                : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={player.avatar}
                alt={player.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{player.name}</p>
                <p className="text-xs text-gray-400">Kills: {player.kills}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">{player.points}</p>
              <p className="text-xs text-gray-400">#{index + 1}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>

  )
}

export default LeaderBoard
