// import { useState } from "react";
import { FaBuilding, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// components
import PrimaryHeading from "../heading/primaryHeading";
import ContactDetails from "./contactDetails";
import Input from "../input/input";
import Textarea from "../input/textarea";
import PrimaryBtn from "../buttons/primaryButton";

const ContactUs = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  return (
    <section
      className="contact-sec section-pt"
      style={{ backgroundColor: "#F7F8FC" }}
    >
      <div className="container">
        <PrimaryHeading
          text="Having doubts? Reach to us"
          classList="font-weight-bold text-center"
        />

        <div className="row mx-auto margin-top-md">
          <div className="col-12 col-lg-5">
            <ContactDetails
              icon={<FaBuilding />}
              details="Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia"
            />
            <ContactDetails
              classList="mt-5"
              icon={<FaPhoneAlt />}
              details="Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia"
            />
            <ContactDetails
              classList="mt-5"
              icon={<FaEnvelope />}
              details="Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia"
            />
          </div>
          <div className="col-12 col-lg-7 mt-5 mt-lg-0 px-0">
            <div className="row mx-auto mb-3 pb-4">
              <div className="col-12 col-lg-6 p-0 pr-lg-2">
                <Input placeholder="Name" name="name" type="text" />
              </div>
              <div className="col-12 col-lg-6 p-0 pl-lg-2 ">
                <Input
                  classList="mt-3 mt-md-4 mt-lg-0"
                  placeholder="Email"
                  name="email"
                  type="email"
                />
              </div>
              <div className="col-12 px-0">
                <Textarea classList="mt-3 mt-md-4" placeholder="Message" />
              </div>
            </div>
            <div className="text-center">
              <PrimaryBtn classList="btn-big text-center" text="submit" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-sec {
          padding-bottom: 239px !important;
        }
        @media screen and (max-width: 767px) {
          .contact-sec {
            padding-bottom: 181px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
