import React from "react";
import SettingsAccessibilityOutlinedIcon from "@mui/icons-material/SettingsAccessibilityOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import FinancialStability from "./financialStability";
import Employment from "./employment";
import TooltipComp from "./tooltip";

export default function Character({
  character,
  digitalFootprint,
  employment,
  finance,
  name,
}) {
  const { tenure, validity } = character;
  const { digitalFootprintScore, identityCorrelation, govSites, socialSites } =
    digitalFootprint;
  return (
    <Grid container spacing={2}>
      <Grid size={5}>
        <div className="PersonalInfo">
          <div className="card-title">
            <SettingsAccessibilityOutlinedIcon sx={{ color: "#6518f2" }} />
            <div>Reputation</div>
          </div>
          <div className="card-body">
            <Grid container spacing={2}>
              <Grid size={6} className="card inncerCard">
                <div className="card-title-mini">
                  <AvTimerOutlinedIcon sx={{ color: "#6518f2" }} />
                  <div>Tenure</div>
                </div>
                <div className="card-body">
                  <div className="card-col">
                    <Stack spacing={1}>
                      <div className="card-col-item">
                        <div className="card-col-item-title">Phone</div>
                        <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                        <div className="card-col-item-value">
                          {tenure.phone}
                        </div>
                      </div>
                      <div className="card-col-item">
                        <div className="card-col-item-title">Email</div>
                        <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                        <div className="card-col-item-value">
                          {tenure.email}
                        </div>
                      </div>
                      <div className="card-col-item">
                        <div className="card-col-item-title">Address</div>
                        <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                        <div className="card-col-item-value">
                          {tenure.address}
                        </div>
                      </div>
                    </Stack>
                  </div>
                </div>
              </Grid>

              <Grid size={6} className="card inncerCard">
                <div className="card-title-mini">
                  <PublishedWithChangesOutlinedIcon sx={{ color: "#6518f2" }} />
                  <div>Credibility</div>
                </div>
                <div className="card-body">
                  <div className="card-col">
                    <Stack spacing={1}>
                      <div className="card-col-item">
                        <div className="card-col-item-title">Phone</div>
                        <ArrowRightOutlinedIcon className="card-col-item-arrow" />

                        <div className="card-col-item-value">
                          {validity.phone.disposable ? (
                            <div className="tag error">Disposable</div>
                          ) : (
                            <></>
                          )}
                          {validity.phone.spam ? (
                            <div className="tag error">Spam</div>
                          ) : (
                            <></>
                          )}
                          {validity.phone.prepaid ? (
                            <div className="tag">Pre Paid</div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="card-col-item">
                        <div className="card-col-item-title">Email</div>
                        <ArrowRightOutlinedIcon className="card-col-item-arrow" />

                        <div className="card-col-item-value">
                          {validity.email.disposable ? (
                            <div className="tag error">Disposable</div>
                          ) : (
                            <></>
                          )}
                          {validity.email.spam ? (
                            <div className="tag error">Spam</div>
                          ) : (
                            <></>
                          )}
                          {validity.email.deliverable ? (
                            <div className="tag">Deliverable</div>
                          ) : (
                            <></>
                          )}
                          {!validity.email.disposable &&
                          !validity.email.spam &&
                          !validity.email.deliverable
                            ? "N/A"
                            : null}
                        </div>
                      </div>
                    </Stack>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      <FinancialStability finance={finance} />
      <Grid size={4}>
        <div className="card" style={{ minHeight: "180px" }}>
          <div className="card-title-mini">
            <MemoryOutlinedIcon sx={{ color: "#6518f2" }} />
            <div>Digital Footprint</div>
          </div>
          <div className="card-body">
            <Grid container spacing={2}>
              <Grid size={6}>
                <div className="card-col">
                  <div className="card-col-item">
                    <div className="card-col-item-title">Score</div>
                    <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                    <div className="card-col-item-value">
                      {digitalFootprintScore * 10}
                    </div>
                    <TooltipComp text="Measures online presence across various platforms, which helps validate identity and activity." />
                  </div>
                  <div className="footprint-score">
                    <div
                      className="footprint-score-inner"
                      style={{
                        width: `${digitalFootprintScore}%`,
                        backgroundColor:
                          digitalFootprintScore <= 55 ? "#6b0705" : "#085c0e",
                      }}
                    />
                  </div>
                </div>
              </Grid>
              <Grid size={6}>
                <div className="card-col">
                  <div className="card-col-item">
                    <div className="card-col-item-title">
                      Identity Correlation
                    </div>
                    <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                    <div className="card-col-item-value">
                      {identityCorrelation * 10}
                    </div>
                    <TooltipComp text="Checks for consistency in identity information (name, DOB, etc.) across different platforms." />
                  </div>
                  <div className="footprint-score">
                    <div
                      className="footprint-score-inner"
                      style={{
                        width: `${identityCorrelation}%`,
                        backgroundColor:
                          identityCorrelation <= 55 ? "#6b0705" : "#085c0e",
                      }}
                    />
                  </div>
                </div>
              </Grid>
              <Grid size={6}>
                <div className="card-col">
                  <div className="card-col-item">
                    <div className="card-col-item-title">Government Apps</div>
                    <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  </div>
                  {/* <div className="card-col-item-value">
                    {govSites.join(", ")}
                  </div> */}
                  <div className="cat-list">
                    {govSites.map((item) => (
                      <div className="cat-item">
                        <div className="cat-item-icon" />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Grid>
              <Grid size={6}>
                <div className="card-col">
                  <div className="card-col-item">
                    <div className="card-col-item-title">Social Apps</div>
                    <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  </div>
                  <div className="cat-list">
                    {socialSites.map((item) => (
                      <div className="cat-item">
                        <div className="cat-item-icon" />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      <Employment employment={employment} name={name} />
    </Grid>
  );
}
