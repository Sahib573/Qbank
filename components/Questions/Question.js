import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Question(props) {
  const [userQuestionsViewed, setUserQuestionsViewed] = useState(true);
  const [questionDetails, setQuestionDetails] = useState();
  const route = useRouter();
  const redeemPointHandler = async () => {};
  const getQuestionDetails = async () => {
    const response = await axios.post("/api/getQuestionDetails", {
      question_id: props.id,
    });
    setQuestionDetails(response.data);
  };
  useEffect(() => {
    getQuestionDetails();
  }, []);
  return (
    <div className="w-1/1 px-0 py-6 flex justify-between items-center mx-auto mt-10  hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
      <h3 className="text-lg font-bold text-teal-500 sm:text-xl md:text-2xl">
        {questionDetails ? questionDetails.title : ""}
      </h3>
      {userQuestionsViewed ? (
        <div
          className="p-2 rounded-lg border-2 hover:border-teal-500 border-gray-200 text-sm cursor-pointer"
          onClick={() =>
            route.push(
              `/questions/${questionDetails ? questionDetails.question_id : ""}`
            )
          }
        >
          View Question
        </div>
      ) : (
        <div
          className="p-2 rounded-lg border-2 hover:border-teal-500 border-gray-200 text-sm cursor-pointer"
          onClick={() => redeemPointHandler()}
        >
          Use 10 points
        </div>
      )}
    </div>
  );
}

export default Question;
