"use client";
import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp } from "react-icons/fi";

export default function About() {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Global Clients" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      desc: "We challenge norms and craft creative, forward-thinking solutions.",
      bg: "bg-blue-100 text-blue-600",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      desc: "We build success together through teamwork and transparent communication.",
      bg: "bg-green-100 text-green-600",
    },
    {
      icon: "🏆",
      title: "Excellence",
      desc: "We deliver high-quality experiences with precision and consistency.",
      bg: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: "🧭",
      title: "Integrity",
      desc: "We operate with honesty, ethics, and accountability in everything we do.",
      bg: "bg-purple-100 text-purple-600",
    },
    {
      icon: "❤️",
      title: "Customer-Centric",
      desc: "Every decision is made with empathy and understanding for real user needs.",
      bg: "bg-pink-100 text-pink-600",
    },
    {
      icon: "🔮",
      title: "Future-Focused",
      desc: "We embrace modern technologies to prepare clients for tomorrow.",
      bg: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            About Eagle Infotech
          </h1>

          <p className="text-center text-gray-300 text-lg md:text-xl mt-6 leading-relaxed max-w-4xl mx-auto">
            We deliver innovative services and cutting-edge products that
            empower organizations through intelligent automation, scalable
            solutions, and future-ready digital ecosystems. Since 2025, we've
            been redefining how businesses grow and scale.
          </p>

          {/* Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {stat.value}
                </p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
              <FiTarget className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in delivering transformative services and
              innovative products that shape a smarter world. We envision
              seamless user experiences and technologies that empower businesses
              to thrive with confidence and creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
              <FiTrendingUp className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We deliver exceptional services and create future-ready products
              using purposeful design, advanced engineering, and strategic
              innovation. Our mission is to help brands unlock new
              opportunities, maximize performance, and accelerate digital growth
              through both custom solutions and scalable products.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-400 text-lg">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 ${value.bg} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}
              >
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services & Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Offer
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Services Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="text-6xl mb-6">🛠️</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Services-Based Solutions
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Custom-tailored services designed to meet your unique business
              requirements and challenges.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Custom Software Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Consulting & Strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Cloud Solutions & Migration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Digital Transformation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Maintenance & Support</span>
              </li>
            </ul>
          </motion.div>

          {/* Products Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="text-6xl mb-6">📦</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Product-Based Solutions
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Ready-to-deploy products and platforms that scale with your
              business growth.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>SaaS Platforms & Applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Enterprise Software Solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Mobile & Web Applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>AI & Automation Tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Analytics & Business Intelligence</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to build innovative solutions that drive your
            success
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105">
            Get Started Today
          </button>
        </div>
      </motion.div>
    </section>
  );
}
