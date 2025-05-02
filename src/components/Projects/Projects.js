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
import bitsOfCode from "../../Assets/Projects/project4.png";
import movieapp from "../../Assets/Projects/project5.png";
import urbannest from "../../Assets/Projects/project1.png";
import reciMe from "../../Assets/Projects/project2.png";
import airbnb from "../../Assets/Projects/project3.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="CollegeMate"
              description="A college-level freelancing platform where senior students can post projects and junior students can bid, collaborate, and build their portfolios. Built with Django (backend), React.js (frontend), and PostgreSQL (database). Features include secure authentication, dynamic project posting, bidding workflows, user profile management, and blog integration to foster a student-driven marketplace."
              ghLink="https://github.com/codehardee/college-mate"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp}
              isBlog={false}
              title="Movie App"
              description="A movie management web application that allows users to explore movies, perform full CRUD operations (Create, Read, Update, Delete), and manage a personalized favorites list. Built with React.js on the frontend and integrated with a movie API for dynamic data handling. Features include intuitive UI, seamless API interaction, adding and removing movies from favorites, and efficient state management, making it a practical project for mastering React development fundamentals."
              ghLink="https://github.com/codehardee/movie-app"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urbannest}
              isBlog={false}
              title="Urban Nest"
              description="Urban Nest is a fully functional e-commerce platform developed as part of the CSD2103 course project. Built with JavaScript, HTML, CSS, and Bootstrap, the application features a dynamic shopping experience with a persistent cart powered by local storage, category-based product filtering, real-time search functionality, and session-based authentication for secure user management. It showcases essential e-commerce workflows, including product browsing, cart management, and user login, making it a robust project for demonstrating front-end development skills." 
              ghLink="https://github.com/codehardee/urban-nest"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reciMe}
              isBlog={false}
              title="ReciMe"
              description="ReciMe is a collaborative recipe-sharing platform developed as part of the CSD4523 course project. Built with Django, HTML, CSS, Bootstrap, JavaScript, jQuery, and AJAX, the application enables users to browse a wide variety of step-by-step recipes, create and share their own culinary creations, and engage with the community through likes, bookmarks, and reviews. A unique “Chef Mode” highlights expert-contributed content, making ReciMe more than just a recipe site—it’s an interactive hub for cooking enthusiasts. The project uses SQLite3 for data management and showcases both backend and frontend integration."
              ghLink="https://github.com/codehardee/recime-project"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="AirBnb Replica"
              description="An Airbnb-inspired web application built with Node.js, Express.js, MongoDB, and EJS templates. The project features backend APIs that fetch and serve data from an Airbnb dataset, along with a dynamic frontend built using EJS for rendering listings. It includes core functionalities such as basic pagination for smooth browsing, seamless API integration, and data-driven page rendering, making it a solid full-stack project that demonstrates RESTful API design, database interaction, and server-side templating." 
              ghLink="https://github.com/codehardee/airbnb-replica"
              demoLink=""
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
