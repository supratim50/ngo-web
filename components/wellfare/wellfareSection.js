// components
import PrimaryHeading from "../heading/primaryHeading";
import WellfareCircle from "../wellfare/wellfareCircle";

const WellfareSection = () => {
  return (
    <section
      className="section-pt section-pb"
      style={{ backgroundColor: "#F7F8FC" }}
    >
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
    </section>
  );
};

export default WellfareSection;
