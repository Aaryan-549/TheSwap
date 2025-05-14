import React from "react";
import { useAccount } from "wagmi";
import { Toaster } from "react-hot-toast";
import { SingleCard } from "./index";
import { ExternalLinkIcon, TrendingUpIcon, ChartBarIcon, CurrencyDollarIcon } from "@heroicons/react/outline";

const Card = () => {
  const { address } = useAccount();

  // Example market statistics
  const marketStats = [
    { label: "24h Volume", value: "$1.28B", icon: ChartBarIcon, change: "+2.4%" },
    { label: "Market Cap", value: "$825.4M", icon: CurrencyDollarIcon, change: "+3.5%" },
    { label: "Total Tokens", value: "10", icon: TrendingUpIcon, change: "" }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header with market overview */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Pokémon Token Exchange</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Trade your favorite Pokémon-themed tokens with real-time market data
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {marketStats.map((stat, index) => (
              <div key={index} className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <stat.icon className="w-5 h-5 text-emerald-400 mr-2" />
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                  </div>
                  {stat.change && (
                    <span className="text-xs font-medium text-emerald-400">{stat.change}</span>
                  )}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Filter tabs */}
        <div className="flex items-center justify-between mb-10 max-w-7xl mx-auto">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button className="px-4 py-2 bg-emerald-600 rounded-lg text-sm font-medium">
              All Tokens
            </button>
            <button className="px-4 py-2 bg-gray-800/60 hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Starters
            </button>
            <button className="px-4 py-2 bg-gray-800/60 hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Legendaries
            </button>
            <button className="px-4 py-2 bg-gray-800/60 hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Evolution
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <button className="px-3 py-1.5 bg-gray-800/60 hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">
              <span>Sort by:</span>
              <span className="ml-1 text-white">Rarity</span>
            </button>
          </div>
        </div>
        
        {/* Token Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <SingleCard index={1} name={"Pika USD"} walletAddress={address} />
          <SingleCard index={2} name={"Bulba Coin"} walletAddress={address} />
          <SingleCard index={3} name={"USD Chard"} walletAddress={address} />
          <SingleCard index={4} name={"squirtleETH"} walletAddress={address} />
          <SingleCard index={5} name={"Pidgey Token"} walletAddress={address} />
          <SingleCard index={6} name={"Mewtwo Token"} walletAddress={address} />
          <SingleCard index={7} name={"Gengar INR"} walletAddress={address} />
          <SingleCard index={8} name={"Dragonite Token"} walletAddress={address} />
          <SingleCard index={9} name={"Snorlax Token"} walletAddress={address} />
          <SingleCard index={10} name={"Eevee Token"} walletAddress={address} />
        </div>
        
        {/* View All Button */}
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-4 font-medium text-base rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-emerald-700 hover:to-emerald-600 text-white transition-all duration-300 shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 border border-gray-700 hover:border-emerald-500/50"
          >
            View All Tokens
            <ExternalLinkIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default Card;