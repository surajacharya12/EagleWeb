"use client";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiEye,
  FiCompass,
  FiZap,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

export default function MissionVision() {
  const goals = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "Push boundaries with cutting-edge technology and creative solutions",
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Customer Success",
      description:
        "Deliver exceptional value and experiences that exceed expectations",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Sustainable Growth",
      description: "Build scalable solutions that grow with our clients' needs",
    },
    {
      icon: <FiCompass className="w-8 h-8" />,
      title: "Ethical Leadership",
      description:
        "Lead with integrity, transparency, and social responsibility",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Mission & Vision
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Our guiding principles that shape our journey and define our purpose
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FiEye className="w-10 h-10 text-blue-400" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-300 text-xl leading-relaxed">
                  To shape a smarter world powered by intelligent solutions,
                  seamless user experiences, and technologies that empower
                  businesses to thrive with confidence and creativity.
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {["Global Impact", "Innovation Leader", "Trusted Partner"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 text-center"
                  >
                    <p className="text-blue-400 font-semibold">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FiTarget className="w-10 h-10 text-purple-400" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-300 text-xl leading-relaxed">
                  We create future-ready products using purposeful design,
                  advanced engineering, and strategic innovation — helping
                  brands unlock new opportunities, maximize performance, and
                  accelerate digital growth.
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                "Quality Excellence",
                "Client Success",
                "Continuous Innovation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-4 text-center"
                >
                  <p className="text-purple-400 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strategic Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Strategic Goals
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Our Journey Forward
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2025", goal: "Expand global presence to 20+ countries" },
              { year: "2026", goal: "Launch 50+ innovative products" },
              { year: "2027", goal: "Achieve carbon-neutral operations" },
            ].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-3">
                  {milestone.year}
                </div>
                <p className="text-gray-300">{milestone.goal}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
