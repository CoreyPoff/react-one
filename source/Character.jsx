import React from 'react';

var Character = React.createClass({
  handleChange: function(e) {
    var name = e.target.value;
    var sel = document.getElementById('characters');
    var selected = sel.options[sel.selectedIndex];
    var quote = selected.getAttribute('data-quote');
    this.props.onChange(name, quote);
  },
  render: function() {
    return (
      <div>
        <select id="characters" onChange={this.handleChange}>
          <option value="Ellen Ripley" data-quote="'Nuke the entire site from orbit. It's the only way to be sure.'">Ellen Ripley</option>
          <option value="Private Hudson" data-quote="'That's it, man. Game over, man. Game over!'">Private Hudson</option>
          <option value="Xenomorph" data-quote="[screams and eats your face]">Xenomorph</option>
        </select>
        <h1>Greetings, {this.props.name}</h1>
        <h3>{this.props.quote}</h3>
      </div>
    );
  }
});

module.exports = Character;
