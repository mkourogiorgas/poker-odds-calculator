import { usePokerSelector } from '../../store/hooks';

import Card from '../card';
import EmptyCardSlot from './EmptySlot';
import { container } from './styles';

type CardSlotProps = {
  position: string;
  slotIndex: number;
  cardIndex: number;
};

const CardSlot = ({ position, slotIndex, cardIndex }: CardSlotProps) => {
  const deck = usePokerSelector((state) => state.deck);
  const card = deck[cardIndex];

  return (
    <div className={container}>
      {card ? (
        <Card suit={card.suit} value={card.value} index={card.index} isSelected={false} isInTable />
      ) : (
        <EmptyCardSlot position={position} slotIndex={slotIndex} />
      )}
    </div>
  );
};

export default CardSlot;
