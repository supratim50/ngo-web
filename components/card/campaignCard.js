import { FaWallet, FaMapMarkerAlt } from "react-icons/fa";
// component
import PrimaryButton from "../buttons/primaryButton";

const CampaignCard = ({ imageUrl, title, money, location, classList }) => {
  return (
    <div
      className={`card border-0 mx-auto h-100 ${classList ? classList : ""}`}
      style={{ maxWidth: 304, borderRadius: 15, minHeight: 597 }}
    >
      <img
        style={{ maxHeight: 347, borderRadius: 15 }}
        className="card-img-top"
        src={imageUrl}
      />
      <div className="card-body px-0 d-flex flex-column justify-content-between h-100">
        <h3 className="card-title secondary-heading font-weight-bold mb-0 pb-2">
          {title}
        </h3>

        <div>
          <div className="d-flex justify-content-between mt-4">
            <p className="text-muted mb-4">
              <i style={{ fontSize: 20 }} className="color-black">
                <FaWallet />
              </i>
              &nbsp; {money} raised
            </p>
            <p className="paragraph-text mb-4">
              <i style={{ fontSize: 20 }} className="color-black">
                <FaMapMarkerAlt />
              </i>
              &nbsp; {location}
            </p>
          </div>
          <PrimaryButton text="donate now" classList="btn-big" />
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
