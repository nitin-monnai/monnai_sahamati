import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as facebook } from "../../assets/social/facebook.webp";
import { default as x } from "../../assets/social/x.webp";
import { default as flipkart } from "../../assets/social/flipkart.jpeg";
import { default as linkedin } from "../../assets/social/linkedin.webp";

import { default as amazon } from "../../assets/social/amazon.webp";
import { default as instagram } from "../../assets/social/instagram.webp";
import { default as telegram } from "../../assets/social/telegram.webp";
import { default as whatsapp } from "../../assets/social/whatsapp.webp";

import { default as loading } from "../../assets/common/loading.gif";
import Tile from "../../common-util/Tile";
import PlaceHolderTile from "../../common-util/PlaceHolderTile";
const SocialOnboard = ({
  selectedSocialApps,
  setSelectedSocialApps,
  checkedItems,
}) => {
  const navigate = useNavigate();

  const toggleOnClick = (key_to_toggle) => {
    setSelectedSocialApps((prevState) => ({
      ...prevState,
      [key_to_toggle]: !selectedSocialApps[key_to_toggle],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/digilockerOnBoard");
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
          Please select the apps/platforms for which you grant us permission to
          retrieve information from.
        </h5>

        <div className="onboard-grouped">
          <h5>
            Social and ecommerce apps that you have an active registration.
          </h5>
          <div className="onboard-container">
            <Tile
              checked_state={selectedSocialApps.facebook}
              img_src={facebook}
              callback_func={toggleOnClick}
              func_param="facebook"
              name="social-media"
              alt="Facebook"
              tileName="Facebook"
            />

            <Tile
              checked_state={selectedSocialApps.whatsapp}
              img_src={whatsapp}
              callback_func={toggleOnClick}
              func_param="whatsapp"
              name="social-media"
              alt="Whatsapp"
              tileName="Whatsapp"
            />

            <Tile
              checked_state={selectedSocialApps.linkedin}
              img_src={linkedin}
              callback_func={toggleOnClick}
              func_param="linkedin"
              name="social-media"
              alt="Linkedin"
              tileName="Linkedin"
            />
          </div>
        </div>
        <div className="onboard-grouped">
          <h5>
            Social and ecommerce apps in which you may also hold an active
            registration.
          </h5>
          <br />
          <div className="onboard-container">
            <Tile
              checked_state={selectedSocialApps.x}
              img_src={x}
              callback_func={toggleOnClick}
              func_param="x"
              name="social-media"
              alt="X (formerly Twitter)"
              tileName="X"
            />

            <Tile
              checked_state={false}
              img_src={amazon}
              callback_func={() => {}}
              name="social-media"
              alt="Amazon"
              tileName="Amazon"
            />

            <Tile
              checked_state={false}
              img_src={flipkart}
              callback_func={() => {}}
              name="social-media"
              alt="Flipkart"
              tileName="Flipkart"
            />

            <Tile
              checked_state={false}
              img_src={instagram}
              callback_func={() => {}}
              name="social-media"
              alt="Instagram"
              tileName="Instagram"
            />

            <Tile
              checked_state={false}
              img_src={telegram}
              callback_func={() => {}}
              name="social-media"
              alt="Telegram"
              tileName="Telegram"
            />

            <PlaceHolderTile />
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

export default SocialOnboard;
