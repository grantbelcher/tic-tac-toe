import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers/calculateWinner';

const styles = {
  hidden: {
    display: 'none'
  }
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState(null);
  console.log(winner !== null, 'winner');
  const handleClick = (value) => {
    // copy state for manipulation
    const boardCopy = [...board];
    // if x is next, set the value of clicked square equal to X
    if (xIsNext) {
      // update board to reflect move
      boardCopy[value] = 'X';
      // Check if x wins
      if (calculateWinner(boardCopy) === 'X') {
        // show move
        setBoard(boardCopy);
        setWinner('X');
        // end game
      } else {
        setBoard(boardCopy);
        setXisNext(false);
      }
    } else {
      // if x is not next, set the value of clicked square equal to O
      boardCopy[value] = 'O';
      // check if O wins
      if (calculateWinner(boardCopy) === 'O') {
        // show move
        setBoard(boardCopy);
        // end game
        setWinner('O');
      } else {
        // update board to reflect move
        setBoard(boardCopy);
        // set X to move next
        setXisNext(true);
      }
      // update board to reflect move
      setBoard(boardCopy);
      // set X to move next
      setXisNext(true);
    }
  };

  return (
    <div>
      <Board squares={board} onClick={handleClick} gameOver={winner !== null} />
      <h3 style={winner ? null : styles.hidden}>{winner} wins the game!</h3>
    </div>
  );
};

export default Game;
