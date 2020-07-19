const ContactDetails = ({ icon, details, classList }) => {
  return (
    <div className={`row mx-auto ${classList ? classList : ""}`}>
      <div className="col-1 pl-0 text-primary d-flex justify-content-center align-items-center">
        <i style={{ fontSize: 25 }}>{icon}</i>
      </div>
      <div className="col-11 pr-0 d-flex align-items-center">
        <p className="text-paragraph mb-0">{details}</p>
      </div>

      <style jsx>{`
        .text-paragraph {
          max-width: 286px;
        }
        @media screen and (max-width: 991px) {
          .text-paragraph {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactDetails;
