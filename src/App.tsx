import React from 'react';
import { ArrowRight, Coins, GamepadIcon, Users, Wallet, Zap } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowToBuy from './components/HowToBuy';
import UseCases from './components/UseCases';
import Community from './components/Community';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0C002D] text-[#ECFBED]">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowToBuy />
        <UseCases />
        <Community />
        <Contact />
      </div>
      
      {/* Animated background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#31C476]/20 to-[#8ADE46]/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzMUM0NzYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QURFNDYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9InVybCgjZykiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] animate-pulse" />
      </div>
    </div>
  );
}

export default App;