import React, { Component } from 'react';
import App from './App.js';

class MeritOptions extends Component {
  render() {
    return (
      <div>
        <select onChange={this.props.chooseOrganizationProp}>
          {this.props.companyMeritsProp.map((company, i) => <option key={i} defaultValue={company}>{company}</option>)}
        </select>
      </div>
    );
  }
}

export default MeritOptions;