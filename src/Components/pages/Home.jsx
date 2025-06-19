import React from "react";
import coin from "../../assets/coin.png";
import {
  FaUserCircle,
  FaLeaf,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import {
  BsHexagon,
  BsCurrencyBitcoin,
} from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-4 pb-24 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-4 text-sm text-gray-300">
        <span className="hover:text-red-400 transition">✕ Close</span>
        <span className="underline hover:text-blue-400 transition">Resend</span>
      </div>

      {/* Confirm Email */}
      <p className="text-xs text-gray-400 mb-4">
        Confirm <span className="font-medium text-white">c***@gmail.com</span>
      </p>

      {/* Balance */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full border border-zinc-700"
          />
          <div>
            <p className="text-gray-400 text-sm">Total balance</p>
            <p className="text-2xl font-bold text-green-400">$0</p>
          </div>
        </div>
        <BsHexagon className="text-purple-400 text-2xl" />
      </div>

      {/* Top Features */}
      <div className="flex justify-between text-center mb-6">
        {[
          { icon: <FaLeaf />, label: "Launch token" },
          { icon: <FaUsers />, label: "Frens" },
          { icon: <FaRobot />, label: "Trading bot" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-1/3"
          >
            <div className="bg-zinc-800 hover:bg-zinc-700 transition w-12 h-12 rounded-full flex items-center justify-center mb-1 text-green-300 text-lg">
              {item.icon}
            </div>
            <p className="text-xs text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Airdrop Banner */}
      <div className="relative bg-zinc-900 rounded-xl p-4 mb-6 overflow-hidden">
        <img
          src={coin}
          alt="airdrop"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-16 opacity-20 animate-coin-spin"
        style={{
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
  }}
       />
        <p className="text-white font-medium text-sm mb-3">
          🎁 $BLUM Airdrop Checker – Live Now!
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold px-4 py-1.5 rounded-full text-sm">
          Am I eligible?
        </button>
      </div>

      {/* Points Section */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold text-white">Points</p>
        <IoIosArrowForward className="text-gray-400 text-xl" />
      </div>

      {/* Meme Points */}
      <div className="flex justify-between items-center mb-5 bg-zinc-800 rounded-lg px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold">🏛</div>
          <div>
            <p className="text-sm text-white">Meme</p>
            <p className="text-xs text-gray-400">0 MP</p>
          </div>
        </div>
        <button className="bg-zinc-700 text-sm px-4 py-1 rounded-full text-gray-200 hover:bg-zinc-600 transition">
          Trade to earn
        </button>
      </div>

      {/* Divider */}
      <div className="h-[2px] bg-zinc-700 rounded-full mb-4" />

      {/* Blum Points */}
      <div className="flex justify-between items-center bg-zinc-800 rounded-lg px-4 py-3">
        <div className="flex items-center gap-3">
          <BsCurrencyBitcoin className="text-yellow-400 text-2xl" />
          <div>
            <p className="text-sm text-white">Blum</p>
            <p className="text-xs text-gray-400">510 BP</p>
          </div>
        </div>
        <div className="bg-zinc-700 px-3 py-1 rounded-full text-sm text-white">
          2.591 BP
        </div>
      </div>
    </div>
  );
}

export default Home;
