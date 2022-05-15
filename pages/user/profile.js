import { protectedRoute } from "../../components/context/ProtectedRoute";
import { useAuth } from "../../components/context/AuthContext";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState({});
  const [userUploadedQuestions, setUserUploadedQuestions] = useState([]);
  const [userViewedQuestions, setUserViewedQuestions] = useState([]);
  const getAllDetailsOfUser = async () => {
    const response = await axios.post("/api/getUserDetails", {
      email: currentUser._delegate.email,
    });
    if (response.data && response.data.message) {
      setUserDetails({});
    } else {
      setUserDetails(response.data);
      if (response.data.viewed.length) {
        for (let i = 0; i < response.data.viewed.length; i++) {
          const response2 = await axios.post("/api/getQuestionDetails", {
            question_id: response.data.viewed[i],
          });
          let check = true;
          for (let j = 0; j < userViewedQuestions; j++) {
            if (userViewedQuestions[j] == response2.data) {
              check = false;
              break;
            }
          }
          if (check) {
            setUserViewedQuestions([...userViewedQuestions, response2.data]);
          }
        }
      }
      if (response.data.uploaded.length) {
        for (let i = 0; i < response.data.uploaded.length; i++) {
          const response2 = await axios.post("/api/getQuestionDetails", {
            question_id: response.data.uploaded[i],
          });
          let check = true;
          for (let j = 0; j < userUploadedQuestions; j++) {
            if (u[i] == response2.data) {
              check = false;
              break;
            }
          }
          if (check) {
            setUserUploadedQuestions([
              ...userUploadedQuestions,
              response2.data,
            ]);
          }
        }
      }
    }
  };
  useEffect(() => {
    getAllDetailsOfUser();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="p-10">
        <div className="p-0 bg-white shadow mt-10 grid grid-cols-3">
          <div className="rounded-full flex items-center justify-center mx-auto  text-indigo-500">
            <img
              src={currentUser.photoURL}
              className="h-40 shadow w-70 rounded-lg"
              alt="Profile picture"
            />
          </div>
          <div className="mt-10 border-b pb-12 col-span-2">
            <h1 className="text-4xl font-medium text-gray-700">
              {currentUser.displayName}
            </h1>
            <p className="mt-4 text-gray-500">{currentUser.email}</p>
            <h1 className="text-2xl font-medium text-gray-700">
              Points : Some Points
            </h1>
          </div>
        </div>
        {userDetails ? (
          <div>
            {userViewedQuestions.length ? (
              <div className="p-0 bg-white  mt-10">
                <h1 className="text-3xl font-bold flex justify-center items-center text-teal-600">
                  Questions Unlocked
                </h1>
                <div>
                  {userUploadedQuestions.map((question) => {
                    return (
                      <a
                        href={`/questions/${question.question_id}`}
                        key={question.question_id}
                      >
                        <div className="w-1/1 px-0 py-6 mx-auto mt-10 cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
                          <h3 className=" text-teal-600">{question.title}</h3>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            {userViewedQuestions.length ? (
              <div className="p-0 bg-white  mt-10">
                <h1 className="text-3xl font-bold flex justify-center items-center text-teal-600">
                  Uploaded Questions
                </h1>
                <div>
                  {userViewedQuestions.map((question) => {
                    return (
                      <a
                        href={`/questions/${question.question_id}`}
                        key={question.question_id}
                      >
                        <div className="w-1/1 px-0 py-6 mx-auto mt-10 cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
                          <h3 className=" text-teal-600">{question.title}</h3>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
};

export default protectedRoute(Profile);
