
import React from 'react';
import { Language, CardID, CardType, type CardInfo, type Translations } from './types';

const cdnUrlPrefix = 'https://cdn.jsdelivr.net/gh/recepcionlupama-dot/huespedesinhouse-app@main/imagenes/';

export const CARDS_DATA: CardInfo[] = [
  { id: CardID.Breakfast, type: CardType.Image, content: `${cdnUrlPrefix}IMG_4222.jpg` },
  { id: CardID.Pool, type: CardType.Image, content: `${cdnUrlPrefix}pile_32323.jpg` },
  { id: CardID.Wifi, type: CardType.Image, content: `${cdnUrlPrefix}wifi-compu.jpg` },
  { id: CardID.Restaurant, type: CardType.Image, content: `${cdnUrlPrefix}image.png` },
  { id: CardID.LunchBox, type: CardType.Image, content: `${cdnUrlPrefix}IMG_61612.jpg` },
  { id: CardID.Excursions, type: CardType.Image, content: `${cdnUrlPrefix}MORENO.jpg` },
];

export const GIFT_SHOP_CARD_DATA: CardInfo = {
  id: CardID.GiftShop,
  type: CardType.Image,
  content: `${cdnUrlPrefix}IMG_9640.JPG`
};

const whatsAppOrderLink = "https://wa.me/5491150030084?text=Hola,%20quisiera%20encargar%20una%20vianda.";

const excursionsSpanishGuideUrl = 'https://drive.google.com/file/d/1UhS5BjDIBK7Kiyxr3M3_Du4TcZI2E9ue/preview';
const excursionsEnglishGuideUrl = 'https://drive.google.com/file/d/1-NZvs1KkbP0RPKXlTXS_9YqTjXI6XXrf/preview';
const excursionsPortugueseGuideUrl = 'https://drive.google.com/file/d/1I6dUuMnab5uCbXzx1S6Yt1cNJw6_esKr/preview';
const giftShopCatalogUrl = 'https://drive.google.com/file/d/1tMHT7_1Ahw_W8oCNPpqL9iLi4HBlyLK9/preview';
const restaurantMenuUrl = 'https://drive.google.com/file/d/1l4A39yb0cT7tcn5CqgX14m56fMdhWRDu/preview';

const excursionButtonClassName = "w-full max-w-xs h-20 flex items-center justify-center text-center bg-cyan-600 text-white px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300";

const excursionsButtons = React.createElement('div', { className: "flex flex-col items-center space-y-3 mt-6" },
  React.createElement('a', { href: excursionsSpanishGuideUrl, target: "_blank", rel: "noopener noreferrer", className: excursionButtonClassName }, 'Guía de Excursiones en Español'),
  React.createElement('a', { href: excursionsEnglishGuideUrl, target: "_blank", rel: "noopener noreferrer", className: excursionButtonClassName }, 'Excursions Guide in English'),
  React.createElement('a', { href: excursionsPortugueseGuideUrl, target: "_blank", rel: "noopener noreferrer", className: excursionButtonClassName }, 'Guia de Excursões em Português')
);


export const ALL_TRANSLATIONS: Record<Language, Translations> = {
  [Language.ES]: {
    welcome_message: 'Bienvenidos a Hostería Lupama',
    map_section_title: 'Mapa Interactivo de El Calafate',
    map_section_subtitle: 'Elaboramos este mapa con los puntos más importantes de nuestra ciudad, además de nuestra ubicación.',
    card_titles: {
      [CardID.Breakfast]: 'Desayuno',
      [CardID.Pool]: 'Piscina',
      [CardID.Wifi]: 'Wifi',
      [CardID.Restaurant]: 'Bar & Restaurant',
      [CardID.LunchBox]: 'Viandas para Excursiones',
      [CardID.Excursions]: 'Excursiones',
      [CardID.GiftShop]: 'Tienda de Regalos',
    },
    modal_content: {
      [CardID.Breakfast]: {
        title: 'Desayuno Buffet',
        text: 'Nuestro desayuno se sirve de 6:30 a 9:30 hs. Disfruta de una variedad de pastelería casera, frutas de estación, fiambres, cereales y opciones calientes para comenzar tu día con energía antes de las excursiones.',
      },
      [CardID.Pool]: {
        title: 'Piscina Climatizada',
        text: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "font-semibold mb-2" }, 'Horario: de 9 a 20 hs'),
            React.createElement('p', { className: "font-bold mt-4 mb-2" }, 'Por favor:'),
            React.createElement('ul', { className: "list-disc list-inside text-left mx-auto max-w-xs" },
              React.createElement('li', null, 'Prohibido correr o saltar.'),
              React.createElement('li', null, 'Menores siempre acompañados.'),
              React.createElement('li', null, 'No ingresar con vidrio ni comida.'),
              React.createElement('li', null, 'Toalla disponible en recepción.')
            )
          ),
      },
      [CardID.Wifi]: {
        title: 'Conexión Wi-Fi Gratuita',
        text: 'Red: Lupama Wifi\nContraseña: lupamacalafate',
      },
      [CardID.Restaurant]: {
        title: 'Bar & Restaurant',
        text: 'En nuestro restaurant encontrará opciones de cafetería, meriendas, tragos de autor, vinos, bebidas, comidas!\nNo olvides hacer tu reserva para cenar!',
        button_text: 'Menu Bar & Restaurant',
        button_link: restaurantMenuUrl,
      },
      [CardID.LunchBox]: {
        title: 'Viandas para Llevar',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', { className: "mb-4 text-gray-600" },
            'Todas nuestras viandas incluyen: sándwich, agua, fruta y un snack.',
            React.createElement('br'),
            'Pedidos hasta las 20:00 hs del día anterior.'
          ),
          React.createElement('div', { className: "space-y-3 my-6 text-left" },
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'SIMPLE'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$20000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'jamón y queso')
            ),
            React.createElement('div', { className: "w-full border-b-2 border-dotted border-blue-200" }),
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'COMPLETA'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$25000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'jamón, queso, lechuga y tomate')
            ),
            React.createElement('div', { className: "w-full border-b-2 border-dotted border-blue-200" }),
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'VEGETARIANA'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$25000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'queso, huevo, lechuga y tomate')
            )
          ),
          React.createElement('p', { className: "mt-6 text-center text-gray-600 font-semibold" }, 'Consulta por opciones sin tacc'),
          React.createElement('a', {
            href: whatsAppOrderLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-4 inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          },
            'Pedir vianda por Whatsapp'
          )
        ),
      },
      [CardID.Excursions]: {
        title: 'Excursiones en El Calafate',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', null, 'Descubre la magia de la Patagonia. Ofrecemos asesoramiento y reserva para todas las excursiones disponibles. ¡Prepárate para una aventura inolvidable!'),
          excursionsButtons
        ),
      },
      [CardID.GiftShop]: {
        title: 'Nuestra Tienda de Regalos',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', null, 'Llevate un recuerdo de la Patagonia. Visita nuestra tienda para encontrar artesanías locales, souvenirs y productos exclusivos. El regalo perfecto te está esperando.'),
          React.createElement('a', {
            href: giftShopCatalogUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-6 inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300"
          }, 'Ver Catálogo')
        ),
      },
    },
    contact_button: 'Hablar con Recepción',
    faq_section_title: 'Preguntas Frecuentes',
    faqs: [
      {
        question: '¿Cuál es el horario de check-in y check-out?',
        answer: 'El check-in es a partir de las 14:00 hs. El check-out es hasta las 10:00 hs. Si necesita salir más tarde, por favor consulte en recepción la disponibilidad de un late check-out.'
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos efectivo (pesos argentinos, dólares y euros), tarjetas de débito y crédito (Visa, MasterCard, American Express) y transferencias bancarias.'
      },
      {
        question: '¿El hotel cuenta con estacionamiento?',
        answer: 'Sí, ofrecemos estacionamiento gratuito para nuestros huéspedes. No es necesario reservar con antelación.'
      },
      {
        question: '¿Puedo dejar mi equipaje después del check-out?',
        answer: 'Sí, contamos con guarda equipaje sin costo adicional.'
      },
      {
        question: '¿Tienen servicio de transfer al aeropuerto?',
        answer: 'Sí, podés solicitarlo en recepción (con cargo adicional).'
      }
    ]
  },
  [Language.EN]: {
    welcome_message: 'Welcome to Hostería Lupama',
    map_section_title: 'Interactive Map of El Calafate',
    map_section_subtitle: 'We have created this map with the most important points of our city, in addition to our location.',
    card_titles: {
      [CardID.Breakfast]: 'Breakfast',
      [CardID.Pool]: 'Pool',
      [CardID.Wifi]: 'Wifi',
      [CardID.Restaurant]: 'Bar & Restaurant',
      [CardID.LunchBox]: 'Lunch Boxes To-Go',
      [CardID.Excursions]: 'Excursions',
      [CardID.GiftShop]: 'Gift Shop',
    },
    modal_content: {
      [CardID.Breakfast]: {
        title: 'Buffet Breakfast',
        text: 'Our breakfast is served from 6:30 AM to 9:30 AM. Enjoy a variety of homemade pastries, seasonal fruits, cold cuts, cereals, and hot options to start your day with energy before your excursions.',
      },
      [CardID.Pool]: {
        title: 'Heated Pool',
        text: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "font-semibold mb-2" }, 'Hours: 9 AM to 8 PM'),
            React.createElement('p', { className: "font-bold mt-4 mb-2" }, 'Please:'),
            React.createElement('ul', { className: "list-disc list-inside text-left mx-auto max-w-xs" },
              React.createElement('li', null, 'No running or jumping.'),
              React.createElement('li', null, 'Minors must always be accompanied.'),
              React.createElement('li', null, 'Do not bring glass or food.'),
              React.createElement('li', null, 'Towels available at reception.')
            )
          ),
      },
      [CardID.Wifi]: {
        title: 'Free Wi-Fi Connection',
        text: 'Network: Lupama Wifi\nPassword: lupamacalafate',
      },
      [CardID.Restaurant]: {
        title: 'Bar & Restaurant',
        text: 'In our restaurant, you will find options for coffee, snacks, signature cocktails, wines, drinks, and meals!\nDon\'t forget to make your reservation for dinner!',
        button_text: 'Bar & Restaurant Menu',
        button_link: restaurantMenuUrl,
      },
      [CardID.LunchBox]: {
        title: 'Lunch Boxes To-Go',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', { className: "mb-4 text-gray-600" },
            'All our lunch boxes include: a sandwich, water, fruit, and a snack.',
            React.createElement('br'),
            'Orders can be placed until 8:00 PM of the previous day.'
          ),
          React.createElement('div', { className: "space-y-3 my-6 text-left" },
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'SIMPLE'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$20000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'Ham and cheese')
            ),
            React.createElement('div', { className: "w-full border-b-2 border-dotted border-blue-200" }),
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'COMPLETE'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$25000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'Ham, cheese, lettuce, and tomato')
            ),
            React.createElement('div', { className: "w-full border-b-2 border-dotted border-blue-200" }),
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'VEGETARIAN'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$25000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'Cheese, egg, lettuce, and tomato')
            )
          ),
          React.createElement('p', { className: "mt-6 text-center text-gray-600 font-semibold" }, 'Ask about gluten-free options'),
          React.createElement('a', {
            href: whatsAppOrderLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-4 inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          },
            'Order via Whatsapp'
          )
        ),
      },
      [CardID.Excursions]: {
        title: 'Excursions in El Calafate',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', null, 'Discover the magic of Patagonia. We offer advice and booking for all available excursions. Get ready for an unforgettable adventure!'),
          excursionsButtons
        ),
      },
      [CardID.GiftShop]: {
        title: 'Our Gift Shop',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', null, 'Take a memory of Patagonia home with you. Visit our shop to find local crafts, souvenirs, and exclusive products. The perfect gift is waiting for you.'),
          React.createElement('a', {
            href: giftShopCatalogUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-6 inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300"
          }, 'View Catalog')
        ),
      },
    },
    contact_button: 'Talk to Reception',
    faq_section_title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is from 2:00 PM. Check-out is until 10:00 AM. If you need a later check-out, please ask at reception for availability.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash (Argentine pesos, US dollars, and Euros), debit and credit cards (Visa, MasterCard, American Express), and bank transfers.'
      },
      {
        question: 'Does the hotel have parking?',
        answer: 'Yes, we offer free parking for our guests. No prior reservation is necessary.'
      },
      {
        question: 'Can I leave my luggage after check-out?',
        answer: 'Yes, we have luggage storage at no additional cost.'
      },
      {
        question: 'Do you have an airport transfer service?',
        answer: 'Yes, you can request it at reception (with an additional charge).'
      }
    ]
  },
  [Language.PT]: {
    welcome_message: 'Bem-vindos à Hostería Lupama',
    map_section_title: 'Mapa Interativo de El Calafate',
    map_section_subtitle: 'Criamos este mapa com os pontos mais importantes da nossa cidade, além da nossa localização.',
    card_titles: {
      [CardID.Breakfast]: 'Café da Manhã',
      [CardID.Pool]: 'Piscina',
      [CardID.Wifi]: 'Wi-fi',
      [CardID.Restaurant]: 'Bar & Restaurante',
      [CardID.LunchBox]: 'Lanches para Viagem',
      [CardID.Excursions]: 'Excursões',
      [CardID.GiftShop]: 'Loja de Presentes',
    },
    modal_content: {
      [CardID.Breakfast]: {
        title: 'Café da Manhã Buffet',
        text: 'Nosso café da manhã é servido das 6:30 às 9:30. Desfrute de uma variedade de doces caseiros, frutas da estação, frios, cereais e opções quentes para começar o dia com energia antes das excursões.',
      },
      [CardID.Pool]: {
        title: 'Piscina Aquecida',
        text: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "font-semibold mb-2" }, 'Horário: das 9h às 20h'),
            React.createElement('p', { className: "font-bold mt-4 mb-2" }, 'Por favor:'),
            React.createElement('ul', { className: "list-disc list-inside text-left mx-auto max-w-xs" },
              React.createElement('li', null, 'Proibido correr ou pular.'),
              React.createElement('li', null, 'Menores sempre acompanhados.'),
              React.createElement('li', null, 'Não entrar com vidro ou comida.'),
              React.createElement('li', null, 'Toalhas disponíveis na recepção.')
            )
          ),
      },
      [CardID.Wifi]: {
        title: 'Conexão Wi-Fi Gratuita',
        text: 'Rede: Lupama Wifi\nSenha: lupamacalafate',
      },
      [CardID.Restaurant]: {
        title: 'Bar & Restaurante',
        text: 'Em nosso restaurante, você encontrará opções de cafeteria, lanches, coquetéis de assinatura, vinhos, bebidas, e refeições!\nNão se esqueça de fazer sua reserva para o jantar!',
        button_text: 'Cardápio Bar & Restaurante',
        button_link: restaurantMenuUrl,
      },
      [CardID.LunchBox]: {
        title: 'Lanches para Viagem',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', { className: "mb-4 text-gray-600" },
            'Todos os nossos lanches para viagem incluem: sanduíche, água, fruta e um snack.',
            React.createElement('br'),
            'Pedidos até as 20:00 do dia anterior.'
          ),
          React.createElement('div', { className: "space-y-3 my-6 text-left" },
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'SIMPLES'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$20000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'Presunto e queijo')
            ),
            React.createElement('div', { className: "w-full border-b-2 border-dotted border-blue-200" }),
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'COMPLETO'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$25000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'Presunto, queijo, alface e tomate')
            ),
            React.createElement('div', { className: "w-full border-b-2 border-dotted border-blue-200" }),
            React.createElement('div', null,
              React.createElement('div', { className: "flex justify-between items-baseline" },
                React.createElement('h3', { className: "text-lg font-bold uppercase", style: { color: '#8c5a2b' } }, 'VEGETARIANA'),
                React.createElement('p', { className: "text-lg font-bold text-gray-900" }, '$25000')
              ),
              React.createElement('p', { className: "text-gray-700 font-medium" }, 'Queijo, ovo, alface e tomate')
            )
          ),
          React.createElement('p', { className: "mt-6 text-center text-gray-600 font-semibold" }, 'Consulte sobre opções sem glúten'),
          React.createElement('a', {
            href: whatsAppOrderLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-4 inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          },
            'Pedir lanche pelo Whatsapp'
          )
        ),
      },
      [CardID.Excursions]: {
        title: 'Excursões em El Calafate',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', null, 'Descubra a magia da Patagônia. Oferecemos assessoria e reservas para todas as excursões disponíveis. Prepare-se para uma aventura inesquecível!'),
          excursionsButtons
        ),
      },
      [CardID.GiftShop]: {
        title: 'Nossa Loja de Presentes',
        text: React.createElement(React.Fragment, null,
          React.createElement('p', null, 'Leve uma lembrança da Patagônia com você. Visite nossa loja para encontrar artesanato local, souvenirs e produtos exclusivos. O presente perfeito está esperando por você.'),
           React.createElement('a', {
            href: giftShopCatalogUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-6 inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300"
          }, 'Ver Catálogo')
        ),
      },
    },
    contact_button: 'Falar com a Recepção',
    faq_section_title: 'Perguntas Frequentes',
    faqs: [
      {
        question: 'Quais são os horários de check-in e check-out?',
        answer: 'O check-in é a partir das 14:00. O check-out é até as 10:00. Se precisar sair mais tarde, por favor, consulte a recepção sobre a disponibilidade de um late check-out.'
      },
      {
        question: 'Quais métodos de pagamento vocês aceitam?',
        answer: 'Aceitamos dinheiro (pesos argentinos, dólares e euros), cartões de débito e crédito (Visa, MasterCard, American Express) e transferências bancárias.'
      },
      {
        question: 'O hotel tem estacionamento?',
        answer: 'Sim, oferecemos estacionamento gratuito para nossos hóspedes. Não é necessário reservar com antecedência.'
      },
      {
        question: 'Posso deixar minha bagagem após o check-out?',
        answer: 'Sim, temos um depósito de bagagem sem custo adicional.'
      },
      {
        question: 'Vocês têm serviço de transfer para o aeroporto?',
        answer: 'Sim, você pode solicitá-lo na recepção (com custo adicional).'
      }
    ]
  },
};
