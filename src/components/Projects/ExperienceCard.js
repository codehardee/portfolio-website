import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <Card.Title><strong>{props.company}</strong></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.position}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
