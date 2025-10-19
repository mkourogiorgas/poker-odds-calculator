export type Card = {
  suit: string;
  value: string;
};

export type Hand = Card[];

export type HandAnalysis = {
  cardFrequencies: FrequencyCounter;
  areDifferent: boolean;
  isFlush: boolean;
  isStraight: boolean;
  containsAce: boolean;
  cardStrengths: number[];
};

export type FrequencyCounter = {
  [key: string]: number;
};

export type HandName =
  | 'Flush Royal'
  | 'Straight Flush'
  | 'Quads'
  | 'Full House'
  | 'Flush'
  | 'Straight'
  | 'Three of a Kind'
  | 'Two Pairs'
  | 'One Pair'
  | 'High Card';

export type Players = {
  [key: string]: Hand;
};

export type PlayerEvaluation = {
  [key: string]: HandEvaluation;
};

export type HandEvaluation = {
  name: HandName;
  value: number;
  kickers: number;
};
