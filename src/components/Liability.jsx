import React from "react";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import Grid from "@mui/material/Grid2";
import BasicTable from "./table";

export default function Liability({ liability }) {
  const { vice, creditHunger, loans } = liability;
  return (
    <div className="PersonalInfo">
      <div className="card-title">
        <PersonRemoveOutlinedIcon sx={{ color: "#6518f2" }} />
        <div>Liability</div>
      </div>
      <div className="card-body">
        <Grid container spacing={2} className="card-col">
          <Grid size={6}>
            <div className="card-col-item">
              <div className="card-col-item-title">High-Risk Activities</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />

              <div className="card-col-item-value">
                {vice === "low" ? (
                  <div className="tag">Low Risk</div>
                ) : (
                  <div className="tag error">High Risk</div>
                )}
              </div>
            </div>
          </Grid>
          <Grid size={6}>
            <div className="card-col-item">
              <div className="card-col-item-title">Credit Appetite</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">
                {creditHunger === "low" ? (
                  <div className="tag">Low</div>
                ) : (
                  <div className="tag error">High</div>
                )}
              </div>
            </div>
          </Grid>
          <div className="card-col-item">
            <div className="card-col-item-title">Loans</div>
            <ArrowRightOutlinedIcon className="card-col-item-arrow" />
          </div>
          <Grid size={12}>
            <BasicTable
              data={loans}
              cols={[
                {
                  label: "Type",
                },
                {
                  label: "Amount",
                  showCurrencyIcon: true,
                },
                {
                  label: "EMI(Monthly)",
                  showCurrencyIcon: true,
                },
                {
                  label: "Outstanding Amount",
                  showCurrencyIcon: true,
                },
                {
                  label: "Total Duration",
                },
                {
                  label: "Period Left",
                },
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
