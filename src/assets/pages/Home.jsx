import React from "react";
import { FaUserCircle, FaLeaf, FaUsers, FaRobot } from "react-icons/fa";
import { BsHexagon, BsCurrencyBitcoin } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

function Home (){
                return(<>

                 <div className="min-h-screen bg-black text-white px-4 pb-24 font-sans">
                      {/* Top Bar */}
                      <div className="flex justify-between items-center py-4 text-sm">
                        <span>✕ Close</span>
                        <span className="text-gray-400 underline">Resend</span>
                      </div>
                
                      {/* Email confirmation */}
                      <div className="text-sm text-gray-400 mb-3">
                        Confirm c***@gmail.com.
                      </div>
                
                      {/* Balance */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
                            <FaUserCircle className="text-2xl" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Total balance</p>
                            <p className="text-xl font-bold">$0</p>
                          </div>
                        </div>
                        <BsHexagon className="text-white text-2xl" />
                      </div>
                
                      {/* Top 3 Options */}
                      <div className="flex justify-between text-center mb-6">
                        {[
                          { icon: <FaLeaf />, label: "Launch token" },
                          { icon: <FaUsers />, label: "Frens" },
                          { icon: <FaRobot />, label: "Trading bot" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center w-1/3">
                            <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-1">
                              {item.icon}
                            </div>
                            <p className="text-xs">{item.label}</p>
                          </div>
                        ))}
                      </div>
                
                      {/* Airdrop Banner */}
                      <div className="bg-zinc-900 rounded-xl p-4 mb-6">
                        <p className="text-white font-medium text-sm mb-3">
                          $BLUM Airdrop Checker – Live Now!
                        </p>
                        <button className="bg-white text-black font-semibold px-4 py-1 rounded-full text-sm">
                          Am I eligible?
                        </button>
                      </div>
                
                      {/* Points Header */}
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-lg font-semibold">Points</p>
                        <IoIosArrowForward className="text-white text-xl" />
                      </div>
                
                      {/* Meme Points */}
                      <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl font-bold">🏛</div>
                          <div>
                            <p className="text-sm">Meme</p>
                            <p className="text-xs text-gray-400">0 MP</p>
                          </div>
                        </div>
                        <button className="bg-zinc-800 text-sm px-3 py-1 rounded-full">
                          Trade to earn
                        </button>
                      </div>
                
                      {/* Space like in image */}
                      <div className="h-[2px] bg-zinc-800 rounded-full mb-4" />
                
                      {/* Blum Points */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <BsCurrencyBitcoin className="text-2xl" />
                          <div>
                            <p className="text-sm">Blum</p>
                            <p className="text-xs text-gray-400">510 BP</p>
                          </div>
                        </div>
                        <div className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                          2.591 BP
                        </div>
                      </div>
                
                      {/* Bottom Navigation Bar */}
                     
                    </div>
                </>);
}
export default Home;