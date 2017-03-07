import React from 'react';

var Character = React.createClass({
  handleChange: function(e) {
    var name = e.target.value;
    this.props.onChange(name);
  },
  render: function() {
    return (
      <div>
        <select id="characters" onChange={this.handleChange}>
          <option value="Ellen Ripley">Ellen Ripley</option>
          <option value="Private Hudson">Private Hudson</option>
          <option value="Xenomorph">Xenomorph</option>
        </select>
        <h1>Greetings, {this.props.name}</h1>
      </div>
    );
  }
});

module.exports = Character;
