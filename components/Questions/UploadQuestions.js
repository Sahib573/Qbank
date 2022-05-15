import React, { useStates } from "react";

function UploadQuestions() {
  return (
    <div>
      <div>Question Title</div>
      <div>
        <input
          type="text"
          className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
        />
      </div>
      <div>
        <div>Option - 1 </div>
        <div>
          <input
            type="text"
            className="border-2 border-purple-300 rounded-lg h-10 w-2/3"
          />
        </div>
      </div>
    </div>
  );
}

export default UploadQuestions;
