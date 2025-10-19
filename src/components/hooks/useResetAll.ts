import { usePokerDispatch } from '../../store/hooks';

import { deckActions } from '../../store/deckSlice';
import { resultsActions } from '../../store/resultsSlice';
import { tableActions } from '../../store/tableSlice';
import { validationActions } from '../../store/validationSlice';

type ResetAllFunction = () => void;

type ResetAllHook = {
  resetAll: ResetAllFunction;
};

const useResetAll = (): ResetAllHook => {
  const dispatch = usePokerDispatch();

  const resetAll: ResetAllFunction = () => {
    dispatch(deckActions.reset());
    dispatch(tableActions.reset());
    dispatch(validationActions.reset());
    dispatch(resultsActions.reset());
  };

  return { resetAll };
};

export default useResetAll;
