import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VisibleTodoList from './countainers/VisibleTodoList'
import AddTodo from './countainers/AddTodo'
import Filter from './components/Filter'
//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <AppBar
          title="TODO List"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div>
          <AddTodo/>
          <VisibleTodoList />
          <Filter/>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
