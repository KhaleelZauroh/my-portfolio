import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img 
                src="../Images/passportphoto.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>IBRAHIM ZAUROH</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Cyberia Crescent 1, Cyberjaya. Malaysia</p>
            <h5>Phone</h5>
            <p>(601) 133676914</p>
            <h5>Email</h5>
            <p>Ibrahimzauroh@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2015}
              endYear={2018}
              schoolName="Limkokwing University Of Creative technology"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2018}
              endYear={2020}
              schoolName="Limkokwing University Of Creative technology"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={"Current"}
              jobName="Intern FullStack Developer"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience 
              startYear={2017}
              endYear={2018}
              jobName="IT Intern"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript"      progress={60} />
            <Skills skill="Php"      progress={40} />
            <Skills skill="HTML/CSS"       progress={80} />
            <Skills skill="NodeJS"       progress={50} />
            <Skills skill="React"       progress={40} />
            <Skills skill="Laravel"      progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
