import React, { Component } from 'react';

class User extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.text !== this.props.text
  }

  render() {
    const {id, text, onRemove} = this.props
    console.log(`User Render! ${text}`)
    return <div  className="user"> 
      {text}
      <button onClick={() => onRemove(id)}>삭제</button>
      </div>;
  }
}

export default User;