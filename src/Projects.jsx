import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./Components/ProjectCard";


class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get('./src/data/projects.json').then(response => {
        this.setState({
          projects: response.data
        });
      });
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div id={"projectCards" + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
          <div className="myProjectsColumn">
            <h1 className="introHeader">My Projects</h1>
            <p>
              Please have a look around and let me know if you have any questions.
            </p>
          </div>
        
        <div className="ui stackable four column grid">{projectsList}</div>
      </div>
    );
  }
}
export default Projects;