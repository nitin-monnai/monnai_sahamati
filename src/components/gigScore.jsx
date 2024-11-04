import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import SportsScoreOutlinedIcon from "@mui/icons-material/SportsScoreOutlined";
import TooltipComp from "./tooltip";

export default function GigScore({ gigScore }) {
  return (
    <div className="GigScore">
      <div className="card-title">
        <SportsScoreOutlinedIcon sx={{ color: "#6518f2" }} />
        <div>Gig Score</div>
        <TooltipComp text="Overall score calculated based on transactions in profession app and below data" />
      </div>
      <div className="GigScore-container">
        <Gauge
          valueMax={999}
          width={100}
          height={118}
          value={gigScore * 10}
          // text={({ value, valueMax }) => `${value} / ${valueMax}`}
          innerRadius="100%"
          outerRadius="120%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 20,
              fontWeight: 600,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: gigScore <= 55 ? "#6b0705" : "#085c0e",
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />
      </div>
    </div>
  );
}
