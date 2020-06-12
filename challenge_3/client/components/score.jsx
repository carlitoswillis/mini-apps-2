import React, { useState, useEffect } from 'react';

const Score = ({ selectedOption }) => {
  const [score, setScore] = useState(0);
  const [sel, updateSel] = useState(selectedOption);
  useEffect(() => {
    setScore(Number(score) + Number(sel));
  }, [sel]);
  useEffect(() => {
    updateSel(selectedOption);
  }, [selectedOption]);
  return (
    <div>
      <h1>Score:</h1>
      <p id='scorep'>{score}</p>
    </div>
  );
};

export default Score;
