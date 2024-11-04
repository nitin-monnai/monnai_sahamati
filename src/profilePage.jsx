import { Box } from "@mui/material";
import "./ProfilePage.scss";
import GigScore from "./components/gigScore";
import PersonalInfo from "./components/personalInfo";
import Grid from "@mui/material/Grid2";
import Character from "./components/character";
import ProfileImage from "./components/profileImage";
import Assets from "./components/assets";
import Liability from "./components/Liability";
import { useEffect, useState } from "react";
import { default as loading } from "./assets/common/loading.gif";
import LinearColor from "./components/Loader";
import driver_demo_data from "./LandingPages/confirmation/DriverDemoData";
import delivery_demo_data from "./LandingPages/confirmation/DeliveryDemoData";

function ProfilePage({ chosenData }) {
  const [isLoading, setIsLoading] = useState(true);
  var demoData = driver_demo_data;
  // var data = delivery_demo_data;

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LinearColor />;
  }

  const getPage = () => {
    var data = {};
    if (Object.keys(chosenData).length !== 0) {
      data = chosenData;
    } else {
      data = demoData;
    }

    return (
      <div className="ProfilePage">
        <div className="app-header">
          <img src="https://monnai.com/wp-content/uploads/2024/02/gradient-logo.svg" />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={2}>
              <GigScore gigScore={data.gigScore} />
            </Grid>
            <Grid size={2}>
              <ProfileImage profileImage={data.ProfileImage} />
            </Grid>
            <Grid size={8}>
              <PersonalInfo personalInfo={data.personalInfo} />
            </Grid>
            <Grid size={12}>
              <Character
                character={data.character}
                digitalFootprint={data.digitalFootprint}
                employment={data.employment}
                finance={data.finance}
                name={data.personalInfo.name}
              />
            </Grid>
            <Grid size={12}>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Assets assets={data.assets} />
                </Grid>
                <Grid size={6}>
                  <Liability liability={data.liability} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  };

  return getPage();
}

export default ProfilePage;
