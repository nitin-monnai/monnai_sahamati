import React from "react";
import SensorOccupiedOutlinedIcon from "@mui/icons-material/SensorOccupiedOutlined";
import Grid from "@mui/material/Grid2";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Stack } from "@mui/material";

export default function PersonalInfo({ personalInfo }) {
  const {
    name,
    dob,
    gender,
    pan,
    aadhar,
    eeshramID,
    dl,
    phone,
    email,
    address,
  } = personalInfo;
  return (
    <div className="PersonalInfo">
      <div className="card-title">
        <SensorOccupiedOutlinedIcon sx={{ color: "#6518f2" }} />
        <div>Personal Information</div>
      </div>
      <div className="card-body">
        <Stack spacing={2}>
          <Grid container spacing={0} className="card-col">
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">Name</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{name}</div>
            </Grid>
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">DOB</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{dob}</div>
            </Grid>
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">Gender</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{gender}</div>
            </Grid>
          </Grid>
          <Grid container spacing={0} className="card-col">
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">PAN</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{pan}</div>
            </Grid>
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">Aadhaar</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{aadhar}</div>
            </Grid>
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">EShram ID</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{eeshramID}</div>
            </Grid>
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">DL</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{dl}</div>
            </Grid>
          </Grid>
          <Grid container spacing={0} className="card-col">
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">Phone</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{phone}</div>
            </Grid>
            <Grid size={3} className="card-col-item">
              <div className="card-col-item-title">Email</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{email}</div>
            </Grid>
            <Grid size={6} className="card-col-item">
              <div className="card-col-item-title">Address</div>
              <ArrowRightOutlinedIcon className="card-col-item-arrow" />
              <div className="card-col-item-value">{address}</div>
            </Grid>
          </Grid>
        </Stack>
      </div>
    </div>
  );
}
