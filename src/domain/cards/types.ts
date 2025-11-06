export enum Suit {
  CLUBS = 0,
  DIAMONDS = 1,
  HEARTS = 2,
  SPADES = 3,
}

export enum Rank {
  SIX = 0,
  SEVEN = 1,
  EIGHT = 2,
  NINE = 3,
  TEN = 4,
  JACK = 5,
  QUEEN = 6,
  KING = 7,
  ACE = 8,
}

export type Card = {
  readonly index: number;
  readonly suit: Suit;
  readonly rank: Rank;
};

export type UICard = Card & {
  readonly displayValue: string;
  readonly displaySuit: string;
  isSelected: boolean;
  isInTable?: boolean;
};

export type Hand = readonly Card[];

export type UIHand = UICard[];

export type Deck = readonly Card[];

export type UIDeck = UICard[];

export type FrequencyCounter = {
  readonly [key: string]: number;
};

export const RANK_STRENGTH: ReadonlyMap<Rank, number> = new Map([
  [Rank.SIX, 1],
  [Rank.SEVEN, 2],
  [Rank.EIGHT, 3],
  [Rank.NINE, 4],
  [Rank.TEN, 5],
  [Rank.JACK, 6],
  [Rank.QUEEN, 7],
  [Rank.KING, 8],
  [Rank.ACE, 9],
]);

export const RANK_DISPLAY: ReadonlyMap<Rank, string> = new Map([
  [Rank.SIX, '6'],
  [Rank.SEVEN, '7'],
  [Rank.EIGHT, '8'],
  [Rank.NINE, '9'],
  [Rank.TEN, '10'],
  [Rank.JACK, 'J'],
  [Rank.QUEEN, 'Q'],
  [Rank.KING, 'K'],
  [Rank.ACE, 'A'],
]);

export const SUIT_DISPLAY: ReadonlyMap<Suit, string> = new Map([
  [Suit.CLUBS, '♣'],
  [Suit.DIAMONDS, '♦'],
  [Suit.HEARTS, '♥'],
  [Suit.SPADES, '♠'],
]);

export const SUIT_NAME: ReadonlyMap<Suit, string> = new Map([
  [Suit.CLUBS, 'clubs'],
  [Suit.DIAMONDS, 'diamonds'],
  [Suit.HEARTS, 'hearts'],
  [Suit.SPADES, 'spades'],
]);
