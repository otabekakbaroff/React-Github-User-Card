import React from 'react';
import axios from 'axios';
import "./styles/style.css" 


class App extends React.Component {
  // constructor, super, etc, are all still built into this class, just under the hood
  state = {
    user: [],
    username: ''
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/otabekakbaroff')
      .then(res => {
        // res.data.message
        this.setState({
          user: res.data
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {

  }

  handleChanges = e => {
    this.setState({
      username: e.target.value
    });
    console.log(this.state.username);
  };

  findUser = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        // res.data.message
        this.setState({
          user: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="userCard">
        <h1>Find User</h1>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChanges}
        />
        <button onClick={this.findUser}>Find User</button>
        <div className="zxc">
          <img width="200" src={this.state.user.avatar_url} key={this.state.doggo} alt={this.state.doggo} />
          <h3>{this.state.user.name}</h3>
          <span>Github Link: </span><a href={`https://github.com/${this.state.username}`} target="_blank">click here</a>
        </div>
      </div>
    );
  }
}

export default App;
