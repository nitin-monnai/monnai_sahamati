import React from "react";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function TooltipComp({ text }) {
  return (
    <Tooltip
      title={text}
      // arrow
      componentsProps={{
        tooltip: {
          sx: {
            color: "#1b0c69",
            backgroundColor: "white",
            fontSize: "14px",
            border: "1px solid #43348c",
          },
        },
      }}
    >
      <InfoOutlinedIcon sx={{ color: "#403ddb", width: 15 }} />
    </Tooltip>
  );
}
