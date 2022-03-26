import React from 'react';

const style = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ onClick, value, gameOver }) => {
  console.log(gameOver, 'button');
  return (
    <button style={style} onClick={() => onClick(value)} disabled={gameOver}>
      {value}
    </button>
  );
};

export default Square;
