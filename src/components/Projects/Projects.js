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
import codePilot from "../../Assets/Projects/project6.png";

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
              description="Developed and maintained backend REST APIs using Express.js to manage rewards, merchants, and user operations. I also wrote unit and integration tests with Jest and Supertest to ensure robust API functionality and handle edge cases effectively. On the frontend, I identified and fixed critical bugs in an AngularJS application, which significantly improved its stability and cross-browser compatibility. Throughout the development process, I actively collaborated in agile sprints to deliver full-stack features across both backend services and UI components."
            />
          </Col>

          <Col md={10} className="experience-card">
            <ExperienceCard
              company="Elixir Techne"
              position="Backend Developer (Python | AWS | DjangoREST)"
              description="Worked on “Money Circle,” a collaborative savings platform built with a Django REST backend. As part of the project, I implemented serverless AWS Lambda functions integrated with API Gateway and S3 for efficient and scalable operations. I handled testing and monitoring using Postman and AWS CloudWatch to ensure system reliability. Development tasks were carried out using the AWS Cloud9 IDE, and I collaborated with the team using Git in a structured workflow." />
          </Col>

          <Col md={10} className="experience-card">
            <ExperienceCard
              company="Codepoets Pvt. Ltd."
              position="Web Designer"
              description="Designed and developed responsive websites using WordPress, Shopify, and custom HTML/CSS, delivering tailored solutions for a variety of businesses. To enhance user experience and align with client branding, I created UI/UX mockups in Figma that translated effectively across digital platforms. Additionally, I contributed to production-level React.js applications by identifying and resolving bugs, conducting manual testing, and ensuring smooth integration between frontend components and backend services."/>
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
              imgPath={codePilot}
              isBlog={false}
              title="CodePilot"
              description="Built a coding platform using sockets and AI-powered code generation to assist with real-time programming support. Integrated Google’s generative AI API to interpret user prompts and return structured code responses. Enabled a terminal-like environment with real-time chat using Socket.IO between frontend and backend. Implemented a code file tree UI and JSON-based data handling for an organized and user-friendly developer experience. Deployed frontend on Vercel and backend on Render for rapid prototyping and scalable hosting."
              ghLink="https://github.com/codehardee/ai-collab-frontend"
              demoLink=""
              liveLink="https://ai-collab-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CollegeMate"
              description="A college-level freelancing platform where senior students can post projects and junior students can bid, collaborate, and build their portfolios. Built with Django (backend), React.js (frontend), and PostgreSQL (database). Features include secure authentication, dynamic project posting, bidding workflows, user profile management, and blog integration to foster a student-driven marketplace."
              ghLink="https://github.com/codehardee/college-mate"
              demoLink=""
              liveLink="https://college-mate-fe.vercel.app/"
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
              liveLink="https://movie-app-u7zm.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={null}
              isBlog={false}
              title="Business Data ETL Pipeline"
              description="Designed a fully automated ETL pipeline to collect and enrich store data across Canada. Built custom Scrapy spiders to extract business names, locations, and categories. Used OpenStreetMap and low-cost API services to derive coordinates and location metadata. Integrated AI APIs to fetch missing store websites and brand logos based on business names. Transformed data using Pandas and exported the final report as an Excel file. Optimized the pipeline to eliminate reliance on costly services like Google Maps API."
              ghLink="https://github.com/codehardee/BusinessData_Pipeline"
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
