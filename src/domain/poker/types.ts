import { Hand } from '../cards/types';
export enum HandRanking {
  HIGH_CARD = 1000,
  ONE_PAIR = 2000,
  TWO_PAIRS = 3000,
  THREE_OF_A_KIND = 4000,
  STRAIGHT = 5000,
  FLUSH = 6000,
  FULL_HOUSE = 7000,
  FOUR_OF_A_KIND = 8000,
  STRAIGHT_FLUSH = 9000,
  ROYAL_FLUSH = 10000,
}

export type HandName =
  | 'High Card'
  | 'One Pair'
  | 'Two Pairs'
  | 'Three of a Kind'
  | 'Straight'
  | 'Flush'
  | 'Full House'
  | 'Four of a Kind'
  | 'Straight Flush'
  | 'Royal Flush';

export type HandEvaluation = {
  readonly name: HandName;
  readonly ranking: HandRanking;
  readonly kickerScore: number;
};

export type HandAnalysis = {
  readonly rankFrequencies: ReadonlyMap<number, number>;
  readonly suitFrequencies: ReadonlyMap<number, number>;
  readonly isAllDifferentRanks: boolean;
  readonly isFlush: boolean;
  readonly isStraight: boolean;
  readonly containsAce: boolean;
  readonly sortedRankStrengths: readonly number[];
};

export type PlayerHands = {
  readonly [playerPosition: string]: Hand;
};

export type PlayerEvaluations = {
  readonly [playerPosition: string]: HandEvaluation;
};

export type RoundResult = {
  readonly winners: readonly string[]; // Player positions that won
  readonly playerEvaluations: PlayerEvaluations;
};

export const HAND_RANKING_NAMES: ReadonlyMap<HandRanking, HandName> = new Map([
  [HandRanking.HIGH_CARD, 'High Card'],
  [HandRanking.ONE_PAIR, 'One Pair'],
  [HandRanking.TWO_PAIRS, 'Two Pairs'],
  [HandRanking.THREE_OF_A_KIND, 'Three of a Kind'],
  [HandRanking.STRAIGHT, 'Straight'],
  [HandRanking.FLUSH, 'Flush'],
  [HandRanking.FULL_HOUSE, 'Full House'],
  [HandRanking.FOUR_OF_A_KIND, 'Four of a Kind'],
  [HandRanking.STRAIGHT_FLUSH, 'Straight Flush'],
  [HandRanking.ROYAL_FLUSH, 'Royal Flush'],
]);

export const HAND_NAME_RANKINGS: ReadonlyMap<HandName, HandRanking> = new Map([
  ['High Card', HandRanking.HIGH_CARD],
  ['One Pair', HandRanking.ONE_PAIR],
  ['Two Pairs', HandRanking.TWO_PAIRS],
  ['Three of a Kind', HandRanking.THREE_OF_A_KIND],
  ['Straight', HandRanking.STRAIGHT],
  ['Flush', HandRanking.FLUSH],
  ['Full House', HandRanking.FULL_HOUSE],
  ['Four of a Kind', HandRanking.FOUR_OF_A_KIND],
  ['Straight Flush', HandRanking.STRAIGHT_FLUSH],
  ['Royal Flush', HandRanking.ROYAL_FLUSH],
]);
