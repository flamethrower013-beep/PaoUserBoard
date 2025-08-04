import React, { useState } from 'react';
import Image from 'next/image';
import {
  User,
  BarChart,
  Trophy,
  Wallet,
  Settings,
  Users,
  ChevronDown,
  ShieldCheck,
  Mail,
  HelpCircle
} from 'lucide-react';

const tabs = [
  { label: 'Overview', icon: <User className="w-4 h-4" /> },
  { label: 'Stats', icon: <BarChart className="w-4 h-4" /> },
  { label: 'Tournaments', icon: <Trophy className="w-4 h-4" /> },
  
  { label: 'Settings', icon: <Settings className="w-4 h-4" /> },
  { label: 'Help', icon: <HelpCircle className="w-4 h-4" /> },
];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [mobileOpen, setMobileOpen] = useState(false);

  const player = {
    avatar: '/avatars/1.png',
    username: 'Meghnath Ghadi',
    email: 'meghnathghadi@gmail.com',
    rank: 'Diamond',
    country: 'India 🇮🇳',
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <p>This is the player's overview.</p>;
      case 'Stats':
        return <p>Player stats: Matches, Kills, Wins, K/D, etc.</p>;
      case 'Tournaments':
        return <p>List of joined and upcoming tournaments.</p>;
      case 'Wallet':
        return <p>Wallet balance, earnings, and transactions.</p>;
      case 'Settings':
        return <p>Edit profile, security settings, preferences.</p>;
      case 'Friends':
        return <p>Friends list and invites.</p>;
      default:
        return null;
    }
  };

  return (
     <div className='min-h-screen h-fit w-full  bg-eerie-black'>
      <div className="banner px-4 py-3 w-auto rounded min-h-[95vh] m-4 bg-raisin-black-1">
      {/* 🔝 Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <Image
          src={player.avatar}
          alt="avatar"
          className="w-24 h-24 rounded-full border-4 border-yellow-400 object-cover shadow-md"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {player.username}
            <ShieldCheck className="w-5 h-5 text-yellow-400" />
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-300 mt-1 justify-center sm:justify-start">
            <Mail className="w-4 h-4" />
            <span>{player.email}</span>
          </div>
          <div className="text-sm text-gray-400 mt-1">Rank: {player.rank} · {player.country}</div>
        </div>
      </div>

      {/* Tabs Desktop */}
      <div className="hidden md:flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
              activeTab === tab.label
                ? 'bg-yellow-500 text-raisin-black-3 shadow'
                : 'bg-raisin-black-3 hover:bg-zinc-700 text-gray-300'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Mobile */}
      <div className="md:hidden mb-6 relative">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex justify-between items-center px-4 py-3 bg-raisin-black-3 text-gray-300 rounded-xl"
        >
          <span className="flex items-center gap-2">
            {tabs.find((t) => t.label === activeTab)?.icon}
            {activeTab}
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
        {mobileOpen && (
          <div className="absolute z-10 w-full bg-raisin-black-3 mt-2 rounded-xl overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => {
                  setActiveTab(tab.label);
                  setMobileOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-4 py-2 text-left ${
                  activeTab === tab.label
                    ? 'bg-yellow-500 text-raisin-black-3'
                    : 'hover:bg-zinc-700 text-gray-300'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="bg-raisin-black-3 p-6 rounded-xl min-h-[200px] border border-zinc-700">{renderTabContent()}</div>
    </div>
    </div>
  );
}
