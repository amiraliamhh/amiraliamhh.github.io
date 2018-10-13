import React from 'react';

export default class OnTheWeb extends React.Component {
    render() {
        return (
            <div className="w-100 container mt-5 mb-5">
                {/* <div className="d-block">
                    <h4>Github: <a className="d-inline-block" href="https://github.com/amiraliamhh" >https://github.com/amiraliamhh</a></h4>
                </div>
                <div className="d-block">
                    <h4>Gitlab: <a className="d-inline-block" href="https://gitlab.com/amiraliameri" >https://gitlab.com/amiraliameri</a></h4>
                </div>
                <div className="d-block">
                    <h4>Stackoverflow: <a className="d-inline-block" href="https://stackoverflow.com/users/8943897/amirali-ameri" >https://stackoverflow.com/users/8943897/amirali-ameri</a></h4>
                </div>
                <div className="d-block">
                    <h4>Linkedin: <a className="d-inline-block" href="https://www.linkedin.com/in/amiraliameri/" >https://www.linkedin.com/in/amiraliameri/</a></h4>
                </div> */}
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4>Github: <a className="d-inline-block" href="https://github.com/amiraliamhh" >https://github.com/amiraliamhh</a></h4>
                  </li>
                  <li class="list-group-item">
                    <h4>Gitlab: <a className="d-inline-block" href="https://gitlab.com/amiraliameri" >https://gitlab.com/amiraliameri</a></h4>
                  </li>
                  <li class="list-group-item">
                    <h4>Stackoverflow: <a className="d-inline-block" href="https://stackoverflow.com/users/8943897/amirali-ameri" >https://stackoverflow.com/users/8943897/amirali-ameri</a></h4>
                  </li>
                  <li class="list-group-item">
                  <h4>Linkedin: <a className="d-inline-block" href="https://www.linkedin.com/in/amiraliameri/" >https://www.linkedin.com/in/amiraliameri/</a></h4>
                  </li>
                </ul>
            </div>
        )
    }
}