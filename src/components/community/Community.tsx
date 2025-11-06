import { memo, useMemo } from 'react';

import { Hand } from '../../types';
import CardSlot from '../cardSlot';

type CommunityProps = {
  community: Hand;
};

const Community = ({ community }: CommunityProps) => {
  const renderedSlots = useMemo(
    () =>
      community.map((card, index) => (
        <CardSlot
          key={'community-card-' + index}
          position="community"
          slotIndex={index}
          cardIndex={card.index}
        />
      )),
    [community]
  );

  return (
    <div
      className={
        'community-cards flex gap-2 m-2 [grid-area:2_/_1_/_span_1_/_span_3]'
      }
    >
      {renderedSlots}
    </div>
  );
};

export default memo(Community);
