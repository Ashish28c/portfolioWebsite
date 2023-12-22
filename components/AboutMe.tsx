import Image from 'next/image';
import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section id="about" className="w-full h-full bg-black text-white py-28 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16 md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center">
          <h1 className="text-3xl uppercase font-semibold mt-5">
            A Story about me
            <hr></hr>
          </h1>
          <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
            I'm{" "}
            <span className="font-bold tracking-wider text-white">
              Ashish Chauhan
            </span>{" "}
            an avid{" "}
            <span className="font-bold text-white">computer science and engineering </span>student from Ahmedabad University.
             Currently immersed in the world of BTech, I'm passionate about programming, data structures, and the nuances of 
             software development. My journey extends to full-stack development, and I find joy in the captivating artistry 
             of photography and film-making.
          </p>
        </div>
        <div className="md:w-1/2 text-center">
          {/* Use next/image component with a border and shadow */}
          <div style={{ 
            width: '370px',  // Set the width to match the image
            height: '550px', // Set the height to match the image
            border: '3px solid #00FFFF', 
            borderRadius: '8px', 
            overflow: 'hidden',
            boxShadow: '4px 4px 10px rgba(0, 255, 255, 0.5)' // Shadow color in rgba format with blur
          }}>
            <Image
              src="/portfolioWebsie/s3.jpg"  // Assuming s3.jpg is in the public folder
              alt="Your Alt Text"
              width={370}  // Adjust the desired width
              height={570} // Adjust the desired height
            />
          </div>
        </div>
      </div>

      {/* Add space between text and AboutList */}
      <div className="my-12"></div>

      {/* Grid of AboutList components */}
      <div className="max-w-6xl mx-auto w-[900px] text-center">
        <h2 className="text-4xl font-semibold mb-4 text-white py-4">
          Skills
        </h2>
        <hr></hr>
        <hr></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <AboutList title="Java Spring Boot" />
          <AboutList title="Hibernate" />
          <AboutList title="MySQL" />
          <AboutList title="HTML" />
          <AboutList title="CSS" />
          <AboutList title="JavaScript" />
          <AboutList title="Back-end development" />
          <AboutList title="MicroServices" />
          <AboutList title="Docker" />
          <AboutList title="MongoDB" />
          <AboutList title="Spring Security" />
          <AboutList title="Git/GitHub" />
          <AboutList title="Garphic Design" />
          <AboutList title="Video Editing" />


        </div>
      </div>
    </section>
  );
};

export default AboutMe;
