import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


class AddTodo extends Component {
  constructor(){
      super();
      this.state = {
          newTodo:{}
      }
  }
  
  
    static defaultProps = {
      categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
      if(this.refs.title.value === ''){
        alert('Title is required');
      } else {
        this.setState({newItem:{
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, function(){
            //console.log(this.state);
            this.props.addTodo(this.state.newTodo);
        });
      }
      e.preventDefault();
  }
  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value={category}>{category}</option>
      });
    return (
      <div>
        <h3>Add Todos</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br />
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <br />
            <input type="submit" value="Submit" />
            <br />
        </form>
      </div>
    );
  }
}



AddTodo.propTypes = {
    categories: PropTypes.array,
    addTodo: PropTypes.func
}

export default AddTodo;