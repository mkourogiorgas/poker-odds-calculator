import { DragEvent } from 'react';

import { usePokerDispatch } from '../../store/hooks';

import { removeCardAsync, validateAsync } from '../../store/asyncActions';
import { deckActions } from '../../store/deckSlice';

type UseCardProps = {
  index: number;
  isInteractive: boolean;
  isSelected: boolean;
  isInTable: boolean;
};

const useCard = ({ index, isInteractive, isSelected, isInTable }: UseCardProps) => {
  const dispatch = usePokerDispatch();

  const canInteract = isInteractive && !isSelected && !isInTable;

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', index.toString());
  };

  const handleRemoveClick = async () => {
    dispatch(deckActions.updateDeck({ cardIndex: index, isSelected: false }));
    await dispatch(removeCardAsync({ cardIndex: index }));
    await dispatch(validateAsync());
  };

  return {
    canInteract,
    handleDragStart,
    handleRemoveClick,
  };
};

export default useCard;
