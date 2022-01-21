import React, { Component } from 'react';
import './style.css';
import { Map, List } from 'immutable';
import UserList from './component/UserList';

class App extends Component {
  id = 2;
  state = {
    data: Map({
      input: '',
      users: List([
        Map({
          id: '0',
          text: 'qwer',
        }),
        Map({
          id: '1',
          text: 'asdf',
        }),
      ]),
    }),
  };

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
          users.push(Map({ id: this.id++, text: data.get('input') }))
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
