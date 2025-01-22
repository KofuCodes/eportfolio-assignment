import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import DFDImg1 from "../assets/img/Level0.drawio.png"
import DFDImg2 from "../assets/img/level1dfd.drawio.png"
import DFDImg3 from "../assets/img/Level2.drawio.png"
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
      description: "Learn how to create a 2D game with player movement, collision detection, physics, level design, and basic AI.",
      imgUrl: projImg1,
      link: "https://kofucodes.github.io/platform-game/",
      downloadLink: "https://drive.google.com/file/d/1EPmXd2DSOZcXy4ozh2wONS55mBU-gzRE/view?usp=sharing" // Add your download link
    },
    {
      title: "Platformer Game Pt2",
      description: "Learn how to design interconnected levels, implement character progression with abilities like double-jumping or wall climbing.",
      imgUrl: projImg2,
      link: "https://kofucodes.github.io/Platformer-Pt2/",
      downloadLink: "https://drive.google.com/file/d/1roQ6PbveR0kVQRvj7GWpLlZ3kk192HaS/view?usp=sharing" // Add your download link
    },
    {
      title: "Ai Mario Game",
      description: "Learn how to train reinforcement learning models to play games using Proximal Policy Optimization (PPO) and OpenAI Gym.",
      imgUrl: projImg3,
      link: "https://drive.google.com/file/d/1tXggMtuai-V_WBctVVhZ9_8lQxjKaezA/view?usp=sharing",
      downloadLink: "https://example.com/ai-mario-download" // Add your download link
    },
    {
      title: "Codecademy",
      description: "A 5-day learning process of different coding languages.",
      imgUrl: projImg4,
      link: "https://docs.google.com/presentation/d/1R5IQDJMzYV5FlrvKaCsnqSkdDxatMuDu/edit?usp=drive_link&ouid=105758099645583150650&rtpof=true&sd=true",
      downloadLink: "https://docs.google.com/presentation/d/1R5IQDJMzYV5FlrvKaCsnqSkdDxatMuDu/edit?usp=sharing&ouid=105758099645583150650&rtpof=true&sd=true" // Add your download link
    },
    {
      title: "coloradio",
      description: "Integrate external APIs to analyze color data and categorize colors into warm or cool tones. (click on download link to use camera feature)",
      imgUrl: projImg5,
      link: "https://doubtfull.github.io/Colouraudo/",
      downloadLink: "https://doubtfull.github.io/Colouraudo/" // Add your download link
    },
    {
      title: "Unity Classroom Simulation",
      description: "3D simulation of the computer science classroom, rebuilt in unity. Disclaimer! Game takes very long to load but it works. For prrof run Cuisine Rush as its not as asset heavy and loads much faster!",
      imgUrl: projImg6,
      link: "https://kofucodes.github.io/WebGL-Cs-Classroom---Copy/",
      downloadLink: "https://drive.google.com/file/d/1AoCcxuevdn5C3jhEeg-oVx8TP8ZHOwq8/view?usp=sharing" // Add your download link
    },
    {
      title: "Unity Cuisine Rush",
      description: "The objective is to cook and serve as many recipes as possible within a fixed time limit. ​You must manage your time wisely and act fast since you need to be performing various culinary tasks such as cutting ingredients, cooking meat, and plating dishes. Press E when you're ready to start recieving orders and get to cooking!",
      imgUrl: projImg7,
      link: "https://kofucodes.github.io/WebGL-Cuisine-Rush/",
      downloadLink: "https://drive.google.com/file/d/1vFkzabsYYHTEUMmT6dQbVYIxetOvoLV4/view?usp=sharing" // Add your download link
    },
    {
      title: "Careers with AI",
      description: "Powwepoint presentation about the job Cyber Security Analyst highlighting important aspects such as responsibilities, skills and qualifications, salary range and employment outlook, AI impact, and pros and cons.",
      imgUrl: projImg8,
      link: "https://docs.google.com/presentation/d/1qUQhy2sRuABa7g3fqg5SZ7Mlj46yINHWmozNWxYl3os/edit?usp=sharing",
      downloadLink: "https://docs.google.com/presentation/d/1qUQhy2sRuABa7g3fqg5SZ7Mlj46yINHWmozNWxYl3os/edit?usp=sharing" // Add your download link
    },
    {
      title: "DFD Charts",
      description: "A visual representation of the process to create the mario game and apply AI to it using PPO and GYM AI.",
      imgUrl: projImg9,
      images: [DFDImg1, DFDImg2, DFDImg3],
      downloadLink: "https://drive.google.com/drive/folders/1PU33CRLkOhKsQYeuIFK6BX0wtAqLrX18?usp=sharing" // Add your download link
    },
  ];

  const handleTabSelect = (key) => {
    setActiveTab(key);
    setExpandedProject(null); // Close expanded project when switching tabs
  };

  const handleProjectClick = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  
    // Delay to ensure the expanded view is rendered
    setTimeout(() => {
      const projectElement = document.getElementById(
        `project-${projects[index].title.replace(/\s+/g, '-').toLowerCase()}`
      );
      if (projectElement) {
        const top = projectElement.getBoundingClientRect().top + window.pageYOffset;
        const duration = 1000; // Scrolling duration in milliseconds
        const start = window.pageYOffset;
        const distance = top - start;
        let startTime = null;
  
        const scroll = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutQuad(timeElapsed, start, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(scroll);
        };
  
        const easeInOutQuad = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };
  
        requestAnimationFrame(scroll);
      }
    }, 100);
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
  
    // Check if the project should open externally (for links like Google Drive)
    const openExternally = project.title === "Ai Mario Game";
  
    if (openExternally) {
      // Open in a new tab if `openExternally` is true
      window.open(project.link, '_blank', 'noopener,noreferrer');
      return null;
    }
  
    // Check if the project is "DFD Charts" and display images
    const isDfdCharts = project.title === "DFD Charts";
  
    return (
      <div 
        className="expanded-project animate__animated animate__fadeIn"
        id={`project-${project.title.replace(/\s+/g, '-').toLowerCase()}`} // Unique ID for smooth scroll
        style={{
          backgroundColor: '#151515',
          borderRadius: '15px',
          padding: '20px',
          marginTop: '40px',
          marginBottom: '20px',
          width: '100%',
        }}
      >
        <h3 style={{ color: 'white', marginBottom: '20px' }}>{project.title}</h3>
        <p style={{ color: 'white', marginBottom: '20px' }}>{project.description}</p>
  
        {isDfdCharts ? (
          // Render images for DFD Charts
          <div className="project-images">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  marginBottom: '20px',
                  borderRadius: '10px',
                  display: 'block',
                }}
              />
            ))}
          </div>
        ) : (
          // Default embedded view for other projects
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={project.link}
              title={project.title}
              style={{
                width: '100%',
                height: '800px',
                border: 'none',
                borderRadius: '10px',
              }}
            />
          </div>
        )}
  
        <div className="download-button" style={{ marginTop: '20px' }}>
          <Button 
            variant="primary" 
            href={project.downloadLink} 
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Project
          </Button>
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
                      <Nav.Item style={{ flex: 1, textAlign: 'center' }}>
                        <Nav.Link eventKey="first" style={{ padding: '10px 20px', fontSize: '16px' }}>Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ flex: 1, textAlign: 'center' }}>
                        <Nav.Link eventKey="third" style={{ padding: '10px 20px', fontSize: '16px' }}>Resume</Nav.Link>
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
