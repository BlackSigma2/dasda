import React from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#31C476] to-[#8ADE46] text-transparent bg-clip-text">
              Свяжитесь с нами
            </span>
          </h2>
          <p className="text-[#ECFBED]/80">
            Есть вопросы? Мы всегда готовы помочь
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#ECFBED] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-[#ECFBED]/5 border border-[#31C476]/20 rounded-lg focus:outline-none focus:border-[#8ADE46] text-[#ECFBED] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#ECFBED] mb-2">
              Тема
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 bg-[#ECFBED]/5 border border-[#31C476]/20 rounded-lg focus:outline-none focus:border-[#8ADE46] text-[#ECFBED] transition-colors"
              placeholder="Тема сообщения"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#ECFBED] mb-2">
              Сообщение
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-[#ECFBED]/5 border border-[#31C476]/20 rounded-lg focus:outline-none focus:border-[#8ADE46] text-[#ECFBED] transition-colors"
              placeholder="Ваше сообщение..."
            />
          </div>

          <button
            type="submit"
            className="group w-full bg-[#8ADE46] hover:bg-[#8ADE46]/90 text-[#0C002D] font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            Отправить
            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}