import Head from "next/head";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Head>
        <title>Home</title>
      </Head>
    </>
  );
}

export default Home;
