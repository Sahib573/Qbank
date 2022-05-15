import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Question(props) {
  const [questionDetails, setQuestionDetails] = useState();
  const [questionViewed, setQuestionViewed] = useState(false);
  const [redeemPoints, setRedeemPoints] = useState(0);
  const route = useRouter();
  const { currentUser } = useAuth();
  const redeemPointHandler = async () => {
    const response = await axios.post("/api/redeemPoints", {
      question_id: props.id,
      email: currentUser._delegate.email,
      points: redeemPoints,
    });
    console.log(response.data);
  };
  const getQuestionDetails = async () => {
    const response = await axios.post("/api/getQuestionDetails", {
      question_id: props.id,
    });
    setQuestionDetails(response.data);
    getRedeemPoints(response.data.difficulty);
  };
  const getRedeemPoints = (difficulty) => {
    switch (difficulty) {
      case "easy":
        setRedeemPoints(10);
        break;
      case "medium":
        setRedeemPoints(15);
        break;
      case "hard":
        setRedeemPoints(20);
        break;
    }
  };
  const checkQuestionAccess = async () => {
    const response = await axios.post("/api/checkQuestionAcceptance", {
      question_id: props.id,
      userEmail: currentUser._delegate.email,
    });
    if (response.data.user) {
      setQuestionViewed(true);
    }
  };
  useEffect(() => {
    checkQuestionAccess();
    getQuestionDetails();
  }, []);
  return (
    <div className="w-1/1 px-0 py-6 flex justify-between items-center mx-auto mt-10  hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
      <h3 className="text-lg font-bold text-teal-500 sm:text-xl md:text-2xl w-11/12">
        {questionDetails ? questionDetails.title : ""}
      </h3>
      {questionViewed ? (
        <div
          className="p-2 ml-2 w-36 rounded-lg border-2 flex justify-center items-center hover:border-teal-500 border-gray-200 text-sm cursor-pointer"
          onClick={() =>
            route.push(
              `/questions/${questionDetails ? questionDetails.id : ""}`
            )
          }
        >
          View Question
        </div>
      ) : (
        <div
          className="p-2 ml-2 w-36 rounded-lg border-2 flex justify-center items-center hover:border-teal-500 border-gray-200 text-sm cursor-pointer"
          onClick={() => redeemPointHandler()}
        >
          Use {redeemPoints} points
        </div>
      )}
    </div>
  );
}

export default Question;
