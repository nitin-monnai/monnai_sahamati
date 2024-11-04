import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { default as loading } from "../assets/common/loading.gif";

import { default as tick } from "../assets/tick.gif";
import { default as sub } from "../assets/tiny/submarine.gif";
import { default as c1 } from "../assets/tiny/c1.gif";
import { default as c2 } from "../assets/tiny/c2.gif";
import { default as c3 } from "../assets/tiny/c3.gif";
import { default as f1 } from "../assets/tiny/f1.gif";
import { default as f2 } from "../assets/tiny/f2.gif";
import { default as f3 } from "../assets/tiny/f3.gif";
import { default as f4 } from "../assets/tiny/f4.gif";
import createConsent from "../sahamati/CreateConsent";
import consentHandle from "../sahamati/ConsentHandle";
import consentFetch from "../sahamati/ConsentFetch";
import fiRequest from "../sahamati/FiRequest";
import fiFetch from "../sahamati/FiFetch";
import driver_demo_data from "./DriverDemoData";
import delivery_demo_data from "./DeliveryDemoData";

const ConfirmationPage = ({ phoneNumber, setData }) => {
  const navigate = useNavigate();

  // setData((prevState) => ({
  //   ...prevState,
  //   ...driver_data,
  // }));

  // setData(driver_data);

  // Handle form submission
  const handleClick = async () => {
    try {
      const scenario =
        phoneNumber === "9876543210" ? "scenario_1" : "scenario_2";
      await createConsent(scenario, phoneNumber);

      const response2 = await consentHandle(scenario);

      // Currently relying as is on demo data
      // Needs to be replaced with callback mechanism
      console.log(response2);
      await consentFetch(scenario);

      const fiRequestResp = await fiRequest(scenario);
      const sessionId = fiRequestResp?.sessionId;

      await fiFetch(scenario, sessionId);
    } catch (e) {
      console.log(e);
    }

    console.log("PhoneNumber", phoneNumber);
    phoneNumber === "9876543210"
      ? setData(driver_demo_data)
      : setData(delivery_demo_data);

    navigate("/profile");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, Math.floor(Math.random() * (1000 + 1) + 500));
  }, []);

  if (isLoading) {
    return (
      <div className="onboard-info-box" style={{ width: "100%" }}>
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
    <div>
      <div className="onboard-info-box">
        <form>
          <h2 className="onboard-logo">
            <a
              href="https://monnai.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://monnai.com/wp-content/uploads/2024/02/gradient-logo.svg"
                alt="Monnai"
                width={150}
                align="left"
              ></img>
            </a>
          </h2>

          <div className="centeredElement">
            <img
              style={{
                width: "30%",
                height: "30%",
              }}
              className="onboard-icon"
              src={tick}
              alt="COMPLETED"
            />
          </div>

          <h2>Thank you for filling out the details!</h2>
          <h6 style={{ textAlign: "center" }}>
            Your submission has been recorded
          </h6>

          <p style={{ fontSize: "10px", float: "right", marginBottom: "10px" }}>
            *Scroll below for FIU view
          </p>
        </form>
      </div>
      <div className="centeredElement">
        <button
          style={{ margin: "100px", width: "20%" }}
          className="onboard-login-btn"
          onClick={handleClick}
        >
          *Click for FIU View
        </button>
      </div>
      <div className="onboard-sub-back">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            href="https://www.linkedin.com/in/anujginfo/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="onboard-icon-sub" src={c1} alt="WOW TOO DEEP" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-shravan-k-s/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="onboard-icon-sub" src={f1} alt="WOW TOO DEEP" />
          </a>
          <a
            href="https://www.linkedin.com/in/veeresh-hoogar-3a9396194/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="onboard-icon-sub" src={sub} alt="WOW TOO DEEP" />
          </a>

          <a
            href="https://www.linkedin.com/in/nitin-angadi/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="onboard-icon-sub" src={f4} alt="WOW TOO DEEP" />
          </a>
          <h6>Oops! You've dived too deep. No Titanic down here. Float up</h6>
          <a
            href="https://www.linkedin.com/in/avinash-kumar-pgdba/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="onboard-icon-sub" src={c2} alt="WOW TOO DEEP" />
          </a>
          <img className="onboard-icon-sub" src={f2} alt="WOW TOO DEEP" />
          <img className="onboard-icon-sub" src={f3} alt="WOW TOO DEEP" />
          <img className="onboard-icon-sub" src={c3} alt="WOW TOO DEEP" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
