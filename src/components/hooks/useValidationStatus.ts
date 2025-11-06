import { usePokerSelector } from '../../store/hooks';

type ValidationStatusProps = {
  position: string;
  slotIndex: number;
};

type ValidationStatus = {
  isValid: boolean;
};

const useValidationStatus = ({ position, slotIndex }: ValidationStatusProps): ValidationStatus => {
  const validation = usePokerSelector((state) => state.validation);
  const isValid = validation[position][slotIndex];

  return { isValid };
};

export default useValidationStatus;
