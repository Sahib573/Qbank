import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { jsPDF } from "jspdf";
import axios from "axios";
import { useAuth } from "../../components/context/AuthContext";

function Paper() {
  const [easyQuestions, setEasyQuestions] = useState(0);
  const [mediumQuestions, setMediumQuestions] = useState(0);
  const [hardQuestions, setHardQuestions] = useState(0);
  const [finalQuestionSet, setFinalQuestionSet] = useState([]);
  const [collegeName, setCollegeName] = useState("");
  const [examType, setExamType] = useState("");
  const [branch, setBranch] = useState("");
  const { currentUser } = useAuth();
  const generateQuestionHandler = async () => {
    const response = await axios.post("/api/getQuestionsForPaper", {
      easy: easyQuestions,
      medium: mediumQuestions,
      hard: hardQuestions,
    });
    setFinalQuestionSet(response.data.questions);
    console.log(collegeName);
  };
  const generatePDFHandler = async () => {
    await axios.post("/api/pdfRedeemPoints", {
      email: currentUser._delegate.email,
      points: 10 * easyQuestions + 15 * mediumQuestions + 20 * hardQuestions,
    });
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("questionPaper.pdf");
    });
  };
  return (
    <div>
      <NavBar />
      <div className="w-full text-2xl flex align-center justify-center m-5 text-center">
        Please{" "}
        <span className="text-2xl ml-2 mr-2  text-bold text-teal-500">
          {" "}
          Select{" "}
        </span>{" "}
        Questions accordingly
      </div>
      <div className="grid xl:grid-cols-3 xl:gap-6 my-16 mx-10">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="opt1"
            placeholder=" "
            id="opt1"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setEasyQuestions(e.target.value)}
          />
          <label
            htmlFor="opt1"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Easy
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="opt2"
            id="opt2"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setMediumQuestions(e.target.value)}
          />
          <label
            htmlFor="opt2"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Medium
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="opt2"
            id="opt2"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setHardQuestions(e.target.value)}
          />
          <label
            htmlFor="opt2"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Hard
          </label>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6 my-16 mx-10">
        <div className="relative z-0 w-full mb-6 group col-span-2">
          <input
            type="string"
            name="opt1"
            placeholder=" "
            id="opt1"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setCollegeName(e.target.value)}
          />
          <label
            htmlFor="opt1"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Institute Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="string"
            name="opt2"
            id="opt2"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setExamType(e.target.value)}
          />
          <label
            htmlFor="opt2"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Exam Type
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="string"
            name="opt2"
            id="opt2"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
            onChange={(e) => setBranch(e.target.value)}
          />
          <label
            htmlFor="opt2"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Branch
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full flex justify-center align-center mb-6 group">
        <button
          className=" text-white text-xl bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg  w-5/12 px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          onClick={generateQuestionHandler}
        >
          Generate
        </button>
      </div>
      <div id="pdf">
        <div className="flex flex-col w-1/3 justify-center items-center mb-4">
          <div className="text-4xl">{collegeName}</div>
          <br />
          <div className="text-3xl">{examType}</div>
          <br />
          <div className="text-2xl">{branch}</div>
          <br />
        </div>
        {finalQuestionSet && finalQuestionSet.length
          ? finalQuestionSet.map((question) => {
              return (
                <div key={question.id}>
                  <div id="text">Q ) {question.title}</div>
                  <div className="pl-5">1. {question.option1}</div>
                  <div className="pl-5">2. {question.option2}</div>
                  <div className="pl-5">3. {question.option3}</div>
                  <div className="pl-5">4. {question.option4}</div>
                </div>
              );
            })
          : ""}
      </div>
      {finalQuestionSet && finalQuestionSet.length ? (
        <div className="relative z-0 w-full justify-center align-center mb-6 group flex">
          <button
            className=" text-white text-xl	 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg  w-5/12 px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            onClick={generatePDFHandler}
          >
            Generate PDF connsuming{" "}
            {10 * easyQuestions + 15 * mediumQuestions + 20 * hardQuestions}{" "}
            points
          </button>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}

export default Paper;
