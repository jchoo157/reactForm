import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial value...'
    }

    this.updateInput = this.updateInput.bind(this);
  };

  updateInput(e) {
    this.setState({data: e.target.value});
  }

  render() {
    return (
      <div>
        <Content currentInputProp={this.state.data} updateInputProp={this.updateInput} />
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.currentInputProp} onChange={this.props.updateInputProp} />
        <h1>{this.props.currentInputProp}</h1>
      </div>
    );
  }
}

export default Input;