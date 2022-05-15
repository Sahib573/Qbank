import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import { useRouter } from "next/router";
import Question from "../../../components/Questions/Question";

function Subject() {
  const route = useRouter();
  const subject = route.query.id;
  const [questionId, setQuestionId] = useState([]);
  const getQuestions = async () => {
    if (subject) {
      const response = await axios.post("/api/retrieve_question", {
        subject_name: subject,
      });
      setQuestionId(response.data);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div>
      <NavBar />
      <section className="relative py-8 bg-white min-w-screen animation-fade animation-delay">
        <div className="container px-0 mx-auto  sm:px-5">
          <div className="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="appearance-none w-full outline-none focus:outline-none active:outline-none"
            />
            <button
              type="submit"
              className="ml-7 outline-none focus:outline-none active:outline-none"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <div className="flex flex-wrap mt-7 space-around justify-content align-center">
            <h5 className=" mt-1 w-10/12  font-bold text-center text-gray-800 sm:text-3xl sm:text-center sm:mx-0">
              Top Questions
            </h5>
          </div>
          <Link href="/questions/contribute">
            <div className="flex justify-end items-center">
              <div className="p-2 border-2 border-teal-500 w-1/6 flex justify-center items-center rounded-lg hover:border-teal-100 hover:text-teal-500 cursor-pointer">
                Contribute Questions
              </div>
            </div>
          </Link>
          <div>
            {questionId && questionId.length
              ? questionId.map((question) => {
                  return <Question key={question} id={question} />;
                })
              : ""}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Subject;
