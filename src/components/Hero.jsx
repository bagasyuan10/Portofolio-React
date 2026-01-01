import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const container = (delay) => ({
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: delay, ease: "easeOut" },
    }
});

const Hero = () => {
    // Typewriter Logic
    const titles = ["Full Stack Developer", "React Specialist", "UI/UX Enthusiast"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000); // Ganti teks setiap 3 detik
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 relative overflow-hidden min-h-screen flex items-center pt-28">
            
            {/* --- COOL GRID BACKGROUND --- */}
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* --- Animated Background Blobs --- */}
            <motion.div 
                animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[100px]" 
            />
            <motion.div 
                animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[100px]" 
            />

            <div className="flex flex-wrap lg:flex-nowrap items-center px-4 lg:px-16 w-full max-w-7xl mx-auto">
                
                {/* Text Content */}
                <div className="w-full lg:w-3/5 z-10">
                    <div className="flex flex-col items-center lg:items-start space-y-6">
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-2 text-6xl font-thin tracking-tight lg:text-8xl text-white"
                        >
                            Bagas Yuan B.I
                        </motion.h1>

                        {/* Animated Typewriter Text */}
                        <motion.div
                            variants={container(0.3)}
                            initial="hidden"
                            animate="visible"
                            className="h-[60px] flex items-center" // Fixed height mencegah layout lompat
                        >
                            <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-cyan-400 bg-clip-text text-3xl lg:text-5xl tracking-tight text-transparent font-bold">
                                {titles[index]}
                            </span>
                        </motion.div>

                        <motion.p
                            variants={container(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-4 font-light tracking-wide text-gray-300 leading-relaxed text-center lg:text-left text-lg"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        
                        <motion.div 
                            variants={container(0.9)}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-6"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                            >
                                Contact Me
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full border border-neutral-500 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                            >
                                Download CV
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-2/5 mt-16 lg:mt-0 relative flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring" }}
                        className="relative z-10"
                    >
                        {/* Rotating Outer Ring */}
                        <motion.div 
                             animate={{ rotate: 360 }}
                             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                             className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-30 blur-md"
                        />
                        
                        <motion.img 
                            whileHover={{ scale: 1.02 }}
                            src={profilePic} 
                            alt="Bagas Yuan" 
                            className="relative rounded-2xl shadow-2xl lg:max-w-sm border border-white/10 object-cover z-20 bg-neutral-900" 
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;