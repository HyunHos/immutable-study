import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.users !== this.props.users
  }
  render( ) {
    console.log("UserList Render!!!!")
    const { users, onRemove } = this.props;
    debugger
    const list = users.map((user) => (
      <User id={user.id} text={user.text} onRemove={onRemove} />
    ));

    return <div>{list}</div>;
  }
}

export default UserList;
