import React from 'react';
import { Users, MessageCircle, Twitter, Github, HelpCircle } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0C002D]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#31C476] to-[#8ADE46] text-transparent bg-clip-text">
              Сообщество и поддержка
            </span>
          </h2>
          <p className="text-[#ECFBED]/80 max-w-2xl mx-auto">
            Присоединяйтесь к растущему сообществу Lumina в экосистеме TON
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#31C476]/10 to-transparent border border-[#31C476]/20">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-[#8ADE46]" />
              <span className="text-2xl font-bold text-[#8ADE46]">50K+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Активных пользователей</h3>
            <p className="text-[#ECFBED]/70">В экосистемах TON и Blum</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#31C476]/10 to-transparent border border-[#31C476]/20">
            <div className="flex items-center justify-between mb-4">
              <MessageCircle className="h-8 w-8 text-[#8ADE46]" />
              <span className="text-2xl font-bold text-[#8ADE46]">24/7</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
            <p className="text-[#ECFBED]/70">Помощь от команды Blum</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#31C476]/10 to-transparent border border-[#31C476]/20">
            <div className="flex items-center justify-between mb-4">
              <HelpCircle className="h-8 w-8 text-[#8ADE46]" />
              <span className="text-2xl font-bold text-[#8ADE46]">FAQ</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">База знаний</h3>
            <p className="text-[#ECFBED]/70">Ответы на частые вопросы</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: Twitter, label: 'Twitter' },
            { icon: MessageCircle, label: 'Blum Chat' },
            { icon: Github, label: 'GitHub' },
          ].map((social, index) => (
            <button
              key={index}
              className="group flex items-center space-x-2 bg-transparent border-2 border-[#31C476] hover:border-[#8ADE46] text-[#ECFBED] font-semibold py-2 px-6 rounded-lg transition-all duration-300"
            >
              <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>{social.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}