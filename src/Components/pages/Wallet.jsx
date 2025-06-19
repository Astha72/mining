import React from "react";
import { FaWallet } from "react-icons/fa";

const Wallet = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Wallet</h1>
        <div className="bg-zinc-800 p-3 rounded-full w-12 h-12 flex items-center justify-center">
          <FaWallet className="text-white text-xl" />
        </div>
      </div>

      {/* Balance */}
      <div className="bg-zinc-900 p-5 rounded-xl mb-6">
        <p className="text-gray-400 text-sm mb-2">Total Balance</p>
        <h2 className="text-3xl font-bold">$0.00</h2>
      </div>

      {/* Transactions */}
      <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center bg-zinc-800 p-4 rounded-xl"
          >
            <div>
              <p className="font-medium">Token Purchase</p>
              <p className="text-sm text-gray-400">Today, 11:34 AM</p>
            </div>
            <p className="text-green-400 font-semibold">+ $150</p>
          </div>
        ))}
      </div>

      {/* Bottom Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 flex justify-around py-2">
        <button className="flex flex-col items-center text-sm text-gray-400 hover:text-white">
          Home
        </button>
        <button className="flex flex-col items-center text-sm text-white font-bold">
          Wallet
        </button>
        <button className="flex flex-col items-center text-sm text-gray-400 hover:text-white">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Wallet;
