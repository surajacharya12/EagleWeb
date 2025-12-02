"use client";
import { motion } from "framer-motion";
import {
  FiTool,
  FiZap,
  FiCode,
  FiGitBranch,
  FiAlertCircle,
  FiStar,
} from "react-icons/fi";

export default function SandboxProjects() {
  const experiments = [
    {
      id: 1,
      name: "Quantum Optimizer",
      tagline: "Quantum-inspired optimization algorithms",
      description:
        "Experimental optimization engine using quantum computing principles for solving complex problems.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      category: "Research",
      status: "Experimental",
      maturity: "30%",
      contributors: 8,
      stars: 145,
      features: [
        "Quantum annealing simulation",
        "Hybrid classical-quantum algorithms",
        "Optimization benchmarks",
      ],
      techStack: ["Python", "Qiskit", "NumPy"],
      risks: ["Highly experimental", "API may change", "Limited documentation"],
    },
    {
      id: 2,
      name: "Neural Code Generator",
      tagline: "AI-powered code generation from natural language",
      description:
        "Experimental AI model that generates production-ready code from plain English descriptions.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      category: "AI/ML",
      status: "Proof of Concept",
      maturity: "40%",
      contributors: 12,
      stars: 320,
      features: [
        "Natural language to code",
        "Multiple language support",
        "Context-aware generation",
      ],
      techStack: ["Python", "GPT-4", "TensorFlow"],
      risks: ["Accuracy varies", "Resource intensive", "Beta quality"],
    },
    {
      id: 3,
      name: "Holographic UI",
      tagline: "3D holographic user interfaces for web",
      description:
        "Experimental framework for creating immersive 3D holographic interfaces in web browsers.",
      image:
        "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=800",
      category: "UI/UX",
      status: "Prototype",
      maturity: "25%",
      contributors: 6,
      stars: 89,
      features: [
        "WebGL-based rendering",
        "Gesture controls",
        "Spatial audio integration",
      ],
      techStack: ["Three.js", "WebXR", "TypeScript"],
      risks: ["Browser compatibility", "Performance issues", "Early stage"],
    },
    {
      id: 4,
      name: "Edge ML Runtime",
      tagline: "Run ML models on edge devices",
      description:
        "Lightweight runtime for deploying machine learning models on IoT and edge devices.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
      category: "Edge Computing",
      status: "Alpha",
      maturity: "45%",
      contributors: 10,
      stars: 210,
      features: [
        "Model compression",
        "Hardware acceleration",
        "Offline inference",
      ],
      techStack: ["C++", "TensorFlow Lite", "ONNX"],
      risks: [
        "Limited device support",
        "Optimization needed",
        "Active development",
      ],
    },
    {
      id: 5,
      name: "Blockchain Sharding",
      tagline: "Scalable blockchain through sharding",
      description:
        "Experimental sharding implementation for dramatically increasing blockchain throughput.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      category: "Blockchain",
      status: "Research",
      maturity: "20%",
      contributors: 5,
      stars: 67,
      features: [
        "Dynamic shard allocation",
        "Cross-shard transactions",
        "Consensus optimization",
      ],
      techStack: ["Rust", "libp2p", "RocksDB"],
      risks: ["Security unproven", "Theoretical", "Breaking changes"],
    },
    {
      id: 6,
      name: "Voice OS",
      tagline: "Voice-first operating system interface",
      description:
        "Experimental voice-controlled OS interface with natural conversation capabilities.",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800",
      category: "Voice AI",
      status: "Prototype",
      maturity: "35%",
      contributors: 7,
      stars: 156,
      features: [
        "Natural language commands",
        "Context awareness",
        "Multi-language support",
      ],
      techStack: ["Python", "Whisper", "React Native"],
      risks: ["Privacy concerns", "Accuracy issues", "Platform dependent"],
    },
  ];

  const getMaturityColor = (maturity: string) => {
    const value = parseInt(maturity);
    if (value >= 40) return "text-yellow-400";
    if (value >= 20) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full mb-6">
            <FiTool className="w-5 h-5" />
            <span className="font-semibold">Experimental</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Sandbox Projects
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Cutting-edge experiments and innovative ideas. Use at your own risk
            and help us shape the future.
          </p>
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 bg-orange-600/10 border border-orange-600/30 rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <FiAlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-orange-400 font-semibold mb-2">
                Experimental Projects Warning
              </h3>
              <p className="text-gray-300 text-sm">
                These projects are in early experimental stages. APIs may change
                without notice, documentation may be incomplete, and stability
                is not guaranteed. Perfect for innovators and early adopters!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Active Experiments", value: "18" },
            { label: "Researchers", value: "48" },
            { label: "Prototypes", value: "32" },
            { label: "Ideas Tested", value: "100+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Experiments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experiment.image}
                  alt={experiment.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                    {experiment.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-2">
                      <FiGitBranch className="w-4 h-4" />
                      <span>{experiment.contributors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiStar className="w-4 h-4 text-yellow-400" />
                      <span>{experiment.stars}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {experiment.name}
                </h3>
                <p className="text-blue-400 text-sm mb-3">
                  {experiment.tagline}
                </p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {experiment.description}
                </p>

                {/* Maturity */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-xs">Maturity</span>
                    <span
                      className={`text-xs font-semibold ${getMaturityColor(
                        experiment.maturity
                      )}`}
                    >
                      {experiment.maturity}
                    </span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-orange-600 to-red-600 h-1.5 rounded-full"
                      style={{ width: experiment.maturity }}
                    ></div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-xs">
                    Features:
                  </h4>
                  <ul className="space-y-1">
                    {experiment.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-xs flex items-start gap-2"
                      >
                        <FiZap className="text-orange-400 flex-shrink-0 mt-0.5 w-3 h-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {experiment.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Risks */}
                <div className="mb-4 p-3 bg-orange-600/10 border border-orange-600/20 rounded-xl">
                  <h4 className="text-orange-400 font-semibold mb-2 text-xs flex items-center gap-1">
                    <FiAlertCircle className="w-3 h-3" />
                    Risks:
                  </h4>
                  <ul className="space-y-1">
                    {experiment.risks.map((risk, i) => (
                      <li key={i} className="text-gray-400 text-xs">
                        • {risk}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="w-full px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-full font-semibold text-white text-sm transition-all duration-300">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Have an Experimental Idea?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Submit your innovative concept and join our sandbox program. We
            provide resources and support for promising experiments.
          </p>
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]">
            Submit Proposal
          </button>
        </motion.div>
      </div>
    </section>
  );
}
