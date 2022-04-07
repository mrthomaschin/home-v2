import React, { Component } from "react";
import "./CSS/sm_bar.css";

class SocialMedia extends Component {
  state = {};
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
          <div id="handles" align="center">
            <div class="container">
              <div class="row justify-content-center icon-center">
                <div class="social-media-bar">
                  <div class="row justify-content-center">
                    <div class="col-md-2">
                      <a id="email-link" href="mailto: thomasc246@gmail.com">
                        <img
                          src={require("../Assets/Images/Icons/Handles/mail.png")}
                          class="handle-icon"
                          alt="instagram"
                        />
                      </a>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="social"
                        href="https://www.linkedin.com/in/mrthomaschin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require("../Assets/Images/Icons/Handles/linkedin.png")}
                          class="handle-icon"
                          alt="linkedin"
                        />
                      </a>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="social"
                        href="https://github.com/mrthomaschin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require("../Assets/Images/Icons/Handles/github.png")}
                          class="handle-icon"
                          alt="github"
                        />
                      </a>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="social"
                        href="https://www.instagram.com/thomas__chin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require("../Assets/Images/Icons/Handles/instagram.png")}
                          class="handle-icon"
                          alt="instagram"
                        />
                      </a>
                    </div>
                    <div class="col-md-2">
                      <a
                        class="social"
                        href="https://www.facebook.com/mr.thomaschin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require("../Assets/Images/Icons/Handles/facebook.png")}
                          class="handle-icon"
                          alt="instagram"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default SocialMedia;
