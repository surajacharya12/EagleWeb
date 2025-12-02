"use client";
import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";

export default function Consulting() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FiTarget className="w-20 h-20 text-blue-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Consulting Services
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Strategic technology consulting to accelerate your digital
            transformation
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300">
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
