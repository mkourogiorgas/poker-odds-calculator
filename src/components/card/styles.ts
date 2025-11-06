type SuitToColor = Record<string, string>;

const cardSuit = 'text-md text-center';
const cardValue = 'text-[10px] sm:text-[8px]';
const cardValueTop = 'text-left';
const cardValueBottom = 'rotate-180';
const container =
  'group relative flex flex-col px-0.5 border-2 border-white text-white rounded-sm skew-x-0';
const interactive = 'cursor-pointer hover:scale-105';
const medium = 'w-9.75 h-13 text-xs sm:text-xs';
const nonInteractive = 'cursor-default';
const remove =
  'hidden absolute inset-0 items-center justify-center bg-black/70 text-lg cursor-pointer rounded-sm';
const removeVisible = 'flex flex-col';

const suitBackgroundColor: SuitToColor = {
  hearts: 'bg-[#731C16]',
  spades: 'bg-[#393939]',
  clubs: 'bg-[#007c7b]',
  diamonds: 'bg-[#004e61]',
};

const suitSymbol: SuitToColor = {
  hearts: "after:content-['♥']",
  spades: "after:content-['♠']",
  clubs: "after:content-['♣']",
  diamonds: "after:content-['♦']",
};

const suitTextColor: SuitToColor = {
  hearts: 'text-red-600',
  spades: 'text-white',
  clubs: 'text-green-500',
  diamonds: 'text-[#009ef6]',
};

const state = {
  hover: 'group-hover:flex group-hover:flex-col',
  selected: 'opacity-30',
  available: 'opacity-100',
};

const cardBackground = (suit: string) =>
  suitBackgroundColor[suit] || suitBackgroundColor.spades;
const cardHover = (isInTable?: boolean) =>
  isInTable ? state.hover : '';
const cardOpacity = (isSelected: boolean) =>
  isSelected ? state.selected : state.available;
const cardSymbol = (suit: string) =>
  suitSymbol[suit] || suitSymbol.spades;
const cardText = (suit: string) =>
  suitTextColor[suit] || suitTextColor.spades;

export {
  cardBackground,
  cardHover,
  cardOpacity,
  cardSuit,
  cardSymbol,
  cardText,
  cardValue,
  cardValueBottom,
  cardValueTop,
  container,
  interactive,
  medium,
  nonInteractive,
  remove,
  removeVisible,
};
