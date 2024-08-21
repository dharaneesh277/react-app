import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateNumber = (newNum) => {
    if (newNum >= 0 && newNum <= 150) {
      const newHistory = history.slice(0, currentIndex + 1);
      setHistory([...newHistory, newNum]);
      setCurrentIndex(currentIndex + 1);
      setNum(newNum);
    }
  };

  const increment = () => {
    updateNumber(num + 1);
  };

  const decrement = () => {
    updateNumber(num - 1);
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNum(history[currentIndex - 1]);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setNum(history[currentIndex + 1]);
    }
  };

  return (
    <div className="App">
      <h1>Number Progress App</h1>
      <div className="buttons">
        <button onClick={decrement} disabled={num <= 0}>-1</button>
        <span>{num}</span>
        <button onClick={increment} disabled={num >= 150}>+1</button>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(num / 150) * 100}%` }}
        ></div>
      </div>
      <div className="history-buttons">
        <button onClick={undo} disabled={currentIndex === 0}>Undo</button>
        <button onClick={redo} disabled={currentIndex === history.length - 1}>Redo</button>
      </div>
    </div>
  );
}

export default App;
