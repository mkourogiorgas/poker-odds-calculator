import { Fragment } from 'react';

import { usePokerSelector } from '../../../store/hooks';

import RankingTableSkeleton from './RankingTableSkeleton';
import U from './utils';

type RankingTableProps = {
  isLoading: boolean;
};

const RankingTable = ({ isLoading }: RankingTableProps) => {
  const results = usePokerSelector((state) => state.results);
  const rankingTable = U.updateRankingTable(results);
  const container = 'grid grid-cols-2 grid-rows-11 place-items-center bg-white p-2 rounded-lg';

  if (isLoading) {
    return <RankingTableSkeleton />;
  }

  return (
    <div className={container}>
      {Object.keys(rankingTable).map((key, index) => (
        <Fragment key={key}>
          <div className={U.getRankingFontStyle(index, false)}>{key}</div>
          <div className={U.getRankingFontStyle(index, true)}>{rankingTable[key]}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default RankingTable;
