import React, { Component } from 'react';
import { Login } from './ui/login';
import { proxy } from './model/proxy';
import { Main } from './ui/main';

export default class App extends Component {

  state = { showLogin: true };
  componentDidMount() {
    proxy.addEventListener("login", () => this.setState({ showLogin: false }));
  }
  
  render() {
    return (
      <div className="app">
        { this.state.showLogin ? <Login /> : <Main /> }
      </div>
    );
  }
}