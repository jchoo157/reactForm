import React, { Component } from 'react';
import './App.css';

class UserMeritRow extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><input type="checkbox" onClick={this.props.selectProp} checked={this.props.selectedProp} id={this.props.identificationProp} /></td>
              <td><input type="text" defaultValue={this.props.emailProp} placeholder="email" /></td>
              <td><input type="text" defaultValue={this.props.firstNameProp} placeholder="first name" /></td>
              <td><input type="text" defaultValue={this.props.lastNameProp} placeholder="last name" /></td>
              <td><select onChange={this.props.chooseOrganizationProp}>
                {
                  this.props.meritProp.map((merit, i) => 
                    this.props.meritIdProp == merit.id ? <option key={i} defaultValue={merit.title} selected>{merit.title}</option> : <option key={i} value={merit.title}>{merit.title}</option>
                  )
                }
              </select></td>

              <td><input type="text" defaultValue={this.props.dateProp} placeholder="date" /></td>
              <td><input type="text" defaultValue={this.props.expirationDateProp} placeholder="expiration date" /></td>
              <td><input type="text" defaultValue={this.props.identificationProp} placeholder="identification code" /></td>
              <td><button >Remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserMeritRow;
