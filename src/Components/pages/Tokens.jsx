import React from "react";
import { FaWallet } from "react-icons/fa";

const tokens = [
  {
    name: "USDT",
    price: "$1.0018",
    change: "+5.95%",
    cap: "$1.4B",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
  },
  {
    name: "BABYDOGE",
    price: "$0.012454",
    change: "-3.51%",
    cap: "$252.3M",
    logo: "https://cryptologos.cc/logos/babydoge-coin-babydoge-logo.png",
  },
  {
    name: "NOT",
    price: "$0.0002632",
    change: "-2.36%",
    cap: "$211.4M",
    logo: "https://cryptologos.cc/logos/notcoin-not-logo.png",
  },
  {
    name: "TSTON",
    price: "$3.1985",
    change: "-0.83%",
    cap: "$183.2M",
    logo: "https://via.placeholder.com/30/ccc/000?text=T",
  },
  {
    name: "CPLE",
    price: "$0.13668",
    change: "+2.41%",
    cap: "$123.0M",
    logo: "https://via.placeholder.com/30/fc0/000?text=C",
  },
  {
    name: "ANAKO",
    price: "$0.104143",
    change: "+2.45%",
    cap: "$93.7M",
    logo: "https://via.placeholder.com/30/09f/fff?text=A",
  },
  {
    name: "STON",
    price: "$0.909454",
    change: "-8.67%",
    cap: "$90.9M",
    logo: "https://via.placeholder.com/30/09f/fff?text=S",
  },
  {
    name: "HMSTR",
    price: "$0.00009189",
    change: "-9.42%",
    cap: "$90.2M",
    logo: "https://via.placeholder.com/30/f99/fff?text=H",
  },
];

const Tokens = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-5 space-y-4">
      {/* Top Bar with Wallet Icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">MCap</h1>
        <FaWallet className="text-white text-2xl" />
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search token or address"
        className="w-full px-4 py-2 rounded-full bg-zinc-800 text-sm placeholder:text-gray-400 focus:outline-none"
      />

      {/* Tabs */}
      <div className="flex space-x-6 text-gray-400 text-sm pt-2">
        <span className="text-white font-semibold border-b-2 border-white pb-1">MCap</span>
        <span className="hover:text-white">Hot</span>
        <span className="hover:text-white">Listed</span>
      </div>

      {/* Token List */}
      <div className="space-y-4 pt-2">
        {tokens.map((token, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-black py-3 border-b border-zinc-800"
          >
            {/* Left: Logo + Info */}
            <div className="flex items-center gap-3">
              <img
                src={token.logo}
                alt={token.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{token.name}</p>
                <p className="text-xs text-gray-500">MCap: {token.cap}</p>
              </div>
            </div>

            {/* Right: Price + Change */}
            <div className="text-right">
              <p className="text-sm font-semibold">{token.price}</p>
              <p
                className={`text-xs font-semibold ${
                  token.change.includes("+")
                    ? "text-green-400"
                    : "text-pink-500"
                }`}
              >
                {token.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokens;
