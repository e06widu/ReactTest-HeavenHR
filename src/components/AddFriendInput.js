import React, { Component, PropTypes } from 'react';

class AddFriendInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: this.props.value || '',
    };
  }

  render() {
    return (
      <input
        type="text"
        autoFocus="true"
        className="form-control"
        placeholder="Type the name of a friend"
        value={this.props.value}
        onChange={this.handleChange.bind(this)} />
    );
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.nameChanged(e.target.value);
  }
}

AddFriendInput.propTypes = {
  nameChanged: PropTypes.func,
};

export default AddFriendInput
