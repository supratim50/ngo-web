const PrimaryButton = ({ text, classList }) => {
  return (
    <a
      href="/"
      className={`text-decoration-none button p-3 color-black font-weight-bold d-inline-block text-uppercase ${
        classList ? classList : ""
      }`}
    >
      {text}
      <style jsx>{`
        .button {
          background: #f8bd00;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
            0px 2px 6px rgba(248, 189, 0, 0.12),
            0px 10px 20px rgba(248, 189, 0, 0.18);
          border-radius: 21px;
          font-size: 14px !important;
          line-height: 155%;
          letter-spacing: 0.115em;
          transition: all 0.5s;
        }
        .button:hover {
          background: #ffffff;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
            0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
            0px 24px 32px rgba(0, 0, 0, 0.04);
          color: #f8bd00 !important;
        }

        .btn-big {
          padding-left: 94px !important;
          padding-right: 94px !important;
        }
        @media screen and (max-width: 1200px) {
          .btn-big {
            padding-left: 88px !important;
            padding-right: 88px !important;
          }
        }
        .btn-small {
          padding-left: 32px !important;
          padding-right: 32px !important;
        }
      `}</style>
    </a>
  );
};

export default PrimaryButton;
