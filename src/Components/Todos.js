import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  deletetem(id){
    this.props.onDelete(id);
  }
  
  render() {
    let todos;
    if(this.props.todo){
    todos = this.props.todo.map(todo => {
        return (
          <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.title} todo={todo} />
          );
      });  
    }
    return (
      <div className="Todos">
        <h3>Latest Todos</h3>
        {todos}
      </div>
    );
  }
}


Todos.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func
}


export default Todos;