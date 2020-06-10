import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      showLine: true,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      data: [{
        type: 'area',
      }],
    },
  ],
};

class Sc extends React.Component {
  constructor(props) {
    super(props);
    const { btc } = this.props;
    data.datasets[0].data = Object.values(btc);
    data.labels = Object.keys(btc);
    console.log(data);
    this.state = { data };
  }

  render() {
    return (
      <div>
        <h2> BTC </h2>
        <Line data={data} />
      </div>
    );
  }
}

export default Sc;
