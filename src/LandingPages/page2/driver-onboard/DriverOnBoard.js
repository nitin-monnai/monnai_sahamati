import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as ola } from "../../assets/driver-icons/ola-driver.svg";
import { default as uber } from "../../assets/driver-icons/uber-driver.webp";
import { default as uncle_delivery } from "../../assets/driver-icons/uncle-delivery.png";
import { default as porter } from "../../assets/driver-icons/porter.png";
import { default as quick_ride } from "../../assets/driver-icons/quick-ride.png";
import { default as blusmart } from "../../assets/driver-icons/blusmart.png";
import { default as lyft } from "../../assets/driver-icons/lyft.webp";
import { default as yatri } from "../../assets/driver-icons/yatri.webp";
import { default as rapido } from "../../assets/driver-icons/rapido.png";
import { default as loading } from "../../assets/common/loading.gif";
import Tile from "../../common-util/Tile";
import PlaceHolderTile from "../../common-util/PlaceHolderTile";

const Page2DriverOnBoard = ({
  selectedDriverApps,
  setSelectedDriverApps,
  checkedItems,
}) => {
  const navigate = useNavigate();

  const toggleOnClick = (key_to_toggle) => {
    setSelectedDriverApps((prevState) => ({
      ...prevState,
      [key_to_toggle]: !selectedDriverApps[key_to_toggle],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/deliveryPartnerOnBoard");

    if (checkedItems.delivery_boy) {
      navigate("/deliveryPartnerOnBoard");
    } else {
      navigate("/socialOnboard");
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
          <h5>Driver apps that you have an active registration.</h5>
          <div className="onboard-container">
            <Tile
              checked_state={selectedDriverApps.ola}
              img_src={ola}
              callback_func={toggleOnClick}
              func_param="ola"
              name="driver"
              alt="Ola"
              tileName="Ola"
            />

            <Tile
              checked_state={selectedDriverApps.uber}
              img_src={uber}
              callback_func={toggleOnClick}
              func_param="uber"
              name="driver"
              alt="Uber"
              tileName="Uber"
            />

            <Tile
              checked_state={selectedDriverApps.porter}
              img_src={porter}
              callback_func={toggleOnClick}
              func_param="porter"
              name="driver"
              alt="Porter"
              tileName="Porter"
            />
          </div>
        </div>

        <div className="onboard-grouped">
          <h5>
            Driver apps in which you may also hold an active registration.
          </h5>
          <br />
          <div className="onboard-container">
            <Tile
              checked_state={selectedDriverApps.uncle_delivery}
              img_src={uncle_delivery}
              callback_func={toggleOnClick}
              func_param="uncle_delivery"
              name="driver"
              alt="Uncle Delivery"
              tileName="Uncle Delivery"
            />

            <Tile
              checked_state={false}
              img_src={quick_ride}
              callback_func={() => {}}
              alt="Quick Ride"
              tileName="Quick Ride"
            />

            <Tile
              checked_state={false}
              img_src={blusmart}
              callback_func={() => {}}
              alt="Blusmart"
              tileName="Blusmart"
            />

            <Tile
              checked_state={false}
              img_src={lyft}
              callback_func={() => {}}
              alt="Lyft"
              tileName="Lyft"
            />

            <Tile
              checked_state={false}
              img_src={yatri}
              callback_func={() => {}}
              alt="Yatri"
              tileName="Yatri"
            />

            <Tile
              checked_state={false}
              img_src={rapido}
              callback_func={() => {}}
              alt="Rapido"
              tileName="Rapido"
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

export default Page2DriverOnBoard;
