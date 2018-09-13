import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  // LifeCycle method
  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'React',
        category: 'React Web Design'
      },
      {
        title: 'Node',
        category: 'NPM, Yarn, Gulp, Babel, SASS'
      }
    ]})
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
