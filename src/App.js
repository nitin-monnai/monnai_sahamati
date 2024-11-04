import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from "./LandingPages/login/LoginPage";
import Page1 from "./LandingPages/page1/Page1";
import DriverOnBoard from "./LandingPages/page2/driver-onboard/DriverOnBoard";
import Page2DeliveryPartnerOnBoard from "./LandingPages/page2/delivery-partner-onboard/DeliveryPartnerOnBoard";
import ConsentPage from "./LandingPages/page3/ConsentPage";
import SocialOnboard from "./LandingPages/page2/social-onboard/SocialOnboard";
import BankDocsOnboard from "./LandingPages/page2/bank-docs-onboard/bankDocsOnboard";
import DigilockerOnBoard from "./LandingPages/page2/digilockerOnBoard/DigilockerOnBoard";
import ConfirmationPage from "./LandingPages/confirmation/ConfirmationPage";
import ProfilePage from "./profilePage";

const App = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkedItems, setCheckedItems] = useState({
    driver: false,
    delivery_boy: false,
    merchant: false,
  });

  const [data, setData] = useState({});

  const [selectedDriverApps, setSelectedDriverApps] = useState({
    uber: false,
    ola: false,
    porter: false,
    uncle_delivery: false,
  });

  const [selectedDeliveryExecApps, setSelectedDeliveryExecApps] = useState({
    swiggy: false,
    zomato: false,
    blinkit: false,
  });

  const [selectedSocialApps, setSelectedSocialApps] = useState({
    facebook: false,
    x: false,
    whatsapp: false,
    linkedin: false,
  });

  const [selectedBanks, setSelectedBanks] = useState({
    axis: false,
    hdfc: false,
    icici: false,
    indusind: false,
  });

  const [selectedDigilockerItems, setSelectedDigilockerItems] = useState({
    axis: false,
    hdfc: false,
    icici: false,
    indusind: false,
  });

  const getSelected = (mapOfElemenst) => {
    const apps = [];

    for (const [k, v] of Object.entries(mapOfElemenst)) {
      if (v) {
        apps.push(k);
      }
    }

    return apps;
  };

  const getAllSelectedGigApps = () => {
    const combined = {
      ...selectedDeliveryExecApps,
      ...selectedDriverApps,
    };

    return getSelected(combined);
  };

  const getAllSelectedBanks = () => {
    return getSelected(selectedBanks);
  };

  const getAllSocialApps = () => {
    return getSelected(selectedSocialApps);
  };

  const getAllDigilockerSelections = () => {
    return getSelected(selectedDigilockerItems);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <Login setphoneNumber={setphoneNumber} phoneNumber={phoneNumber} />
          }
        />
        <Route
          path="/page1"
          element={
            <Page1
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          }
        />
        <Route
          path="/driverOnBoard"
          element={
            <DriverOnBoard
              selectedDriverApps={selectedDriverApps}
              setSelectedDriverApps={setSelectedDriverApps}
              checkedItems={checkedItems}
            />
          }
        />
        <Route
          path="/deliveryPartnerOnBoard"
          element={
            <Page2DeliveryPartnerOnBoard
              selectedDeliveryExecApps={selectedDeliveryExecApps}
              setSelectedDeliveryExecApps={setSelectedDeliveryExecApps}
              checkedItems={checkedItems}
            />
          }
        />
        <Route
          path="/socialOnboard"
          element={
            <SocialOnboard
              selectedSocialApps={selectedSocialApps}
              setSelectedSocialApps={setSelectedSocialApps}
              checkedItems={checkedItems}
            />
          }
        />
        <Route
          path="/bankAndDocsOnboard"
          element={
            <BankDocsOnboard
              selectedBanks={selectedBanks}
              setSelectedBanks={setSelectedBanks}
              checkedItems={checkedItems}
            />
          }
        />
        <Route
          path="/digilockerOnBoard"
          element={
            <DigilockerOnBoard
              selectedDigilockerItems={selectedDigilockerItems}
              setSelectedDigilockerItems={setSelectedDigilockerItems}
              checkedItems={checkedItems}
            />
          }
        />
        <Route
          path="/consentPage"
          element={
            <ConsentPage
              allSelectedGigApps={getAllSelectedGigApps()}
              allSelectedBanks={getAllSelectedBanks()}
              allSocialApps={getAllSocialApps()}
              allDigilockerSelections={getAllDigilockerSelections()}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <ConfirmationPage phoneNumber={phoneNumber} setData={setData} />
          }
        />
        <Route path="/profile" element={<ProfilePage chosenData={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
