import React from "react";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import Grid from "@mui/material/Grid2";
import BasicTable from "../components/table";

export default function Assets({ assets }) {
  const { ownerships, investments } = assets;
  return (
    <div className="PersonalInfo">
      <div className="card-title">
        <RequestQuoteOutlinedIcon sx={{ color: "#6518f2" }} />
        <div>Holdings</div>
      </div>
      <div className="card-body">
        <div className="card-col">
          <Grid container spacing={2}>
            <Grid size={6}>
              <div>
                <div className="card-col-item">
                  <div className="card-col-item-title">Ownership</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                </div>
                <BasicTable
                  data={ownerships}
                  cols={[
                    {
                      label: "Type",
                    },
                    {
                      label: "Amount",
                      showCurrencyIcon: true,
                    },
                  ]}
                  style={{
                    marginTop: "10px",
                  }}
                />
              </div>
            </Grid>

            <Grid size={6}>
              <div>
                <div className="card-col-item">
                  <div className="card-col-item-title">Investments</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                </div>

                <BasicTable
                  data={investments}
                  cols={[
                    {
                      label: "Type",
                    },
                    {
                      label: "Amount",
                      showCurrencyIcon: true,
                    },
                  ]}
                  style={{
                    marginTop: "10px",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
