import LoadingSkeleton from '../../common/LoadingSkeleton';
import C from './constants';

const RankingTableSkeleton = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-11 place-items-center bg-white p-2 rounded-lg gap-2">
      {Array.from({ length: C.RANKING_TABLE_ROWS }).map((_, index) => (
        <div key={index} className="contents">
          <LoadingSkeleton width="w-24" height={index === 0 ? 'h-6' : 'h-4'} />
          <LoadingSkeleton width="w-16" height={index === 0 ? 'h-6' : 'h-4'} />
        </div>
      ))}
    </div>
  );
};

export default RankingTableSkeleton;
