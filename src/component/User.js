import React, { Component } from 'react';

class User extends Component {
  render() {
    const {text} = this.props
    console.log(`User Render! ${text}`)
    return <div>{text}</div>;
  }
}

export default User;
