import React, { useEffect } from "react";
import Layout from "../pageComponents/Layout";
import BlockHeader from "../components/BlockHeader";
import TextBlock from "../components/TextBlock";
import { Box } from "@mui/material";
import GlobheImage from "../images/globhe_client.png";
import { imageStyle, GlobhePMF, Metrics } from "../library/Constants";
import BlockSubHeader from "../components/BlockSubHeader";
import ListComponent from "../components/ListComponent";
import ProjectPage from "../images/projectPage.png";

const GlobheApp = () => {
  useEffect(() => {
    document.title = "GLOBHE app";
  }, []);
  return (
    <Layout>
      <Box sx={{ marginTop: "60px" }}>
        <BlockHeader
          text="GLOBHE marketplace"
          subHeader="Created between 2019 & 2023"
        />
        <Box sx={{ marginTop: "40px" }}>
          <TextBlock text="GLOBHE is marketplace for drone data enabling clients in need of high resolution drone data to contract local drone operators in 136+ countries. As such, it becomes super easy for clients to scale up their drone operators globally without worrying about finding qualified operators, contracting them, and paying them because the marketplace takes care of all of this. It is like the Uber for drones." />{" "}
        </Box>
        <Box component="img" src={GlobheImage} sx={imageStyle} />
        <BlockSubHeader text="My role" moreMargin />
        <TextBlock
          text="I started as a full stack developer and built the MVP end of 2019 and beginning of 2020. After we secured our seed round, I scaled the team by employing UX designers and full-stack developers. I become head of Product and CTO and such I worked closely with the management team to set up the product long term strategy, I conducted research to understand competition and the innovation in the geospatial industry, I prioritised features and tasks according to the company strategy and the user needs, and coded with the team to keep my skills sharp."
          text2="As the CTO for GLOBHE, I had additional responsibilities including fundraising, demos to investors, pitching in events, and setting up processes to scale the product and the company. With my previous knowledge of drone and geospatial data, I was also coaching all GLOBHE team members on drone technology, usage, surveying, regulations, and best practices when using drones."
        />
        <BlockSubHeader text="The product" moreMargin />
        <TextBlock
          videoId="DFSgsdbf0O8"
          text="The video shows how the platform generally works. It is quite extensive so one video is not enough to show everything."
          text2="In a nutshell, drone operators sign up and add all their details regarding their location, experience, and equipments. Clients also register for free and place orders, or 'Task a drone'. The platform will automatically select the nearest operator with a suitable experience and equipment. They will get contracted by GLOBHE and after that they can go capture the data. Once they are ready, they will upload their data to the order page and it will be sent to the client. The client will then pay GLOBHE, and the latter will pay the operator."
        />
        <BlockSubHeader text="Reaching product market fit" moreMargin />
        <TextBlock text="After a couple of years of iterations and onboarding of multiple small and large paying clients, the marketplace found its product market fit. We were thus able to scale the product to what the market really needs and increase sales. With my team, I was able to develop unique features to support the needs of these large returning clients, such as enterprise accounts, inspection dashboards, and project management functionalities so large inspection projects can be monitored and followed. This product was ideal for: " />
        <ListComponent item={GlobhePMF} secondaryItem />
        <Box component="img" src={ProjectPage} sx={imageStyle} />
        <BlockSubHeader text="Metrics" moreMargin />
        <ListComponent item={Metrics} withIcons />
        <BlockSubHeader text="Key takeaways" moreMargin />
        <TextBlock
          text="In my most recent work, I have demonstrated that I am able to scale a large platform from an MVP to product market fit. I worked and communicated at multiple levels, from demoing and answering investors, researching clients' needs and industrial development, setting long term strategy with the management, working closely with UX-UI designers on solving challenges, and coding with the development team to make sure that we ship high quality code to production."
          text2="The most immportant lesson I learnt in this work is to be the voice of the user, work on superior UX-UI from day 1, and know what it means to be in a venture-backed startup, how it impacts decisions, and how to manage budgeting & burn rate while running lean."
        />
        <TextBlock text="Remember that marketplaces are tricky but once you have a good product market fit, you understand both supply and demand, and you have a strong sales team especially in the beginning of the journey, then marketplaces will be a great product that will run smoothly and scale quickly." />
      </Box>
    </Layout>
  );
};

export default GlobheApp;
