/**
 * Determines the winner in a Tic-Tac-Toe game.
 *
 * @param squares - An array representing the current state of the Tic-Tac-Toe board. Each element is either:
 *  - 'X': representing a move by player X,
 *  - 'O': representing a move by player O,
 *  - null: indicating that the square is empty.
 *
 * @returns An object containing:
 *  - `winner`: A string ('X' or 'O') representing the winner of the game, or `null` if there is no winner yet.
 *  - `winningSquares`: An array of three numbers representing the indices of the squares that make up the winning combination, or `null` if there is no winner.
 */

export const calculateWinner = (squares: (string | null)[]): { winner: string | null, winningSquares: number[] | null } => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], winningSquares: winningLines[i] };
      }
    }
    return { winner: null, winningSquares: null };
};