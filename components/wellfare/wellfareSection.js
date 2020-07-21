// components
import PrimaryHeading from "../heading/primaryHeading";
import WellfareCircle from "../wellfare/wellfareCircle";

const WellfareSection = () => {
  return (
    <section
      className="section-pt section-pb position-relative overflow-hidden"
      style={{ backgroundColor: "#F7F8FC" }}
    >
      {/* background  */}
      <img
        src="/assets/images/bubbles.png"
        className="about-background d-none d-md-block"
      />

      <div className="container">
        <PrimaryHeading
          text="Over 1200+ wellfare work completed & still counting"
          classList="text-center font-weight-bold"
        />
        <div className="row mx-auto margin-top-md">
          <div className="col-12 col-md-3">
            <WellfareCircle
              classList="mx-md-auto"
              heading="624"
              subHeading="Camps Helped"
              color="blue"
            />
          </div>
          <div className="col-12 col-md-3">
            <WellfareCircle
              classList="even mx-md-auto ml-auto"
              heading="1.9Lacs"
              subHeading="Fund Raised"
              color="red"
            />
          </div>
          <div className="col-12 col-md-3">
            <WellfareCircle
              classList="mx-md-auto"
              heading="30+"
              subHeading="Branches Opened"
              color="yellow"
            />
          </div>
          <div className="col-12 col-md-3">
            <WellfareCircle
              classList="even mx-md-auto ml-auto"
              heading="146"
              subHeading="Districts Covered"
              color="violate"
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
      `}</style>
    </section>
  );
};

export default WellfareSection;
