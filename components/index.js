// Import React and Next.js dynamic import
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import non-interactive components that should be safe for SSR
import Menu from "./SVG/Menu";
import Logo from "./SVG/Logo";
import Upwork from "./SVG/Upwork";
import Insta from "./SVG/Insta";
import Twitter from "./SVG/Twitter";

// Import SmoothScroll component
import SmoothScroll from "./SmoothScroll";

// Create a client-side only wrapper component
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }
  
  return (
    <div {...delegated}>
      {children}
    </div>
  );
}

// Create a safer version of useEffect that only runs on the client
function useClientEffect(effect, dependencies) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (mounted) {
      return effect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, ...(dependencies || [])]);
}

// Import all components with dynamic imports and SSR disabled
const Header = dynamic(() => import('./Header'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
const TokenMarketplace = dynamic(() => import('./TokenMarketplace'), { ssr: false });
const Card = dynamic(() => import('./Card'), { ssr: false });
const HeroSection = dynamic(() => import('./HeroSection'), { ssr: false });
const Selector = dynamic(() => import('./Selector'), { ssr: false });
const SingleCard = dynamic(() => import('./SingleCard'), { ssr: false });
const SwapComponent = dynamic(() => import('./SwapComponent'), { ssr: false });
const Table = dynamic(() => import('./Table'), { ssr: false });
const TokenBalance = dynamic(() => import('./TokenBalance'), { ssr: false });
const TransactionStatus = dynamic(() => import('./TransactionStatus'), { ssr: false });
const SwapField = dynamic(() => import('./SwapField'), { ssr: false });

// Export everything
export {
  ClientOnly,
  useClientEffect,
  SmoothScroll,
  Header,
  Footer,
  Card,
  HeroSection,
  Selector,
  SingleCard,
  SwapComponent,
  Table,
  TokenBalance,
  TransactionStatus,
  SwapField,
  TokenMarketplace,
  // SVG icons can be exported directly as they're usually static
  Menu,
  Logo,
  Twitter,
  Upwork,
  Insta,
};