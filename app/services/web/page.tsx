"use client";
import { motion } from "framer-motion";
import { FiCode, FiZap, FiShield, FiTrendingUp } from "react-icons/fi";

export default function WebDevelopment() {
  const features = [
    {
      icon: <FiCode />,
      title: "Modern Tech Stack",
      desc: "React, Next.js, TypeScript",
    },
    { icon: <FiZap />, title: "Lightning Fast", desc: "Optimized performance" },
    { icon: <FiShield />, title: "Secure", desc: "Enterprise-grade security" },
    {
      icon: <FiTrendingUp />,
      title: "Scalable",
      desc: "Built to grow with you",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Web Development
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Custom web applications built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
}
