import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const styles = require('./styles.css');
console.log('huh', styles.paginate);

ReactDOM.render(<App url="/events" perPage={20} />, document.getElementById('app'));
