import React, { Component } from "react";
import NavBarDark from "../Components/navbar_dark.jsx";
import SocialMedia from "../Components/sm_bar.jsx";
import json from "../Data/projects.json";
import { Modal } from "react-bootstrap";
// import { Slide } from "react-slideshow-image";
import "./CSS/projects.css";

// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   pauseOnHover: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   }
// };

class Projects extends Component {
  state = {};

  projectSelect(element) {
    var tools = [];
    for (var x = 0; x < element.length; x++) {
      if (element[x] === "c++") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-c++-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "c#") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-c-sharp-logo-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "arduino") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-arduino-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "bootstrap") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-bootstrap-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "html") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-html-5-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "css") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-css3-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "javascript") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-javascript-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "reactjs") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-react-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "firebase") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-firebase-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "restapi") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-rest-api-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "mongodb") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-mongodb-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "nodejs") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-node-js-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "aws") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-amazon-web-services-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "raspberrypi") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-raspberry-pi-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "wii") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-wii-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "atmega") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/mchp.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "travis") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-travis-ci-480.png")}
            alt="pic"
          />
        );
      } else if (element[x] === "python") {
        tools.push(
          <img
            class="tools-img"
            src={require("../Assets/Images/Icons/Skills/icons8-python-480.png")}
            alt="pic"
          />
        );
      }
    }
    return tools;
  }

  showModal = this.showModal.bind(this);
  hideModal = this.hideModal.bind(this);

  showModal(e, index) {
    this.setState({ activeModal: index });
  }

  hideModal() {
    this.setState({ activeModal: null });
  }

  render() {
    return (
      <div>
        <head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />

          {/* Open Graph Meta Tags */}
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </head>
        <body>
          {/* NavBar */}
          <NavBarDark />
          {/* Projects Page */}
          <div id="projects-page">
            <div id="projects-title">
              <div class="row justify-content-center">
                <div>Projects</div>
              </div>
            </div>
            {/* Main Page */}
            <div id="projects-main">
              {json.Projects.map((project, index) => (
                <div>
                  <div id={project.section} />
                  <div class="projects-box">
                    <div class="row">
                      <div class="col-7">
                        <div class="proj-img-center">
                          <img
                            class="proj-img shadow-lg"
                            src={require("../Assets/Images/project_img" +
                              project.imgURL)}
                            alt="pic"
                          />
                        </div>
                      </div>
                      <div class="col-5 project-content">
                        <div class="row proj-title spacing-default justify-content-center">
                          {project.title}
                        </div>
                        <div class="row proj-date spacing-default justify-content-center">
                          {project.date}
                        </div>
                        <div class="row spacing-default justify-content-center">
                          {this.projectSelect(project.tools)}
                        </div>
                        <div class="row proj-brief justify-content-center">
                          {project.descriptionbrief}
                        </div>
                        <div class="row justify-content-center">
                          <div
                            class="btn-dark"
                            onClick={(e) => this.showModal(e, index)}
                          >
                            <div class="btn-dark-txt">Learn More</div>
                          </div>
                        </div>
                        <div class="row justify-content-center">
                          <a
                            class="btn-light nav-link btn-link"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github/Website
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="whitespace" />
                  </div>
                  {/* Modal template */}
                  <Modal
                    size="lg"
                    show={this.state.activeModal === index}
                    onHide={this.hideModal}
                  >
                    <Modal.Header>
                      <Modal.Title class="modal-title">
                        {project.title}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body class="modal-body">
                      <p> {project.descriptionmain1} </p>
                      <p> {project.descriptionmain2} </p>
                      <p> {project.descriptiontools} </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <button class="btn modal-btn" onClick={this.hideModal}>
                        Close
                      </button>
                    </Modal.Footer>
                  </Modal>
                </div>
              ))}
            </div>
          </div>
          {/* Social Media Bar */}
          <SocialMedia />
        </body>
      </div>
    );
  }
}

export default Projects;
