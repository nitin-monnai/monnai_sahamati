import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as deliveryBoy } from "../assets/icons/delivery-boy.svg";
import { default as taxi } from "../assets/icons/taxi.svg";
import { default as merchant } from "../assets/icons/merchant.svg";
import { default as serviceProfessional } from "../assets/icons/service-person.svg";

import { default as loading } from "../assets/common/loading.gif";
import Tile from "../common-util/Tile";
import PlaceHolderTile from "../common-util/PlaceHolderTile";

const Page1 = ({
  email,
  setEmail,
  name,
  setName,
  checkedItems,
  setCheckedItems,
}) => {
  const navigate = useNavigate();

  const [isConsented, setIsConsented] = useState();
  const [otp, setOTP] = useState("");

  const [isGenerateOtp, setIsGenerateOTP] = useState(false);

  const toggleOnClick = (key_to_toggle) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [key_to_toggle]: !checkedItems[key_to_toggle],
    }));
  };

  const toggleConsent = () => {
    if (!isGenerateOtp) {
      setIsConsented(!isConsented);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const getButtonClass = () => {
    return isConsented ? "onboard-enabled-button" : "onboard-disabled-button";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkedItems.driver) {
      navigate("/driverOnBoard");
    } else if (checkedItems.delivery_boy) {
      navigate("/deliveryPartnerOnBoard");
    } else {
      navigate("/socialOnboard");
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

  const getCheckBoxClass = () => {
    if (!isGenerateOtp) {
      return "onboard-consent-checkbox";
    } else {
      return "onboard-consent-checkbox-grayed";
    }
  };

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
          <div className="onboard-form-group">
            <label className="onboard-label">Full Name</label>
            <input
              type="fullName"
              id="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="onboard-inputbox"
            />
          </div>
          <div className="onboard-form-group">
            <label className="onboard-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="onboard-inputbox"
            />
          </div>
        </div>

        <div className="onboard-grouped">
          <div>
            <label className="onboard-label">
              What best defines the nature of your job ?
            </label>
            <br />
            <br />
            <div className="onboard-container">
              <Tile
                checked_state={checkedItems.driver}
                img_src={taxi}
                callback_func={toggleOnClick}
                func_param="driver"
                name="driver"
                alt="Taxi"
                tileName="Driver"
              />

              <Tile
                checked_state={checkedItems.delivery_boy}
                img_src={deliveryBoy}
                callback_func={toggleOnClick}
                func_param="delivery_boy"
                name="delivery_boy"
                alt="Delivery Boy"
                tileName="Delivery Associate"
              />

              <Tile
                checked_state={checkedItems.merchant}
                img_src={merchant}
                callback_func={toggleOnClick}
                func_param="merchant"
                name="merchant"
                alt="Small Scale Business Merchant"
                tileName="Shop/Business Merchant"
              />

              <Tile
                checked_state={false}
                img_src={serviceProfessional}
                callback_func={() => {}}
                func_param=""
                name="Service_Professional"
                alt="Service Professional"
                tileName="Service Professional"
              />

              <PlaceHolderTile />
              <PlaceHolderTile />
              <PlaceHolderTile />
            </div>
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
            <p>
              I consent to let Monnai discover my registrations/accounts held in
            </p>
          </div>

          <div className="onboard-consent-group" style={{ marginTop: "-2%" }}>
            <ul>
              <li>above selected app segments.</li>
              <li>certain social media platforms.</li>
              <li>banking platforms.</li>
              <li>telecommunications networks service providers.</li>
            </ul>
          </div>
        </div>

        {getGenerateOTPOrNextButton()}
      </form>
    </div>
  );
};

export default Page1;
