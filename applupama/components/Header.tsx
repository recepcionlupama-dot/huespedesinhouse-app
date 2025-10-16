import React from 'react';
import { Language } from '../types';

interface HeaderProps {
    currentLanguage: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageButton: React.FC<{
    lang: Language;
    currentLanguage: Language;
    setLanguage: (lang: Language) => void;
    label: string;
}> = ({ lang, currentLanguage, setLanguage, label }) => (
    <button
        onClick={() => setLanguage(lang)}
        className={`text-lg font-bold transition-all duration-200 ${
        currentLanguage === lang
            ? 'text-[#672127] scale-110'
            : 'text-gray-400 hover:text-[#672127]'
        }`}
        aria-label={`Change language to ${label}`}
    >
        {label}
    </button>
);


export const Header: React.FC<HeaderProps> = ({ currentLanguage, setLanguage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-md h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-50">
      <div className="flex-1"></div>
      <div className="flex-1 flex justify-center">
        <img 
          src="https://github.com/recepcionlupama-dot/huespedesinhouse-app/blob/main/imagenes/logo_lupama.png?raw=true" 
          alt="Hostería Lupama Logo" 
          className="h-20 object-contain"
        />
      </div>
      <div className="flex-1 flex justify-end items-center space-x-4">
        <LanguageButton lang={Language.ES} currentLanguage={currentLanguage} setLanguage={setLanguage} label="ES" />
        <LanguageButton lang={Language.EN} currentLanguage={currentLanguage} setLanguage={setLanguage} label="EN" />
        <LanguageButton lang={Language.PT} currentLanguage={currentLanguage} setLanguage={setLanguage} label="PT" />
      </div>
    </header>
  );
};