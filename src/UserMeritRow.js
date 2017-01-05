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
          <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td><input type="text" defaultValue={this.props.emailProp} placeholder="email" /></td>
            <td><input type="text" defaultValue={this.props.firstNameProp} placeholder="first name" /></td>
            <td><input type="text" defaultValue={this.props.lastNameProp} placeholder="last name" /></td>
            <td><select>
              {
                this.props.meritProp.map((merit, i) => 
                  this.props.meritIdProp == merit.id ? <option key={i} value={merit.title} selected>{merit.title}</option> : <option key={i} value={merit.title}>{merit.title}</option>
                )
              }
            </select></td>

            <td><input type="text" defaultValue={this.props.dateProp} placeholder="date" /></td>
            <td><input type="text" defaultValue={this.props.expirationDateProp} placeholder="expiration date" /></td>
            <td><input type="text" defaultValue={this.props.identificationProp} placeholder="identification code" /></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserMeritRow;
