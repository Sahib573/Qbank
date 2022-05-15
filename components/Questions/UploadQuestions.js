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
    <div>
      <div>Question Title</div>
      <div>
        <input
          type="text"
          className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
          onChange={(e) => setQuestionHeading(e.target.value)}
        />
      </div>
      <div>Subject Name </div>
      <div>
        <select onClick={(e) => subjectChangeHandler(e.target.value)}>
          <option>English</option>
          <option>Maths</option>
          <option>Science</option>
          <option>Social Science</option>
          <option>Hindi</option>
        </select>
      </div>
      <div>
        <div>Option - 1 </div>
        <div>
          <input
            type="text"
            className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
            onChange={(e) => setOption1(e.target.value)}
          />
        </div>
        <div>Option - 2 </div>
        <div>
          <input
            type="text"
            className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
            onChange={(e) => setOption2(e.target.value)}
          />
        </div>
        <div>Option - 3 </div>
        <div>
          <input
            type="text"
            className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
            onChange={(e) => setOption3(e.target.value)}
          />
        </div>
        <div>Option - 4 </div>
        <div>
          <input
            type="text"
            className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
            onChange={(e) => setOption4(e.target.value)}
          />
        </div>
        <div>Answer </div>
        <div>
          <input
            type="text"
            className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div>Explanation </div>
        <div>
          <input
            type="text"
            className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
            onChange={(e) => setExplanation(e.target.value)}
          />
        </div>
        <div>
          <input
            type="submit"
            className="border-2 border-purple-300 rounded-lg mt-10 h-10 w-2/3"
            onClick={addQuestionHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default UploadQuestions;
