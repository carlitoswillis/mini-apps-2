import React from 'react';
import styles from '../styles.css';

const Results = (props) => (
  props.results.map((entry) => (
    <li>
      <div>
        {Object.keys(entry).map((property) => (<div className={styles.entryProperty}>{`${property}: ${entry[property]}`}</div>))}
      </div>
    </li>
  ))
);

export default Results;
