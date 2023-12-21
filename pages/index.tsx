import type { NextPage } from "next";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Offers from "../components/Offers";
import ScrollBtn from "../components/ScrollBtn";
import Testimonial from "../components/Testimonial";
import Works from "../components/Works";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ashish Chauhan | POrtfolio</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Offers />
        <Works />
        <Testimonial />
        <Contact />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default Home;
