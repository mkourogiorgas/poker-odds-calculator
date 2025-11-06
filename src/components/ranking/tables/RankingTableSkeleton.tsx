import { Fragment } from 'react';

import LoadingSkeleton from '../../common/LoadingSkeleton';
import C from './constants';
import U from './utils';

const RankingTableSkeleton = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-11 place-items-center bg-white p-2 rounded-lg">
      {Object.keys(C.RANKING_TABLE).map((key, index) => (
        <Fragment key={key}>
          <div className={U.getRankingFontStyle(index, false)}>{key}</div>
          <LoadingSkeleton width="w-16" height={index === 0 ? 'h-6' : 'h-4'} />
        </Fragment>
      ))}
    </div>
  );
};

export default RankingTableSkeleton;
