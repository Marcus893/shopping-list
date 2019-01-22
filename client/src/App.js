import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
