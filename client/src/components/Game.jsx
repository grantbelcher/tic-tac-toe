import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers/calculateWinner';

const styles = {
  width: '200px',
  margin: '30px auto'
};

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

  const resetBoard = () => (
    <button
      onClick={() => {
        setBoard(Array(9).fill(null));
        setXisNext(true);
      }}>
      Reset Game
    </button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>{winner ? 'Winner: ' + winner : 'Next Move: ' + (xIsNext ? 'X' : 'O')}</p>
        {resetBoard()}
      </div>
    </>
  );
};

export default Game;
