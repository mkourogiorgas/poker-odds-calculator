import { usePokerSelector } from '../../store/hooks';

import tableSvg from '../../assets/table.svg';
import Community from '../community';
import Player from '../player';

const Table = () => {
  const tableState = usePokerSelector(
    (state) => state.table
  );

  const playerPositions = Object.keys(tableState).filter(
    (position) => position !== 'community'
  );
  const communityCards = tableState.community || [];

  return (
    <div
      className="poker-table bg-center bg-no-repeat mx-auto relative"
      style={{ backgroundImage: `url(${tableSvg})` }}
      role="main"
      aria-label="Poker table with player positions and community cards"
    >
      <div className="table-layout grid grid-cols-3 grid-rows-3 gap-10 mx-auto place-items-center w-100 h-70">
        {playerPositions.map((position) => (
          <Player
            key={position}
            hand={tableState[position]}
            position={position}
          />
        ))}

        <Community community={communityCards} />
      </div>
    </div>
  );
};

export default Table;
