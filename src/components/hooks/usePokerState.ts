import { usePokerSelector } from '../../store/hooks';

import { Hand, Players, Results, ValidationTable } from '../../types';

type PokerState = {
  deck: Hand;
  table: Players;
  validation: ValidationTable;
  results: Results;
};

const usePokerState = (): PokerState => {
  const deck = usePokerSelector((state) => state.deck);
  const table = usePokerSelector((state) => state.table);
  const validation = usePokerSelector((state) => state.validation);
  const results = usePokerSelector((state) => state.results);

  return { deck, table, validation, results };
};

export default usePokerState;
