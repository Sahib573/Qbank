import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useAuth } from "../../components/context/AuthContext";

const Doubt = () => {
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [questionDetails, setQuestionDetails] = useState();
  const { currentUser } = useAuth();
  const route = useRouter();
  const getQuestionDetails = async () => {
    const response = await axios.post("/api/getQuestionDetails", {
      question_id: route.query.id,
    });
    setQuestionDetails(response.data);
  };
  const checkQuestionAccess = async () => {
    const response = await axios.post("/api/checkQuestionAcceptance", {
      question_id: route.query.id,
      userEmail: currentUser._delegate.email,
    });
    if (response.data.user) {
      setDisplayQuestion(true);
    }
  };
  useEffect(() => {
    checkQuestionAccess();
    getQuestionDetails();
  }, []);
  if (displayQuestion && questionDetails) {
    return (
      <div className="">
        <NavBar />
        <div className="containter mb-10 flex justify-content align-center flex-wrap mx-auto px-10 ml-20 mt-10">
          <div className="w-64 mr-2 mb-20  bg-white shadow rounded border border-transparent hover:border-blue-200 ">
            <div className=" w-full checker-bg flex items-center justify-center p-4 ">
              <div
                className="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://picsum.photos/200")',
                }}
              ></div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h1 className="text-gray-600 mx-auto font-medium">
                  {questionDetails.author}
                </h1>
                <button className="text-gray-500 hover:text-gray-900"></button>
              </div>
              <p className="text-gray-400 text-center text-sm my-1">
                {questionDetails.author_email}
              </p>
            </div>
          </div>

          <div className="bg-white ml-2 w-8/12 p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500">
            <div className="grid ">
              <div className="mb-4">
                <div className="text-2xl text-gray-800 font-semibold">
                  {questionDetails.title}
                </div>
              </div>
            </div>
            <div className="">
              <ol>
                <li>A . {questionDetails.option1} </li>
                <li>B . {questionDetails.option2}</li>
                <li>C . {questionDetails.option3}</li>
                <li>D . {questionDetails.option4}</li>
              </ol>
            </div>
            <div className="pt-4 text-blue-700">
              Answer : {questionDetails.answer}
            </div>
            <h2 className="text-center text-2xl mb-3 mt-3">Explanation</h2>
            <p className="text-gray-600 leading-6 tracking-normal">
              {questionDetails.explanation}
            </p>
          </div>
        </div>

        <div>
          <section className="relative py-2 bg-white min-w-screen animation-fade animation-delay">
            <div className="container px-0 mx-auto  sm:px-5">
              <div className="flex flex-wrap text-center">
                <h5 className=" mt-1 mb-2 w-11/12  font-bold text-center text-gray-800 sm:text-3xl sm:text-center sm:mx-0">
                  Rate the Question
                </h5>
              </div>
              <div className="flex flex-wrap space-between justify-content align-center">
                <div className="flex mt-2 w-4/12  justify-center ">
                  <div className="text-gray-800 ml-2 text-xl font-semibold border px-4 py-2 rounded-lg hover:text-teal-600   cursor-pointer hover:border-teal-600   ">
                    Easy
                  </div>
                </div>
                <div className="flex mt-2 w-4/12 justify-center">
                  <div className="text-gray-800 ml-2 text-xl text-center font-semibold border px-4 py-2 rounded-lg hover:text-teal-600   cursor-pointer hover:border-teal-600   ">
                    Medium
                  </div>
                </div>
                <div className="flex mt-2 w-4/12 justify-center">
                  <div className="text-gray-800 ml-2 text-xl text-center font-semibold border px-4 py-2 rounded-lg hover:text-teal-600   cursor-pointer hover:border-teal-600   ">
                    Hard
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center text-lg">Loading...</div>
    );
  }
};

export default Doubt;
