import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends React.Component {
  constructor() {
    super();
    this.listItem = [
      "Dung dep trai",
      "Dung nha giau",
      "Dung hoc gioi"
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.listItem.map((item, index) => <TodoItem key={index} title={item}/>)}
        </header>
      </div>
    );
  }

}

export default App;
