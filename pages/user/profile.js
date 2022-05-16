import { protectedRoute } from "../../components/context/ProtectedRoute";
import { useAuth } from "../../components/context/AuthContext";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import QuestionHeading from "../../components/Profile/QuestionHeading";

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
      setUserViewedQuestions(response.data.viewed);
      setUserUploadedQuestions(response.data.uploaded);
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
              Points : {userDetails.points}
            </h1>
          </div>
        </div>
        <div className="mt-3">
          <Link href="TecherApply">
            <div className="flex justify-end items-center">
              <div className="p-2 border-2 border-teal-500 w-1/6 flex justify-center items-center rounded-lg hover:border-teal-200 hover:text-teal-500 cursor-pointer">
                Apply for Teacher
              </div>
            </div>
          </Link>
        </div>
        {userDetails ? (
          <div>
            {userViewedQuestions.length ? (
              <div className="p-0 bg-white  mt-10">
                <h1 className="text-3xl font-bold flex justify-center items-center text-teal-600">
                  Questions Unlocked
                </h1>
                {userViewedQuestions.length
                  ? userViewedQuestions.map((question) => {
                      return (
                        <QuestionHeading
                          questionId={question}
                          viewed={true}
                          key={question}
                        />
                      );
                    })
                  : ""}
              </div>
            ) : (
              ""
            )}
            {userUploadedQuestions.length ? (
              <div className="p-0 bg-white  mt-10">
                <h1 className="text-3xl font-bold flex justify-center items-center text-teal-600">
                  Uploaded Questions
                </h1>
                <div>
                  {userUploadedQuestions.length
                    ? userUploadedQuestions.map((question) => {
                        return (
                          <QuestionHeading
                            questionId={question}
                            viewed={false}
                            key={question}
                          />
                        );
                      })
                    : ""}
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
