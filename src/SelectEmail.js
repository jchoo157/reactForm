import React, { Component } from 'react';

class SelectEmail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <select>
          {this.props.emailsProp.map((email, i) => <option>{email}</option>)}
        </select>
      </div>
    );
  }
}

export default SelectEmail;