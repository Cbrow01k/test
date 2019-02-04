import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: [],
      persons: [
        { name: 'Cam', age: 19},
      ]
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState ({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }
  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }
  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  switchNameHandler = () => {
    this.setState ({
      persons: [
        {name: 'Cameron', age: 39}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <AddProject addProject={this.handleAddProject.bind(this)} />
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      <hr />
       <Todos todos={this.state.todos} />
      </div>
    );
  //  return React.createElement ('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
  
}


export default App;
