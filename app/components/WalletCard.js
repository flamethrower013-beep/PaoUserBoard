import React from 'react';

export default function WalletCard({ balance, onAdd, onWithdraw }) {
  return (
    <div className="bg-raisin-black-3 p-6 rounded-2xl shadow-xl mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-center md:text-left">
        <p className="text-sm uppercase text-gray-400">Wallet Balance</p>
        <h2 className="text-3xl font-bold mt-1">₹{balance}</h2>
      </div>
      <div className="flex gap-4">
        <button onClick={onAdd} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl font-semibold">
          Add Money
        </button>
        <button onClick={onWithdraw} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl font-semibold">
          Withdraw
        </button>
      </div>
    </div>
  );
}
