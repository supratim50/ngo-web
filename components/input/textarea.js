const Textarea = ({ placeholder, classList }) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        className={`textarea w-100 py-3 border-0 px-4 ${
          classList ? classList : ""
        }`}
      ></textarea>
      <style jsx>{`
        .textarea {
          background: #ffffff;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
            0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04);
          border-radius: 8px;
          resize: none !important;
          min-height: 202px;
        }
        .textarea:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Textarea;
