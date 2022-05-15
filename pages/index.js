import Head from "next/head";
import NavBar from "../components/NavBar";
import clientPromise from "../mongodb-config";
import { useEffect } from "react";

function Home() {
  useEffect(async () => {
    await clientPromise;
    console.log("Connected");
  });
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
