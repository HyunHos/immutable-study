import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.users !== this.props.users
  }
  render() {
    console.log("UserList Render!!!!")
    const { users } = this.props;
    const list = users.map((user) => (
      <User key={user.get('id')} text={user.get('text')} />
    ));

    return <div>{list}</div>;
  }
}

export default UserList;
