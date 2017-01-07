import React, { Component } from 'react';

class SelectEmail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <select onChange={this.props.selectEmailProp}>
          {this.props.emailsProp.map((email, i) => <option key={i}>{email}</option>)}
        </select>
      </div>
    );
  }
}

export default SelectEmail;