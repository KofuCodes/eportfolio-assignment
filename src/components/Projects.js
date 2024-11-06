import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import resumeImg from "../assets/resume.png";  // Add your resume image path here
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [activeTab, setActiveTab] = React.useState('first');

  const projects = [
    {
      title: "Platformer Game Pt1",
      description: "",
      imgUrl: projImg1,
      link: "https://drive.google.com/file/d/1EPmXd2DSOZcXy4ozh2wONS55mBU-gzRE/view?usp=drive_link"
    },
    {
      title: "Platformer Game Pt2",
      description: "",
      imgUrl: projImg2,
      link: "https://drive.google.com/file/d/1roQ6PbveR0kVQRvj7GWpLlZ3kk192HaS/view?usp=drive_link"
    },
    {
      title: "Ai Mario Game",
      description: "",
      imgUrl: projImg3,
      link: "https://drive.google.com/file/d/1tXggMtuai-V_WBctVVhZ9_8lQxjKaezA/view?usp=drive_link"
    },
    {
      title: "Codecademy",
      description: "",
      imgUrl: projImg4,
      link: "https://docs.google.com/presentation/d/1R5IQDJMzYV5FlrvKaCsnqSkdDxatMuDu/edit?usp=drive_link&ouid=105758099645583150650&rtpof=true&sd=true"
    },
    {
      title: "coloradio",
      description: "",
      imgUrl: projImg5,
      link: "https://docs.google.com/presentation/d/1R5IQDJMzYV5FlrvKaCsnqSkdDxatMuDu/edit?usp=drive_link&ouid=105758099645583150650&rtpof=true&sd=true"
    },
  ];

  const handleTabSelect = (key) => {
    setActiveTab(key);
  };

  const getHeaderContent = () => {
    switch (activeTab) {
      case 'first':
        return { title: 'Projects', description: 'A collection of projects completed for my Computer Science class.' };
      case 'second':
        return { title: 'Experience', description: 'Here is some of my experience.' };
      case 'third':
        return { title: 'Resume', description: 'Click on the image below to view my resume.' };
      default:
        return { title: 'Projects', description: 'A collection of projects completed for my Computer Science class.' };
    }
  };

  const { title, description } = getHeaderContent();

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                    onSelect={handleTabSelect} // Update state on tab switch
                  >
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Resume</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="resume-section" style={{ textAlign: 'center' }}>
                          <h4>Click on the image to view my resume</h4>
                          {/* Updated the href to use the relative path from public folder */}
                          <a href="/assets/Ethan-Tran-Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <img
                              src={resumeImg} // This is the image of your resume
                              alt="My Resume"
                              style={{
                                width: '100%',
                                maxWidth: '400px',
                                cursor: 'pointer',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                              }}
                            />
                          </a>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
};
