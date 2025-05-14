import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";

// INTERNAL IMPORT
import { Menu, Logo, TokenBalance } from "./index";

const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const { address } = useAccount();

  const notifyConnectWallet = () =>
    toast.error("Connect wallet.", { duration: 2000 });

  useEffect(() => {
    setTokenBalComp(
      <>
        <TokenBalance name={"USD Coin"} walletAddress={address} />
        <TokenBalance name={"BNB"} walletAddress={address} />
        <TokenBalance name={"SHIBA INU"} walletAddress={address} />
      </>
    );

    if (!address) notifyConnectWallet();
  }, [address]);

  // Navigation items with their paths
  const navItems = [
    { title: "Exchange", path: "/" },
    { title: "Previous Transactions", path: "/tokens" }
  ];

  // Helper function to determine if a nav item is active
  const isActive = (path) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="py-3 bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Left Section: Logo + Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/">
              <a className="flex items-center space-x-2.5">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                  <Logo className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">TheSwap</span>
              </a>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <a
                        className={`relative py-4 font-medium transition-colors ${
                          isActive(item.path)
                            ? "text-emerald-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-emerald-400"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Section - Wallet Button */}
          <div className="flex items-center space-x-4">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      style: {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md shadow-emerald-900/20"
                          >
                            Connect Wallet
                          </button>
                        );
                      }

                      return (
                        <div className="flex items-center">
                          <button
                            onClick={openChainModal}
                            className="flex items-center mr-3 bg-gray-800 hover:bg-gray-700 py-2 px-3 rounded-lg border border-gray-700 transition-colors"
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-2"></span>
                            <span className="text-sm font-medium text-white">{chain.name}</span>
                          </button>

                          <button
                            onClick={openAccountModal}
                            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg border border-gray-700 transition-colors"
                          >
                            <span className="text-sm font-medium">
                              {account.displayBalance
                                ? `${account.displayBalance}`
                                : ''}
                            </span>
                            <span className="text-sm font-medium">
                              {account.displayName}
                            </span>
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden rounded-lg p-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4 border-t border-gray-800 mt-3">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a
                      className={`block py-2 px-4 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? "bg-gray-800 text-emerald-400"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Toaster />
    </header>
  );
};

export default Header;