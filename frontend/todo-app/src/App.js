import React, { Component } from 'react';
import FirstComponent from './components/learning-example/FirstComponent';
import SecondComponent from './components/learning-example/SecondComponent';
import ThirdComponent from './components/learning-example/ThirdComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './App.css';
 
class App extends Component {  
  render() {
    return (
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp/>
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}


export default App;