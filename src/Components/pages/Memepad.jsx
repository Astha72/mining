import React from "react";
import { FaFire, FaRocket, FaRegClock, FaRegEye } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const MemePad = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Memepad</h1>
        <button className="bg-lime-400 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
          <FaRocket className="text-sm" />
          Launch token
        </button>
      </div>

      {/* Ticker Message */}
      <div className="bg-neutral-900 text-xs text-pink-400 py-1 px-3 rounded-lg mb-3 w-fit animate-pulse">
        UQD bought <span className="text-white font-bold">36.51 TON</span> of <span className="text-purple-400">ES...</span> • 1min ago
      </div>

      {/* Spotlight */}
      <div className="bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] bg-cover rounded-xl p-4 mb-4">
        <p className="text-sm font-semibold text-orange-400 flex items-center gap-1 mb-2">
          <FaFire className="text-orange-400" /> Spotlight
        </p>
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://i.ibb.co/D4VC4bB/spotlight.png"
            alt="Spotlight Coin"
            className="w-20 h-20 rounded-full border-2 border-purple-500"
          />
          <h2 className="font-bold text-lg">KGO</h2>
          <div className="text-xs text-gray-400 flex gap-4">
            <span>👀 2K</span>
            <span>⇄ 16K</span>
          </div>
          <div className="text-lime-400 font-bold text-xl flex items-center gap-1 mt-1">
            $778.3K <BsLightningChargeFill />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-between text-sm mb-3 border-b border-gray-700 pb-1 text-gray-400">
        {["New", "Hot", "Bluming", "DEX"].map((tab, index) => (
          <button
            key={index}
            className={`px-2 ${index === 0 ? "text-white font-semibold border-b-2 border-white" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Token List */}
      <div className="space-y-4">
        {[
          {
            name: "FFVB15245",
            icon: "https://img.icons8.com/color/48/heart-with-pulse.png",
            views: 1,
            swaps: 2,
            mc: "$1.4K",
            time: "1min",
          },
          {
            name: "USDT",
            icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
            views: 1,
            swaps: 3,
            mc: "$1.4K",
            time: "11min",
          },
        ].map((token, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-zinc-900 rounded-lg px-3 py-2"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <img src={token.icon} alt={token.name} className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium">{token.name}</p>
                <div className="text-xs text-gray-400 flex gap-3">
                  <span>👁 {token.views}</span>
                  <span>⇄ {token.swaps}</span>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="text-right text-xs">
              <p className="text-lime-400 font-semibold">MC {token.mc}</p>
              <p className="text-gray-400">{token.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemePad;
