import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2020-06-09', requestOptions)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    ReactDOM.render(<App btc={result.bpi} />, document.getElementById('app'));
  })
  .catch((error) => console.log('error', error));
