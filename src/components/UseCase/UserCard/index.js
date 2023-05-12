import { Card } from "@mui/material";
import BoxComponent from "components/Base/BoxComponent";
import React from "react";
import { relative_width_size_generator } from "utils/helpers";
import { CardActionArea } from "@mui/material";

const UserCardComponent = ({ children, ...props }) => {
  return (
    <Card
      sx={{
        background: "#FFFFFF",
        boxShadow: "0px 0px 12px 1px rgba(0, 0, 0, 0.12)",
        borderRadius: "10px",
        width: relative_width_size_generator(255),
      }}
      {...props}
    >
      <CardActionArea>
        <BoxComponent sx={{ padding: relative_width_size_generator(20) }}>
          {children}
        </BoxComponent>
      </CardActionArea>
    </Card>
  );
};

export default UserCardComponent;
