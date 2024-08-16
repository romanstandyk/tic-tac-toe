import Square from './Square';

type BoardProps = {
  squares: (string | null)[];
  onClick: (i: number) => void;
  winningSquares: number[] | null;
};

const boardSize = 3;

const Board: React.FC<BoardProps> = ({ squares, onClick, winningSquares }) => (
  <>
    {Array.from({ length: boardSize }).map((_, rowIndex) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: it's ok in this case, array is static
      <div key={rowIndex} className="board-row">
        {Array.from({ length: boardSize }).map((_, colIndex) => {
          const squareIndex = rowIndex * boardSize + colIndex;
          return (
            <Square
              key={squareIndex}
              value={squares[squareIndex]}
              onClick={() => onClick(squareIndex)}
              isWinningSquare={winningSquares?.includes(squareIndex)}
            />
          );
        })}
      </div>
    ))}
  </>
);


export default Board;
