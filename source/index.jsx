import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character.jsx';

// GREETING
// var Greeting = React.createClass({
//   getInitialState: function() {
//     return {
//       name: 'Ellen Ripley',
//       quote: '\'Nuke the entire site from orbit. It\'s the only way to be sure.\'',
//       pic: 'http://cdn.hercampus.com/s3fs-public/2014/02/17/9.jpg'
//     }
//   },
//   // handleToggle: function() {
//   //   var newSpecies = this.state.species == 'Ripley' ? 'Xenomorph' : 'Ripley';
//   //   this.setState({ species: newSpecies });
//   // },
//   changeName: function(newName, newQuote, newPic) {
//     this.setState({
//       name: newName,
//       quote: newQuote,
//       pic: newPic
//     });
//   },
//   render: function() {
//     return (
//       <Character onChange={this.changeName} name={this.state.name} quote={this.state.quote} pic={this.state.pic} />
//     );
//   }
// });
// TODO ITEMS
var TodoItems = React.createClass({
  render: function() {
    var todoEntries = this.props.entries;
    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }
    var listItems = todoEntries.map(createTasks);
    return (
      <ul className="theList">
        {listItems}
      </ul>
    )
  }
});

// TODO
var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    }
  },
  addItem: function(e) {
    var itemArray = this.state.items;
    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );
    this.setState({
      items: itemArray
    });
    this._inputElement.value = "";
    e.preventDefault();
  },
  render: function() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter Task"></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  document.getElementById('container')
);
