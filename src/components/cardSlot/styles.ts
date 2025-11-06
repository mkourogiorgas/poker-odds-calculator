const container = 'w-9.75 h-13 m-0.5 border-[#21617F] rounded-sm';

const emptySlotImg = 'min-w-9 rounded-sm';

const greenBorder = 'border-2 border-green-500';

const redBorder = 'border-2 border-red-500';

const defaultBorder = 'border-2 border-[#21617F]';

const setBorderStyles = (isHovered: boolean, isValid: boolean) =>
  isHovered ? greenBorder : !isValid ? redBorder : defaultBorder;

export { container, emptySlotImg, setBorderStyles };
