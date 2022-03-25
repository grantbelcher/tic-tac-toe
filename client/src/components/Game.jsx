import React from 'react';
import Board from './Board';

const Game = () => {
  const handleClick = (value) => {
    console.log(value);
  };

  const jumpTo = () => {};

  const renderMoves = () => {};

  return (
    <div>
      <Board onClick={handleClick} />
    </div>
  );
};

export default Game;
