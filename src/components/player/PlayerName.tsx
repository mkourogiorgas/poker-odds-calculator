import C from './constants';

type PlayerNameProps = {
  position: string;
};

const PlayerName = ({ position }: PlayerNameProps) => (
  <p className="text-ts text-white text-center font-sans font-medium">{C.PLAYER_NAME[position]}</p>
);

export default PlayerName;
