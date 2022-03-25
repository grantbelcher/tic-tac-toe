import React from 'react';
import Square from './Square';

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    <Square value="1" onClick={onClick} />
    <Square value="2" onClick={onClick} />
    <Square value="3" onClick={onClick} />
    <Square value="4" onClick={onClick} />
    <Square value="5" onClick={onClick} />
    <Square value="6" onClick={onClick} />
    <Square value="7" onClick={onClick} />
    <Square value="8" onClick={onClick} />
    <Square value="9" onClick={onClick} />
  </div>
);

export default Board;