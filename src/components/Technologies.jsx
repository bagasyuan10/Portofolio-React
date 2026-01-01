import { RiReactjsLine } from "react-icons/ri";
import { FaPhp, FaLaravel, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { SKILLS } from "../constants"; // Import SKILLS

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const TechItem = ({ Icon, name, color, duration, borderColor, shadowColor }) => (
    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
        <motion.div
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 border-neutral-800 p-6 transition-all duration-300 bg-neutral-900/40 hover:bg-neutral-900 ${borderColor} ${shadowColor}`}
        >
            <Icon className={`text-7xl ${color}`} />
        </motion.div>
        <p className="mt-4 text-center text-neutral-400 font-medium">{name}</p>
    </motion.div>
);

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl font-bold'
            >
                Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Stack</span>
            </motion.h2>
            
            {/* --- Animated Icons Section --- */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                className='flex flex-wrap items-center justify-center gap-8 px-4'
            >
                <TechItem Icon={RiReactjsLine} name="React" color="text-cyan-400" duration={2.5} borderColor="hover:border-cyan-400" shadowColor="hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]" />
                <TechItem Icon={FaLaravel} name="Laravel" color="text-red-500" duration={3} borderColor="hover:border-red-500" shadowColor="hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]" />
                <TechItem Icon={FaPhp} name="PHP" color="text-indigo-500" duration={5} borderColor="hover:border-indigo-500" shadowColor="hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]" />
                <TechItem Icon={SiTailwindcss} name="Tailwind" color="text-cyan-500" duration={6} borderColor="hover:border-cyan-500" shadowColor="hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]" />
                <TechItem Icon={BiLogoPostgresql} name="PostgreSQL" color="text-sky-700" duration={4} borderColor="hover:border-sky-700" shadowColor="hover:shadow-[0_0_25px_rgba(3,105,161,0.4)]" />
                <TechItem Icon={FaHtml5} name="HTML5" color="text-orange-500" duration={2} borderColor="hover:border-orange-500" shadowColor="hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]" />
            </motion.div>

            {/* --- Detailed Skills List (Added) --- */}
            <div className="mt-20 px-4 md:px-10 lg:px-20">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((skill, index) => (
                        <motion.div 
                            key={index}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-purple-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white border-b border-neutral-700 pb-2">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, idx) => (
                                    <span key={idx} className="px-3 py-1 text-sm bg-neutral-800 text-cyan-400 rounded-full border border-neutral-700">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                 </div>
            </div>
        </div>
    )
}

export default Technologies