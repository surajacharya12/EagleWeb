"use client";

import { motion } from "framer-motion";

const services = [
  {
    name: "Custom Software Development",
    description:
      "End-to-end scalable software built around your business needs.",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "UI/UX Design",
    description: "Human-centered, intuitive, and modern design experiences.",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Mobile App Development",
    description: "High-performance Android & iOS apps crafted with precision.",
    icon: "📱",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Digital Marketing",
    description: "SEO, content strategy, and digital growth solutions.",
    icon: "📢",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Scaling your infrastructure with automation & cloud engineering.",
    icon: "☁️",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Technical Support",
    description: "Reliable, always-on technical & customer support.",
    icon: "🤝",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Our Services
          </h2>
          <h3 className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to accelerate your digital
            transformation journey.
          </h3>
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${service.color} 
                rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
