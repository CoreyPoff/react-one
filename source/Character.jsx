import React from 'react';

var Character = React.createClass({
  handleChange: function(e) {
    var name = e.target.value;
    var sel = document.getElementById('characters');
    var selected = sel.options[sel.selectedIndex];
    var quote = selected.getAttribute('data-quote');
    var pic = selected.getAttribute('data-pic');
    this.props.onChange(name, quote, pic);
  },
  render: function() {
    return (
      <div>
        <div>
          <img src={this.props.pic} />
        </div>
        <h1>Greetings, {this.props.name}</h1>
        <h3>{this.props.quote}</h3>
        <select id="characters" onChange={this.handleChange}>
          <option value="Ellen Ripley" data-quote="'Nuke the entire site from orbit. It's the only way to be sure.'" data-pic="http://cdn.hercampus.com/s3fs-public/2014/02/17/9.jpg">Ellen Ripley</option>
          <option value="Private Hudson" data-quote="'That's it, man. Game over, man. Game over!'" data-pic="http://vignette3.wikia.nocookie.net/avp/images/d/df/Hudson.jpg/revision/latest?cb=20100110192758">Private Hudson</option>
          <option value="Xenomorph" data-quote="[screams and eats your face]" data-pic="http://vignette2.wikia.nocookie.net/alienfilm/images/c/c4/Xenomorph_Alien.jpg/revision/latest?cb=20130605012640">Xenomorph</option>
        </select>
      </div>
    );
  }
});



module.exports = Character;
