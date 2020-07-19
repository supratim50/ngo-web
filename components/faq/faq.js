import { useState } from "react";

const Faq = ({ question, icon, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-100">
      {/* ========= question =============== */}
      <div
        className={`question h-100 row mx-auto w-100 py-4 px-4 ${
          show ? "active" : ""
        }`}
        onClick={() => setShow(!show)}
      >
        <div className="col-1 pl-0 d-flex justify-content-center align-items-center">
          <i style={{ fontSize: 25 }}>{icon}</i>
        </div>
        <div className="col-11 pr-0 d-flex align-items-center">
          <p className="text-paragraph mb-0">{question}</p>
        </div>
      </div>

      {/* ================ answer ================= */}
      <div className="answer p-4">
        <p className="text-paragraph mb-0 text-muted">{answer}</p>
      </div>
      <style jsx>{`
        .answer {
          display: none;
          transition: 0.5s;
        }
        .question {
          cursor: pointer;
          background-color: #f7f8fc;
          border-radius: 10px;
          min-height: 88px;
        }

        .active {
          background-color: #f8bd00 !important;
        }

        .active + .answer {
          display: block;
          animation: open;
          animation-duration: 1s;
        }
        @keyframes open {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Faq;
