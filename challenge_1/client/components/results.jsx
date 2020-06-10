import React from 'react';

const Results = (props) => (
  props.results.map((entry) => (
    <li className="entryPropertiesLi">
      <div className="entryProperties">
        {Object.keys(entry).map((property) => (<div>{`${property}: ${entry[property]}`}</div>))}
      </div>
    </li>
  ))
);

export default Results;
