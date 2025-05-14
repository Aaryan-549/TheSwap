import React from "react";

//INTERNAL IMPORT
import { Footer, HeroSection, Header, Card, TokenMarketplace  } from "../components/index";
import SmoothScroll from "../components/SmoothScroll";

const home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <SmoothScroll />
      <Header />
      <main className="pt-0">
        <HeroSection />
        <TokenMarketplace />
      </main>
      <Footer />
    </div>
  );
};

export default home;
