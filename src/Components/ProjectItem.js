import React, { Component } from 'react';


class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
    //console.log('test');
  }
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        <button onClick={this.deleteProject.bind(this, this.props.project.id)}>x</button>
      </li>
    );
  }
}

//ProjectItem.propTypes = {
  //project: React.PropTypes.object,
  //onDelete: React.PropTypes.func
//}

export default ProjectItem;