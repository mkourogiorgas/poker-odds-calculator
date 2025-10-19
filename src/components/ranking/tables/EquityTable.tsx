import { usePokerSelector } from '../../../store/hooks';

import EquityTableSkeleton from './EquityTableSkeleton';
import U from './utils';

type EquityTableProps = {
  isLoading?: boolean;
};

const EquityTable = ({ isLoading = false }: EquityTableProps) => {
  const results = usePokerSelector((state) => state.results);
  const equityTable = U.updateEquityTable(results);
  const container = 'grid grid-cols-3 grid-rows-4 place-items-center bg-white p-2 rounded-lg';

  if (isLoading) {
    return <EquityTableSkeleton />;
  }

  return (
    <div className={container}>
      {equityTable.map((item, index) => (
        <div key={index} className={U.getEquityFontStyle(index)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default EquityTable;
