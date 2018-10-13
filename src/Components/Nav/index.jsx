import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <a class="navbar-brand" href="#">Amirali Ameri</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
            
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#workexp">Work Experiences</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#accounts">My Accounts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}