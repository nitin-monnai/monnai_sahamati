import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as axis } from "../../assets/banks/axis.png";
import { default as hdfc } from "../../assets/banks/hdfc.png";
import { default as icici } from "../../assets/banks/icici.webp";
import { default as indusind } from "../../assets/banks/indusind.png";
import { default as pnb } from "../../assets/banks/pnb.png";
import { default as sbi } from "../../assets/banks/sbi.webp";

import { default as loading } from "../../assets/common/loading.gif";
import Tile from "../../common-util/Tile";

const BankDocsOnboard = ({ selectedBanks, setSelectedBanks, checkedItems }) => {
  const navigate = useNavigate();

  const toggleOnClick = (key_to_toggle) => {
    setSelectedBanks((prevState) => ({
      ...prevState,
      [key_to_toggle]: !selectedBanks[key_to_toggle],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/consentPage");
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
          Please select the banks for which you grant us permission to retrieve
          transactions information from.
        </h5>

        <div className="onboard-grouped">
          <h5>Banks that you have an active account in.</h5>
          <div className="onboard-container">
            <Tile
              checked_state={selectedBanks.axis}
              img_src={axis}
              callback_func={toggleOnClick}
              func_param="axis"
              name="bank"
              alt="Axis bank"
              tileName="Axis Bank"
            />

            <Tile
              checked_state={selectedBanks.icici}
              img_src={icici}
              callback_func={toggleOnClick}
              func_param="icici"
              name="bank"
              alt="ICICI bank"
              tileName="ICICI Bank"
            />
          </div>
        </div>

        <div className="onboard-grouped">
          <h5>Other popular banks that you may have an active account in.</h5>
          <div className="onboard-container">
            <Tile
              checked_state={selectedBanks.hdfc}
              img_src={hdfc}
              callback_func={toggleOnClick}
              func_param="hdfc"
              name="bank"
              alt="HDFC bank"
              tileName="HDFC Bank"
            />

            <Tile
              checked_state={selectedBanks.indusind}
              img_src={indusind}
              callback_func={toggleOnClick}
              func_param="indusind"
              name="bank"
              alt="IndusInd bank"
              tileName="IndusInd Bank"
            />

            <Tile
              checked_state={false}
              img_src={pnb}
              callback_func={() => {}}
              name="bank"
              alt="PNB"
              tileName="PNB"
            />

            <Tile
              checked_state={false}
              img_src={sbi}
              callback_func={() => {}}
              name="bank"
              alt="SBI"
              tileName="SBI"
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

export default BankDocsOnboard;
