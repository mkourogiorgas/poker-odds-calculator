import { Results } from '../../../types';
import C from './constants';

const getEquityFontStyle = (index: number): string => {
  const fontColor = C.EQUITY_TABLE_FONT_COLOR;
  const fontSize = C.EQUITY_TABLE_FONT_SIZE;
  const isHeader = index <= C.EQUITY_TABLE_HEADER_END_INDEX;
  const isFooter = index > C.EQUITY_TABLE_FOOTER_START_INDEX;
  const size = isHeader ? fontSize[index] : 'text-xs';
  const color = fontColor[index % fontColor.length];
  const span = isFooter ? 'col-span-3' : 'col-span-1';

  return `${size} ${color} ${span} text-center font-sans font-medium`;
};

const getRankingFontStyle = (index: number, isValue: boolean): string => {
  const fontColor = isValue ? C.TEXT_COLOR.HERO : C.TEXT_COLOR.BLACK;
  const fontSize = index > 0 ? C.FONT_SIZE.SMALL : C.FONT_SIZE.XLARGE;

  return `${fontColor} ${fontSize} text-center font-sans font-medium`;
};

const getPercentage = (value: number, totalValue: number): string => {
  return totalValue ? ((value / totalValue) * 100).toFixed(2) + '%' : '0%';
};

const updateEquityTable = ({ hero, villain, rounds: { total } }: Results) => {
  const updatedTable = C.EQUITY_TABLE.slice();
  if (!total) {
    return updatedTable;
  }

  return [
    ...C.EQUITY_TABLE.slice(0, 3),
    getPercentage(hero.wins, total),
    C.EQUITY_TABLE[4],
    getPercentage(villain.wins, total),
    getPercentage(hero.ties, total),
    C.EQUITY_TABLE[7],
    getPercentage(villain.ties, total),
    `Total community combinations: ${total}`,
  ];
};

const updateRankingTable = (results: Results) => {
  const {
    ranking,
    rounds: { total },
  } = results;
  const rankingTable = { ...C.RANKING_TABLE };
  if (!total) {
    return rankingTable;
  }
  Object.keys(ranking).forEach((key) => {
    rankingTable[key] = getPercentage(ranking[key], total);
  });
  return rankingTable;
};

export default { getEquityFontStyle, getRankingFontStyle, updateEquityTable, updateRankingTable };
