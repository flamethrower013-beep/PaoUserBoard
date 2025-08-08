"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Trophy, Medal, Award, Coins } from "lucide-react";

function parsePrize(prize) {
  const match = prize.match(/₹(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export default function PlayerOverview({ playerName, avatar }) {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetch('/data/tournaments.json')
      .then((res) => res.json())
      .then((data) => setTournaments(data))
      .catch((err) => console.error("Error loading tournaments:", err));
  }, []);

  if (!tournaments.length) {
    return (
      <div className="text-center text-white py-10">
        Loading tournaments...
      </div>
    );
  }

  const tournamentsPlayed = tournaments.length;
  const tournamentsWon = tournaments.filter(t => t.status === "Completed").length;
  const totalEarnings = tournaments
    .filter(t => t.status === "Completed")
    .reduce((sum, t) => sum + parsePrize(t.prize), 0);

  const highestRank = 1; // placeholder until rank data is available
  const recentTournaments = [...tournaments]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="w-full max-w-4xl mx-auto bg-raisin-black-3 rounded-2xl shadow-lg p-6 text-white">


      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <StatCard icon={<Award className="w-5 h-5" />} label="Played" value={tournamentsPlayed} />
        <StatCard icon={<Trophy className="w-5 h-5" />} label="Won" value={tournamentsWon} />
        <StatCard icon={<Medal className="w-5 h-5" />} label="Highest Rank" value={`#${highestRank}`} />
        <StatCard icon={<Coins className="w-5 h-5" />} label="Earnings" value={`₹${totalEarnings}`} />
      </div>

      {/* Recent */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Recent Tournaments</h3>
        <div className="space-y-3">
          {recentTournaments.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-raisin-black-2 p-4 rounded-xl shadow-md"
            >
              <div>
                <p className="font-semibold">{t.title}</p>
                <p className="text-xs text-gray-400">
                  {t.date} • {t.status} • {t.game} ({t.type})
                </p>
              </div>
              <span
                className={`mt-2 sm:mt-0 px-3 py-1 text-sm rounded-full ${
                  t.status === "Completed"
                    ? "bg-yellow-500 text-black"
                    : t.status === "Live"
                    ? "bg-green-500 text-black"
                    : "bg-gray-500 text-white"
                }`}
              >
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-raisin-black-2 rounded-xl p-4 flex flex-col items-center shadow-md">
      <div className="mb-2 text-yellow-400">{icon}</div>
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}
