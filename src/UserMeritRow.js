import React, { Component } from 'react';
import './App.css';

class UserMeritRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.addRow = this.addRow.bind(this);
  };

  addRow() {
    var addRow = this.props.dataProp
    var myArray = this.state.data;
    myArray.push("hi");
    this.setState({data: myArray});
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td><input type="checkbox" /></td>
            <td><input type="text" placeholder="email" /></td>
            <td><input type="text" placeholder="first name" /></td>
            <td><input type="text" placeholder="last name" /></td>
            <td><select>
              <option value="first commit">First Commit</option>
              <option value="100 commits">100 Commits</option>
              <option value="1000 commites">1000 Commits</option>
            </select></td>

            <td><input type="text" placeholder="date" /></td>
            <td><input type="text" placeholder="expiration date" /></td>
            <td><input type="text" placeholder="identification code" /></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default UserMeritRow;
