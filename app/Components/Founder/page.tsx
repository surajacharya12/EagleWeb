"use client";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Founder() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Meet Our Founder
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The visionary behind Eagle Infotech's success
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Founder"
                  alt="Founder"
                  className="relative w-48 h-48 rounded-full border-4 border-white/20"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">
                  John Anderson
                </h3>
                <p className="text-blue-400 text-xl mb-4">Founder & CEO</p>
                <p>
                  "Technology should empower businesses to achieve their dreams,
                  not complicate their journey. That's why we build solutions
                  that are powerful yet simple, innovative yet reliable."
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 15 years of experience in technology and innovation,
                  John founded Eagle Infotech with a vision to transform how
                  businesses leverage technology. His passion for creating
                  impactful solutions has driven the company to deliver
                  exceptional results for clients worldwide.
                </p>

                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <FiLinkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <FiTwitter className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <FiMail className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
