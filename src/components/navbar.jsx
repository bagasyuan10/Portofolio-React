import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className="navbar mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a className="navbar-logo m-8 flex text-xl" href="#">Bagas.</a>
            </div>
            <div className='logo m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin/>
                <FaGithub/>
                <BiLogoGmail/>
                <FaInstagram/>
            </div>
        </nav>
    );
};


export default Navbar;
