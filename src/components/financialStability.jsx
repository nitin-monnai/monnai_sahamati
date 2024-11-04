import React from "react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Grid from "@mui/material/Grid2";

let INFormat = new Intl.NumberFormat("en-IN");

export default function FinancialStability({ finance }) {
  const {
    range,
    consistency,
    growth,
    expenditureRange,
    avgBalance,
    totalExpenditure,
  } = finance;
  const { personal, work } = totalExpenditure;
  return (
    <Grid size={7} className="FinancialStability">
      <div className="card" style={{ minHeight: "220px" }}>
        <div className="card-title-mini">
          <CurrencyExchangeOutlinedIcon sx={{ color: "#6518f2" }} />
          <div>Financial Stability</div>
        </div>
        <div
          className="card-body"
          style={{
            paddingBottom: 0,
          }}
        >
          <Grid container spacing={2}>
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">
                    Income Range(Monthly)
                  </div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                </div>
                <div className="card-col-item-value">
                  <CurrencyRupeeOutlinedIcon
                    sx={{
                      width: 15,
                    }}
                  />
                  {INFormat.format(range.min)} - {INFormat.format(range.max)}
                </div>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Income Consistency</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">
                    <div
                      className={consistency === "stable" ? "tag" : "tag error"}
                    >
                      {consistency}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size={4}>
              {growth ? (
                <div className="card-col">
                  <div className="card-col-item">
                    <div className="card-col-item-title">Income Growth</div>
                    <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                    <div
                      className="card-col-item-value"
                      style={{ color: "#085c0e" }}
                    >
                      <TrendingUpOutlinedIcon
                        sx={{
                          width: 15,
                          color: "#085c0e",
                        }}
                      />
                      {growth}
                    </div>
                  </div>
                </div>
              ) : null}
            </Grid>
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Expenditure</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">
                    <div
                      className={
                        expenditureRange === "stable" ? "tag" : "tag error"
                      }
                    >
                      {expenditureRange}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Total Expenditure</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                </div>
                <div className="cat-list" style={{ marginTop: "10px" }}>
                  <div className="cat-item">
                    <div className="cat-item-icon" />
                    <div>Fixed/Personal - {personal}%</div>
                  </div>
                  <div className="cat-item">
                    <div className="cat-item-icon" />
                    <div>Job related - {work}%</div>
                  </div>
                </div>
                {/* <div className="card-col-item-value">
                  Fixed/Personal - {personal}%
                </div>
                <div className="card-col-item-value">Job related - {work}%</div> */}
              </div>
            </Grid>
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">
                    Avg Balance(Monthly)
                  </div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">
                    <CurrencyRupeeOutlinedIcon
                      sx={{
                        width: 15,
                      }}
                    />
                    {INFormat.format(avgBalance)}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}
