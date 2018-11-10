import React from 'react';

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this._projects = this._projects.bind(this);
    }

    render() {
        return (
            <div class="card col-2">
              <img class="card-img-top" height="200rem" src={this.props.skill_image_url} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-center">{this.props.skill_name}</h5>
                {/* <p class="card-text">{this.props.projects_with_this_skill}</p> */}
                {/* {this._projects(this.props.projects)} */}
              </div>
            </div>
        );
    }

    _projects(projects = []) {
        return projects.map((project, index) => (
            <a key={index} href={project.link || ''}><p className="d-inline-block text-dark" >Project {index + 1}: </p> {project.name} </a>
        ))
    }
}