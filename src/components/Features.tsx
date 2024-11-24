import React from 'react';
import { Shield, Zap, Link, Coins } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Безопасность Blum',
    description: 'Защита активов на уровне платформы Blum и блокчейна TON',
  },
  {
    icon: Zap,
    title: 'Скорость TON',
    description: 'Мгновенные транзакции благодаря интеграции с TON',
  },
  {
    icon: Link,
    title: 'Интеграция',
    description: 'Полная совместимость с экосистемой TON и платформой Blum',
  },
  {
    icon: Coins,
    title: 'Экосистема',
    description: 'Широкие возможности использования в сети TON',
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#31C476] to-[#8ADE46] text-transparent bg-clip-text">
              Преимущества Lumina
            </span>
          </h2>
          <p className="text-[#ECFBED]/80 max-w-2xl mx-auto">
            Уникальная цифровая монета, созданная на платформе Blum и интегрированная в блокчейн TON
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-[#31C476]/10 to-transparent border border-[#31C476]/20 hover:border-[#8ADE46]/40 transition-all duration-300"
            >
              <div className="mb-4">
                <feature.icon className="h-8 w-8 text-[#8ADE46] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#ECFBED]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}