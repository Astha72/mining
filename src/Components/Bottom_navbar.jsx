// components/BottomNav.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Coins, Orbit, BarChart2, Wallet } from "lucide-react";

const navItems = [
  { label: "Home", icon: <Home size={20} />, path: "/" },
  { label: "Earn", icon: <Coins size={20} />, path: "/earn" },
  { label: "Memepad", icon: <Orbit size={20} />, path: "/memepad" },
  { label: "Tokens", icon: <BarChart2 size={20} />, path: "/tokens" },
  { label: "Wallet", icon: <Wallet size={20} />, path: "/wallet" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 flex justify-around py-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link to={item.path} key={item.label} className="flex flex-col items-center text-xs">
            <div className={isActive ? "text-white" : "text-gray-500"}>
              {item.icon}
              <p className="mt-1">{item.label}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
