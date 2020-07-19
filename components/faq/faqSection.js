import { FaCommentAlt } from "react-icons/fa";
//components
import PrimaryHeading from "../heading/primaryHeading";
import Faq from "../faq/faq";

const FaqSection = () => {
  return (
    <section className="section-pt section-pb">
      <div className="container">
        <PrimaryHeading
          text="Frequently Asked Questions"
          classList="font-weight-bold text-center"
        />
        <div className="row mx-auto margin-top-md">
          <div className="col-12 col-lg-6 px-2 mb-2">
            <Faq
              icon={<FaCommentAlt />}
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              question="After Jevelin purchase, will I have all the demos and its pages?"
            />
          </div>
          <div className="col-12 col-lg-6 px-2 mb-2">
            <Faq
              icon={<FaCommentAlt />}
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              question="Can I modify header, footer and its copyrights?"
            />
          </div>
          <div className="col-12 col-lg-6 px-2 mb-2">
            <Faq
              icon={<FaCommentAlt />}
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              question="Can I change demo page layouts like delete sections or add new ones?"
            />
          </div>
          <div className="col-12 col-lg-6 px-2 mb-2">
            <Faq
              icon={<FaCommentAlt />}
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              question="Is Jevelin multi language ready?"
            />
          </div>
          <div className="col-12 col-lg-6 px-2 mb-2">
            <Faq
              icon={<FaCommentAlt />}
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              question="After Jevelin purchase, will I have all the demos and its pages?"
            />
          </div>
          <div className="col-12 col-lg-6 px-2 mb-2">
            <Faq
              icon={<FaCommentAlt />}
              answer="Yes, you can change multiple options/styles to change the way header and footer looks. You can even hide footer developer copyrights and add your own custom text using text editor"
              question="After Jevelin purchase, will I have all the demos and its pages?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
