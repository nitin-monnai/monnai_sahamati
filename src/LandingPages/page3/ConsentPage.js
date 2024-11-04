import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as ola } from "../assets/driver-icons/ola-driver.svg";
import { default as uber } from "../assets/driver-icons/uber-driver.webp";
import { default as uncle_delivery } from "../assets/driver-icons/uncle-delivery.png";
import { default as porter } from "../assets/driver-icons/porter.png";
import { default as swiggy } from "../assets/delivery-partner-icons/swiggy.webp";
import { default as zomato } from "../assets/delivery-partner-icons/zomato.png";
import { default as blinkit } from "../assets/delivery-partner-icons/blinkit.webp";

import { default as facebook } from "../assets/social/facebook.webp";
import { default as x } from "../assets/social/x.webp";
import { default as whatsapp } from "../assets/social/whatsapp.webp";
import { default as linkedin } from "../assets/social/linkedin.webp";

import { default as axis } from "../assets/banks/axis.png";
import { default as hdfc } from "../assets/banks/hdfc.png";
import { default as icici } from "../assets/banks/icici.webp";
import { default as indusind } from "../assets/banks/indusind.png";

import { default as e_shram } from "../assets/digilocker/e-Shram.png";
import { default as aadhaar } from "../assets/digilocker/aadhaar.svg";
import { default as driving_license } from "../assets/digilocker/ashoka_pillar.jpg";
import { default as fssai } from "../assets/digilocker/fssai.png";

import { default as placeHolder } from "../assets/placeholder.svg";

import { default as loading } from "../assets/common/loading.gif";
import Tile from "../common-util/Tile";

const ConsentPage = ({
  allSelectedGigApps,
  allSelectedBanks,
  allSocialApps,
  allDigilockerSelections,
}) => {
  const navigate = useNavigate();

  const [isConsented, setIsConsented] = useState();

  const [otp, setOTP] = useState("");

  const [isGenerateOtp, setIsGenerateOTP] = useState(false);

  const toggleConsent = () => {
    if (!isGenerateOtp) {
      setIsConsented(!isConsented);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  const getContainerOfSelectedTiles = (selectedApps) => {
    var tiles = selectedApps.map((element) => {
      return getTile(element);
    });

    return tiles;
  };

  const getTile = (k) => {
    var img = null;
    var name = null;

    switch (k) {
      case "swiggy":
        img = swiggy;
        name = "Swiggy";
        break;
      case "zomato":
        img = zomato;
        name = "Zomato";
        break;
      case "blinkit":
        img = blinkit;
        name = "Blinkit";
        break;
      case "uber":
        img = uber;
        name = "Uber";
        break;
      case "ola":
        img = ola;
        name = "Ola";
        break;
      case "porter":
        img = porter;
        name = "Porter";
        break;
      case "uncle_delivery":
        img = uncle_delivery;
        name = "Uncle Delivery";
        break;
      case "facebook":
        img = facebook;
        name = "Facebook";
        break;
      case "x":
        img = x;
        name = "X";
        break;
      case "linkedin":
        img = linkedin;
        name = "Linkedin";
        break;
      case "whatsapp":
        img = whatsapp;
        name = "whatsapp";
        break;
      case "axis":
        img = axis;
        name = "Axis Bank";
        break;
      case "hdfc":
        img = hdfc;
        name = "HDFC Bank";
        break;
      case "icici":
        img = icici;
        name = "ICICI";
        break;
      case "indusind":
        img = indusind;
        name = "Indusind";
        break;
      case "driving_license":
        img = driving_license;
        name = "Driving License";
        break;
      case "aadhaar":
        img = aadhaar;
        name = "Aadhaar";
        break;
      case "e_shram":
        img = e_shram;
        name = "E-Shram";
        break;
      case "fssai":
        img = fssai;
        name = "FSSAI";
        break;
      default:
        img = placeHolder;
        name = "Placeholder";
        break;
    }

    return (
      <Tile
        img_src={img}
        alt={name}
        tileName={name}
        callback_func={() => {}}
        show_checkbox={false}
      />
    );
  };

  const hasAtLeastOneSegment = () => {
    return (
      allSelectedGigApps.length > 0 ||
      allSelectedBanks.length > 0 ||
      allSocialApps.length > 0 ||
      allDigilockerSelections.length > 0
    );
  };

  const getButtonClass = () => {
    return isConsented && hasAtLeastOneSegment()
      ? "onboard-enabled-button"
      : "onboard-disabled-button";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCheckBoxClass = () => {
    if (!isGenerateOtp) {
      return "onboard-consent-checkbox";
    } else {
      return "onboard-consent-checkbox-grayed";
    }
  };

  const getGenerateOTPOrNextButton = () => {
    if (!isGenerateOtp) {
      return (
        <div className="centeredElement">
          <button
            onClick={() => setIsGenerateOTP(true)}
            className={getButtonClass()}
          >
            Generate OTP
          </button>
        </div>
      );
    } else {
      return (
        <div className="onboard-otp-container">
          <h5
            style={{ margin: "1%", padding: "1%", marginLeft: "5%" }}
            htmlFor="password"
          >
            OTP
          </h5>
          <input
            style={{
              margin: "1%",
              padding: "1%",
              width: "40%",
              marginLeft: "5%",
            }}
            type="password"
            id="password"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter your OTP"
            required
            className="onboard-otp_box"
          />
          <button className="onboard-proceed-button" onClick={handleSubmit}>
            Proceed
          </button>
        </div>
      );
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, Math.floor(Math.random() * (300 + 1) + 50));
  }, []);

  if (isLoading) {
    return (
      <div className="onboard-info-box">
        <form>
          <h2 className="onboard-logo">
            <img
              src="https://monnai.com/wp-content/uploads/2024/02/gradient-logo.svg"
              alt="Monnai"
              width={150}
              align="left"
            ></img>
          </h2>

          <div className="onboard-grouped">
            <div className="centeredElement">
              <img className="onboard-icon" src={loading} alt="Loading" />
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="onboard-info-box-consent">
      <form onSubmit={handleSubmit}>
        <h2 className="onboard-logo">
          <img
            src="https://monnai.com/wp-content/uploads/2024/02/gradient-logo.svg"
            alt="Monnai"
            width={150}
            align="left"
          ></img>
        </h2>

        <h5 style={{ textAlign: "left" }}>
          Please check through the selections made for providing consent.
        </h5>

        <div className="onboard-grouped">
          <h5>Profession apps opted</h5>
          <div className="onboard-container">
            {getContainerOfSelectedTiles(allSelectedGigApps)}
          </div>
        </div>

        <div className="onboard-grouped">
          <h5>Bank accounts opted</h5>
          <div className="onboard-container">
            {getContainerOfSelectedTiles(allSelectedBanks)}
          </div>
        </div>

        <div className="onboard-grouped">
          <h5>Social/Ecommerce apps opted</h5>
          <div className="onboard-container">
            {getContainerOfSelectedTiles(allSocialApps)}
          </div>
        </div>

        <div className="onboard-grouped">
          <h5>Documents opted</h5>
          <div className="onboard-container">
            {getContainerOfSelectedTiles(allDigilockerSelections)}
          </div>
        </div>

        <div className="onboard-grouped">
          <label className="onboard-label">
            Please check the below consent to proceed.
          </label>
          <div
            className="onboard-consent-group"
            onClick={() => toggleConsent()}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className={getCheckBoxClass()}
              checked={isConsented}
              onClick={toggleConsent}
            />
            <p style={{ fontSize: "13px" }}>I consent to let Monnai to fetch</p>
          </div>

          <div className="onboard-consent-group" style={{ marginTop: "-2%" }}>
            <ul>
              <li>
                detailed transactions from selected banking/financial
                applications for the six months
              </li>
              <li>
                detailed transactions from other selected applications for the
                last one year
              </li>
              <li>
                other detailed data for above selected segments whereever
                applicable
              </li>
            </ul>
          </div>
        </div>
        {getGenerateOTPOrNextButton()}
      </form>
    </div>
  );
};

export default ConsentPage;
