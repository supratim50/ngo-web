const SecondaryButton = ({ text, classList }) => {
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
          border: 2px solid #10182f;
          border-radius: 21px;
          font-size: 14px !important;
          line-height: 155%;
          letter-spacing: 0.115em;
          transition: all 0.5s;
        }
        .button:hover {
          border: 2px solid #fff;
          background: #ffffff;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
            0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
            0px 24px 32px rgba(0, 0, 0, 0.04);
          color: #f8bd00 !important;
        }

        .btn-big {
          padding-left: 96px !important;
          padding-right: 96px !important;
        }
        .btn-small {
          padding-left: 32px !important;
          padding-right: 32px !important;
        }
      `}</style>
    </a>
  );
};

export default SecondaryButton;
