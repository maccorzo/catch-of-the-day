import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = fish => {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add a new fish
    fishes[`fish-${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({
      fishes,
    });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  addToOrder = key => {
    const order = { ...this.state.order };

    if (order[key]) {
      order[key] += 1;
    } else {
      order[key] = 1;
    }

    this.setState({
      order,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
