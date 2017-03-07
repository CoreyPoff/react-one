import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character.jsx';

// GREETING
var Greeting = React.createClass({
  getInitialState: function() {
    return {
      name: 'Ellen Ripley',
      quote: "'Nuke the entire site from orbit. It's the only way to be sure.'"
    }
  },
  // handleToggle: function() {
  //   var newSpecies = this.state.species == 'Ripley' ? 'Xenomorph' : 'Ripley';
  //   this.setState({ species: newSpecies });
  // },
  changeName: function(newName, newQuote) {
    this.setState({
      name: newName,
      quote: newQuote
    });
  },
  render: function() {
    return (
      <Character onChange={this.changeName} name={this.state.name} quote={this.state.quote} />
    );
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('container')
);
