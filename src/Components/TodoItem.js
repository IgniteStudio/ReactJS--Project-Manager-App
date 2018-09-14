import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

  deleteTodo(id){
    this.props.onDelete(id);
  };

  render() {
    return (
      <li className="Todo"><br />
        <strong>{this.props.todo.id}: </strong> {this.props.todo.category} <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>[X]</a>
      </li>
    );
  }
}


TodoItem.propTypes = {
  todo: PropTypes.string,
  onDelete: PropTypes.func
}
 
export default TodoItem;