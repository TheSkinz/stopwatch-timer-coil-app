import React from 'react';

const InputFields = ({ setPipeID, setFlowRate, setTotalFootage }) => (
  <div>
    <input type="number" placeholder="Pipe ID (inhes)" onChange={(e) => setPipeID(e.target.value) } />
    <input type="number" placeholder="Flow Rate (GPM)" onChange={(e) => setFlowRate(e.target.value) } />
    <input type="number" placeholder="Total Footage" onChange={(e) => setTotalFootage(e.target.value) } />
  </div>
});

export default InputFields;
