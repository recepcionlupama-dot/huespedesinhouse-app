import React, { useState } from 'react';
import { type FaqItem } from '../types';
import { ChevronDownIcon } from './Icons';

interface FaqProps {
  title: string;
  items: FaqItem[];
}

export const Faq: React.FC<FaqProps> = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto mt-8 md:mt-12">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#672127] mb-6 text-center">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-[#672127] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === index && (
                <div className="pb-4 pr-6 text-gray-600 animate-fade-in">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
