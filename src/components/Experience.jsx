import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                className="my-20 text-center text-4xl font-bold tracking-tight"
            >
                Experience
            </motion.h2>

            <div className="flex flex-col gap-12 px-4 relative max-w-5xl mx-auto">
                {/* Vertical Timeline Line (Desktop only) */}
                <div className="absolute left-0 lg:left-1/4 top-0 bottom-0 w-0.5 bg-neutral-800 hidden lg:block transform -translate-x-1/2"></div>

                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="flex flex-wrap lg:justify-between items-start relative group">
                        
                        {/* Dot on Timeline */}
                        <div className="absolute left-0 lg:left-1/4 w-4 h-4 bg-neutral-900 border-2 border-purple-500 rounded-full hidden lg:block transform -translate-x-1/2 mt-1.5 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300 z-10"></div>

                        {/* Year Section */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/4 lg:text-right lg:pr-12 mb-4 lg:mb-0"
                        >
                            <p className="text-lg font-mono text-purple-400 font-bold">{experience.year}</p>
                        </motion.div>

                        {/* Card Section */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-3/4 lg:pl-12"
                        >
                            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 hover:bg-neutral-900/60 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-purple-900/10">
                                <h6 className="text-xl font-bold text-white flex flex-wrap gap-2 items-center">
                                    {experience.role} 
                                    <span className="text-sm font-normal text-purple-200 bg-purple-900/30 px-2 py-0.5 rounded">@{experience.company}</span>
                                </h6>
                                <p className="mb-4 mt-2 text-neutral-400 text-justify leading-relaxed">
                                    {experience.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, idx) => (
                                        <span key={idx} className="rounded-md bg-neutral-800 px-2 py-1 text-xs font-medium text-purple-300 border border-neutral-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;