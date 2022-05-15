import Link from "next/link";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Subjects from "../../components/Questions/Subjects";

const Questions = (props) => {
  return (
    <div>
      <NavBar />
      <Subjects />
      <Footer />
    </div>
  );
};

export default Questions;
