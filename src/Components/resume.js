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
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '250px'}}
              />
            </div>

            <h2 style={{ paddingTop: "2em", textAlign: "center" }}>Ibrahim Zauroh </h2>
            <h4 style={{ color: "grey", textAlign: "center"  }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%", textAlign: "center"  }} />
            <h5>
            My Objective is To Obtain A Position At A Respected Organization And 
            Utilize The Educational Qualifications I Have Obtained 
            Through The Years, Enhance My Skills In Network Security 
            And Website/Mobile Programming and work as a team player 
            in a positive Atmosphere In Order To Bring My Strong Sense 
            Of Dedication, Motivation, And Responsibility To The Company.
            </h5>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <h5>Address</h5>
            <h6>Cyberia Crescent 1, Cyberjaya. Malaysia</h6>
            <h5>Phone</h5>
            <h6>(+601) 133676914</h6>
            <h5>Email</h5>
            <h6>Ibrahimzauroh@gmail.com</h6>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />

              <ul>
            <h6> <li>Possess good analytical and problem solving skills, Critical thinking and able to Analyse, develop, troubleshoot, and ensure projectperformance.</li></h6>
            <h6> <li>Ability to work well with others as a team and also work independently and be resourceful to manage complex situations.</li></h6>
            <h6> <li>Knowledge in computer hardware maintenance/Troubleshooting in general and networking.</li></h6>
            <h6> <li>Open to learning new things and creating relationships with customers</li></h6>
            <h6> <li>Fluent in English both written and oral communication With Excellent communication skills and Ability to motivate others.</li></h6>
             </ul>
                       </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2020}
              schoolName="Limkokwing University Of Creative technology"
              Degree="Msc Computer Networking"
              schoolDescription="Worked On Various Computer Networking Sections And Hands on Practical on Windows System and Networking Protocols"
            />

            <Education
              startYear={2015}
              endYear={2018}
              schoolName="Limkokwing University Of Creative technology"
              Degree="Bsc Information Communication Technology"
              schoolDescription="Worked in multiple Group projects in various fields such as Database Design, web programming and Interactive multimedia.
               Team Project work in Software project management and business communications skills with ethics and professional conduct in companies. 
               Developed and maintained individualized websites and Database on web programming."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={"Current"}
              jobName="Intern FullStack Developer"
              jobDescription="Developer involved in various Web projects, Creative Production Along with Platform Maintenance and Updates."
            />

            <Experience 
              startYear={2017}
              endYear={2018}
              jobName="IT Intern"
              jobDescription="Project lead into research topics and problems finding and their solutions, we accomplished public awareness and website development."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Front End"      progress={80} />
            <Skills skill="Back End"      progress={40} />
            <Skills skill="Javascript"      progress={60} />
            <Skills skill="Php"             progress={40} />
            <Skills skill="HTML/CSS"        progress={80} />
            <Skills skill="ReactJS"         progress={60} />
            <Skills skill="Laravel"         progress={50} />
            <Skills skill="NodeJs"         progress={40} />
            <Skills skill="SQL"         progress={30} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
