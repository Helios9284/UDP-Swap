'use client';

import { useState, useEffect} from 'react';
import Image from 'next/image';
import {Star} from "@/app/types/types";

const popularPairs = [
  { pair: 'PEPE/USDT', change: '+12%' },
  { pair: 'DOGE/USDT', change: '+12%' },
  { pair: 'NEIRO/USDT', change: '-12%' },
  { pair: 'BGB/USDT', change: '+12%' },
  { pair: 'BTC/USDT', change: '+12%' }
];

export default function Swap() {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeTab, setActiveTab] = useState('DEX');
  const [selectedToken1, setSelectedToken1] = useState({ symbol: 'ETH', balance: '2.8989', balanceUSD: '6726.2307' });
  const [selectedToken2, setSelectedToken2] = useState({ symbol: 'EOS', balance: '400.8989', balanceUSD: '284.6382' });

  const [activeSubTab, setActiveSubTab] = useState('spot');
  const [orderType, setOrderType] = useState('limit');
  const [isBuy, setIsBuy] = useState(true);
  const [price, setPrice] = useState('60423.71');
  const [quantity, setQuantity] = useState('0.5');
  const [sliderValue, setSliderValue] = useState(25);

  const calculateTotal = () => {
    return (parseFloat(price) * parseFloat(quantity)).toFixed(2);
  };

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
          <div className="flex-1 p-2 md:p-8 relative">
            <div>
              <Image
                src='/swap/Bitcoin.png'
                alt='Bitcoin'
                width={120}
                height={120}
                className='absolute right-0 -translate-x-[350px] top-[180px] hidden xl:block z-1 '
              />
              <Image
                src='/swap/portal.png'
                alt='Portal'
                width={350}
                height={350}
                className='absolute right-0 -translate-x-33 top-[200px] animate-spin  hidden xl:block shadow-[0_0_240px_0_#B8F736] rounded-full'
              />
              <Image
                src='/swap/Eth.png'
                alt='Eth'
                width={120}
                height={120}
                className='absolute right-0.5 -translate-x-[150px] top-[450px] rotate-12  hidden xl:block z-1'
              />
            </div>

            <Image
              src='/swap/dex-bg2.svg'
              alt='Ribbon'
              width={300}
              height={150}
              className='absolute top-[-200px] left-0 hidden md:block'
            />
            <h1 className="text-3xl md:text-5xl font-bold font-cleanow text-[#00D49B] text-center my-6 md:my-12 text-shadow-[-3px_3px_#054642]">SWAP ANYTIME, ANYWHERE</h1>
            <div className='max-w-lg mx-auto bg-[#111B18] p-[10px] rounded-2xl'>
              <div className="bg-[#1a1b2e]/50 rounded-2xl p-3 md:p-6 border-[3px] border-[#B8F736]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-white">Swap</h2>
                  <button className="text-[#39FF14]">
                    <Image
                      src="/swap/settings.svg"
                      alt="settings"
                      width={18}
                      height={18}
                      className='cursor-pointer'
                    />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="bg-[#0a0b1e] p-4 rounded-xl relative">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <button className="bg-[#1a1b2e] hover:bg-[#2a2b3e] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                        <span>{selectedToken1.symbol}</span>
                        <span>↓</span>
                      </button>
                      <input
                        type="number"
                        placeholder="0.0"
                        className="bg-transparent text-xl w-full focus:outline-none text-right"
                      />

                    </div>
                    <div className="flex items-center justify-between gap-4 text-gray-400">
                      <span>Balance: {selectedToken1.balance} {selectedToken1.symbol}</span>
                      ≈${selectedToken1.balanceUSD}
                    </div>
                    <div className="flex justify-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <Image
                        src="/swap/exchange.svg"
                        alt="settings"
                        width={56}
                        height={56}
                        className='cursor-pointer w-[28px] h-[28px] md:w-[56px] md:h-[56px]'
                      />
                    </div>
                  </div>

                  <div className="bg-[#0a0b1e] p-4 rounded-xl">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <button className="bg-[#1a1b2e] hover:bg-[#2a2b3e] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                        <span>{selectedToken2.symbol}</span>
                        <span>↓</span>
                      </button>
                      <input
                        type="number"
                        placeholder="0.0"
                        className="bg-transparent text-xl w-full focus:outline-none text-right"
                      />

                    </div>
                    <div className="flex items-center justify-between gap-4 text-gray-400">
                      <span>Balance: {selectedToken2.balance} {selectedToken2.symbol}</span>
                      ≈${selectedToken2.balanceUSD}
                    </div>
                  </div>

                  <div className="text-sm text-gray-400 text-right">
                    1 {selectedToken1.symbol} = {(Number(selectedToken2.balanceUSD) / Number(selectedToken1.balanceUSD)).toFixed(7)} {selectedToken2.symbol}
                  </div>

                  <button className="w-full bg-[#39FF14] text-black py-4 rounded-xl font-semibold font-cleanow hover:shadow-[0_0_20px_#39FF14] hover:bg-opacity-90 transition-all border-[4px] border-[#B8F736] cursor-pointer">
                    SWAP
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Chart':
        return (
          <div className='relative w-full flex justify-center'>
            <Image
              src='/swap/chart-bg1.svg'
              alt='Ribbon'
              width={580}
              height={620}
              className='absolute left-0 bottom-[-100px] hidden md:block'
            />
            <Image
              src='/swap/chart-bg2.svg'
              alt='Ribbon'
              width={580}
              height={620}
              className='absolute right-0 bottom-[-300px] hidden md:block'
            />
            <Image
              src='/swap/chart-bg3.svg'
              alt='Ribbon'
              width={580}
              height={620}
              className='absolute right-0 top-[-100px] hidden md:block'
            />
            <div className="flex-1 p-2 md:p-8 max-w-6xl mx-auto relative">
              <div className="rounded-2xl p-2 md:p-6">
                <div className="mb-6 bg-[#111B18] p-4 rounded-xl">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⭐</span>
                      <Image src="/partners/bitcoin.svg" alt="BTC" width={24} height={24} />
                      <div>
                        <p className="font-semibold">BTC/USDT</p>
                        <p className="text-gray-400">Bitcoin</p>
                      </div>
                    </div>
                    <div className='flex gap-8'>
                      <div>
                        <p className="text-[#39FF14]">60,423.71</p>
                        <span className="text-sm">≈€ 54,731.13</span>
                      </div>
                      <div>
                        <p className="text-[#39FF14]">24h Change</p>
                        <span className="text-sm">+3.12%</span>
                      </div>
                      <div>
                        <p className="text-[#39FF14]">24h High</p>
                        <span className="text-sm">61,234.12</span>
                      </div>
                    </div>
                    <div className='flex gap-8'>
                      <div>
                        <p className="text-[#39FF14]">24h Low</p>
                        <span className="text-sm">59,344.32</span>
                      </div>
                      <div>
                        <p className="text-[#39FF14]">24h Volume (USDT)</p>
                        <span className="text-sm">259.91M</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
                  <div className="w-full bg-[#111B18] rounded-xl flex items-center justify-center relative aspect-16/9">
                    <Image
                      src="/swap/trading_chart.svg"
                      alt="Arrow Left"
                      fill={true}
                      className='cursor-pointer'
                    />
                  </div>
                  <div className="max-w-md mx-auto bg-[#111B18] rounded-2xl p-6">
                    {/* Trading Type Tabs */}
                    <div className="flex gap-4 mb-6">
                      <button
                        className={`px-4 py-2 rounded-lg cursor-pointer ${activeSubTab === 'spot' ? 'bg-[#2a2b3e] text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveSubTab('spot')}
                      >
                        Spot
                      </button>
                      <button
                        className={`px-4 py-2 rounded-lg cursor-pointer ${activeSubTab === 'margin' ? 'bg-[#2a2b3e] text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveSubTab('margin')}
                      >
                        Margin 10X
                      </button>
                    </div>

                    {/* Buy/Sell Buttons */}
                    <div className="flex gap-2 mb-6">
                      <button
                        className={`flex-1 py-3 rounded-lg cursor-pointer ${isBuy ? 'bg-[#39FF14] text-black font-semibold' : 'bg-transparent text-gray-400'}`}
                        onClick={() => setIsBuy(true)}
                      >
                        Buy
                      </button>
                      <button
                        className={`flex-1 py-3 rounded-lg cursor-pointer ${!isBuy ? 'bg-[#ff3939] text-white font-semibold' : 'bg-transparent text-gray-400'}`}
                        onClick={() => setIsBuy(false)}
                      >
                        Sell
                      </button>
                    </div>

                    {/* Order Type Selection */}
                    <div className="flex gap-4 mb-6 text-sm">
                      <button
                        className={`cursor-pointer ${orderType === 'limit' ? 'text-white' : 'text-gray-400'}`}
                        onClick={() => setOrderType('limit')}
                      >
                        Limit
                      </button>
                      <button
                        className={`cursor-pointer ${orderType === 'market' ? 'text-white' : 'text-gray-400'}`}
                        onClick={() => setOrderType('market')}
                      >
                        Market
                      </button>
                      <button
                        className={`cursor-pointer ${orderType === 'advanced' ? 'text-white' : 'text-gray-400'}`}
                        onClick={() => setOrderType('advanced')}
                      >
                        Advanced Limit
                      </button>
                    </div>

                    {/* Price Input */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center bg-[#2a2b3e] rounded-lg p-3">
                        <input
                          type="text"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="bg-transparent w-full outline-none text-gray-400"
                          placeholder="Price"
                        />
                        <span className="text-gray-400">USDT</span>
                      </div>
                    </div>

                    {/* Quantity Input */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center bg-[#2a2b3e] rounded-lg p-3">
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="bg-transparent w-full outline-none text-gray-400"
                          placeholder="Quantity"
                        />
                        <span className="text-gray-400">BTC</span>
                      </div>
                    </div>

                    {/* Percentage Slider */}
                    <div className="mb-6">
                      <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span>0%</span>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="25"
                        value={sliderValue}
                        onChange={(e) => setSliderValue(parseInt(e.target.value))}
                        className="w-full h-1 bg-[#2a2b3e] rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-400">Total</span>
                      <div className="text-right">
                        <div className="font-medium text-gray-400">{calculateTotal()} USDT</div>
                      </div>
                    </div>

                    {/* TP/SL Toggle */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-400">TP/SL</span>
                      <div className="text-gray-400">Available: 0 USDT</div>
                    </div>

                    {/* Action Button */}
                    <button
                      className={`w-full py-4 rounded-lg font-semibold border-[4px] border-[#B8F736] ${isBuy ? 'bg-[#3EDD38] text-black' : 'bg-[#ff3939] text-white'
                        }`}
                    >
                      {isBuy ? 'BUY' : 'SELL'} BTC
                    </button>
                  </div>
                </div>

                {/* Popular Pairs */}
                <div className="mx-auto mt-8 text-white">
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-[#111B18] rounded-xl p-2 md:p-4 max-h-[120px] overflow-y-scroll md:max-h-inherit md:overflow-y-auto">
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
            </div>
          </div>
        );

      default:
        return (
          <div className="flex-1 flex items-center justify-center md:min-h-[500px] py-10">
            <div className="flex flex-col items-center justify-center bg-[url('/swap/comingsoon.svg')] bg-cover min-w-[300px] min-h-[200px] md:min-w-[974px] md:min-h-[771px] relative">
              <Image
                src='/swap/soon-bg1.svg'
                alt='Ribbon'
                width={580}
                height={620}
                className='absolute right-0 bottom-[-200px] hidden md:block'
              />
              <Image
                src='/swap/soon-bg2.svg'
                alt='Ribbon'
                width={580}
                height={620}
                className='absolute left-[-50px] top-[-50px] hidden md:block'
              />
              <h2 className="text-3xl md:text-6xl font-cleanow font-bold text-[#39FF14]">COMING SOON</h2>
            </div>
          </div>
        );
    }
  };

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 50 }).map(() => ({
      size: Math.random() * 3 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));

    setStars(generatedStars);
  }, []);
  return (
    <div className="max-w-screen">
      <div className='w-[360px] h-[360px] scale-200 rounded-full blur-[100px] md:blur-[180px] bg-[#BC01FE] opacity-40 absolute -top-20 left-0 -z-1' />
        <Image
          src= "/swap/wave.svg"
          alt= "wave"  
          width={1024}
          height={100}
          className='absolute top-0 max-h-full max-w-screen md:w-[1500px]  hidden  md:block -z-1'
        />
        {/* Mobile Tab Navigation */}
        <div className="md:hidden flex overflow-x-auto bg-[#1a1b2e] p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${activeTab === tab.id
                ? 'bg-[#2a2b3e] text-[#39FF14]'
                : 'text-gray-400'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle shadow-[0_0_10px_#ffffff]"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-48 bg-transparent flex-col justify-center z-[100] h-screen absolute top-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-center px-6 py-4 font-semibold cursor-pointer ${activeTab === tab.id
                ? 'bg-[#1a1b2e] text-[#39FF14] border-r-4 border-[#39FF14]'
                : 'text-gray-400 hover:bg-[#1a1b2e]/50'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        {renderTabContent()}
      {/* </div> */}
    </div>
  );
} 