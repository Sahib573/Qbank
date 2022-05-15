import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UploadQuestions from "../../components/Questions/UploadQuestions";

function contribute() {
  return (
    <div>
      <NavBar />
      <UploadQuestions />
      <Footer />
    </div>
  );
}

export default contribute;
