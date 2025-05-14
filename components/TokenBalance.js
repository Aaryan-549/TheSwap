import React, { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import {
  DuplicateIcon,
  CheckIcon,
} from "@heroicons/react/outline";

//INTERNAL IMPORT
import { TransactionStatus } from "./index";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";

const TokenBalance = ({ name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();
  const [copyIcon, setCopyIcon] = useState({ icon: DuplicateIcon });
  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance("-");
  }, [name, walletAddress]);

  async function fetchTokenBalance() {
    const bal = await getTokenBalance(name, walletAddress);
    const fBal = ethers.utils.formatUnits(bal.toString(), 18);
    setBalance(fBal.toString());
  }

  async function fetchTokenAddress() {
    const address = await getTokenAddress(name);
    setTokenAddress(address);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopyIcon({ icon: CheckIcon });
    setTimeout(() => {
      setCopyIcon({ icon: DuplicateIcon });
    }, 2000);
  };

  return (
    <div className="flex items-center bg-gray-800 rounded-xl overflow-hidden">
      <div className="py-2 px-3 flex items-center">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mr-2">
            <span className="text-xs text-white font-bold">{name.charAt(0)}</span>
          </div>
          <span className="text-sm font-medium text-gray-300">{name}</span>
        </div>
        <div className="mx-3 h-4 border-r border-gray-700"></div>
        <div className="text-sm font-medium text-white">{balance}</div>
      </div>
      <div 
        className="py-2 px-2 bg-gray-700 cursor-pointer hover:bg-gray-600 transition-colors flex items-center"
        onClick={handleCopy}
      >
        <copyIcon.icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
      </div>

      {txPending && <TransactionStatus />}
      <Toaster />
    </div>
  );
};

export default TokenBalance;