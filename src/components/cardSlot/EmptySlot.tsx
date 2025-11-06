import { usePokerSelector } from '../../store/hooks';

import cardSlot from '../../assets/cardSlot.png';
import { emptySlotImg, setBorderStyles } from './styles';
import useEmptySlot from './useEmptySlot';

type EmptySlotProps = {
  position: string;
  slotIndex: number;
};

const EmptySlot = ({ position, slotIndex }: EmptySlotProps) => {
  const validation = usePokerSelector((state) => state.validation);
  const { isHovered, handleDrop, handleLeave, handleOver } = useEmptySlot({
    position,
    slotIndex,
  });

  const isValid = validation[position][slotIndex];
  const border = setBorderStyles(isHovered, isValid);
  const emptySlotClass = `${border} ${emptySlotImg}`;

  return (
    <div onDrop={handleDrop} onDragLeave={handleLeave} onDragOver={handleOver}>
      <img className={emptySlotClass} src={cardSlot} alt="EmptyCardSlot" />
    </div>
  );
};

export default EmptySlot;
