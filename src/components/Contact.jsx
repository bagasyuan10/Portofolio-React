import { CONTACT, SERVICES } from "../constants";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 pt-10">
            
            {/* --- Services Section --- */}
            {/* Kita cek dulu apakah SERVICES ada datanya agar tidak error */}
            {SERVICES && (
                <div className="mb-24">
                    <motion.h2 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -50 }}
                        className="my-10 text-center text-4xl font-bold"
                    >
                        My <span className="text-cyan-400">Services</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-20">
                        {SERVICES.map((service, index) => (
                            <motion.div
                                key={index}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 text-center hover:border-cyan-500/30 transition-all"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- Contact Section --- */}
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                className="my-10 text-center text-4xl font-bold"
            >
                Get in Touch
            </motion.h2>

            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16 mt-12">
                
                {/* Email Card */}
                <motion.a 
                    href={`mailto:${CONTACT.email}`}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 min-w-[200px] hover:border-purple-500/50 hover:bg-purple-900/10 transition-all cursor-pointer group"
                >
                    <div className="p-4 rounded-full bg-neutral-800 group-hover:bg-purple-500 group-hover:text-white transition-colors text-purple-400 text-2xl">
                        <FaEnvelope />
                    </div>
                    <p className="text-neutral-400 text-sm group-hover:text-white transition-colors">{CONTACT.email}</p>
                </motion.a>

                {/* Phone Card */}
                <motion.a 
                    href={`https://wa.me/${CONTACT.phoneNo}`}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 min-w-[200px] hover:border-green-500/50 hover:bg-green-900/10 transition-all cursor-pointer group"
                >
                    <div className="p-4 rounded-full bg-neutral-800 group-hover:bg-green-500 group-hover:text-white transition-colors text-green-400 text-2xl">
                        <FaPhoneAlt />
                    </div>
                    <p className="text-neutral-400 text-sm group-hover:text-white transition-colors">{CONTACT.phoneNo}</p>
                </motion.a>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-20 text-center"
            >
                <p className="text-neutral-500 text-sm">
                    {CONTACT.address}
                </p>
                <p className="mt-4 text-xs text-neutral-600">
                    Designed & Coded by <span className="text-cyan-400">Bagas Yuan</span> © {new Date().getFullYear()}
                </p>
            </motion.div>
        </div>
    );
}

export default Contact;