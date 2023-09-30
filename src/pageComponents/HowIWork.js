import React from "react";
import TextBlock from "../components/TextBlock";
import BlockHeader from "../components/BlockHeader";
import ListComponent from "../components/ListComponent";
import { HowIWorkList } from "../library/Constants";

const HowIWork = () => {
  //add the list here as in MUI list: https://mui.com/material-ui/react-list/
  return (
    <>
      <BlockHeader text="How I work" />
      <TextBlock text="Below is a brief overview of my work strategy and how I work. My goal is to showcase some of the various leadership and product management techniques and methodologies my teams and I have used to drive customer and business growth depending on the specific needs of a product and team. This includes the following areas I specialize in:" />
      <ListComponent item={HowIWorkList} secondaryItem />
    </>
  );
};

export default HowIWork;
