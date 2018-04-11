import React, { Component } from 'react';
import './App.css';

import NewToDo from './NewToDo';
import InProgressToDo from './InProgressToDo';
import CompletedToDo from './CompletedToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
          #JustDoIT
        </p>
        <form id='add-task' onSubmit={this.handleAdd.bind(this)}>
          <input type='submit' value='Add Task'/>
        </form>
              <NewToDo/>
              <InProgressToDo/>
              <CompletedToDo/>
      </div>
    );
  }

  handleAdd(){
    
  }
}

export default App;
