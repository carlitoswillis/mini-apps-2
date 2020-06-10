import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App url="/events" perPage={8} />, document.getElementById('app'));
