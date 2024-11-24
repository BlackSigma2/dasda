import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-[#31C476] to-[#8ADE46] text-transparent bg-clip-text">
            Lumina: Свет в экосистеме Blum
          </span>
        </h1>
        
        <p className="text-[#ECFBED]/80 text-xl mb-12 max-w-2xl mx-auto">
          Освещаем путь в экосистеме TON с помощью инновационной платформы Blum
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-[#8ADE46] hover:bg-[#8ADE46]/90 text-[#0C002D] font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
            Как начать?
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a href="https://www.blum.io" target="_blank" rel="noopener noreferrer">
  <button className="group bg-transparent border-2 border-[#31C476] hover:border-[#8ADE46] text-[#ECFBED] font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
    Узнать больше о Blum
    <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
  </button>
</a>

        </div>
      </div>

      {/* Animated background with geometric patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#31C476" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#8ADE46" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-gradient)" strokeWidth="1" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#31C476]/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8ADE46]/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
}