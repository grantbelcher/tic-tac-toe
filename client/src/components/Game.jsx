import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers/calculateWinner';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <p>{winner ? 'Winner: ' + winner : 'Next Move: ' + (xIsNext ? 'X' : 'O')}</p>
    </div>
  );
};

export default Game;
