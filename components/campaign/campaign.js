import { FiChevronDown } from "react-icons/fi";
// components
import PrimaryHeading from "../heading/primaryHeading";
import CampaignCard from "../card/campaignCard";

const Campaign = () => {
  return (
    <section className="section-pt section-pb">
      <div className="container">
        <PrimaryHeading
          text="Ongoing Campaigns"
          classList="text-center font-weight-bold text-capitalize"
        />
        <div className="row margin-top-md">
          <div className="col-12 col-lg-4 col-md-6">
            <CampaignCard
              imageUrl="/assets/images/cardImg_1.png"
              title="Sponsor food expenses of a destitute and abandoned senior citizen"
              money="$12,000"
              location="Bhopal"
            />
          </div>
          <div className="cpl-12 col-lg-4 col-md-6">
            <CampaignCard
              imageUrl="/assets/images/cardImg_1.png"
              title="Gift education to unpriviledged children"
              money="$12,000"
              location="Bhopal"
              classList="pt-5 pt-md-0"
            />
          </div>
          <div className="cpl-12 col-lg-4 col-md-6">
            <CampaignCard
              imageUrl="/assets/images/cardImg_1.png"
              title="Help a mentally challenged child reach school"
              money="$12,000"
              location="Bhopal"
              classList="pt-5 pt-lg-0"
            />
          </div>
        </div>
        <div className="margin-top-md text-center">
          <a className="secondary-heading font-weight-bold mb-0">
            See More{" "}
            <i className="secondary-heading">
              <FiChevronDown />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
