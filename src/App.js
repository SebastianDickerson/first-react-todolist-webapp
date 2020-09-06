import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Layout/Header';
import Todos from './Components/Todos/Todos';
import AddTodo from './Components/Todos/AddTood';
import About from './Components/Pages/About';
//import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';


class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }


  //Toggle complete
  
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

    ;
  }

  //Add todo
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ 
        todos: [...this.state.todos, res.data] 
      }));
  }
 

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <hr/>
                <Todos todos={ this.state.todos } markComplete={this.markComplete} 
                delTodo={this.delTodo}/>
              </React.Fragment>
            )} /> 
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
      
    );
  }
  
}

export default App;

