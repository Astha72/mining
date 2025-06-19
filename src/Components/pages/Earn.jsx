import React from "react";
import { FaBolt, FaTelegramPlane } from "react-icons/fa";

const Earn = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-5 space-y-6 font-sans">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Earn <span className="text-yellow-400">190</span></h1>
      </div>

      {/* Play Bonus Card */}
      <div className="bg-gray-200 text-black rounded-xl p-4 flex flex-col space-y-2">
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/dKQ7dxM/boinkers.png" // Replace with your asset
            alt="Boinkers"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">Play Boinkers and receive</p>
            <p className="text-lg font-bold tracking-wide">100 free wheel spins bonus!</p>
            <p className="text-xs text-gray-500 mt-1 line-through">+500 BP</p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-1 rounded-full w-fit mt-2">
          Start
        </button>
      </div>

      {/* Weekly Section */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Weekly</h2>
        <div className="bg-zinc-900 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-white">Earn for checking socials</p>
            <p className="text-xs text-gray-400">0 / 450 BP</p>
          </div>
          <div className="flex gap-3 items-center">
            <button className="bg-white text-black text-xs font-semibold px-4 py-1 rounded-full">
              Open
            </button>
            <div className="bg-zinc-800 text-gray-400 text-xs px-2 py-1 rounded-full">0/5</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 text-sm text-gray-400">
        <span className="text-white font-semibold">Socials</span>
        <span className="hover:text-white">OnChain</span>
        <span className="hover:text-white">Academy</span>
        <span className="hover:text-white">Bonus</span>
      </div>

      {/* Social Tasks */}
      <div className="space-y-3">
        {[
          {
            task: "Follow Blum Trading Channel",
            reward: "+250 BP",
            icon: <FaBolt className="text-yellow-400" />,
          },
          {
            task: "Vote for Blum on Telegram",
            reward: "+250 BP",
            icon: <FaTelegramPlane className="text-blue-400" />,
          },
        ].map((item, idx) => (
          <div key={idx} className="flex justify-between items-center bg-zinc-900 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="bg-zinc-800 p-2 rounded-full">{item.icon}</div>
              <div>
                <p className="text-sm font-medium">{item.task}</p>
                <p className="text-xs text-green-400">{item.reward}</p>
              </div>
            </div>
            <button className="bg-zinc-700 text-white text-xs font-medium px-4 py-1 rounded-full">
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earn;
