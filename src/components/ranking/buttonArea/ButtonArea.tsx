import { useEffect } from 'react';

import { usePokerDispatch, usePokerSelector } from '../../../store/hooks';
import useAsyncAction from '../../hooks/useAsyncAction';
import useResetAll from '../../hooks/useResetAll';

import { resultsActions } from '../../../store/resultsSlice';
import { runPokerOdds } from '../../lib/runCalculator';
import Modal from '../../modal/Modal';
import Button from './Button';
import Error from './Error';
import U from './utils';

type ButtonAreaProps = {
  onLoadingChange?: (isLoading: boolean) => void;
};

const ButtonArea = ({ onLoadingChange }: ButtonAreaProps) => {
  const dispatch = usePokerDispatch();
  const deck = usePokerSelector((state) => state.deck);
  const table = usePokerSelector((state) => state.table);
  const validation = usePokerSelector((state) => state.validation);
  const isDisabled = U.hasEmptySlots(validation);

  const { resetAll } = useResetAll();
  const { isLoading, error, run, clearError } = useAsyncAction(() => runPokerOdds(deck, table));

  useEffect(() => {
    if (onLoadingChange) {
      onLoadingChange(isLoading);
    }
  }, [isLoading, onLoadingChange]);

  const handleReset = () => {
    resetAll();
    clearError();
  };

  const handleRun = async () => {
    const results = await run();
    if (results) {
      dispatch(resultsActions.updateResults({ results }));
    }
  };

  const isModalOpen = isLoading && !U.hasCommunityCards(table.community);

  return (
    <div className="flex flex-col gap-4 my-4">
      {error && <Error errorMessage={error} onDismiss={clearError} />}
      <div className="flex flex-row place-items-center gap-4">
        <Modal isOpen={isModalOpen} />
        <Button handleClick={handleRun} isDisabled={isDisabled || isLoading} name={'Run'} />
        <Button handleClick={handleReset} isDisabled={isLoading} name={'Reset'} />
      </div>
    </div>
  );
};

export default ButtonArea;
