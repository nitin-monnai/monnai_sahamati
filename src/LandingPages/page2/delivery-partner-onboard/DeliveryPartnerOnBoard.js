import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { default as swiggy } from "../../assets/delivery-partner-icons/swiggy.webp";
import { default as zomato } from "../../assets/delivery-partner-icons/zomato.png";
import { default as amazon_flex } from "../../assets/delivery-partner-icons/amazon_flex.webp";
import { default as blinkit } from "../../assets/delivery-partner-icons/blinkit.webp";
import { default as field_x } from "../../assets/delivery-partner-icons/field_x.webp";
import { default as flipkart_xtra } from "../../assets/delivery-partner-icons/flipkart_xtra.webp";
import { default as uber_eats } from "../../assets/delivery-partner-icons/uber_eats.webp";

import { default as loading } from "../../assets/common/loading.gif";
import PlaceHolderTile from "../../common-util/PlaceHolderTile";
import Tile from "../../common-util/Tile";

const Page2DeliveryPartnerOnBoard = ({
  selectedDeliveryExecApps,
  setSelectedDeliveryExecApps,
  checkedItems,
}) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/socialOnboard");
  };

  const toggleOnClick = (key_to_toggle) => {
    setSelectedDeliveryExecApps((prevState) => ({
      ...prevState,
      [key_to_toggle]: !selectedDeliveryExecApps[key_to_toggle],
    }));
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

  return (
    <div className="onboard-info-box">
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
          Please select the apps for which you grant us permission to retrieve
          information from.
        </h5>

        <div className="onboard-grouped">
          <h5>Delivery partner apps that you have an active registration.</h5>
          <br />
          <div className="onboard-container">
            <Tile
              checked_state={selectedDeliveryExecApps.swiggy}
              img_src={swiggy}
              callback_func={toggleOnClick}
              func_param="swiggy"
              name="delivery_partner"
              alt="Swiggy"
              tileName="Swiggy"
            />

            <Tile
              checked_state={selectedDeliveryExecApps.zomato}
              img_src={zomato}
              callback_func={toggleOnClick}
              func_param="zomato"
              name="delivery_partner"
              alt="Zomato"
              tileName="Zomato"
            />
          </div>
        </div>

        <div className="onboard-grouped">
          <div>
            <h5>
              Delivery partner apps in which you may also hold an active
              registration.
            </h5>
            <br />
            <div className="onboard-container">
              <Tile
                checked_state={selectedDeliveryExecApps.blinkit}
                img_src={blinkit}
                callback_func={toggleOnClick}
                func_param="blinkit"
                name="delivery_partner"
                alt="Blinkit"
                tileName="Blinkit"
              />

              <Tile
                checked_state={false}
                img_src={amazon_flex}
                callback_func={() => {}}
                name="delivery_partner"
                alt="Amazon Flex"
                tileName="Amazon Flex"
              />

              <Tile
                checked_state={false}
                img_src={field_x}
                callback_func={() => {}}
                name="delivery_partner"
                alt="Field X"
                tileName="Field X"
              />

              <Tile
                checked_state={false}
                img_src={flipkart_xtra}
                callback_func={() => {}}
                name="delivery_partner"
                alt="Flipkart Xtra"
                tileName="Flipkart Xtra"
              />

              <Tile
                checked_state={false}
                img_src={uber_eats}
                callback_func={() => {}}
                name="delivery_partner"
                alt="Uber Eats"
                tileName="Uber Eats"
              />

              <PlaceHolderTile />
            </div>
          </div>
        </div>

        <div className="centeredElement">
          <button type="submit" className="onboard-enabled-button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page2DeliveryPartnerOnBoard;
