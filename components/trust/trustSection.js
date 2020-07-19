// components
import PrimaryHeading from "../heading/primaryHeading";
import SecondaryButton from "../buttons/secondaryButton";
import TrustCompany from "../card/trustCompany";

const TrustSection = () => {
  return (
    <section className="trust-section position-relative overflow-hidden">
      {/* svg */}
      <img
        className="circleSvg position-absolute"
        src="/assets/images/circleSvg.svg"
      />
      {/* ============= content ================ */}
      <div className="container" style={{ zIndex: 2 }}>
        <div className="row mx-auto">
          <div className="col-12 col-lg-5">
            <PrimaryHeading
              text="Trusted by Millions"
              classList="font-weight-bold text-black"
            />
            <p className="paragraph-text text-black pt-4 mt-2">
              The full monty the wireless bog-standard bevvy lurgy David, mufty
              Oxford blatant A bit of how’s your father.
            </p>
            <SecondaryButton text="See more Partners" classList="btn-small" />
          </div>
          {/* company iages */}
          <div className="col-12 col-lg-7">
            <div className="row company-box mx-auto">
              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_1.png" />
              </div>
              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_2.png" />
              </div>
              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_3.png" />
              </div>

              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_4.png" />
              </div>
              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_5.png" />
              </div>
              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_6.png" />
              </div>

              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_7.png" />
              </div>
              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_8.png" />
              </div>
              <div className="col-6 col-md-4 px-0">
                <TrustCompany imageUrl="/assets/images/trust_9.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .trust-section {
          padding: 113px 0;
          background-color: #f7f8fc;
        }

        .paragraph-text {
          max-width: 358px;
          margin-bottom: 50px;
        }
        @media screen and (max-width: 991px) {
          .paragraph-text {
            max-width: 100%;
            margin-bottom: 32px;
          }
          .company-box {
            padding-top: 196px;
          }
        }

        @media screen and (max-width: 767px) {
          .trust-section {
            padding: 90px 0;
          }
        }
         {
          /* =================== svg =================== */
        }
        .circleSvg {
          top: -150px;
          left: -150px;
        }
        @media screen and (min-width: 1700px) {
          .circleSvg {
            transform: scale(1.1);
            left: -80px;
          }
        }
        @media screen and (max-width: 1590px) {
          .circleSvg {
            left: -200px;
          }
        }
        @media screen and (max-width: 1400px) {
          .circleSvg {
            left: -300px;
          }
        }
        @media screen and (max-width: 1200px) {
          .circleSvg {
            left: -330px;
          }
        }
        @media screen and (max-width: 1124px) {
          .circleSvg {
            left: -350px;
          }
        }
        @media screen and (max-width: 1080px) {
          .circleSvg {
            left: -390px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
