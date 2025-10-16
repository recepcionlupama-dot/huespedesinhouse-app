// FIX: Import the React namespace to resolve types like React.FC.
import type * as React from 'react';

export enum Language {
  ES = 'es',
  EN = 'en',
  PT = 'pt',
}

export enum CardID {
  Breakfast = 'breakfast',
  Pool = 'pool',
  Wifi = 'wifi',
  Restaurant = 'restaurant',
  LunchBox = 'lunchBox',
  Excursions = 'excursions',
  GiftShop = 'giftShop',
}

export enum CardType {
    Image = 'image',
    Icon = 'icon'
}

export interface CardInfo {
  id: CardID;
  type: CardType;
  content: string | React.FC<{ className?: string }>;
}

export interface ModalContent {
    title: string;
    // FIX: Use React.ReactNode which is now available via the namespace import.
    text: React.ReactNode;
    button_text?: string;
    button_link?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Translations {
  welcome_message: string;
  map_section_title: string;
  map_section_subtitle: string;
  card_titles: Record<CardID, string>;
  modal_content: Record<CardID, ModalContent>;
  contact_button: string;
  faq_section_title: string;
  faqs: FaqItem[];
}