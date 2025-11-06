import { memo } from 'react';

import { Hand } from '../../types';
import CardSlot from '../cardSlot';
import PlayerName from './PlayerName';

type PlayerProps = {
  hand: Hand;
  position: string;
};

const Player = ({ hand, position }: PlayerProps) => {
  const isActivePlayer = hand.some(
    (card) => card.index !== -1
  );

  return (
    <div
      className={`player-container flex-col ${
        isActivePlayer ? 'active' : 'inactive'
      }`}
    >
      <div className="player-cards flex flex-row m-2 gap-1">
        {hand.map((card, index) => (
          <CardSlot
            key={position + '-card-' + index}
            position={position}
            slotIndex={index}
            cardIndex={card.index}
          />
        ))}
      </div>
      <PlayerName position={position} />
    </div>
  );
};

export default memo(Player);
