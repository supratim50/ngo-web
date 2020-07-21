import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaUserCheck,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector(".navbar").classList.add("nav-scroll");
    });
    // if (window.scrollY === 0) {
    //   console.log("Scroll = 0");
    //   document.querySelector(".navbar").classList.remove("nav-scroll");
    // }
  });

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container px-3">
        {/* ========== brand ========= */}
        <Link href="/">
          <a className="navbar-brand primary-heading color-white">
            <FaUserCheck />
          </a>
        </Link>
        {/* ========== brand end ========= */}
        <div
          className={`navbox ml-auto d-none d-lg-flex align-items-center ${
            show ? "open" : ""
          }`}
        >
          {/* ================== changing ======================== */}
          {/* <div
          className={`navbox ml-auto align-items-center ${
            show ? "open d-block" : "d-flex"
          }`}
        ></div> */}
          {/* ================== changing ======================== */}
          <div className="p-3 py-lg-0 pr-5">
            <Link href="/">
              <a className="nav-link font-weight-bold p-0 text-uppercase text-white mb-0">
                menu1
              </a>
            </Link>
          </div>
          <div className="p-3 py-lg-0 pr-lg-5">
            <Link href="/">
              <a className="nav-link font-weight-bold p-0 text-uppercase text-white mb-0">
                menu2
              </a>
            </Link>
          </div>
          <div className="p-3 py-lg-0 pr-lg-5">
            <Link href="/">
              <a className="nav-link font-weight-bold p-0 text-uppercase text-white mb-0">
                menu3
              </a>
            </Link>
          </div>
          <div className="p-3 py-lg-0 pr-lg -5">
            <Link href="/">
              <a className="nav-link font-weight-bold p-0 text-uppercase text-white mb-0">
                menu4
              </a>
            </Link>
          </div>
          <div className="p-3 py-lg-0 pr-5">
            <Link href="/">
              <a className="nav-link font-weight-bold p-0 text-uppercase text-white mb-0">
                menu5
              </a>
            </Link>
          </div>

          <div className="nav-item social-box d-flex justify-content-start justify-content-lg-center align-items-center p-3 pl-lg-5">
            <div className="pr-5">
              <Link href="/">
                <a>
                  <i className="social-link font-weight-bold p-0 text-uppercase mb-0">
                    <FaFacebookF />
                  </i>
                </a>
              </Link>
            </div>
            <div className="pr-5">
              <Link href="/">
                <a>
                  <i className="social-link font-weight-bold p-0 text-uppercase mb-0">
                    <FaWhatsapp />
                  </i>
                </a>
              </Link>
            </div>
            <div className="">
              <Link href="/">
                <a>
                  <i className="social-link font-weight-bold p-0 text-uppercase mb-0">
                    <FaEnvelope />
                  </i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="side-nav-box d-block d-lg-none ml-auto"
          onClick={() => setShow(!show)}
        >
          <i className="side-nav">
            <FaBars />
          </i>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background-color: transparent;
          padding: 56px 0px;
          position: fixed !important;
          top: 0;
          left: 0;
          transition: 0.5s !important;
        }

        .navbox {
          transition: 0.5s !important;
        }

        @media screen and (max-width: 991px) {
          .navbar {
            padding: 26px 0px;
          }
          .navbox {
            transform: translateY(-100px) !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
        }

        .nav-link {
          font-size: 12px !important;
          line-height: 16px !important;
          letter-spacing: 0.05em !important;
          transition: 0.5s;
        }
        .nav-link:hover {
          color: #f8bd00 !important;
        }

        .social-box {
          border-left: 2px solid rgba(255, 255, 255, 0.7) !important;
        }
        .social-link {
          font-size: 25px !important;
          color: rgba(255, 255, 255, 0.7) !important;
        }
        .social-link:hover {
          color: #f8bd00 !important;
        }

        .side-nav {
          font-size: 25px !important;
          color: #fff !important;
        }

         {
          /* ========== scroll ======= */
        }
        .nav-scroll {
          padding: 15px 0 !important;
          background-color: #fff !important;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01),
            0px 2px 6px rgba(0, 0, 0, 0.01), 0px 16px 24px rgba(0, 0, 0, 0.02) !important;
        }

        .nav-scroll .nav-link,
        .nav-scroll .navbar-brand,
        .nav-scroll .social-link,
        .nav-scroll .side-nav {
          color: #000 !important;
        }

        .nav-scroll .social-box {
          border-left: 2px solid #000 !important;
        }

        .open {
          position: absolute !important;
          top: 100%;
          left: 0;
          display: block !important;
          width: 100%;
          background-color: #fff;

          transform: translateY(0) !important;
          opacity: 1 !important;
          visibility: visible !important;
        }
        .open .nav-link,
        .open .social-link {
          color: #000 !important;
        }
        .open .social-box {
          border-left: none !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
