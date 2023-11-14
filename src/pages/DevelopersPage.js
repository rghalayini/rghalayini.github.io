import React, { useEffect } from "react";
import Layout from "../pageComponents/Layout";
import BlockHeader from "../components/BlockHeader";
import TextBlock from "../components/TextBlock";
import { Box } from "@mui/material";
import apiImage from "../images/apiDocs.png";
import { imageStyle, DevelopersMetrics } from "../library/Constants";
import BlockSubHeader from "../components/BlockSubHeader";
import ListComponent from "../components/ListComponent";
import GeneralButton from "../components/GeneralButton";

const DevelopersPage = () => {
  useEffect(() => {
    document.title = "Developers docs";
  }, []);
  return (
    <Layout>
      <Box sx={{ marginTop: "60px" }}>
        <BlockHeader text="GLOBHE developers page" subHeader="Created 2021" />
        <Box sx={{ marginTop: "40px" }}>
          <TextBlock text="This is the developers docs page for the GLOBHE API and integrations. It describes in detail how clients can connect to the different APIs and implement other integrations in their platform." />{" "}
        </Box>
        <Box component="img" src={apiImage} sx={imageStyle} />
        <BlockSubHeader text="My role" moreMargin />
        <TextBlock
          text="We had limited UX and development resources for this work so I have designed and coded this work myself. I started with the UX and the user flow, trying to map where the user would start and where would they navigate throughout the page. I placed a left vertical menu for easy access to all the API features and a top menu for a quick access to GLOBHE pages. "
          text2="Once the UX was done, I simply used the same UI as in the GLOBHE app. This way, we can keep consistency regarding the colors, the fonts, and the overall look and feel of the brand. I then used React and Gatsby to code the page. The whole process took about 2 days from start to finish."
        />

        <BlockSubHeader text="Metrics" moreMargin />
        <ListComponent item={DevelopersMetrics} withIcons />
        <BlockSubHeader text="Key takeaways" moreMargin />
        <TextBlock
          text="A common misconcepion is that CTOs and product managers should not code. I do not agree with this and that's why I always try to be involved in coding and code review to keep my skills sharp and make sure that we solve tech debt early. By being more involved in engineering, I can feel what obstacles the team is facing and try to solve it for them before it becomes difficult and costly to solve later."
          text2="Another important aspect to remember is that when we need something quickly, I just jump in and do it. I could of course put this in the pipeline for later, but by doing that I risk losing clients. That's a characteristic of me: when I am needed or when a feature is urgently required, I jump in and do things."
        />
        <BlockSubHeader text="Check it out" moreMargin />
        <GeneralButton
          label="Go to the developers page"
          externalLink
          url="https://developers.globhe.com/"
        />
      </Box>
    </Layout>
  );
};

export default DevelopersPage;
