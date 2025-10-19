import { DragEvent, useState } from 'react';

import { usePokerDispatch, usePokerSelector } from '../../store/hooks';

import { updateTableAsync, validateAsync } from '../../store/asyncActions';
import { deckActions } from '../../store/deckSlice';

type UseEmptySlotProps = {
  position: string;
  slotIndex: number;
};

const useEmptySlot = ({ position, slotIndex }: UseEmptySlotProps) => {
  const deck = usePokerSelector((state) => state.deck);
  const dispatch = usePokerDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const cardIndex = +event.dataTransfer.getData('text/plain');
    const card = deck[cardIndex];
    const isSelected = true;
    dispatch(deckActions.updateDeck({ cardIndex, isSelected }));
    await dispatch(updateTableAsync({ position, slotIndex, card }));
    await dispatch(validateAsync());
  };

  const handleLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsHovered(false);
  };

  const handleOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsHovered(true);
  };

  return {
    isHovered,
    handleDrop,
    handleLeave,
    handleOver,
  };
};

export default useEmptySlot;
