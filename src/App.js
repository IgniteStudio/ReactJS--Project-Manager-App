import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
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
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
