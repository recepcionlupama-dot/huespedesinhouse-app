
import React from 'react';
import { CardType } from '../types';

interface InfoCardProps {
  title: string;
  type: CardType;
  content: string | React.FC<{ className?: string }>;
  onClick: () => void;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, type, content, onClick, className }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden cursor-pointer group shadow-lg ${className || 'aspect-square'}`}
    >
      {type === CardType.Image && typeof content === 'string' && (
        <img 
          src={content} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      {type === CardType.Icon && typeof content === 'function' && (
         <div className="w-full h-full bg-white flex items-center justify-center p-8">
            {React.createElement(content, { className: "w-2/3 h-2/3 text-[#672127] transition-transform duration-300 group-hover:scale-110" })}
         </div>
      )}
      
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-4 transition-colors duration-300 group-hover:bg-opacity-50">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">{title}</h2>
      </div>
    </div>
  );
};
