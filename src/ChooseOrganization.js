import React, { Component } from 'react';
import App from './App.js';

class ChooseOrganization extends Component {
  render() {
    return (
      <div>
        <select onChange={this.props.chooseOrganizationProp}>
          {this.props.companyMeritsProp.map((company, i) => (company != this.props.currentOrganizationProp) ? (<option key={i} defaultValue={company}>{company}</option>) : (<option key={i} defaultValue={this.props.currentOrganizationProp} selected>{this.props.currentOrganizationProp}</option>))}
        </select>
      </div>
    );
  }
}

export default ChooseOrganization;