import { useState } from "react";
import { FiEye, FiX } from "react-icons/fi";
// components
import PrimaryHeading from "../heading/primaryHeading";
import Image from "../gallery/images";

const GallerySection = () => {
  const [show, setShow] = useState(false);

  const showImage = () => {
    setShow(!show);
  };

  return (
    <section className="section-pt section-pb">
      <div className="container">
        <PrimaryHeading
          text="Some images from our albums"
          classList="font-weight-bold text-center"
        />
        <div className="row mx-auto margin-top-md">
          <div className="col-6 col-md-4 col-lg-3 p-1">
            <div
              className="w-100 image-box position-relative"
              onClick={showImage}
            >
              <Image imageUrl="/assets/images/gellary_2.png" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <p className="view-text secondary-heading mb-0 color-white">
                  <FiEye /> View
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 p-1">
            <div
              className="w-100 image-box position-relative"
              onClick={showImage}
            >
              <Image imageUrl="/assets/images/gellary_3.png" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <p className="view-text secondary-heading mb-0 color-white">
                  <FiEye /> View
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 p-1">
            <div
              className="w-100 image-box position-relative"
              onClick={showImage}
            >
              <Image imageUrl="/assets/images/gellary_4.png" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <p className="view-text secondary-heading mb-0 color-white">
                  <FiEye /> View
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 p-1">
            <div
              className="w-100 image-box position-relative"
              onClick={showImage}
            >
              <Image imageUrl="/assets/images/gellary_5.png" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <p className="view-text secondary-heading mb-0 color-white">
                  <FiEye /> View
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 p-1">
            <div
              className="w-100 image-box position-relative"
              onClick={showImage}
            >
              <Image imageUrl="/assets/images/gellary_6.png" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <p className="view-text secondary-heading mb-0 color-white">
                  <FiEye /> View
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 p-1">
            <div
              className="w-100 image-box position-relative"
              onClick={showImage}
            >
              <Image imageUrl="/assets/images/gellary_7.png" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <p className="view-text secondary-heading mb-0 color-white">
                  <FiEye /> View
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 p-1">
            <div
              className="w-100 image-box position-relative"
              onClick={showImage}
            >
              <Image imageUrl="/assets/images/gellary_8.png" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <p className="view-text secondary-heading mb-0 color-white">
                  <FiEye /> View
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 p-1">
            <div
              className="w-100 image-box position-relative"
              onClick={showImage}
            >
              <Image imageUrl="/assets/images/gellary_6.png" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <p className="view-text secondary-heading mb-0 color-white">
                  <FiEye /> View
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* show image */}
      <div
        className={`show-img-background ${show ? "show" : ""}`}
        onClick={showImage}
      >
        <div className="cross secondary-heading color-white position-absolute rounded-circle d-flex justify-content-center align-items-center">
          <FiX />
        </div>
      </div>
      <div className={`show-img-box overflow-hidden ${show ? "show" : ""}`}>
        <img
          src="/assets/images/showImg.png"
          className="w-100"
          alt="Gellary Image"
        />
      </div>

      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);

          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }

        .image-box {
          cursor: pointer;
        }

        .image-box:hover .overlay {
          opacity: 1;
          visibility: visible;
        }

         {
          /* ======================= show image =========================== */
        }
        .show-img-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8);
          transition: 0.4s;

          opacity: 0;
          visibility: hidden;
        }
        .show-img-box {
          position: fixed;
          width: 98%;
          max-width: 660px;
          border-radius: 8px;
          transition: 0.6s;

          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          opacity: 0;
          visibility: hidden;
        }
        .cross {
          top: 100px;
          right: 200px;
          width: 40px;
          height: 40px;
          border: 1px solid #fff !important;
          cursor: pointer;
          transition: 0.5s;
        }
        .cross:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        @media screen and (max-width: 1080px) {
          .cross {
            top: 50px;
            right: 80px;
          }
        }
        @media screen and (max-width: 767px) {
          .cross {
            top: 20px;
            right: 20px;
            width: 30px;
            height: 30px;
          }
        }

        .show {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
