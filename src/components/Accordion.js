import React, { useState } from "react";

const Accordion = ({ faqData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-[90%] bg-white  md:px-16 py-3">
      <div className="flex flex-row justify-between items-center h-[96px] px-2">
        <div className="flex flex-row items-start gap-8">
          <div className="paragraph-02-semibold text-start md:text-3xl md:font-semibold md:text-start text-primary-600">
            {faqData.number}
          </div>
          <div
            className="paragraph-02-semibold text-start md:text-3xl md:font-semibold md:text-start text-primary-900"
            style={{ whiteSpace: "pre-line" }}
          >
            {faqData.title}
          </div>
        </div>
        <button
          className="flex text-shades-white rounded-full w-5 h-5 justify-center items-start font-bold text-sm md:w-9 md:h-9 md:text-2xl"
          style={{ backgroundColor: isOpen ? "#99655C" : "#D4D3D3" }}
          onClick={toggleAccordion}
        >
          {isOpen ? "x" : "+"}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col items-start justify-center pl-24">
          {faqData.contents.map((content, id) => (
            <li
              key={id}
              className="paragraph-02-regulat text-neutral-500 whitespace-pre-line text-start list-disc"
            >
              {content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
