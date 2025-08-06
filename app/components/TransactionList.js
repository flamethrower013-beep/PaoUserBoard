import React from 'react';

export default function TransactionList({ transactions }) {
  return (
    <div className="bg-raisin-black-3 p-4 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
      <ul className="divide-y divide-gray-700">
        {transactions.map((tx) => (
          <li key={tx.id} className="py-2 flex justify-between items-center text-sm">
            <span className={`font-medium ${tx.type === 'Add' ? 'text-green-400' : 'text-red-400'}`}>
              {tx.type} ₹{tx.amount}
            </span>
            <span className="text-gray-400">{tx.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
