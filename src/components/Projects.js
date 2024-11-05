import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

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
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A collection of projects completed for my Computer Science class.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
