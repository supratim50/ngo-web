const WellfareCircle = ({ classList, heading, subHeading, color }) => {
  return (
    <div
      className={`circle rounded-circle d-flex justify-content-center align-items-center ${
        classList ? classList : ""
      }`}
    >
      <div>
        <h2
          className={`primary-heading font-weight-bold mb-1 text-black text-center ${color}`}
        >
          {heading}
        </h2>
        <p className="text-paragraph text-muted mb-0 text-center">
          {subHeading}
        </p>
      </div>
      <style jsx>{`
        .circle {
          width: 198px;
          height: 198px;
          background-color: #fff;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01),
            0px 2px 6px rgba(0, 0, 0, 0.01), 0px 16px 24px rgba(0, 0, 0, 0.02);
        }
        @media screen and (max-width: 991px) {
          .circle {
            width: 155px;
            height: 155px;
          }
        }
        .even {
          margin-top: 96px !important;
        }
        @media screen and (max-width: 767px) {
          .even {
            margin-top: 0px !important;
          }
        }

        .blue {
          color: #013ce8 !important;
        }
        .red {
          color: #fe1725 !important;
        }
        .yellow {
          color: #ffcc48 !important;
        }
        .violate {
          color: #8f00ff !important;
        }
      `}</style>
    </div>
  );
};

export default WellfareCircle;
