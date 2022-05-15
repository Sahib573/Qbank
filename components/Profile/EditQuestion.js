import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function EditQuestion(props) {
  const questionId = props.questionId;
  const route = useRouter();
  const [questionHeading, setQuestionHeading] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const { currentUser } = useAuth();
  const getQuestionDetails = async () => {
    const response = await axios.post("/api/getQuestionDetails", {
      question_id: questionId,
    });
    if (response.data) {
      console.log(response.data);
      setQuestionHeading(response.data.title);
      setOption1(response.data.option1);
      setOption2(response.data.option2);
      setOption3(response.data.option3);
      setOption4(response.data.option4);
      setAnswer(response.data.answer);
      setExplanation(response.data.explanation);
    }
  };
  const verifyUser = async () => {
    const response = await axios.post("/api/getUserDetails", {
      email: currentUser._delegate.email,
    });
    const questionsUploaded = await response.data.uploaded;
    if (questionsUploaded.indexOf(questionId) == -1) {
      route.push("/");
    }
  };
  useEffect(() => {
    verifyUser();
    getQuestionDetails();
  }, []);

  const editQuestionHandler = async () => {
    await axios.post("/api/editQuestion", {
      question_id: questionId,
      title: questionHeading,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      answer: answer,
      explanation: explanation,
    });
    route.replace("/user/profile");
  };
  return (
    <div className="m-5 w-3/4 ml-40">
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="title"
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          onChange={(e) => setQuestionHeading(e.target.value)}
          placeholder=" "
          value={questionHeading}
          required
        />
        <label
          htmlFor="title"
          className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Question Title
        </label>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt1"
            placeholder=" "
            id="opt1"
            value={option1}
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setOption1(e.target.value)}
          />
          <label
            htmlFor="opt1"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-1
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt2"
            id="opt2"
            placeholder=" "
            value={option2}
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setOption2(e.target.value)}
          />
          <label
            htmlFor="opt2"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-2
          </label>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt3"
            id="opt3"
            placeholder=" "
            value={option3}
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setOption3(e.target.value)}
          />
          <label
            htmlFor="opt3"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-3
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt4"
            id="opt4"
            placeholder=" "
            value={option4}
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setOption4(e.target.value)}
          />
          <label
            htmlFor="opt4"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-4
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="ans"
          id="ans"
          placeholder=" "
          value={answer}
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <label
          htmlFor="ans"
          className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Answer
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="explanation"
          id="explanation"
          placeholder=" "
          value={explanation}
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          onChange={(e) => setExplanation(e.target.value)}
          required
        />
        <label
          htmlFor="explanation"
          className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Explanation
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <button
          className=" text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg  w-full px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          onClick={editQuestionHandler}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default EditQuestion;
