'use client';
import React, { useState } from 'react';
import WalletCard from './WalletCard';
import TransactionList from './TransactionList';

export default function WalletPage() {
  const [balance, setBalance] = useState(1250); // example default
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Add', amount: 500, date: '2025-08-01' },
    { id: 2, type: 'Withdraw', amount: 250, date: '2025-08-03' },
  ]);

  const handleAdd = () => {
    const newAmount = 100;
    setBalance(balance + newAmount);
    setTransactions([
      { id: Date.now(), type: 'Add', amount: newAmount, date: new Date().toISOString().split('T')[0] },
      ...transactions,
    ]);
  };

  const handleWithdraw = () => {
    const newAmount = 100;
    if (balance >= newAmount) {
      setBalance(balance - newAmount);
      setTransactions([
        { id: Date.now(), type: 'Withdraw', amount: newAmount, date: new Date().toISOString().split('T')[0] },
        ...transactions,
      ]);
    } else {
      alert('Insufficient balance');
    }
  };

  return (
   <>
      <WalletCard balance={balance} onAdd={handleAdd} onWithdraw={handleWithdraw} />
      <TransactionList transactions={transactions} />
    </>
    
  );
}
