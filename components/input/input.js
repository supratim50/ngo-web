const Input = ({ classList, name, type, placeholder, value }) => {
  return (
    <>
      <input
        className={`input border-0 w-100 py-3 px-4 ${
          classList ? classList : ""
        }`}
        type={type && type}
        name={name && name}
        placeholder={placeholder && placeholder}
        value={value && value}
      />
      <style jsx>{`
        .input {
          background: #ffffff;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
            0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04);
          border-radius: 8px;
        }
        .input:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Input;
