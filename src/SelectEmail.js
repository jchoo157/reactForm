import React, { Component } from 'react';

class SelectEmail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <select onChange={this.props.selectEmailProp}>
          {this.props.emailsProp.map((email, i) => (email != this.props.currentEmailProp) ? (<option key={i} defaultValue={email}>{email}</option>) : (<option key={i} defaultValue={this.props.currentEmailProp} selected>{this.props.currentEmailProp}</option>) )}
        </select>
      </div>
    );
  }
}

export default SelectEmail;