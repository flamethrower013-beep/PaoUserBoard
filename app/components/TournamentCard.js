"use client";
import React from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Calendar,
  Users,
  MapPin,
  DollarSign,
  Gift,
  Target,
} from "lucide-react";

const statusColor = {
  Live: "bg-green-600",
  Upcoming: "bg-yellow-500",
  Completed: "bg-gray-600",
};

const TournamentCard = ({
  entryFee,
  prize,
  killPoints,
  date,
  maxParticipants,
  joinedPlayers,
  map,
  status,
}) => {
  const progress = Math.min(
    100,
    Math.round((joinedPlayers / maxParticipants) * 100)
  );

  return (
    <div className="bg-raisin-black-1 text-white rounded-xl p-6 w-full shadow-lg hover:shadow-xl transition-all border border-gray-700 flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-yellow-400 flex items-center gap-2">
          <BadgeCheck size={20} className="text-yellow-400" />
          Custom Match
        </h3>
        <span
          className={`text-xs px-3 py-1 rounded-full font-bold ${statusColor[status]}`}
        >
          {status}
        </span>
      </div>

      {/* Info Section */}
      <div className="text-sm space-y-2 mb-4">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1 text-gray-300">
            <DollarSign size={16} className="text-green-400" />
            ₹{entryFee}
          </span>
          <span className="flex items-center gap-1 text-gray-300">
            <Target size={16} className="text-red-400" />
            {killPoints} pts
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1 text-gray-300">
            <Gift size={16} className="text-purple-400" />
            {prize}
          </span>
          <span className="flex items-center gap-1 text-gray-300">
            <MapPin size={16} className="text-pink-400" />
            {map}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1 text-gray-300">
            <Calendar size={16} className="text-blue-400" />
            {date}
          </span>
          <span className="flex items-center gap-1 text-gray-300">
            <Users size={16} className="text-orange-400" />
            {joinedPlayers} / {maxParticipants}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-yellow-400 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-right mt-1 text-gray-400">
          {joinedPlayers} / {maxParticipants} joined
        </p>
      </div>

      {/* Join Button */}
      <Link
        href="/join"
        className="mt-auto text-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition"
      >
        Join Now
      </Link>
    </div>
  );
};

export default TournamentCard;
