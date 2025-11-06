import { memo } from 'react';

type ButtonProps = {
  name: string;
  isDisabled: boolean;
  handleClick: () => void;
};

const Button = ({
  name,
  isDisabled,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      aria-label={name}
      className="w-full bg-[#004e61] hover:bg-[#007c7b] text-white font-bold py-2 px-4 border border-[#007c7b] rounded-lg
          disabled:bg-[#004e61]/90 disabled:text-gray-500 "
    >
      {name}
    </button>
  );
};

export default memo(Button);
