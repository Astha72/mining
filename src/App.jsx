// App.jsx
import React from "react";
import { FaUserCircle, FaLeaf, FaUsers, FaRobot } from "react-icons/fa";
import { BsHexagon, BsCurrencyBitcoin } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Home from "./assets/pages/Home";
import Earn from "./assets/pages/Earn";
import Memepad from "./assets/pages/Memepad";
import Tokens from "./assets/pages/Tokens";
import Wallet from "./assets/pages/Wallet";
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
