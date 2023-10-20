import React from "react";
import { Box } from "@mui/material";
import TextBlock from "../components/TextBlock";
import arctic15 from "../images/arctic15.png";
import BlockHeader from "../components/BlockHeader";
import BlockSubHeader from "../components/BlockSubHeader";
import CallForAction from "../components/CallForAction";
import theme from "../theme";

const greenBackground = {
  backgroundColor: theme.palette.primary.main,
  padding: "30px",
};

const AboutMe = () => {
  return (
    <Box sx={{ marginTop: "60px" }}>
      <BlockHeader text="About me" />
      <TextBlock
        text="As a seasoned product leader, I have a unique perspective on building
        products that are both technically sound and user-friendly. I am
        passionate about understanding user behavior and creating an optimized
        experience that eases pain points and brings joy. At the same time, I
        bring a data-driven approach to building products, using data and
        analytics to gain insights into user behavior and make informed
        decisions that drive growth."
        text2="I currently live in Gothenburg Sweden, and in my ideal role I would work
        fully remote. I am well used to work remotely with colleagues in
        different time zones. I work mostly asynchronous in order to account for
        time differences and use multiple tools to empower my team members. I
        focus on detailed and comprehensive documentation to make processes faster and allow the team to be independent."
        image={arctic15}
      />
      <Box sx={greenBackground}>
        <BlockSubHeader text="Background" />
        <TextBlock
          text="I have a PhD in geophysics and 3D modelling from the Sorbonnes University in Paris.
        During and after my studies, I have worked tremendously with geospatial
        data as a data scientist. As such, I have worked a lot with programming
        in Python, creating machine learning models, and visualising data for
        presentations to stake holders. I got jobs mostly with large
        international corporations and worked in multiple countries with
        colleagues from all around the globe."
          text2="I have worked since 2012 with drones and satellite images. Our 
        team was the first in the world to use drones for 3D modelling. We built 
        the drone itself and created the modelling software all from scratch 
        because DJI and the classical processing software of today were not yet present. 
        As such, I have a great knowledge about geospatial data, 3D modelling, drones, satellites, and regulations."
        />
        <BlockSubHeader text="Programming skills" />
        <TextBlock
          text="I turned into full stack development because I love to build things. I
        have worked on projects in node.js, javascript, C#, .net, and react. I
        have used Google clouds firebase, AWS, Azure, MongoDB, and SQL for
        databases. I work on a new feature every week and review the engineers'
        code so that I keep my skills sharp. To understand the big picture of
        the project and where it is heading, we must look at the small details
        of the code to understand its potential and limitations. That's why
        I truly believe that a technical background for a PM is essential in my
        opinion."
        />
        <BlockSubHeader text="UX skills" />
        <TextBlock
          text="I am not a UX/UI designer, but I have worked very closely with UX designers almost all my career. As such,
          I have an eye for design and usability and unserstand all the UX concepts. I usually assist my designers to create UX flows to help
          them with conceptualising the best user experience before applying the UI."
        />
        <BlockSubHeader text="Product management" />
        <TextBlock
          text="I love to build things and think about the UX, the UI, the code architecture, 
        the business goals, and set processes. That's why I transitioned to a PM.
        I have a unique ability to quickly understand the product and visualise where we 
        will be in the future. I think the potential is enormous with every product if we understand the client and the market.
        That's why I use both data and frequent user communication to understand what the user really wants. By
        thinking through the entire customer journey and thinking through the market and the company strategy, I am able to challenge
        assumptions and identify opportunities to improve the product
        experience. My programming and data science background has given me a
        strong foundation in problem-solving, problem definition, and attention
        to detail, which has been valuable in working collaboratively with
        cross-functional team members and communication with stakeholder and
        investors. My PhD and previous work has empowered me with presentation
        and story telling skills which I use on daily basis with my team, the management, and the stakeholders. As a product leader, I am committed to using data,
        analytics, and best UX practices to drive innovation and deliver products that exceed our
        customers' expectations."
        />
      </Box>
      <CallForAction label="Contact me" url="/#/contact" />
    </Box>
  );
};

export default AboutMe;
