import aboutImg from "../assets/About.jpg";
import { ABOUT_TEXT, EDUCATION } from "../constants"; // Import EDUCATION
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-16 lg:pb-24 overflow-hidden relative">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-16 lg:my-24 text-center text-4xl lg:text-5xl font-bold tracking-tight"
            >
                About <span className="text-neutral-500">Me</span>
            </motion.h2>

            <div className="flex flex-wrap items-center">
                
                {/* Image Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <motion.img 
                            whileHover={{ scale: 1.02, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative z-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" 
                            src={aboutImg} 
                            alt="about" 
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 px-6 lg:px-10"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light leading-8 text-neutral-300 text-lg text-justify lg:text-left">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                    
                    {/* Education Section (Added) */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h3>
                        {EDUCATION.map((edu, index) => (
                            <div key={index} className="border-l-2 border-purple-500 pl-4 mb-6">
                                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                <p className="text-neutral-400">{edu.university}</p>
                                <span className="text-sm text-purple-400">{edu.year}</span>
                                <p className="mt-2 text-neutral-300 text-sm font-light">{edu.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Counter */}
                    <div className="flex gap-10 mt-8 justify-center lg:justify-start border-t border-neutral-800 pt-6">
                        {[
                            { label: "Years Experience", value: "2+" },
                            { label: "Completed Projects", value: "10+" },
                            { label: "Clients Happy", value: "100%" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center lg:text-left">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</h3>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;