import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import theme from "../theme";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";
const ListComponent = ({ item, withIcons, secondaryItem }) => {
  return (
    <List>
      {item.map((item) => (
        <ListItem key={item.primary}>
          {withIcons && (
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
          )}
          <ListItemText
            primary={item.primary}
            secondary={secondaryItem && item.secondary}
            primaryTypographyProps={{
              variant: "h6",
              color: theme.palette.primary.medium,
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

ListComponent.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string,
    }),
  ),
  secondaryItem: PropTypes.bool,
  withIcons: PropTypes.bool,
};
ListComponent.defaultProps = {
  secondaryItem: false,
  withIcons: false,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      secondary: undefined,
    }),
  ),
};
export default ListComponent;
