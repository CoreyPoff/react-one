import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character.jsx';

// GREETING
var Greeting = React.createClass({
  getInitialState: function() {
    return {
      name: 'Ellen Ripley'
    }
  },
  // handleToggle: function() {
  //   var newSpecies = this.state.species == 'Ripley' ? 'Xenomorph' : 'Ripley';
  //   this.setState({ species: newSpecies });
  // },
  changeName: function(newName) {
    this.setState({
      name: newName
    });
  },
  render: function() {
    return (
      <Character onChange={this.changeName} name={this.state.name} />
    );
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('container')
);
