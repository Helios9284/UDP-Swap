'use client';

import { useState } from 'react';
import Image from 'next/image';

const popularPairs = [
  { pair: 'PEPE/USDT', change: '+12%' },
  { pair: 'DOGE/USDT', change: '+12%' },
  { pair: 'NEIRO/USDT', change: '-12%' },
  { pair: 'BGB/USDT', change: '+12%' },
  { pair: 'BTC/USDT', change: '+12%' }
];

export default function Swap() {
  const [activeTab, setActiveTab] = useState('DEX');
  const [selectedToken1, setSelectedToken1] = useState({ symbol: 'ETH', balance: '2.8989', balanceUSD: '6726.2307' });
  const [selectedToken2, setSelectedToken2] = useState({ symbol: 'EOS', balance: '400.8989', balanceUSD: '284.6382' });

  const tabs = [
    { id: 'DEX', label: 'DEX' },
    { id: 'CEX', label: 'CEX' },
    { id: 'Chart', label: 'Chart' },
    { id: 'Stake', label: 'Stake' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'DEX':
        return (
          <div className="flex-1 p-8">
            <h1 className="text-4xl font-bold font-cleanow text-[#39FF14] text-center mb-12">SWAP ANYTIME, ANYWHERE</h1>
            <div className="max-w-lg mx-auto bg-[#1a1b2e]/50 rounded-2xl p-6 border border-[#39FF14]/20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Swap</h2>
                <button className="text-[#39FF14]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-[#0a0b1e] p-4 rounded-xl">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>You Pay</span>
                    <span>Balance: {selectedToken1.balance} {selectedToken1.symbol}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      placeholder="0.0"
                      className="bg-transparent text-xl w-full focus:outline-none"
                    />
                    <button className="bg-[#1a1b2e] hover:bg-[#2a2b3e] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                      <span>{selectedToken1.symbol}</span>
                      <span>↓</span>
                    </button>
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-2">
                    ≈${selectedToken1.balanceUSD}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="bg-[#1a1b2e] p-2 rounded-full hover:bg-[#2a2b3e]">
                    ↓
                  </button>
                </div>

                <div className="bg-[#0a0b1e] p-4 rounded-xl">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>You Receive</span>
                    <span>Balance: {selectedToken2.balance} {selectedToken2.symbol}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      placeholder="0.0"
                      className="bg-transparent text-xl w-full focus:outline-none"
                    />
                    <button className="bg-[#1a1b2e] hover:bg-[#2a2b3e] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                      <span>{selectedToken2.symbol}</span>
                      <span>↓</span>
                    </button>
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-2">
                    ≈${selectedToken2.balanceUSD}
                  </div>
                </div>

                <div className="text-sm text-gray-400 text-center">
                  1 {selectedToken1.symbol} = {(Number(selectedToken2.balanceUSD) / Number(selectedToken1.balanceUSD)).toFixed(7)} {selectedToken2.symbol}
                </div>

                <button className="w-full bg-[#39FF14] text-black py-4 rounded-xl font-semibold font-cleanow hover:bg-opacity-90 transition-all">
                  SWAP
                </button>
              </div>
            </div>
          </div>
        );

      case 'Chart':
        return (
          <div className="flex-1 p-8">
            <div className="bg-[#1a1b2e]/50 rounded-2xl p-6 border border-[#39FF14]/20">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    <Image src="/partners/bitcoin.svg" alt="BTC" width={24} height={24} />
                    <span className="font-semibold">BTC/USDT</span>
                    <span className="text-gray-400">Bitcoin</span>
                  </div>
                  <div className="text-[#39FF14]">
                    60,423.71
                    <span className="text-sm ml-2">+3.12%</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 rounded-lg bg-[#2a2b3e]">TradingView</button>
                  <button className="px-4 py-2 rounded-lg bg-[#2a2b3e]">Depth</button>
                </div>
              </div>
              <div className="aspect-[16/9] bg-[#0a0b1e] rounded-xl flex items-center justify-center">
                <p className="text-gray-400">Trading chart will be displayed here</p>
              </div>
            </div>

            {/* Popular Pairs */}
            <div className="mx-auto mt-8 text-white">
              <div className="flex items-center gap-4 bg-[#1a1b2e]/50 rounded-xl p-4 overflow-x-auto">
                <span className="text-red-500">🔥 Popular</span>
                {popularPairs.map((pair, index) => (
                  <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                    <span>{pair.pair}</span>
                    <span className={pair.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                      {pair.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#39FF14] mb-8">COMING SOON</h2>
              <Image src="/mascot-surprised.svg" alt="Coming Soon" width={200} height={200} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0a0b1e] to-[#1a2e1a]">
      {/* Left Sidebar */}
      <div className="w-48 bg-[#0a0b1e] border-r border-[#39FF14]/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left px-6 py-4 font-semibold ${activeTab === tab.id
                ? 'bg-[#1a1b2e] text-[#39FF14] border-l-4 border-[#39FF14]'
                : 'text-gray-400 hover:bg-[#1a1b2e]/50'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      {renderTabContent()}
    </div>
  );
} 