import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";

const faqs = [
  {
    title: "Timing - when is the launch?",
    number: "01",
    contents: [
      "Q1 (jan) is the expected launch date of the service, but we will\npre-qualify you by the end of the year",
      "We want to work with you / together to ensure you’re the first to\nbe considered at launch ",
    ],
  },
  {
    title: "How much is this going to cost?",
    number: "02",
    contents: [
      "There is the annual rent (with an option to pay monthly). ",
      "We will fix the price of the apartment today that\nyou have the option to buy in 3yrs time (there is a Pre-agreed optional/future\nprice of the apartment should you choose to purchase the\napartment).",
    ],
  },
  {
    title: "What's included in the rent price?",
    number: "03",
    contents: [
      "We’re helping you build savings to fund the mortgage deposit for the apartment, so each rental payment takes that into account.",
      "We will fix the rent for your apartment for 3 years today. ",
      "We give the added benefit of returning back a portion of this\nrent if you take up the option to buy from us.  This “portion” of\nrent can be seen as behja’s contribution to your future house\npurchase. ",
      "Our aim is to make this “rent-pay-back” (similar to savings) to be\n5-10%* of the pre-agreed future price (in 3yrs time) of the \napartment.  *We will fix this amount and let you know what it is\nprior to you finalising the Behja agreement.",
    ],
  },
  {
    title: "What is the qualifier process?",
    number: "04",
    contents: [
      "Ability to afford the rent (Job to afford the rent) ",
      "Of course all tenants need to satisfy government laws and\nrequirements",
    ],
  },
  {
    title: "Am I buying today?",
    number: "05",
    contents: [
      "You are renting from Behja, and buying is optional in 3 years time\n(good news! you’re locked into the future price today but not\ncommitted today).",
    ],
  },
  {
    title: "What happens when I decide\nto buy in 3 years time?",
    number: "06",
    contents: [
      "the proposal will include the pre-agreed purchase price",
      "We will work with you to transition to a traditional bank\nmortgage. Your savings with our ‘rent’ can be used for the down\npayment of this. ",
      "Of course if you want to purchase the apartment before 3yrs\ntime, we are happy to help and will give you a discount from our\nfuture 3yr agreed price of the apartment.",
    ],
  },
  {
    title: "What is the “future agreed price”\nof the apartment?”",
    number: "07",
    contents: [
      "This is the price that we agree today that we will sell you the\napartment for in 3yrs time. So, as above, you have theoption to\nbuy from us in 3yrs time - this allows you certainty of the price\nand effectively gives you a foot on the property ladder today.)",
    ],
  },
];

const FAQSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <section className="w-[90%] mt-48 lg:w-[75%]">
      <p className="paragraph-01-regular text-primary-700 text-center">
        {t("Frequently Asked Questions")}
      </p>
      <p
        className="display-02-bold text-primary-900 text-center mt-3"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("We Answered Your\nCommon Questions!")}
      </p>
      <div className="flex flex-col justify-center items-center mt-20 gap-4 ">
        {faqs.map((faq, id) => (
          <div className="flex items-center justify-center w-full" key={id}>
            <Accordion faqData={faq} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mt-20 lg:flex-row">
        <button className="paragraph-01-regular bg-primary-600 text-primary-50 px-8 py-4 rounded" onClick={() => navigate('/rentsimulator')}>
          {t("Let’s start by stimulating your rent")}
        </button>
        <button className="paragraph-01-regular bg-primary-300 text-primary-900 px-8 py-4 rounded" onClick={() => navigate('/homefinder')}>
          {t("Find a property")}
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
