import React from "react";
import { Typography, Box } from "@mui/material";
import { TextMargin } from "../library/Constants";

const AboutMe = () => {
  return (
    <Box>
      <Typography variant="h3" sx={TextMargin}>
        About me
      </Typography>
      <Typography variant="body1" sx={TextMargin}>
        As a seasoned product leader, I have a unique perspective on building
        products that are both technically sound and user-friendly. I am
        passionate about understanding user behavior and creating an optimized
        experience that eases pain points and brings joy. At the same time, I
        bring a data-driven approach to building products, using data and
        analytics to gain insights into user behavior and make informed
        decisions that drive growth.
      </Typography>
      <Typography variant="h6" sx={TextMargin}>
        Background
      </Typography>
      <Typography variant="body1" sx={TextMargin}>
        I have a PhD in geophysics from the Sorbonnes University in Paris.
        During and after my studies, I have worked tremendously with geospatial
        data as a data scientist. As such, I have worked a lot with programming
        in Python, creating machine learning models, and visualising data for
        presentations to stake holders. I got jobs mostly with large
        international corporations and worked in multiple countries with
        colleagues from all around the globe.
      </Typography>
      <Typography variant="h6" sx={TextMargin}>
        Programming skills
      </Typography>
      <Typography variant="body1" sx={TextMargin}>
        I turned into full stack development because I love to build things. I
        have worked on projects in node.js, javascript, C#, .net, and react. I
        have used Google clouds firebase, AWS, Azure, MongoDB, and SQL for
        databases.
      </Typography>
      <Typography variant="h6" sx={TextMargin}>
        Product management
      </Typography>
      <Typography variant="body1" sx={TextMargin}>
        By thinking through the entire customer journey, I am able to challenge
        assumptions and identify opportunities to improve the product
        experience. As a product leader, I am committed to using data and
        analytics to drive innovation and deliver products that exceed our
        customers&apos; expectations.
      </Typography>
    </Box>
  );
};

export default AboutMe;
