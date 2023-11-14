import React, { useEffect } from "react";
import Layout from "../pageComponents/Layout";
import BlockHeader from "../components/BlockHeader";
import TextBlock from "../components/TextBlock";
import { Box } from "@mui/material";
import shoppingImg from "../images/shopping.png";
import { ShoppingMetrics } from "../library/Constants";
import BlockSubHeader from "../components/BlockSubHeader";
import ListComponent from "../components/ListComponent";
import GeneralButton from "../components/GeneralButton";

const styles = {
  imageStyle: {
    width: { xs: "100%", md: "30%" },
  },
};
const ShoppingList = () => {
  useEffect(() => {
    document.title = "Developers docs";
  }, []);
  return (
    <Layout>
      <Box sx={{ marginTop: "60px" }}>
        <BlockHeader text="Shopping list" subHeader="Created 2020" />
        <Box sx={{ marginTop: "40px" }}>
          <TextBlock text="This is a side project I worked on after difficulties at home to remember and access the items needed to buy from the grocery. This webapp allows all house members to access the same page, add items, see the items to buy, and remove the items that were purchased." />{" "}
        </Box>
        <Box component="img" src={shoppingImg} sx={styles.imageStyle} />
        <BlockSubHeader text="My role" moreMargin />
        <TextBlock
          text="I have completely designed this app. First, I created a prototype from my own experience and what I want to see in a shopping list. I tried to make it as easy as possible to add and delete items without any complex functionalities. Then I showed the prototype to other users, tested the design, took their feedback, and created a final design. Once this is done, I coded the app and deployed it on netlify."
          text2="The whole process took about 3 days from start to finish."
        />

        <BlockSubHeader text="Metrics" moreMargin />
        <ListComponent item={ShoppingMetrics} withIcons />
        <BlockSubHeader text="Check it out" moreMargin />
        <GeneralButton
          label="Go to shopping list"
          externalLink
          url="https://rs-shoppinglist.netlify.app/"
        />
      </Box>
    </Layout>
  );
};

export default ShoppingList;
