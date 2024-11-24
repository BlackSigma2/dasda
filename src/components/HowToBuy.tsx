import React from 'react';
import { UserPlus, Wallet, ArrowRight, Coins } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Создайте аккаунт',
    description: 'Зарегистрируйтесь на платформе Blum',
  },
  {
    icon: Wallet,
    title: 'Подключите кошелек',
    description: 'Подключите кошелек, совместимый с TON',
  },
  {
    icon: Coins,
    title: 'Купите Lumina',
    description: 'Приобретите токены через биржу Blum',
  },
];

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0C002D]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#31C476] to-[#8ADE46] text-transparent bg-clip-text">
              Как приобрести Lumina
            </span>
          </h2>
          <p className="text-[#ECFBED]/80 max-w-2xl mx-auto">
            Простой процесс покупки через платформу Blum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#31C476]/10 to-transparent border border-[#31C476]/20 hover:border-[#8ADE46]/40 transition-all duration-300">
                <div className="mb-6">
                  <step.icon className="h-12 w-12 text-[#8ADE46] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-[#ECFBED]/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-[#8ADE46]/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="group bg-[#8ADE46] hover:bg-[#8ADE46]/90 text-[#0C002D] font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center mx-auto">
            Перейти на Blum
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}