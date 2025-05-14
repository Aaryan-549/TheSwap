import React, { useEffect, useState } from "react";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";
import { ethers } from "ethers";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";

import {
  ClipboardCopyIcon,
  CheckIcon,
  TrendingUpIcon,
  CashIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";

const SingleCard = ({ index, name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState("");
  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardCopyIcon });
  const [txPending, setTxPending] = useState(false);
  const [priceChange, setPriceChange] = useState(Math.random() * 10 - 5); // Random price change for demo
  const [tokenCode, setTokenCode] = useState("");

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
      // Extract token code from name (e.g. "Tether USD" -> "USDT")
      const codes = {
        "Tether USD": "TETH",
        "BNB": "BNB",
        "USD Coin": "USD",
        "stETH": "STET",
        "TRON": "TRON",
        "Matic Token": "MATI",
        "SHIBA INU": "SHIB",
        "Uniswap": "UNIS"
      };
      setTokenCode(codes[name] || name.substring(0, 4).toUpperCase());
    } else setBalance("-");
  }, [name, walletAddress]);

  async function fetchTokenBalance() {
    try {
      const bal = await getTokenBalance(name, walletAddress);
      const fBal = ethers.utils.formatUnits(bal.toString(), 18);
      setBalance(fBal.toString());
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBalance("-");
    }
  }

  async function fetchTokenAddress() {
    try {
      const address = await getTokenAddress(name);
      setTokenAddress(address);
    } catch (error) {
      console.error("Error fetching token address:", error);
    }
  }

  const handleCopy = () => {
    if (tokenAddress) {
      navigator.clipboard.writeText(tokenAddress);
      setCopyIcon({ icon: CheckIcon });
      toast.success("Address copied to clipboard!");
      setTimeout(() => {
        setCopyIcon({ icon: ClipboardCopyIcon });
      }, 2000);
    }
  };

  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/30 border border-gray-700/50 group">
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-transparent to-gray-900/90"></div>
        
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-70">
          <div className="w-full h-full bg-[url('/img/circuit-pattern.svg')] bg-no-repeat bg-center bg-contain"></div>
        </div>
        
        {/* Token Icon */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
          <img
            src={`/img/${index}.png`}
            alt={name}
            className="w-24 h-24 object-contain filter drop-shadow-lg"
          />
        </div>
        
        {/* Price Change Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1
            ${priceChange >= 0 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
            {priceChange >= 0 
              ? <TrendingUpIcon className="w-3 h-3 rotate-0" /> 
              : <TrendingUpIcon className="w-3 h-3 -rotate-90" />}
            {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
          </div>
        </div>
        
        {/* Supply Badge */}
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1.5 bg-gray-900/70 rounded-lg text-xs font-medium text-gray-300 border border-gray-700/50">
            Supply: 10M
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-14 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <div className="flex items-center gap-1.5 bg-gray-700/50 px-2.5 py-1 rounded-lg">
            <span className="text-xs text-emerald-400 font-semibold">
              {tokenCode}
            </span>
          </div>
        </div>
        
        <div className="mt-3 mb-5">
          <div className="text-sm text-gray-400">Token Address</div>
          <div className="mt-1 flex items-center">
            <span className="text-sm font-mono text-gray-300">{truncateAddress(tokenAddress)}</span>
            <button 
              onClick={handleCopy} 
              className="ml-2 p-1 hover:bg-gray-700 rounded-md transition-colors"
            >
              <copyIcon.icon className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-3 border-t border-gray-700/30">
          <div className="text-sm text-gray-400">Your Balance</div>
          <div className="text-xl font-semibold text-white flex items-baseline">
            {balance}
            <span className="text-xs text-gray-400 ml-1">{tokenCode}</span>
          </div>
        </div>
        
        <div className="flex mt-6 gap-2">
          <button className="flex-1 flex items-center justify-center py-3 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl text-white font-medium hover:from-emerald-500 hover:to-emerald-400 transition-all duration-200 shadow-md shadow-emerald-900/20">
            <CashIcon className="w-4 h-4 mr-2" />
            <span>Buy</span>
          </button>
          
          <button 
            className="flex items-center justify-center p-3 bg-gray-700/70 rounded-xl text-gray-300 hover:text-white hover:bg-gray-600 transition cursor-pointer"
            onClick={handleCopy}
          >
            <copyIcon.icon className="w-4 h-4" />
          </button>
          
          <button className="flex items-center justify-center p-3 bg-gray-700/70 rounded-xl text-gray-300 hover:text-white hover:bg-gray-600 transition cursor-pointer">
            <ExternalLinkIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {txPending && <TransactionStatus />}
      <Toaster />
    </div>
  );
};

export default SingleCard;