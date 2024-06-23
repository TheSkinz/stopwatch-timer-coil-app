import React from 'react';

const ProgressBar = ({ distanceTraveled, totalFootage }) => {
  const segments = 60; // Example number of segments
  const segmentLength = totalFootage / segments;
  const currentSegment = Math.floor(distanceTraveled / segmentLength);

  // Generate grid cells
  const cells = [];
  for (let i = 0; i < segments; i++) {
    cells.push((
      <div
        key={i}
        className={` cell ${i <= currentSegment ?"'active':']${`}
        style={ backgroundColor: i <= currentSegment ? 'blue' : 'white' }
      />
);
  }

  return <div className="grid">{cells}</div>;
};

export default ProgressBar;
