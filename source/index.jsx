import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character.jsx';

// GREETING
var Greeting = React.createClass({
  getInitialState: function() {
    return {
      name: 'Ellen Ripley',
      quote: "'Nuke the entire site from orbit. It's the only way to be sure.'",
      pic: 'http://cdn.hercampus.com/s3fs-public/2014/02/17/9.jpg'
    }
  },
  // handleToggle: function() {
  //   var newSpecies = this.state.species == 'Ripley' ? 'Xenomorph' : 'Ripley';
  //   this.setState({ species: newSpecies });
  // },
  changeName: function(newName, newQuote, newPic) {
    this.setState({
      name: newName,
      quote: newQuote,
      pic: newPic
    });
  },
  render: function() {
    return (
      <Character onChange={this.changeName} name={this.state.name} quote={this.state.quote} pic={this.state.pic} />
    );
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('container')
);
