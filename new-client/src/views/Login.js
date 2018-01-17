import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
    state = { users: [] }

    componentDidMount() {
        fetch('/admin')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (

            <div className = "App" >
              <h1> Form Login </h1>
              { this.state.users.map(user =>
                <div key={user.id}>{user.username}</div>
              )}
            </div>
        );
    }
}

export default Login;
