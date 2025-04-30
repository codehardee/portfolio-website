import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Hardee Raval </span>
            from <span className="purple"> Toronto , Canada.</span>
            <br />
            I am currently looking for a job as a software developer.
            <br />
            I am pursuing Post-grad in Full Stack Software Development at Lambton
            College-Toronto. And, I have Bachelor's Degree in Computer Science.
            <br />
            <br />
           
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hardee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
