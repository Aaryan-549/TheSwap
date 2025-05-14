// TokenMarketplace.js - Next.js component
import React from "react";
import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";

const TokenMarketplace = () => {
  // State variables
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewType, setViewType] = useState("grid");
  const [selectedToken, setSelectedToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { address } = useAccount();

  // Token data
  const tokens = [
    { id: 1, name: "Pika USD", symbol: "PikaUSD", price: 1.00, priceChange: 0.45, marketCap: "85.4B", volume: "42.1B", supply: "10M", balance: 0, category: "stable" },
    { id: 2, name: "Bulba", symbol: "BlB", price: 567.21, priceChange: -0.70, marketCap: "62.7B", volume: "1.2B", supply: "10M", balance: 0, category: "exchange" },
    { id: 3, name: "USD Chard", symbol: "USDCh", price: 0.99, priceChange: -0.73, marketCap: "31.5B", volume: "3.6B", supply: "10M", balance: 0, category: "stable" },
    { id: 4, name: "squirtleETH", symbol: "SqETH", price: 3241.18, priceChange: -1.69, marketCap: "20.2B", volume: "789.5M", supply: "10M", balance: 10000, category: "defi" },
    { id: 5, name: "Pidgey Token", symbol: "PidTok", price: 0.13, priceChange: 3.36, marketCap: "12.3B", volume: "925.1M", supply: "10M", balance: 0, category: "platform" },
    { id: 6, name: "Mewtwo Token", symbol: "MTwo", price: 0.52, priceChange: 1.89, marketCap: "4.8B", volume: "301.2M", supply: "10M", balance: 0, category: "platform" },
    { id: 7, name: "Gangar INR", symbol: "GenINR", price: 0.00002354, priceChange: 0.99, marketCap: "1.4B", volume: "432.8M", supply: "10M", balance: 0, category: "meme" },
    { id: 8, name: "Eevee Token", symbol: "EevTok", price: 7.82, priceChange: 4.82, marketCap: "4.7B", volume: "156.3M", supply: "10M", balance: 0, category: "defi" },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Tokens" },
    { id: "gainers", name: "Top Gainers" },
    { id: "losers", name: "Top Losers" },
    { id: "stable", name: "Stablecoins" },
    { id: "defi", name: "DeFi" },
    { id: "platform", name: "Platforms" },
    { id: "meme", name: "Meme Coins" },
  ];

  // Fetch token balances when wallet address changes
  useEffect(() => {
    if (address) {
      fetchBalances();
    }
  }, [address]);

  // Function to fetch token balances
  const fetchBalances = async () => {
    try {
      // In a real implementation, this would call the blockchain
      console.log("Fetching balances for address:", address);
      
      // Example of how to fetch a balance for a token
      // const balance = await getTokenBalance("USDT", address);
      // const formattedBalance = ethers.utils.formatUnits(balance.toString(), 18);
    } catch (error) {
      console.error("Error fetching balances:", error);
    }
  };

  // Handle buy token action
  const handleBuyToken = (tokenId) => {
    const token = tokens.find(t => t.id === tokenId);
    if (token) {
      toast.success(`Initiating purchase for ${token.symbol}`);
      // In a real app, this would open a modal or trigger a transaction
    }
  };

  // Handle copy address to clipboard
  const handleCopyAddress = (tokenId) => {
    // In a real app, this would be fetched from the blockchain
    const mockAddress = `0x${tokenId}abc123def456789abcdef0123456789abcdef`;
    navigator.clipboard.writeText(mockAddress);
    toast.success("Address copied to clipboard!");
  };

  // Handle token selection/expansion
  const handleTokenSelection = (tokenId) => {
    setSelectedToken(selectedToken === tokenId ? null : tokenId);
  };

  // Filter tokens based on active filter and search
  const getFilteredTokens = () => {
    return tokens.filter(token => {
      // Filter by category
      if (activeFilter !== "all") {
        if (activeFilter === "gainers" && token.priceChange <= 0) return false;
        if (activeFilter === "losers" && token.priceChange >= 0) return false;
        if (activeFilter !== "gainers" && activeFilter !== "losers" && token.category !== activeFilter) return false;
      }
      
      // Filter by search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return token.name.toLowerCase().includes(query) || token.symbol.toLowerCase().includes(query);
      }
      
      return true;
    });
  };

  // Format price for display
  const formatPrice = (price) => {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 0.01 ? 6 : 2
    });
  };

  // Render method
  return (
    <section className="py-10 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header with market overview */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Token Marketplace</h2>
              <p className="text-gray-400">Explore top-performing cryptocurrencies in real-time</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-xs text-gray-400">Market Cap</div>
                <div className="text-xl font-semibold flex items-baseline">
                  $825.4B
                  <span className="ml-2 text-xs text-emerald-400">+3.5%</span>
                </div>
              </div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-xs text-gray-400">24h Volume</div>
                <div className="text-xl font-semibold flex items-baseline">
                  $1.28B
                  <span className="ml-2 text-xs text-emerald-400">+2.4%</span>
                </div>
              </div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-xs text-gray-400">Total Tokens</div>
                <div className="text-xl font-semibold">32</div>
              </div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-xs text-gray-400">Your Portfolio</div>
                <div className="text-xl font-semibold flex items-baseline">
                  $32.4M
                  <span className="ml-2 text-xs text-red-400">-1.2%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search and filter controls */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div className="relative md:w-1/3">
              <input
                type="text"
                placeholder="Search tokens..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800/60 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div className="absolute right-3 top-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="inline-flex bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 p-1">
                <button
                  onClick={() => setViewType("grid")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    viewType === "grid" 
                      ? "bg-emerald-600 text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    viewType === "list" 
                      ? "bg-emerald-600 text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              
              <select
                className="bg-gray-800/60 border border-gray-700/50 text-white rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="marketCap">Market Cap</option>
                <option value="price">Price</option>
                <option value="volume">Volume</option>
                <option value="priceChange">Price Change</option>
              </select>
            </div>
          </div>
          
          {/* Category filters */}
          <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === category.id 
                    ? "bg-emerald-600 text-white" 
                    : "bg-gray-800/60 text-gray-300 hover:bg-gray-700 border border-gray-700/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Main content - Grid or List view */}
        {viewType === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredTokens().map(token => (
              <div 
                key={token.id}
                className={`bg-gray-800/40 backdrop-blur-sm rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20 ${
                  selectedToken === token.id 
                    ? 'border-emerald-500/50 shadow-lg shadow-emerald-900/20' 
                    : 'border-gray-700/50'
                }`}
                onClick={() => handleTokenSelection(token.id)}
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-700/30 bg-gray-800/60">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center mr-3">
                      <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        {token.symbol.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold">{token.name}</div>
                      <div className="text-sm text-gray-400">{token.symbol}</div>
                    </div>
                  </div>
                  <div 
                    className={`px-2 py-1 rounded text-sm ${
                      token.priceChange >= 0 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {token.priceChange >= 0 ? '+' : ''}{token.priceChange}%
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-400">Price</div>
                      <div className="text-xl font-bold">${formatPrice(token.price)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Your Balance</div>
                      <div className="text-xl font-bold">{token.balance.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-2 text-sm">
                    <div className="bg-gray-800/60 rounded-lg p-2">
                      <div className="text-gray-400 text-xs">Market Cap</div>
                      <div className="font-medium">${token.marketCap}</div>
                    </div>
                    <div className="bg-gray-800/60 rounded-lg p-2">
                      <div className="text-gray-400 text-xs">Volume (24h)</div>
                      <div className="font-medium">${token.volume}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyToken(token.id);
                      }}
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white py-2 rounded-lg font-medium transition-colors"
                    >
                      Buy
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyAddress(token.id);
                      }}
                      className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTokenSelection(token.id);
                      }}
                      className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {getFilteredTokens().length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-400">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="text-xl font-medium">No tokens found</div>
                <p className="mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {getFilteredTokens().map(token => (
              <div
                key={token.id}
                className={`bg-gray-800/40 backdrop-blur-sm rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20 ${
                  selectedToken === token.id 
                    ? 'border-emerald-500/50 shadow-lg shadow-emerald-900/20' 
                    : 'border-gray-700/50'
                }`}
              >
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => handleTokenSelection(token.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                          {token.symbol.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="font-bold text-xl">{token.name}</div>
                          <div className="ml-2 px-2 py-0.5 bg-gray-700 rounded-lg text-xs font-medium text-gray-300">
                            {token.symbol}
                          </div>
                        </div>
                        <div className="flex items-center mt-1 text-sm text-gray-400">
                          <span>Market Cap: ${token.marketCap}</span>
                          <span className="mx-2">•</span>
                          <span>24h Vol: ${token.volume}</span>
                          <span className="mx-2">•</span>
                          <span>Supply: {token.supply}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="text-xl font-bold">${formatPrice(token.price)}</div>
                      <div 
                        className={`mt-1 px-2 py-0.5 rounded text-sm ${
                          token.priceChange >= 0 
                            ? 'bg-emerald-500/10 text-emerald-400' 
                            : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {token.priceChange >= 0 ? '+' : ''}{token.priceChange}%
                      </div>
                    </div>
                  </div>
                  
                  {selectedToken === token.id && (
                    <div className="mt-6 pt-6 border-t border-gray-700/30">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="text-sm text-gray-400 mb-2">Token Overview</div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-xs text-gray-500">Token Address</div>
                              <div className="text-sm font-mono">0x{token.id}abc...def</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Category</div>
                              <div className="text-sm capitalize">{token.category}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Your Balance</div>
                              <div className="text-sm">{token.balance.toLocaleString()} {token.symbol}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Value in USD</div>
                              <div className="text-sm">${(token.balance * token.price).toLocaleString()}</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-3 mt-6">
                            <button
                              onClick={() => handleBuyToken(token.id)}
                              className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                            >
                              Buy {token.symbol}
                            </button>
                            <button
                              onClick={() => handleCopyAddress(token.id)}
                              className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                            >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                              </svg>
                              Copy Address
                            </button>
                          </div>
                        </div>
                        
                        <div className="md:w-2/5">
                          <div className="text-sm text-gray-400 mb-2">Price Chart (7d)</div>
                          <div className="h-40 bg-gray-800/60 rounded-lg overflow-hidden relative">
                            {/* Placeholder for chart - in a real app, use a proper chart library */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-gray-500 text-sm">Chart Placeholder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {getFilteredTokens().length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="text-xl font-medium">No tokens found</div>
                <p className="mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}
        
        {/* Pagination */}
        {getFilteredTokens().length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="inline-flex bg-gray-800/60 rounded-xl overflow-hidden">
              <button className="px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white font-medium">1</button>
              <button className="px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">2</button>
              <button className="px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">3</button>
              <button className="px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </nav>
          </div>
        )}
      </div>
      
      <Toaster position="bottom-right" />
    </section>
  );
};

export default TokenMarketplace;