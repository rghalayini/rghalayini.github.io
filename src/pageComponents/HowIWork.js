import React from "react";
import TextBlock from "../components/TextBlock";
import BlockHeader from "../components/BlockHeader";
import { List, ListItem, ListItemText } from "@mui/material";

const HowIWorkList = [
  {
    primary: "Set up a product team",
    secondary:
      "If you are a new startup and you need help setting up a team, I can create recruitment processes, interview candidates, and create a product team of both UX-UI designers and developers",
  },
  {
    primary: "Create processes and documentations",
    secondary:
      "Detailed development processes and comprehensive documentation are essential to the success of every product-based company. I would instaure the processes to help the team work smoothly and make write down details documentation to facilitate future scale up.",
  },
  {
    primary: "Research-backed Product Strategy",
    secondary:
      "From market research to development, I analyze the market, understand the competition, and user behaviour to transform it into actionable insights.",
  },
  {
    primary: "Agile Framework and Design Sprints",
    secondary:
      "Whether conceptualizing a new product or working on an existing one, I will make sure we work in agile, quick, and efficient way to maximize efficiency, create the best UX friendly features, and deliver products on time",
  },
  {
    primary: "Leadership Mastery towards the Goal",
    secondary:
      "Leadership is more than just delegating tasks, but beyond that, a leader should help to create a collaborative work environment and empower the team members.",
  },
  {
    primary: "Managed Multicultural Teams",
    secondary:
      "Being a polyglot makes me a good communicator, coming up with creative solutions and having more empathy.",
  },
  {
    primary: "Complete due diligence for investment",
    secondary:
      "For VC-backed startups, due diligence is inevitable. I will prepare all the needed product documentation for investors, provide demos, and answer all questions regarding the tech infrastucture and scale up potential of the product",
  },
];
const HowIWork = () => {
  //add the list here as in MUI list: https://mui.com/material-ui/react-list/
  return (
    <>
      <BlockHeader text="How I work" />
      <TextBlock text="Below is a brief overview of my career. My goal is to showcase some of the various leadership and product management techniques and methodologies my teams and I have used to drive customer and business growth depending on the specific needs of a product and team. This includes the following areas I specialize in:" />
      <List>
        {HowIWorkList.map((item) => (
          <ListItem key={item.primary}>
            <ListItemText
              primary={item.primary}
              secondary={item.secondary}
              primaryTypographyProps={{ variant: "h6", color: "primary" }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HowIWork;
