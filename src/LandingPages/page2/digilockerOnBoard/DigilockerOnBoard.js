import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as e_shram } from "../../assets/digilocker/e-Shram.png";
import { default as aadhaar } from "../../assets/digilocker/aadhaar.svg";
import { default as digilocker } from "../../assets/digilocker/digilocker.png";
import { default as ashoka_pillar } from "../../assets/digilocker/ashoka_pillar.jpg";
import { default as income_tax } from "../../assets/digilocker/income_tax.png";
import { default as fssai } from "../../assets/digilocker/fssai.png";
import { default as skill_india } from "../../assets/digilocker/skillIndia.png";

import { default as placeholder } from "../../assets/placeholder.svg";
import { default as loading } from "../../assets/common/loading.gif";
import Tile from "../../common-util/Tile";
import PlaceHolderTile from "../../common-util/PlaceHolderTile";

const DigilockerOnBoard = ({
  setSelectedDigilockerItems,
  selectedDigilockerItems,
  checkedItems,
}) => {
  const navigate = useNavigate();

  const toggleOnClick = (key_to_toggle) => {
    setSelectedDigilockerItems((prevState) => ({
      ...prevState,
      [key_to_toggle]: !selectedDigilockerItems[key_to_toggle],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/bankAndDocsOnboard");
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

        <div className="onboard-grouped">
          <div style={{ display: "flex" }}>
            <h5 style={{ textAlign: "left" }}>
              Please select the documents that you consent to grant us
              permission to retrieve from
            </h5>

            <img
              src={digilocker}
              alt=""
              style={{
                height: "20px",
                paddingLeft: "5px",
                paddingTop: "15px",
              }}
            />
          </div>

          <div className="onboard-container">
            <Tile
              checked_state={selectedDigilockerItems.e_shram}
              img_src={e_shram}
              callback_func={toggleOnClick}
              func_param="e_shram"
              name="digilocker-entity"
              alt="E-Shram"
              tileName="E-Shram"
            />

            <Tile
              checked_state={selectedDigilockerItems.aadhaar}
              img_src={aadhaar}
              callback_func={toggleOnClick}
              func_param="aadhaar"
              name="digilocker-entity"
              alt="Aadhaar"
              tileName="Aadhaar"
            />

            <Tile
              checked_state={selectedDigilockerItems.driving_license}
              img_src={ashoka_pillar}
              callback_func={toggleOnClick}
              func_param="driving_license"
              name="digilocker-entity"
              alt="Driving License"
              tileName="Driving License"
            />

            <Tile
              checked_state={false}
              img_src={ashoka_pillar}
              callback_func={() => {}}
              func_param="driving_license"
              name="digilocker-entity"
              alt="Vehicle RC"
              tileName="Vehicle RC"
            />

            <PlaceHolderTile />
            <PlaceHolderTile />
          </div>
        </div>

        <div className="onboard-grouped">
          <h5 style={{ textAlign: "left" }}>
            Please select the other documents/credentials that you consent to
            grant us permission to retrieve.
          </h5>

          <div className="onboard-container">
            <Tile
              checked_state={false}
              img_src={skill_india}
              callback_func={() => {}}
              name="digilocker-entity"
              alt="Skill India"
              tileName="Skill India"
            />

            <Tile
              checked_state={false}
              img_src={income_tax}
              callback_func={() => {}}
              name="digilocker-entity"
              alt="Form 16"
              tileName="Form 16"
            />

            <Tile
              checked_state={false}
              img_src={fssai}
              callback_func={() => {}}
              name="digilocker-entity"
              alt="FSSAI"
              tileName="FSSAI"
            />

            <Tile
              checked_state={false}
              img_src={ashoka_pillar}
              callback_func={() => {}}
              name="digilocker-entity"
              alt="GST"
              tileName="GST certificate"
            />
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

export default DigilockerOnBoard;
