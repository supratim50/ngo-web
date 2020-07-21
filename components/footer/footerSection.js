import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <section className="footer-sec">
      <div className="container">
        <div className="row mx-auto">
          {/* left */}
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center">
            <a className="text-center text-md-left small-paragraph mr-md-5 mt-3 mt-md-0">
              Privacy Policy
            </a>
            <a className="text-center text-md-left small-paragraph mr-md-5 mt-3 mt-md-0">
              Terms of Use
            </a>
            <a className="text-center text-md-left small-paragraph mt-3 mt-md-0">
              FavFly
            </a>
          </div>
          {/* right */}
          <div className="col-12 col-md-6">
            <div className="social-box d-flex justify-content-center justify-content-md-end align-items-center">
              <a className="text-center text-md-left mr-4">
                <i className="social-icon">
                  <FaFacebookSquare />
                </i>
              </a>
              <a className="text-center text-md-left mr-4">
                <i className="social-icon">
                  <FaTwitterSquare />
                </i>
              </a>
              <a className="text-center text-md-left mr-4">
                <i className="social-icon">
                  <FaInstagramSquare />
                </i>
              </a>
              <a className="text-center text-md-left">
                <i className="social-icon">
                  <FaYoutube />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer py-4">
        <p className="text-center mb-0 text-muted text-capitalize">
          &copy; FavFly Inc.. 2020 All rights reserved.
        </p>
      </div>
      <style jsx>{`
        .container {
          margin-bottom: 70px !important;
        }
        .footer-sec {
          padding-top: 79px !important;
        }
        .social-icon {
          color: #151f39 !important;
          font-size: 36px !important;
        }

        .last-footer {
          background-color: #151f39 !important;
        }
        @media screen and (max-width: 767px) {
          .social-box {
            margin-top: 70px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FooterSection;
