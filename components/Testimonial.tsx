// components/Testimonial.tsx
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="text-white bg-[#0F1113] py-20 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-8 text-center text-white">Connect with Me</h1>
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/ashish-chauhan-49b4281ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-designColor flex flex-col items-center transition-transform transform hover:scale-110 shadow-md"
        >
          <FaLinkedin size={48} />
          <span className="text-sm mt-2">LinkedIn</span>
        </a>
        <a
          href="https://github.com/Ashish28c"
          target="_blank"
          rel="noopener noreferrer"
          className="text-designColor flex flex-col items-center transition-transform transform hover:scale-110 shadow-md"
        >
          <FaGithub size={48} />
          <span className="text-sm mt-2">GitHub</span>
        </a>
        <a
          href="https://www.instagram.com/ashish_2882/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-designColor flex flex-col items-center transition-transform transform hover:scale-110 shadow-md"
        >
          <FaInstagram size={48} />
          <span className="text-sm mt-2">Instagram</span>
        </a>
        <a
          href="https://twitter.com/Ashish28c"
          target="_blank"
          rel="noopener noreferrer"
          className="text-designColor flex flex-col items-center transition-transform transform hover:scale-110 shadow-md"
        >
          <FaTwitter size={48} />
          <span className="text-sm mt-2">Twitter</span>
        </a>
      </div>
    </section>
  );
};

export default Testimonial;
