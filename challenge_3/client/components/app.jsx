import React, { useState } from 'react';

const App = () => {
  const [pins, setPins] = useState(1);
  return (
    <button type="button" onClick={() => { setPins(pins + 1); }}>
      {pins}
    </button>
  );
};

export default App;
