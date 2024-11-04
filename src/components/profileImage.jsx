import React from "react";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";

export default function ProfileImage({ profileImage }) {
  return (
    <div className="GigScore">
      <div className="card-title">
        <InsertEmoticonOutlinedIcon sx={{ color: "#6518f2" }} />
        <div>Profile Image </div>
      </div>
      <div className="profileImage-container">
        <img src={profileImage} alt="profileImage" />
      </div>
    </div>
  );
}
