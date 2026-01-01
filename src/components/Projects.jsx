import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 relative z-10">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                className="my-20 text-center text-4xl font-bold"
            >
                Featured <span className="text-cyan-400">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12 max-w-7xl mx-auto">
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }} // Efek naik saat hover
                        className="glass-effect p-6 rounded-2xl border border-neutral-800 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group flex flex-col"
                    >
                        {/* Image Container dengan styling baru (Inside Glass) */}
                        <div className="relative h-48 mb-4 overflow-hidden rounded-xl bg-neutral-900/50">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                            
                            {/* Hover Actions (Github & Link) */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                <a href="#" className="p-2 bg-neutral-900/80 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:text-black transition-all border border-white/10 shadow-lg">
                                    <FaGithub size={18} />
                                </a>
                                <a href="#" className="p-2 bg-neutral-900/80 backdrop-blur-md rounded-full text-white hover:bg-purple-500 hover:text-white transition-all border border-white/10 shadow-lg">
                                    <FaExternalLinkAlt size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-neutral-400 text-sm mb-4 line-clamp-3 flex-grow">
                                {project.description}
                            </p>
                            
                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-700/30 mt-auto">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="text-[10px] uppercase tracking-wider font-semibold text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded border border-cyan-500/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Button See All */}
            <div className="mt-16 text-center">
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/bagasyuan10" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-effect border border-neutral-700 text-neutral-300 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all font-semibold"
                >
                    See all projects <FaArrowRight />
                </motion.a>
            </div>
        </div>
    )
}

export default Projects