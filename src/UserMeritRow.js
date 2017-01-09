import React, { Component } from 'react';
import './App.css';

class UserMeritRow extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <div>
        <table className="alike">
          <tbody>
            <tr>
              <th></th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Merit</th>
              <th>Issue Date</th>
              <th>Expiration Date</th>
              <th>Identification Code</th>
            </tr>
            {this.props.rowsProp[Object.keys(this.props.rowsProp)].map((row, i) => (row.merit.type == this.props.selectedCompanyProp) ? (
              <tr key={i}>
                <td><input type="checkbox" onClick={this.props.selectProp} checked={row.selected} id={row.identificationCode} /></td>
                <td><input type="text" defaultValue={row.email} placeholder="email" /></td>
                <td><input type="text" defaultValue={row.firstName} placeholder="first name" /></td>
                <td><input type="text" defaultValue={row.lastName} placeholder="last name" /></td>
                <td><select onChange={this.props.updateMeritProp} id={row.identificationCode}>
                  {
                    this.props.meritProp[row.merit.type].map((merit, i) => 
                      (row.merit.id == merit.id) ? <option key={i} defaultValue={merit.title} selected>{merit.title}</option> : <option key={i} defaultValue={merit.title}>{merit.title}</option>
                    )
                  }
                </select></td>
                <td><input type="date" defaultValue={row.date} placeholder="date" /></td>
                <td><input type="date" defaultValue={row.expirationDate} placeholder="expiration date" /></td>
                <td><input type="text" defaultValue={row.identificationCode} placeholder="identification code" /></td>
              </tr>) : ""
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserMeritRow;
