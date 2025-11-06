import { useState } from 'react';

import ButtonArea from './buttonArea';
import { EquityTable, RankingTable } from './tables';

const Ranking = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className="ranking-container h-1/2 flex flex-row gap-8 m-4"
      role="region"
      aria-label="Poker odds and rankings display"
    >
      <div className="ranking-section w-1/2" aria-label="Hand rankings">
        <RankingTable isLoading={isLoading} />
      </div>
      <div className="equity-section w-1/2 flex flex-col gap-4" aria-label="Equity calculations">
        <EquityTable isLoading={isLoading} />
        <ButtonArea onLoadingChange={setIsLoading} />
      </div>
    </div>
  );
};

export default Ranking;
