import React, { useState } from 'react';
import Score from './score';

// https://stackoverflow.com/questions/44786669/warning-use-the-defaultvalue-or-value-props-on-select-instead-of-setting
const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div>
      <Score id="score" selectedOption={selectedOption} />
      <select
        id="selector"
        defaultValue="DEFAULT"
        value={selectedOption}
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedOption(e.target.value);
        }}
      >
        <option disabled value="DEFAULT"> -- select number of pins -- </option>
        {options.map((o) => (
          <option value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="App">
        <Dropdown options={new Array(10).fill(0).map((x, idx) => idx + 1)} />
      </div>
    </div>
  );
};

export default App;
