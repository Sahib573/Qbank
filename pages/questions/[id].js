import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useAuth } from "../../components/context/AuthContext";

const Doubt = () => {
  const [displayQuestion, setDisplayQuestion] = useState(true);
  const { currentUser } = useAuth();
  if (displayQuestion) {
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
                  AuthorName
                </h1>
                <button className="text-gray-500 hover:text-gray-900"></button>
              </div>
              <p className="text-gray-400 text-center text-sm my-1">Author</p>
            </div>
          </div>

          <div className="bg-white ml-2 w-8/12 p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500">
            <div className="grid grid-cols-2">
              <div className="mb-4">
                <div className="text-2xl text-gray-800 font-semibold">
                  Question Title
                </div>
                <div className="text-sm flex">
                  Posted in <div className="px-1 text-teal-600   ">General</div>{" "}
                  recently
                </div>
              </div>
              <div className="flex flex-col justify-center items-center ml-72 text-gray-600 hover:text-blue-700 cursor-pointer">
                <i className="fas fa-chevron-up"></i>
                <div>Views</div>
              </div>
            </div>
            <div className="">
              <ol>
                <li>A . Option 1 </li>
                <li>B . Option 2</li>
                <li>C . Option 3</li>
                <li>D . Option 4</li>
              </ol>
            </div>
            <div className="pt-4 text-blue-700">Answer : Question Answer</div>
            <h2 className="text-center text-2xl mb-3 mt-3">Explanation</h2>
            <p className="text-gray-600 leading-6 tracking-normal">
              Question Explanation
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
