import React, { Component } from 'react';
import UserList from './component/UserList';
import { Map, List, Record } from 'immutable';
import './style.css';

// User 를 위한 Record 생성
const User = Record({
  id: null,
  text:null
});
 
// Data 를 위한 Record 생성
const Data = Record({
  input: '',
  users: List()
})

class App extends Component {
  id = 3;
  state = {
    data : Data({
      users:List([
        User({
          id:1,
          text:'velopert'
        }),
        User({
          id: 2, 
          text:'hhkim'
        })
      ])
    })
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;

    this.setState({
      data: data.set('input', value),
    });
  };

  handleClick = () => {
    const { data } = this.state;

    this.setState({
      data: data
        .set('input', '')
        .update('users', (users) =>
          users.push(new User({ id: this.id++, text: data.get('input') }))
        ),
    });
  };
 

  handleKeydown = (e) => {
    e.key === 'Enter' && this.handleClick(e);
  };

  handleRemove = (id) => {
    const { data } = this.state;
    const nextUsers = data.get('users').filter((user) => user.get('id') !== id)
    
    this.setState({
      data : data.update('users', (users) => nextUsers)
    })
  }

  render() {
    const { data } = this.state;
    const users = data.get('users');
    const { handleChange, handleClick, handleKeydown, handleRemove} = this;

    return (
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={data.get('input')}
          onKeyDown={handleKeydown}
        />
        <button onClick={handleClick}>추가</button>
        <UserList users={users} onRemove={handleRemove}/>
      </div>
    );
  }
}

export default App;
