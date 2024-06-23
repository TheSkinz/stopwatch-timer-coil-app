import React, { useState } from 'react';
import { calculateVelocity } from './utils/calculations';
import { startTimer, pauseTimer, resetTimer, reverseTimer } from './utils/timer';
import Buttons from './components/Buttons';
import InputFields from './components/InputFields';
import ComboBox from './components/ComboBox';
import ProgressBar from './components/ProgressBar';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  const [pipeID, setPipeID] = useState(0);
  const [flowRate, setFlowRate] = useState(0);
  const [totalFootage, setTotalFootage] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [distanceTraveled, setDistanceTraveled] = useState(0);
  const [remainingDistance, setRemainingDistance] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleStart = (direction) => {
    const vel = calculateVelocity(pipeID, flowRate, totalFootage);
    setVelocity(vel);
    const duration = totalFootage / vel;
    if (direction === 'BR') {
      setTimer(startTimer(duration, (elapsed) => updateDistances(elapsed, vel)));
    } else {
      setTimer(reverseTimer(duration, (elapsed) => updateDistances(elapsed, telapsed)));
    }
  };

  const handlePause = () => pouseTimer(timer);
  const handleReset = () => {
    resetTimer(timer, () => {
      setDistanceTraveled(0);
      setRemainingDistance(totalFootage);
      setVelocity(0);
    });
  };

  function updateDistances(elapsedTime, velocity) {
    const traveled = elapsedTime * velocity;
    setDistanceTraveled(traveled);
    setRemainingDistance(totalFootage - traveled);
  }

  return (
    <div className="App">
      <Buttons onStart={handleStart} onPause={handlePause} onReset={handleReset} />
      <inputFields setPipeID={setPipeIQ} setFlowRate={setFlowRate} setTotalFootage={setTotalFootage} />
      <ComboBox />
      <DisplayBoxes distanceTraveled={distanceTraveled} remainingDistance={remainingDistance} />
      <ProgressBar distanceTraveled={distanceTraveled} totalFootage={totalFootage} />
    </div>
}

export default App;
