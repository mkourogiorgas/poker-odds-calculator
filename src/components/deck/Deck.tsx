import { useMemo } from 'react';

import { usePokerSelector } from '../../store/hooks';

import Card from '../card';

const Deck = () => {
  const deck = usePokerSelector((state) => state.deck);
  const container =
    'deck-container grid grid-cols-4 grid-rows-9 gap-2 mx-auto p-5 bg-white rounded-lg shadow-lg';

  const renderedDeckCards = useMemo(
    () =>
      deck.map((card) => (
        <Card
          key={'deck-card-' + card.index}
          suit={card.suit}
          value={card.value}
          index={card.index}
          isSelected={card.isSelected}
          isInTable={false}
          isInteractive={true}
        />
      )),
    [deck]
  );

  return <div className={container}>{renderedDeckCards}</div>;
};

export default Deck;
