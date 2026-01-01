import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Custom Cursor Logic
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            opacity: 1,
        },
        // Tambahkan ini di elemen interaktif (link/button) dengan onMouseEnter={() => setCursorVariant("text")}
        text: { 
            height: 100,
            width: 100,
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            mixBlendMode: "difference",
            border: "none"
        }
    };

    return (
        <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 cursor-none">
            
            {/* --- CUSTOM CURSOR --- */}
            <motion.div 
                className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/30 rounded-full pointer-events-none z-[9999] hidden lg:block shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                variants={variants}
                animate={cursorVariant}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
            >
                {/* Dot di tengah cursor */}
                <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>

            {/* --- SCROLL PROGRESS BAR --- */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* --- COOL ANIMATED BACKGROUND --- */}
            <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950">
                {/* Grid Overlay Halus */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Radial Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#00000000,transparent)]"></div>

                {/* Animated Gradient Blobs (Aurora Effect) */}
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            {/* --- CONTENT --- */}
            {/* Navbar dibuat sticky dan high z-index */}
            <div className="fixed top-0 w-full z-50">
               <Navbar /> 
            </div>
            
            <div className="container mx-auto px-8 mt-24 relative z-10">
                <Hero />
                <div className="my-20"><About /></div>
                <div className="my-20"><Technologies /></div>
                <div className="my-20"><Experience /></div>
                <div className="my-20"><Projects /></div>
                <div className="my-20"><Contact /></div>
            </div>
        </div>
    );
};

export default App;