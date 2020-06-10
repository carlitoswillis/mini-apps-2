import React from 'react';
import Sc from './scatter';

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
      <Sc btc={btc} />
    );
  }
}

export default App;
