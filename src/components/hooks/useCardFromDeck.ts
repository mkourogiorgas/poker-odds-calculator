import { usePokerSelector } from '../../store/hooks';

import { Card } from '../../types';

type CardFromDeckProps = {
  cardIndex: number;
};

type CardFromDeck = {
  card: Card | undefined;
};

const useCardFromDeck = ({ cardIndex }: CardFromDeckProps): CardFromDeck => {
  const deck = usePokerSelector((state) => state.deck);
  const card = deck.find((card) => card.index === cardIndex);

  return { card };
};

export default useCardFromDeck;
