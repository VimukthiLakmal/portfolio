import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/rs.jpg";
import chatify from "../../Assets/Projects/home.png";
import bitsOfCode from "../../Assets/Projects/bus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Salon Booking website"
              description="A website to book salon services and a section to buy beauty products sold by certain salons."
              ghLink="https://github.com/VimukthiLakmal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bus Reservation Website"
              description="A website where you can track the live location of the buses and buy tickets. Buses can be booked for special tours. "
              ghLink="https://github.com/VimukthiLakmal/Bus-Reservation-Website.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Restaurants Billing System"
              description="An app to generate bill for the orders and manage the items that restaurant's have. add items, remove items, categorize items and finally it can generate the bill"
              ghLink="https://github.com/VimukthiLakmal/Restaurants-Billing-System.git"     
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
