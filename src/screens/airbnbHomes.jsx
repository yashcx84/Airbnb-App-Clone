import { React, useState } from "react";
import "./homes.css";
import airbnbhomes from "../../public/images/others/airbnb-home.webp";
import logoImages from "../logos";
import { Link } from "react-router-dom";
import { TbHomePlus } from "react-icons/tb";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function AirbnbHomes() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const questionUpdate = (index) => {
    // Toggle the current question's open state
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const questions = [
    "Is my place right for Airbnb?",
    "Do I have to Host all the time?",
    "How much should I interect with the guests?",
    "Any tips to being a great Airbnb Host?",
    "What are AirBnb's fee?",
  ];

  const answers = [
    "Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, tree houses and more. Even a spare room can be a great place to stay.",
    "Not at all – you control your calendar. You can host once a year, a few nights a month or more often.",
    "It’s up to you. Some Hosts prefer to message guests only at key moments – like sending a short note when they check in – while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.",
    "Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required.",
    "Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas Airbnb also collects and pays sales and tourism taxes automatically on your behalf.",
  ];
  return (
    <>
      <div className="homeNav fixed top-0 w-full bg-white p-4 flex justify-center align-middle">
        <nav className=" w-10/12 flex flex-wrap justify-between align-middle">
          <Link to="/">
            <img src={logoImages.airbnb} alt="AirbnbLogo" />
          </Link>
          <div>
            <Link className="text-center font-medium">Ready To Airbnb?</Link>
            <button>
              {" "}
              <TbHomePlus className="inline-flex justify-center align-middle text-2xl mb-1" />{" "}
              Airbnb Setup
            </button>
          </div>
        </nav>
      </div>
      <div className="airbnbHomeContainer my-40 w-full flex flex-col justify-center align-middle">
        <h1 className="w-full text-center text-2xl font-bold">
          Airbnb<span>Homes</span>.
        </h1>
        <p className="text-center text-4xl font-extrabold">
          Airbnb it easily with Airbnb Setup
        </p>
        <img
          src={airbnbhomes}
          alt="airbnb homes"
          className="m-auto mt-12 rounded-2xl border w-9/12"
        />
      </div>

      <div className="bg-gray-100">
        <div className="m-auto mb-16 py-8 w-10/12 questionsContainer flex justify-between flex-wrap align-middle rounded-2xl">
          <div className="flex-1 questionHeading flex align-middle py-4">
            <h1 className="font-bold text-4xl ">
              Your Questions,<p>Answered</p>
            </h1>
          </div>
          <div className="flex-1 questions py-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className="flex flex-col cursor-pointer py-4 justify-between align-middle question"
                onClick={() => questionUpdate(index)}
              >
                <p className="pb-4 flex justify-between align-middle text-2xl">
                  {question}{" "}
                  {openQuestionIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </p>
                {openQuestionIndex === index && <p>{answers[index]}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AirbnbHomes;
