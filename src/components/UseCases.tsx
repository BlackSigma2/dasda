import React from 'react';
import { Network, ShoppingBag, Gem, Coins } from 'lucide-react';

const useCases = [
  {
    icon: Network,
    title: 'Экосистема TON',
    description: 'Используйте Lumina во всей экосистеме TON',
  },
  {
    icon: ShoppingBag,
    title: 'Приложения Blum',
    description: 'Интеграция с приложениями на платформе Blum',
  },
  {
    icon: Gem,
    title: 'TON NFT',
    description: 'Торгуйте NFT в сети TON с помощью Lumina',
  },
  {
    icon: Coins,
    title: 'DeFi на Blum',
    description: 'Участвуйте в DeFi проектах платформы Blum',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#31C476] to-[#8ADE46] text-transparent bg-clip-text">
              Где использовать Lumina
            </span>
          </h2>
          <p className="text-[#ECFBED]/80 max-w-2xl mx-auto">
            Широкие возможности применения в экосистемах TON и Blum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-[#31C476]/10 to-transparent border border-[#31C476]/20 hover:border-[#8ADE46]/40 transition-all duration-300"
            >
              <div className="mb-4">
                <useCase.icon className="h-8 w-8 text-[#8ADE46] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-[#ECFBED]/70">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}