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
              <th>Check</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Organization</th>
              <th>Date</th>
              <th>Expiration Date</th>
              <th>Identification Code</th>
            </tr>
                {this.props.rowsProp[Object.keys(this.props.rowsProp)].map((user, i) => (user.merit.type == this.props.selectedCompanyProp) ? (
                  <tr>
                    <td><input type="checkbox" onClick={this.props.selectProp} checked={user.selected} id={user.identificationCode} /></td>
                    <td><input type="text" defaultValue={user.email} placeholder="email" /></td>
                    <td><input type="text" defaultValue={user.firstName} placeholder="first name" /></td>
                    <td><input type="text" defaultValue={user.lastName} placeholder="last name" /></td>
                    <td><select onChange={this.props.chooseOrganizationProp}>
                      {
                        this.props.meritProp[user.merit.type].map((merit, i) => 
                          user.meritId == merit.id ? <option key={i} defaultValue={merit.title} selected>{merit.title}</option> : <option key={i} value={merit.title}>{merit.title}</option>
                        )
                      }
                    </select></td>

                    <td><input type="date" defaultValue={user.date} placeholder="date" /></td>
                    <td><input type="date" defaultValue={user.expirationDate} placeholder="expiration date" /></td>
                    <td><input type="text" defaultValue={user.identificationCode} placeholder="identification code" /></td>
                  </tr>) : ""
                )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserMeritRow;
