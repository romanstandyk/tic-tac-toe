import { useMemo, useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../utils/calculateWinner';

const Game: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squares).winner || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const { winner, winningSquares } = useMemo(() => calculateWinner(squares), [squares]);

  const gameStatus = useMemo(() => {
    if (winner) {
      return `Winner: ${winner}`;
    }
    if (!squares.includes(null)) {
      return 'Draw!';
    }
    return `Your turn: ${xIsNext ? 'X' : 'O'}`;
  }, [winner, squares, xIsNext]);

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1> 
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} winningSquares={winningSquares} />
      </div>
      <div className="game-info">
        <p>{gameStatus}</p>
        <button type='button' onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  );
};

export default Game;
