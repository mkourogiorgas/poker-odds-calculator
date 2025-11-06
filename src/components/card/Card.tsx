import { memo } from 'react';

import { RemoveButton, Suit, Value } from './components';
import {
  cardBackground,
  cardHover,
  cardOpacity,
  cardSuit,
  cardSymbol,
  cardText,
  cardValueBottom,
  cardValueTop,
  container,
  medium,
  remove,
} from './styles';
import useCard from './useCard';

type CardProps = {
  suit: string;
  value: string;
  index: number;
  isSelected: boolean;
  isInTable: boolean;
  showOverlay?: boolean;
  isInteractive?: boolean;
};

const Card = ({
  suit,
  value,
  index,
  isSelected,
  isInTable,
  showOverlay = true,
  isInteractive = true,
}: CardProps) => {
  const {
    canInteract,
    handleDragStart,
    handleRemoveClick,
  } = useCard({
    index,
    isInteractive,
    isSelected,
    isInTable,
  });

  const cardId = 'card-' + index;
  const background = cardBackground(suit);
  const hover = cardHover(isInTable);
  const opacity = cardOpacity(isSelected);
  const symbol = cardSymbol(suit);
  const text = cardText(suit);
  const valueClass = `${cardValueTop}`;
  const valueBottomClass = `${cardValueBottom}`;
  const suitClass = `${cardSuit} ${symbol}`;
  const removeClass = `${remove} ${hover} ${text}`;
  const cardContainer = `${container} ${text} ${medium} ${background} ${opacity} `;

  return (
    <div
      id={cardId}
      draggable={canInteract}
      onDragStart={handleDragStart}
      className={cardContainer}
      role="button"
    >
      <Value className={valueClass} value={value} />
      <Suit className={suitClass} />
      <Value className={valueBottomClass} value={value} />
      {showOverlay && (
        <RemoveButton
          onClick={handleRemoveClick}
          className={removeClass}
        />
      )}
    </div>
  );
};

export default memo(Card);
