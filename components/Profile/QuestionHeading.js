import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";

function QuestionHeading(props) {
  const [questionDetails, setQuestionDetails] = useState("");
  const route = useRouter();
  const getData = async () => {
    const response = await axios.post("/api/getQuestionDetails", {
      question_id: props.questionId,
    });
    setQuestionDetails(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteQuestionHandler = async (questionId) => {
    await axios.post("/api/deleteQuestion", {
      email: currentUser._delegate.email,
      question_id: questionId,
    });
  };
  const editQuestionHandler = async (questionId) => {
    route.push(`/questions/edit/${questionId}`);
  };
  if (props.viewed == true) {
    return (
      <div>
        <a href={`/questions/${questionDetails.id}`} key={questionDetails.id}>
          <div className="w-1/1 px-0 py-6 mx-auto mt-10 flex flex-row justify-between items-center cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
            <div className=" text-teal-600">{questionDetails.title}</div>
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <div className="w-1/1 px-0 py-6 mx-auto mt-10 grid grid-cols-12 cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
        <div className="col-span-10">
          <a href={`/questions/${questionDetails.id}`} key={questionDetails.id}>
            <div className=" text-teal-600 ">{questionDetails.title}</div>
          </a>
        </div>
        <div
          className="text-teal-300 font-bold hover:text-teal-500 float-right flex justify-center items-center"
          onClick={() => editQuestionHandler(questionDetails.id)}
        >
          <FiEdit size={24} />
        </div>
        <div
          className="text-red-300 font-bold hover:text-red-500 float-right flex justify-center items-center"
          onClick={() => deleteQuestionHandler(questionDetails.id)}
        >
          <RiDeleteBin6Fill size={24} />
        </div>
      </div>
    );
  }
}

export default QuestionHeading;
