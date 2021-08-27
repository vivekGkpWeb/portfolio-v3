import { Fragment } from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <Fragment>
      <Head />
      <Nav />
      <Header />
      <Featured />
    </Fragment>
  );
};

export default Home;
