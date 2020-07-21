// import { useLaxElement } from "../../pages/use-lax";

// components
import PrimaryHeading from "../heading/primaryHeading";

const AboutSection = () => {
  // const ref = useLaxElement();

  return (
    <section
      className="section-pt section-pb position-relative overflow-hidden"
      style={{
        backgroundColor: "#F7F8FC",
      }}
    >
      {/* background svg */}

      {/* <img
        ref={ref}
        data-lax-preset="leftToRight fadeInOut"
        src="/assets/images/bubbles.png"
        className="about-background"
      /> */}

      <img
        src="/assets/images/bubbles.png"
        className="about-background d-none d-md-block"
      />

      {/* background svg end */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 d-flex align-items-center">
            <div className="about-box d-inline-block">
              <PrimaryHeading
                text="About Us"
                classList="font-weight-bold color-black text-capitalization"
              />
              <p className="paragraph-text color-black mt-4 pt-2">
                Tomorrow’s Foundation seeks to improve the quality of life of
                underprivileged and marginalized children and young adults
                (Including Differently-abled youth) through Education and
                Training designed to enhance their individual skills and
                knowledge, so that they can realize their Self Worth. Today,
                Tomorrow's Foundation is present in 150+ slum locations across
                West Bengal, Chhattisgarh, Jharkhand, Delhi , Mumbai , Bengaluru
                and Chennai.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-md-end justify-content-center pt-5 pt-md-0">
            <img
              className="w-100 h-auto"
              style={{ maxWidth: 355 }}
              src="/assets/images/about.png"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-background {
          position: absolute;
          max-width: 96%;
          max-height: 96%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .about-box {
          max-width: 508px;
        }
        @media screen and (max-width: 991px) {
          .about-box {
            max-width: 380px;
          }
        }
        @media screen and (max-width: 767px) {
          .about-box {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
