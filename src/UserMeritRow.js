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
            <td><input type="text" defaultValue={this.props.emailProp} placeholder="email" /></td>
            <td><input type="text" defaultValue={this.props.firstNameProp} placeholder="first name" /></td>
            <td><input type="text" defaultValue={this.props.lastNameProp} placeholder="last name" /></td>
            <td><select>
              <option value={this.props.meritProp[this.props.meritIdProp]} selected>{this.props.meritProp[this.props.meritIdProp]}</option>
              {this.props.meritProp.map(function(merit, i){ return <option key={i} value={merit}>{merit.title}</option> })}
              }
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
