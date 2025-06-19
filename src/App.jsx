// App.jsx
import React from "react";
import { FaUserCircle, FaLeaf, FaUsers, FaRobot } from "react-icons/fa";
import { BsHexagon, BsCurrencyBitcoin } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Home from "./Components/pages/Home";
import Earn from "./Components/pages/Earn";
import Memepad from "./Components/pages/Memepad";
import Tokens from "./Components/pages/Tokens";
import Wallet from "./Components/pages/Wallet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./Components/Bottom_navbar";
import "./index.css"; // Ensure you have your styles imported


export default function App() {
  return (
   <Router>
      <div className="min-h-screen bg-black text-white pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/memepad" element={<Memepad />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
