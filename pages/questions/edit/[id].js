import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import EditQuestion from "../../../components/Profile/EditQuestion";
import { useRouter } from "next/router";

function Edit() {
  const route = useRouter();
  return (
    <div>
      <NavBar />
      <EditQuestion questionId={route.query.id} />
      <Footer />
    </div>
  );
}

export default Edit;
