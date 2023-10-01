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
          text="I have a PhD in geophysics from the Sorbonnes University in Paris.
        During and after my studies, I have worked tremendously with geospatial
        data as a data scientist. As such, I have worked a lot with programming
        in Python, creating machine learning models, and visualising data for
        presentations to stake holders. I got jobs mostly with large
        international corporations and worked in multiple countries with
        colleagues from all around the globe."
        />
        <BlockSubHeader text="Programming skills" />
        <TextBlock
          text="I turned into full stack development because I love to build things. I
        have worked on projects in node.js, javascript, C#, .net, and react. I
        have used Google clouds firebase, AWS, Azure, MongoDB, and SQL for
        databases. I work on a new feature every week and review the engineers
        code so that I keep my skills sharp. To understand the big picture of
        the project and where it is heading, we must look at the small details
        of the code to understand its potential and limitations. That's why
        I truly believe that a technical background for a PM is essential in my
        opinion."
        />
        <BlockSubHeader text="Product management" />
        <TextBlock
          text="As a seasoned product leader, I have a unique perspective on building
        products that are both technically sound and user-friendly. I am
        passionate about understanding user behavior and creating an optimized
        experience that eases pain points and brings joy. I use both data and
        frequent user communication to understand what the user really wants. By
        thinking through the entire customer journey, I am able to challenge
        assumptions and identify opportunities to improve the product
        experience. My programming and data science background has given me a
        strong foundation in problem-solving, problem definition, and attention
        to detail, which has been valuable in working collaboratively with
        cross-functional team members and communication with stakeholder and
        investors. As a product leader, I am committed to using data and
        analytics to drive innovation and deliver products that exceed our
        customers' expectations."
        />
      </Box>
      <CallForAction label="Contact me" url="/contact" />
    </Box>
  );
};

export default AboutMe;
