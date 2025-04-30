import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ExperienceCard from "./ExperienceCard"; 
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      {/* Experience section starts from here */}
      <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the companies I've worked with.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col md={10} className="experience-card">
            <ExperienceCard
              company="RewardsX"
              position="Full Stack Software developer Intern (MEAN Stack)"
              description="At RewardsX, I worked on developing and optimizing backend APIs for a merchant application, leveraging Express.js within the MEAN stack. My role involved integrating reward mapping systems to link credit card benefits with merchant rewards, while also contributing to frontend improvements and bug fixes using AngularJS. I also led the development of the 'Brine Merchant Tool' by designing data aggregation pipelines using Python and various APIs, aimed at building a comprehensive merchant and store chain database across Canada without relying on standard commercial APIs."
            />
          </Col>

          <Col md={10} className="experience-card">
            <ExperienceCard
              company="Elixir Techne"
              position="Backend Developer (Python | AWS | DjangoREST)"
              description="Contributed to the 'Money Circle' project, a group-based savings and investment platform. Built scalable serverless backend services with AWS Lambda and Django REST APIs, integrated API Gateway and S3 storage solutions, and conducted thorough testing using Postman and CloudWatch. Focused on cloud-native development with AWS Cloud9 and Git for collaboration and deployment."
             />
          </Col>

          <Col md={10} className="experience-card">
            <ExperienceCard
              company="Codepoets Pvt. Ltd."
              position="Web Designer"
              description="Created pixel-perfect Figma designs based on client-provided documentation for software companies, enabling frontend developers to build seamless interfaces. Delivered custom WordPress, Shopify, and Wix websites for a diverse range of Indian businesses, spanning both single-page and multi-page architectures. Led full-stack web deployment including hosting, database management, and optimization. Designed visually engaging marketing templates and digital assets using Canva, elevating clients’ branding across campaigns and online platforms."
                />
          </Col>
          </Row>
          {/* Experience Section Ends here */}
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
              title="Devin AI Developer"
              description="Devin AI – Built an AI-powered real-time chat application using the MERN stack, integrated with Google Gemini AI to function as a personalized developer capable of creating web applications. Implemented WebSockets for seamless real-time communication and Redis for performance optimization."
              ghLink="https://github.com/heetraval26/Ai-developer"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CollegeMate"
              description="A college-level freelancing platform where senior students can post projects and junior students can bid, collaborate, and build their portfolios. Built with Django (backend), React.js (frontend), and PostgreSQL (database). Features include secure authentication, dynamic project posting, bidding workflows, user profile management, and blog integration to foster a student-driven marketplace."
              ghLink="https://github.com/heetraval26/spring-ai-project"
              demoLink=""
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
