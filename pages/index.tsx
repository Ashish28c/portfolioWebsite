// Home.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Offers from '../components/Offers';
import ScrollBtn from '../components/ScrollBtn';
import Testimonial from '../components/Testimonial';
import Works from '../components/Works';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ashish Chauhan | Portfolio</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <div className="bg-hero-image bg-cover bg-center min-h-screen">
        <Banner />
        <AboutMe />
        <Offers />
        <Works />
        <Testimonial />
        <Contact />
        <ScrollBtn />
      </div>
    </div>
  );
};

export default Home;
