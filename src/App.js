import React, { Component } from 'react';
import UserMeritRow from './UserMeritRow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        rows: [],
        sigmaMerits: [
          { id: "x", title: "1000 Commits" },
          { id: "y", title: "100 Commits" },
          { id: "z", title: "First Commit" }
        ]
      }
    }

    this.addRow = this.addRow.bind(this);
  };

    addRow() {
    var row = <UserMeritRow />
    var myArray = this.state.data.rows;
    myArray.push(row);
    this.setState({data: {rows: myArray}});
  }


  render() {
    return (
      <div>
        <button onClick={this.addRow}>ADD</button>
        {this.state.data.rows.map(function(input, index) { return input })}
      </div>
    );
  }
}

export default App;