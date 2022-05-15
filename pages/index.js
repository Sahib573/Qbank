import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Head>
        <title>Home</title>
      </Head>
      <Footer />
    </>
  );
}

export default Home;
