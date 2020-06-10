import React from 'react';
import Ln from './line';

class App extends React.Component {
  constructor(props) {
    super(props);
    let { btc } = this.props;
    // btc = Object.keys(btc).map((date, idx) => ({ x: new Date(date), y: btc[date] }));
    this.state = { btc };
  }

  componentDidMount() {
  }

  render() {
    const { btc } = this.state;
    return (
      <Ln btc={btc} />
    );
  }
}

export default App;
