import React from 'react';

const Buttons = ({ onStart, onPause, onReset }) => (
  <div>
    <button onClick={() => onStart('BR')}>B-H Start</button>
    <button onClick={() => onStart('RB')}>R-B Start</button>
    <button onClick={onPause}>Pause</button>
    <button onClick={onReset}>Clear</button>
  </div>
);

export default Buttons;
