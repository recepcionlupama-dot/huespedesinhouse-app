

import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';
import { Modal } from './components/Modal';
import { MapIcon } from './components/Icons';
import { Faq } from './components/Faq';
import { Language, CardID, CardType, type ModalContent } from './types';
import { CARDS_DATA, GIFT_SHOP_CARD_DATA, ALL_TRANSLATIONS } from './constants';

function App() {
  const [language, setLanguage] = useState<Language>(Language.ES);
  const [activeModal, setActiveModal] = useState<CardID | null>(null);

  const translations = ALL_TRANSLATIONS[language];
  const activeModalContent: ModalContent | null = activeModal ? translations.modal_content[activeModal] : null;

  const openModal = useCallback((id: CardID) => {
    setActiveModal(id);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const titleColor = activeModal === CardID.Excursions ? 'text-cyan-600' : 'text-[#672127]';

  return (
    <div className="bg-white min-h-screen">
      <Header currentLanguage={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-28 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#672127] mb-8">
          {translations.welcome_message}
        </h1>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CARDS_DATA.map((card) => (
            <InfoCard 
              key={card.id}
              title={translations.card_titles[card.id]}
              type={card.type}
              content={card.content}
              onClick={() => openModal(card.id)}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-4 md:mt-6">
            <InfoCard
                key={GIFT_SHOP_CARD_DATA.id}
                title={translations.card_titles[GIFT_SHOP_CARD_DATA.id]}
                type={GIFT_SHOP_CARD_DATA.type}
                content={GIFT_SHOP_CARD_DATA.content}
                onClick={() => openModal(GIFT_SHOP_CARD_DATA.id)}
                className="aspect-[32/9] md:aspect-[5/1]"
            />
        </div>

        <section className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-start mb-4">
              <MapIcon className="w-8 h-8 text-[#672127] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#672127]">
                  {translations.map_section_title}
                </h2>
                <p className="text-gray-600 mt-1">
                  {translations.map_section_subtitle}
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border">
               <iframe
                src="https://www.google.com/maps/d/embed?mid=1yw2vVH8YiHPRECF_61joWQqfUbyC7Vbn"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={translations.map_section_title}
              ></iframe>
            </div>
          </div>
        </section>
        
        <Faq 
          title={translations.faq_section_title}
          items={translations.faqs}
        />

      </main>

      <a
        href="https://wa.me/5491150030084"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 z-40 text-center font-semibold"
      >
        {translations.contact_button}
      </a>

      <Modal isOpen={!!activeModal} onClose={closeModal}>
        {activeModalContent && (
          <div className="p-2 sm:p-4 text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${titleColor} mb-4`}>{activeModalContent.title}</h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{activeModalContent.text}</div>
            {activeModalContent.button_text && activeModalContent.button_link && (
              <a
                href={activeModalContent.button_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-[#672127] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
              >
                {activeModalContent.button_text}
              </a>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;