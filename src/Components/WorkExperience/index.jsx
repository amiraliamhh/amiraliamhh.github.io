import React from 'react';

export default class WorkExperience extends React.Component {
    constructor(props) {
        super(props);

        this._techsUsed = this._techsUsed.bind(this);
    }

    render() {
        return (
            <div class="card">
              <h5 class="card-header">{this.props.company} (<a style={{fontSize: '.9rem'}} href={this.props.compSite}>{this.props.compSite}</a>)</h5>
              <div class="card-body">
                <h5 class="card-title">Role: {this.props.role}</h5>
                <p class="card-text">{this.props.from} - {this.props.until}</p>
                <h6>Technologies:</h6>
                <ul>
                    {this._techsUsed(this.props.techs)}
                </ul>
              </div>
            </div>
        );
    }

    _techsUsed(techs = []) {
        return techs.map((tech, index) => (
            <li key={index} >{tech}</li>
        ))
    }
}