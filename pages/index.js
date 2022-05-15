import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutHome from "../components/HomePage/AboutHome";
import ContactUs from "../components/HomePage/ContactUs";

function Home() {
  return (
    <>
      <NavBar />
      <Head>
        <title>Home</title>
      </Head>
      <AboutHome />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
