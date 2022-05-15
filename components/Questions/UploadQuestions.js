import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function UploadQuestions() {
  const [questionHeading, setQuestionHeading] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState("english");
  const [explanation, setExplanation] = useState("");
  const { currentUser } = useAuth();
  console.log(currentUser._delegate.displayName);
  console.log(currentUser._delegate.email);
  const addQuestionHandler = async () => {
    const response = await axios.post("/api/push_question", {
      title: questionHeading,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      answer: answer,
      author: currentUser._delegate.displayName,
      author_email: currentUser._delegate.email,
      explanation: explanation,
      subject_name: subject,
    });
    console.log(response.data);
  };
  const subjectChangeHandler = (e) => {
    switch (e) {
      case "English":
        setSubject("english");
        break;
      case "Hindi":
        setSubject("hindi");
        break;
      case "Maths":
        setSubject("maths");
        break;
      case "Science":
        setSubject("science");
        break;
      case "Social Science":
        setSubject("social_science");
        break;
    }
    console.log(subject);
  };
  return (
    // <div>
    //   {/* <div>Question Title</div>
    //   <div>
    //     <input
    //       type="text"
    //       className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
    //       onChange={(e) => setQuestionHeading(e.target.value)}
    //     />
    //   </div> */}

    //   <div>Subject Name </div>
    //   <div>
    //     <select onClick={(e) => subjectChangeHandler(e.target.value)}>
    //       <option>English</option>
    //       <option>Maths</option>
    //       <option>Science</option>
    //       <option>Social Science</option>
    //       <option>Hindi</option>
    //     </select>
    //   </div>
    //   <div>
    //     <div>Option - 1 </div>
    //     <div>
    //       <input
    //         type="text"
    //         className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
    //         onChange={(e) => setOption1(e.target.value)}
    //       />
    //     </div>
    //     <div>Option - 2 </div>
    //     <div>
    //       <input
    //         type="text"
    //         className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
    //         onChange={(e) => setOption2(e.target.value)}
    //       />
    //     </div>
    //     <div>Option - 3 </div>
    //     <div>
    //       <input
    //         type="text"
    //         className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
    //         onChange={(e) => setOption3(e.target.value)}
    //       />
    //     </div>
    //     <div>Option - 4 </div>
    //     <div>
    //       <input
    //         type="text"
    //         className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
    //         onChange={(e) => setOption4(e.target.value)}
    //       />
    //     </div>
    //     <div>Answer </div>
    //     <div>
    //       <input
    //         type="text"
    //         className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
    //         onChange={(e) => setAnswer(e.target.value)}
    //       />
    //     </div>
    //     <div>Explanation </div>
    //     <div>
    //       <input
    //         type="text"
    //         className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
    //         onChange={(e) => setExplanation(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <input
    //         type="submit"
    //         className="border-2 border-purple-300 rounded-lg mt-10 h-10 w-2/3"
    //         onClick={addQuestionHandler}
    //       />
    //     </div>
    //   </div>
    // </div>
    <form className="m-5">
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={(e) => setQuestionHeading(e.target.value)}
          placeholder=" "
          required
        />
        <label
          for="title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Question Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        Subject Name
        <div>
          <select
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onClick={(e) => subjectChangeHandler(e.target.value)}
          >
            <option>English</option>
            <option>Maths</option>
            <option>Science</option>
            <option>Social Science</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="opt1"
          placeholder=" "
          id="opt1"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
        />
        <label
          for="opt1"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          onChange={(e) => setOption1(e.target.value)}
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
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={(e) => setOption2(e.target.value)}
          required
        />
        <label
          for="opt2"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Option-2
        </label>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt3"
            id="opt3"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setOption3(e.target.value)}
            required
          />
          <label
            for="opt3"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setOption1(e.target.value)}
            required
          />
          <label
            for="opt4"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-4
          </label>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="ans"
            id="ans"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <label
            for="ans"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setExplanation(e.target.value)}
            required
          />
          <label
            for="explanation"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Explanation
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={addQuestionHandler}
      >
        Submit
      </button>
    </form>
  );
}

export default UploadQuestions;
