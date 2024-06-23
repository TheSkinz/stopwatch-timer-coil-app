import React from 'react';

const ComboBox = () => (
  <select>
    {Array.from({ length: 61 }, (_, i) => (
      <option key={i} value={i}>{i}</option>
    ))}
  </select>
});

export default ComboBox;
