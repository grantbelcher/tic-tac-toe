import React from 'react';
import styles from './App.module.css';
import Game from './components/Game';

function App() {
  return (
    <div>
      <h1 className={styles.wow}>Hello from react!!</h1>
      <Game />
    </div>
  );
}

export default App;
