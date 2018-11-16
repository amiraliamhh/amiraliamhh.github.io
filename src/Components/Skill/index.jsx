import React from 'react';
import { Line } from 'rc-progress';
import './style.css'

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this._projects = this._projects.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <div class="skill col-12 row pt-3 pb-3">
                    <div className="col-3">
                        <h5 class="text-dark text-center" style={{wordWrap: 'normal'}} >{this.props.skill_name}</h5>
                    </div>
                    <div className="col-7">
                        <Line percent={this.props.percent} strokeWidth="2" strokeColor="#204060" />
                    </div>
                    <div className="col-2">
                      {this.props.percent}%
                    </div>
                </div>
            </React.Fragment>
        );
    }

    _projects(projects = []) {
        return projects.map((project, index) => (
            <a key={index} href={project.link || ''}><p className="d-inline-block text-dark" >Project {index + 1}: </p> {project.name} </a>
        ))
    }
}