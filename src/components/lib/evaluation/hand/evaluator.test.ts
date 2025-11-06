import { describe, expect, it } from 'vitest';

import { Card } from '../../../../types';
import { evaluateHand } from './evaluator';

const createCard = (value: string, suit: string, index: number): Card => ({
  value,
  suit,
  index,
  isSelected: false,
});

describe('Hand Evaluator', () => {
  describe('Basic Hand Recognition', () => {
    it('correctly identifies high card', () => {
      const hand: Card[] = [
        createCard('A', 'h', 0),
        createCard('K', 'd', 1),
        createCard('Q', 'c', 2),
        createCard('J', 's', 3),
        createCard('7', 'h', 4),
      ];
      const result = evaluateHand(hand);
      expect(result.name).toBe('High Card');
      expect(result.value).toBeGreaterThan(0);
    });

    it('correctly identifies one pair', () => {
      const hand: Card[] = [
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('K', 'c', 2),
        createCard('Q', 's', 3),
        createCard('J', 'h', 4),
      ];
      const result = evaluateHand(hand);
      expect(result.name).toBe('One Pair');
    });

    it('correctly identifies two pairs', () => {
      const hand: Card[] = [
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('K', 'c', 2),
        createCard('K', 's', 3),
        createCard('Q', 'h', 4),
      ];
      const result = evaluateHand(hand);
      expect(result.name).toBe('Two Pairs');
    });

    it('correctly identifies three of a kind', () => {
      const hand: Card[] = [
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('A', 'c', 2),
        createCard('K', 's', 3),
        createCard('Q', 'h', 4),
      ];
      const result = evaluateHand(hand);
      expect(result.name).toBe('Three of a Kind');
    });

    it('correctly identifies full house', () => {
      const hand: Card[] = [
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('A', 'c', 2),
        createCard('K', 's', 3),
        createCard('K', 'h', 4),
      ];
      const result = evaluateHand(hand);
      expect(result.name).toBe('Full House');
    });

    it('correctly identifies four of a kind', () => {
      const hand: Card[] = [
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('A', 'c', 2),
        createCard('A', 's', 3),
        createCard('K', 'h', 4),
      ];
      const result = evaluateHand(hand);
      expect(result.name).toBe('Quads');
    });

    it('correctly identifies flush', () => {
      const hand: Card[] = [
        createCard('A', 'h', 0),
        createCard('K', 'h', 1),
        createCard('Q', 'h', 2),
        createCard('J', 'h', 3),
        createCard('9', 'h', 4),
      ];
      const result = evaluateHand(hand);
      expect(result.name).toBe('Flush');
    });
  });

  describe('Hand Strength Comparison', () => {
    it('correctly ranks pair stronger than high card', () => {
      const highCard = evaluateHand([
        createCard('A', 'h', 0),
        createCard('K', 'd', 1),
        createCard('Q', 'c', 2),
        createCard('J', 's', 3),
        createCard('9', 'h', 4),
      ]);

      const pair = evaluateHand([
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('K', 'c', 2),
        createCard('Q', 's', 3),
        createCard('J', 'h', 4),
      ]);

      expect(pair.value).toBeGreaterThan(highCard.value);
    });

    it('correctly ranks three of a kind stronger than pair', () => {
      const pair = evaluateHand([
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('K', 'c', 2),
        createCard('Q', 's', 3),
        createCard('J', 'h', 4),
      ]);

      const trips = evaluateHand([
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('A', 'c', 2),
        createCard('K', 's', 3),
        createCard('Q', 'h', 4),
      ]);

      expect(trips.value).toBeGreaterThan(pair.value);
    });

    it('correctly ranks full house stronger than trips', () => {
      const trips = evaluateHand([
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('A', 'c', 2),
        createCard('K', 's', 3),
        createCard('Q', 'h', 4),
      ]);

      const fullHouse = evaluateHand([
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('A', 'c', 2),
        createCard('K', 's', 3),
        createCard('K', 'h', 4),
      ]);

      expect(fullHouse.value).toBeGreaterThan(trips.value);
    });

    it('correctly ranks flush stronger than high card', () => {
      const highCard = evaluateHand([
        createCard('A', 'h', 0),
        createCard('K', 'd', 1),
        createCard('Q', 'c', 2),
        createCard('J', 's', 3),
        createCard('9', 'd', 4),
      ]);

      const flush = evaluateHand([
        createCard('A', 'h', 0),
        createCard('K', 'h', 1),
        createCard('Q', 'h', 2),
        createCard('J', 'h', 3),
        createCard('9', 'h', 4),
      ]);

      expect(flush.value).toBeGreaterThan(highCard.value);
    });
  });

  describe('Kicker Scoring', () => {
    it('different kickers produce different scores for identical hand types', () => {
      const hand1 = evaluateHand([
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('K', 'c', 2),
        createCard('Q', 's', 3),
        createCard('J', 'h', 4),
      ]);

      const hand2 = evaluateHand([
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('K', 'c', 2),
        createCard('Q', 's', 3),
        createCard('9', 'h', 4),
      ]);

      // Both are one pair, so we check kickers differ
      expect(hand1.name).toBe(hand2.name);
      expect(hand1.name).toBe('One Pair');
      expect(hand1.kickers).not.toBe(hand2.kickers);
    });
  });

  describe('Hand Evaluation Completeness', () => {
    it('returns complete evaluation object', () => {
      const hand: Card[] = [
        createCard('A', 'h', 0),
        createCard('A', 'd', 1),
        createCard('K', 'c', 2),
        createCard('Q', 's', 3),
        createCard('J', 'h', 4),
      ];

      const result = evaluateHand(hand);

      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('value');
      expect(result).toHaveProperty('kickers');
      expect(typeof result.name).toBe('string');
      expect(typeof result.value).toBe('number');
      expect(typeof result.kickers).toBe('number');
    });
  });
});
