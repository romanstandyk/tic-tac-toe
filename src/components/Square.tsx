type SquareProps = {
  value: string | null;
  onClick: () => void;
  isWinningSquare?: boolean;
};

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => (
  <button
    type='button'
    className={`square ${isWinningSquare ? 'winning-square' : ''} ${
      value ? 'jump' : ''
    }`}
    onClick={onClick}
  >
    {value}
  </button>
);


export default Square;
