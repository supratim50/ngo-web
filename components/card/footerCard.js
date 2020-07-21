import { FiPhoneIncoming } from "react-icons/fi";

const FooterCard = () => {
  return (
    <div className="footer-card row mx-auto">
      <div className="col-12 col-md-4 px-0">
        {/* #1 */}
        <div className={`row mx-auto`}>
          <div className="col-1 pl-0 text-primary">
            <i style={{ fontSize: 25 }}>
              <FiPhoneIncoming />
            </i>
          </div>
          <div className="col-11 pr-0">
            <h3 className="heading text-uppercase font-weight-bold mb-2">
              24/7 Donor Support
            </h3>
            <p className="small-paragraph text-muted mb-0">
              Just a message away for information or assistance to make giving
              seamless for you.
            </p>
          </div>
        </div>
        {/* -------- */}
      </div>
      <div className="col-12 col-md-4 px-0 mt-5 mt-md-0">
        {/* #2 */}
        <div className={`row mx-auto`}>
          <div className="col-1 pl-0 text-primary">
            <i style={{ fontSize: 25 }}>
              <FiPhoneIncoming />
            </i>
          </div>
          <div className="col-11 pr-0">
            <h3 className="heading text-uppercase font-weight-bold mb-2">
              Give Assured
            </h3>
            <p className="small-paragraph text-muted mb-0">
              Just a message away for information or assistance to make giving
              seamless for you.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 px-0 mt-5 mt-md-0">
        {/* #3 */}
        <div className={`row mx-auto`}>
          <div className="col-1 pl-0 text-primary">
            <i style={{ fontSize: 25 }}>
              <FiPhoneIncoming />
            </i>
          </div>
          <div className="col-11 pr-0">
            <h3 className="heading text-uppercase font-weight-bold mb-2">
              100% Guaranteed Updates
            </h3>
            <p className="small-paragraph text-muted mb-0">
              Just a message away for information or assistance to make giving
              seamless for you.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-card {
          padding: 41px 37px !important;
          background-color: #fff;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.02),
            0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02),
            0px 24px 32px rgba(0, 0, 0, 0.02);
          border-radius: 8px;
          margin-top: -88px !important;
        }
        .heading {
          font-size: 14px !important;
          letter-spacing: 0.115em !important;
          line-height: 155% !important;
        }
        @media screen and (max-width: 767px) {
          .footer-card {
            padding: 40px 20px !important;
          }
          .paragraph {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default FooterCard;
