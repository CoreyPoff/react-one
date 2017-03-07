import React from 'react';
import ReactDOM from 'react-dom';

var Greeting = React.createClass({
  getInitialState: function() {
    return { species: 'Ripley' }
  },
  toggleSpecies: function() {
    var newSpecies = this.state.species == 'Ripley' ? 'Xenomorph' : 'Ripley';
    this.setState({ species: newSpecies });
  },
  render: function() {
    return (
      <div>
        <p>Greetings, {this.state.species}!</p>
        <button onClick={this.toggleSpecies}>Toggle Character</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('container')
);
