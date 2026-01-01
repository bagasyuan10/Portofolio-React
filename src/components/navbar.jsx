import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
    // Scroll Progress Logic
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {/* Progress Bar (Garis Ungu di paling atas) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 origin-left z-50"
                style={{ scaleX }}
            />

            <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between py-4 px-8 backdrop-blur-md bg-black/30 border-b border-white/5 shadow-lg">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-shrink-0 items-center"
                >
                    <a className="text-3xl font-bold tracking-wider hover:text-white transition-colors duration-300 group cursor-pointer" href="#">
                        Bagas
                        <motion.span 
                            animate={{ opacity: [1, 0.5, 1], rotate: [0, 10, -10, 0] }} 
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block text-cyan-400 group-hover:text-purple-500 transition-colors"
                        >
                            .
                        </motion.span>
                    </a>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center justify-center gap-6 text-2xl'
                >
                    {[
                        { icon: <FaLinkedin />, href: "https://linkedin.com", color: "hover:text-[#0077b5]" },
                        { icon: <FaGithub />, href: "https://github.com", color: "hover:text-white" },
                        { icon: <FaInstagram />, href: "https://instagram.com", color: "hover:text-[#E1306C]" }
                    ].map((social, index) => (
                        <motion.a 
                            key={index}
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            href={social.href}
                            target="_blank" rel="noopener noreferrer" 
                            className={`text-neutral-400 transition-all duration-300 ${social.color}`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </nav>
        </>
    );
};

export default Navbar;