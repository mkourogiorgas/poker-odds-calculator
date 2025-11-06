import { usePokerSelector } from '../../store/hooks';

import C from './constants';
import { container, iconBase, row, text } from './styles';

const Instructions = () => {
  const deck = usePokerSelector((state) => state.deck);

  const hasSelectedCard = deck.some(
    (card) => card.isSelected
  );

  return (
    <div className={container}>
      <div className={row}>
        <span className={iconBase}>
          {hasSelectedCard ? '❌' : '✋'}
        </span>
        <p className={text}>
          {hasSelectedCard ? C.HOVER_TEXT : C.DRAG_TEXT}
        </p>
      </div>
    </div>
  );
};

export default Instructions;
