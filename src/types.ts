export type Card = {
  suit: string;
  value: string;
  index: number;
  isSelected: boolean;
  isInTable?: boolean;
};

export type Hand = Card[];

export type Players = {
  [key: string]: Hand;
};

export type FrequencyCounter = {
  [key: string]: number;
};

export type Results = {
  [key: string]: FrequencyCounter;
};

export type ValidCards = boolean[];

export type ValidationTable = {
  [key: string]: ValidCards;
};
