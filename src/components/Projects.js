import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import resumeImg from "../assets/resume.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('first');
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "Platformer Game Pt1",
      description: "A mario remake pirate game",
      imgUrl: projImg1,
      link: "https://kofucodes.github.io/platform-game/"
    },
    {
      title: "Platformer Game Pt2",
      description: "A metroidvania game created by the foundations of Platformer Game Pt1",
      imgUrl: projImg2,
      link: "https://kofucodes.github.io/Platformer-Pt2/"
    },
    {
      title: "Ai Mario Game",
      description: "An ai that can speedrun mario",
      imgUrl: projImg3,
      link: "https://drive.google.com/file/d/1tXggMtuai-V_WBctVVhZ9_8lQxjKaezA/view?usp=sharing"
    },
    {
      title: "Codecademy",
      description: "A 5 day learning process of different coding languages",
      imgUrl: projImg4,
      link: "https://docs.google.com/presentation/d/1R5IQDJMzYV5FlrvKaCsnqSkdDxatMuDu/edit?usp=drive_link&ouid=105758099645583150650&rtpof=true&sd=true"
    },
    {
      title: "coloradio",
      description: "An ai that can detect warm and cool colors",
      imgUrl: projImg5,
      link: "https://doubtfull.github.io/Colouraudo/"
    },
  ];

  const handleTabSelect = (key) => {
    setActiveTab(key);
    setExpandedProject(null); // Close expanded project when switching tabs
  };

  const handleProjectClick = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
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

  const ExpandedProjectView = ({ project }) => {
    if (!project) return null;
  
    // Check if the project should open externally
    const openExternally = project.title === "Ai Mario Game";
  
    if (openExternally) {
      // Open in a new tab if `openExternally` is true
      window.open(project.link, '_blank', 'noopener,noreferrer');
      return null;
    }
  
    // Default embedded view for other projects
    return (
      <div 
        className="expanded-project animate__animated animate__fadeIn"
        style={{
          backgroundColor: '#151515',
          borderRadius: '15px',
          padding: '20px',
          marginTop: '40px',
          marginBottom: '20px',
          width: '100%'
        }}
      >
        <h3 style={{ color: 'white', marginBottom: '20px' }}>{project.title}</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={project.link}
            title={project.title}
            style={{
              width: '100%',
              height: '800px',
              border: 'none',
              borderRadius: '10px'
            }}
          />
        </div>
      </div>
    );
  };  

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
                    onSelect={handleTabSelect}
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
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onCardClick={() => handleProjectClick(index)}
                            />
                          ))}
                        </Row>
                        {/* Expanded project view container */}
                        {expandedProject !== null && (
                          <Row>
                            <Col size={12}>
                              <ExpandedProjectView project={projects[expandedProject]} />
                            </Col>
                          </Row>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="resume-section" style={{ textAlign: 'center' }}>
                          <h4>Click on the image to view my resume</h4>
                          <a href="https://flowcv.com/resume/06tss1f8uf" target="_blank" rel="noopener noreferrer">
                            <img
                              src={resumeImg}
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
  );
};