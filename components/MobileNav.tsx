// components/MobileNav.tsx
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black text-white ${isOpen ? 'block' : 'hidden'}`}>
      <div className="p-4">
        <FaTimes className="text-3xl cursor-pointer" onClick={onClose} />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={onClose}>
          <div className="py-2 cursor-pointer">Home</div>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={onClose}>
          <div className="py-2 cursor-pointer">About</div>
        </Link>
        <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} onClick={onClose}>
          <div className="py-2 cursor-pointer">Portfolio</div>
        </Link>
        <Link to="testimonial" spy={true} smooth={true} offset={-70} duration={500} onClick={onClose}>
          <div className="py-2 cursor-pointer">Social Media</div>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={onClose}>
          <div className="py-2 cursor-pointer">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
