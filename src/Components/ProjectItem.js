import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  };

  render() {
    return (
      <li className="Project"><br />
        <strong>{this.props.project.id}: </strong> {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>[X]</a>
      </li>
    );
  }
}


ProjectItem.propTypes = {
  project: PropTypes.string,
  onDelete: PropTypes.func
}
 
export default ProjectItem;