import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a className="navbar-logo m-8 flex text-xl" href="#">Bagas.</a>
            </div>
            <div className='logo m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/bagas-yuan-bima-indrawan-795492273/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/bagasyuan10" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/bagasyuan22/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
