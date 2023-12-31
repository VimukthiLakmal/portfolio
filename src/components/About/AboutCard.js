import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vimukthi Lakmal </span>
            from  <span className="purple">  Monaragala, Sri Lanka.</span>
            <br />
            I am currently an undergraduate at the Uva Wellassa University of Sri Lanka pursuing my B.Sc. (Hons) in Industrial Information Technology.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Carrom
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
