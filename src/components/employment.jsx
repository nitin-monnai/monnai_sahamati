import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import Grid from "@mui/material/Grid2";
import TooltipComp from "./tooltip";

export default function Employment({ employment, name }) {
  const {
    stabilityScore,
    categories,
    keyRevenueContributer,
    benchmark,
    avgDaysOfWork,
    experience,
    educationLevel,
    skills,
  } = employment;
  return (
    <Grid size={8}>
      <div className="card">
        <div className="card-title-mini">
          <BusinessOutlinedIcon sx={{ color: "#6518f2" }} />
          <div>Employment Stability</div>
        </div>
        <div className="card-body">
          <Grid container spacing={2}>
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Score</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">
                    {stabilityScore * 10}
                  </div>
                  <TooltipComp text="Assesses consistency in gig work engagement, showing reliability in income generation." />
                </div>
                <div className="footprint-score">
                  <div
                    className="footprint-score-inner"
                    style={{
                      width: `${stabilityScore}%`,
                      backgroundColor:
                        stabilityScore <= 55 ? "#6b0705" : "#085c0e",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Education Level</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">{educationLevel}</div>
                </div>
              </div>
            </Grid>
            {/* <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Skills</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">{skills.join(", ")}</div>
                </div>
              </div>
            </Grid> */}
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Categories</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                </div>

                <div className="cat-list">
                  {categories.map((item) => (
                    <div className="cat-item">
                      <div className="cat-item-icon" />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Experience</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">{experience}</div>
                </div>
              </div>
            </Grid>

            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">Performance</div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">
                    {benchmark * 10}
                  </div>
                  <TooltipComp text="Measures worker’s performance against industry benchmarks for similar roles." />
                </div>
                <div className="footprint-score">
                  <div
                    className="footprint-score-inner"
                    style={{
                      width: `${benchmark}%`,
                      backgroundColor: benchmark <= 55 ? "#6b0705" : "#085c0e",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">
                    Days of work (Monthly)
                  </div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">{avgDaysOfWork}</div>
                </div>
              </div>
            </Grid>
            <Grid size={5}>
              <div className="card-col">
                <div className="card-col-item">
                  <div className="card-col-item-title">
                    Key Revenue Contributor
                  </div>
                  <ArrowRightOutlinedIcon className="card-col-item-arrow" />
                  <div className="card-col-item-value">
                    {keyRevenueContributer.label} -{" "}
                    {keyRevenueContributer.value}%
                  </div>
                  <TooltipComp text="Determines primary sources of income within gig activities, highlighting job impact." />
                </div>
                <div className="footprint-score">
                  <div
                    className="footprint-score-inner"
                    style={{
                      width: `${keyRevenueContributer.value}%`,
                      backgroundColor:
                        keyRevenueContributer.value <= 55
                          ? "#6b0705"
                          : "#085c0e",
                    }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}
