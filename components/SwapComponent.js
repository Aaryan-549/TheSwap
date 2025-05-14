import React, { useEffect, useState, useRef } from "react";
import {
  hasValidAllowance,
  increaseAllowance,
  swapEthToToken,
  swapTokenToEth,
  swapTokenToToken,
} from "../utils/context";

import { CogIcon } from "@heroicons/react/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import SwapField from "./SwapField";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";
import { DEFAULT_VALUE, ETH, COIN_1 } from "../utils/saleToken";
import { toEth, toWei } from "../utils/utils";
import { useAccount } from "wagmi";
import { motion } from "framer-motion";

const SwapComponent = () => {
  // Initialize with ETH and an actual token (not DEFAULT_VALUE)
  const [srcToken, setSrcToken] = useState(ETH);
  const [destToken, setDestToken] = useState(COIN_1);

  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const inputValueRef = useRef();
  const outputValueRef = useRef();

  const isReversed = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const INCREASE_ALLOWANCE = "Increase allowance";
  const ENTER_AMOUNT = "Enter an amount";
  const CONNECT_WALLET = "Connect wallet";
  const SWAP = "Swap";

  const srcTokenObj = {
    id: "srcToken",
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: destToken,
    setToken: setSrcToken,
  };

  const destTokenObj = {
    id: "destToken",
    value: outputValue,
    setValue: setOutputValue,
    defaultValue: destToken,
    ignoreValue: srcToken,
    setToken: setDestToken,
  };

  const [srcTokenComp, setSrcTokenComp] = useState();
  const [destTokenComp, setDestTokenComp] = useState();

  const [swapBtnText, setSwapBtnText] = useState(ENTER_AMOUNT);
  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");

  const { address } = useAccount();

  useEffect(() => {
    setMounted(true);
    console.log("Component mounted");
    
    // Initialize with valid tokens to prevent dropdown errors
    if (destToken === DEFAULT_VALUE) {
      setDestToken(COIN_1);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Handling the text of the submit button
    if (!address) setSwapBtnText(CONNECT_WALLET);
    else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);
    else setSwapBtnText(SWAP);
  }, [inputValue, outputValue, address, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    if (
      document.activeElement !== outputValueRef.current &&
      document.activeElement?.ariaLabel !== "srcToken" &&
      !isReversed.current
    )
      populateOutputValue(inputValue);

    setSrcTokenComp(<SwapField obj={srcTokenObj} ref={inputValueRef} />);

    if (inputValue?.length === 0) setOutputValue("");
  }, [inputValue, destToken, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    if (
      document.activeElement !== inputValueRef.current &&
      document.activeElement?.ariaLabel !== "destToken" &&
      !isReversed.current
    )
      populateInputValue(outputValue);

    setDestTokenComp(<SwapField obj={destTokenObj} ref={outputValueRef} />);

    if (outputValue?.length === 0) setInputValue("");

    // Resetting the isReversed value if its set
    if (isReversed.current) isReversed.current = false;
  }, [outputValue, srcToken, mounted]);

  // Render a placeholder during server-side rendering
  if (!mounted) {
    return <div className="h-96 w-full bg-gray-800 rounded-2xl animate-pulse"></div>;
  }

  return (
    <div className="border-none rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 w-full p-1 shadow-lg shadow-teal-900/20 relative" style={{ zIndex: 50 }}>
      <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl relative" style={{ zIndex: 50 }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Swap Now!</h2>
          <div className="flex items-center space-x-2">
            
          </div>
        </div>
        
        <div className="relative" style={{ zIndex: 60 }}>
          <motion.div 
            className="bg-gray-800 rounded-xl p-4 border-2 border-transparent hover:border-teal-500 transition-all duration-300 relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 60 }}
          >
            {srcTokenComp}
          </motion.div>
          
          {/* Centered arrow that overlaps both boxes */}
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 70 }}>
            <motion.div 
              className="p-2 bg-teal-500 rounded-full cursor-pointer hover:bg-teal-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: isRotating ? 180 : 0 }}
              transition={{ duration: 0.1 }}
              onClick={handleReverseExchange}
            >
              <ChevronDoubleDownIcon className="h-5 w-5 text-gray-900" />
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="bg-gray-800 rounded-xl p-4 border-2 border-transparent hover:border-teal-500 transition-all duration-300 mt-2 relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          style={{ zIndex: 60 }}
        >
          {destTokenComp}
        </motion.div>

        <div className="mt-8 relative" style={{ zIndex: 50 }}>
          <motion.button
            className={getSwapBtnClassName()}
            whileHover={{ scale: swapBtnText === SWAP || swapBtnText === INCREASE_ALLOWANCE ? 1.02 : 1 }}
            whileTap={{ scale: swapBtnText === SWAP || swapBtnText === INCREASE_ALLOWANCE ? 0.98 : 1 }}
            onClick={() => {
              if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();
              else if (swapBtnText === SWAP) handleSwap();
            }}
          >
            {swapBtnText}
          </motion.button>
        </div>

        {txPending && <TransactionStatus />}

        <Toaster />
        
        <div className="mt-4 text-xs text-gray-500 text-center">
         Your One Click Solution To Swapping Pokémon Tokens!
        </div>
      </div>
      
      {/* Overlay div to ensure proper dropdown rendering */}
      <div id="dropdown-portal" className="absolute top-0 left-0 w-full" style={{ zIndex: 1000 }}></div>
    </div>
  );

  async function handleSwap() {
    if (srcToken === ETH && destToken !== ETH) {
      performSwap();
    } else {
      // Check whether there is allowance when the swap deals with tokenToEth/tokenToToken
      setTxPending(true);
      const result = await hasValidAllowance(address, srcToken, inputValue);
      setTxPending(false);

      if (result) performSwap();
      else handleInsufficientAllowance();
    }
  }

  async function handleIncreaseAllowance() {
    // Increase the allowance
    setTxPending(true);
    await increaseAllowance(srcToken, inputValue);
    setTxPending(false);

    // Set the swapbtn to "Swap" again
    setSwapBtnText(SWAP);
  }

  function handleReverseExchange(e) {
    // Setting the isReversed value to prevent the input/output values
    // being calculated in their respective side - effects
    isReversed.current = true;
    
    // Trigger rotation animation
    setIsRotating(prev => !prev);

    // 1. Swap tokens (srcToken <-> destToken)
    // 2. Swap values (inputValue <-> outputValue)
    setInputValue(outputValue);
    setOutputValue(inputValue);

    setSrcToken(destToken);
    setDestToken(srcToken);
  }

  function getSwapBtnClassName() {
    let className = "w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ";
    
    if (swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET) {
      className += "bg-gray-700 text-gray-500 cursor-not-allowed";
    } else if (swapBtnText === INCREASE_ALLOWANCE) {
      className += "bg-yellow-500 hover:bg-yellow-400 text-gray-900";
    } else {
      className += "bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white";
    }
    
    return className;
  }

  function populateOutputValue() {
    // Never use DEFAULT_VALUE in calculations
    if (!inputValue || destToken === DEFAULT_VALUE || srcToken === DEFAULT_VALUE) {
      return;
    }

    try {
      if (srcToken !== ETH && destToken !== ETH) setOutputValue(inputValue);
      else if (srcToken === ETH && destToken !== ETH) {
        const outValue = toEth(toWei(inputValue), 14);
        setOutputValue(outValue);
      } else if (srcToken !== ETH && destToken === ETH) {
        const outValue = toEth(toWei(inputValue, 14));
        setOutputValue(outValue);
      }
    } catch (error) {
      console.error("Error populating output value:", error);
      setOutputValue("0");
    }
  }

  function populateInputValue() {
    // Never use DEFAULT_VALUE in calculations
    if (!outputValue || destToken === DEFAULT_VALUE || srcToken === DEFAULT_VALUE) {
      return;
    }

    try {
      if (srcToken !== ETH && destToken !== ETH) setInputValue(outputValue);
      else if (srcToken === ETH && destToken !== ETH) {
        const outValue = toEth(toWei(outputValue, 14));
        setInputValue(outValue);
      } else if (srcToken !== ETH && destToken === ETH) {
        const outValue = toEth(toWei(outputValue), 14);
        setInputValue(outValue);
      }
    } catch (error) {
      console.error("Error populating input value:", error);
      setInputValue("0");
    }
  }

  async function performSwap() {
    setTxPending(true);

    let receipt;

    if (srcToken === ETH && destToken !== ETH)
      receipt = await swapEthToToken(destToken, inputValue);
    else if (srcToken !== ETH && destToken === ETH)
      receipt = await swapTokenToEth(srcToken, inputValue);
    else receipt = await swapTokenToToken(srcToken, destToken, inputValue);

    setTxPending(false);

    if (receipt && !receipt.hasOwnProperty("transactionHash"))
      notifyError(receipt);
    else notifySuccess();
  }

  function handleInsufficientAllowance() {
    notifyError(
      "Insufficient allowance. Click 'Increase allowance' to increase it."
    );
    setSwapBtnText(INCREASE_ALLOWANCE);
  }
};

export default SwapComponent;