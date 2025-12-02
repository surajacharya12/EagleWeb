"use client";
import { motion } from "framer-motion";
import {
  FiPackage,
  FiTrendingUp,
  FiUsers,
  FiGitBranch,
  FiZap,
  FiCode,
} from "react-icons/fi";

export default function IncubatingProjects() {
  const products = [
    {
      id: 1,
      name: "AI Assistant SDK",
      tagline: "Build intelligent conversational AI applications",
      description:
        "Developer-friendly SDK for creating AI-powered chatbots and virtual assistants with natural language understanding.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      category: "AI/ML",
      version: "v0.9.2 Beta",
      maturity: "85%",
      contributors: 45,
      stars: 1200,
      features: [
        "Pre-trained NLP models",
        "Multi-language support",
        "Context management",
        "Integration APIs",
      ],
      techStack: ["Python", "TensorFlow", "FastAPI"],
      status: "Beta Testing",
      roadmap: "Stable release Q2 2025",
      license: "Commercial",
    },
    {
      id: 2,
      name: "DevOps Automation Hub",
      tagline: "Streamline your CI/CD pipeline",
      description:
        "All-in-one platform for automating deployments, testing, and infrastructure management across multiple environments.",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
      category: "DevOps",
      version: "v0.7.5 Beta",
      maturity: "70%",
      contributors: 32,
      stars: 890,
      features: [
        "Pipeline orchestration",
        "Environment management",
        "Automated testing",
        "Rollback capabilities",
      ],
      techStack: ["Go", "Docker", "Kubernetes"],
      status: "Active Development",
      roadmap: "Stable release Q3 2025",
      license: "Commercial",
    },
    {
      id: 3,
      name: "Blockchain Ledger",
      tagline: "Enterprise blockchain solution",
      description:
        "Scalable blockchain platform for secure, transparent, and immutable record-keeping in enterprise environments.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      category: "Blockchain",
      version: "v0.8.0 Beta",
      maturity: "80%",
      contributors: 28,
      stars: 650,
      features: [
        "Smart contracts",
        "Consensus mechanisms",
        "Private networks",
        "Audit trails",
      ],
      techStack: ["Rust", "Solidity", "Node.js"],
      status: "Beta Testing",
      roadmap: "Stable release Q2 2025",
      license: "Commercial",
    },
    {
      id: 4,
      name: "IoT Gateway",
      tagline: "Connect and manage IoT devices at scale",
      description:
        "Unified platform for managing IoT devices, collecting sensor data, and triggering automated actions.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
      category: "IoT",
      version: "v0.6.3 Alpha",
      maturity: "65%",
      contributors: 18,
      stars: 420,
      features: [
        "Device management",
        "Real-time data streaming",
        "Edge computing",
        "Protocol adapters",
      ],
      techStack: ["C++", "MQTT", "InfluxDB"],
      status: "Alpha Testing",
      roadmap: "Beta release Q4 2025",
      license: "Commercial",
    },
  ];

  const getMaturityColor = (maturity: string) => {
    const value = parseInt(maturity);
    if (value >= 80) return "text-green-400";
    if (value >= 60) return "text-yellow-400";
    return "text-orange-400";
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/20 text-yellow-400 rounded-full mb-6">
            <FiZap className="w-5 h-5" />
            <span className="font-semibold">Growing Fast</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Incubating Products
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Innovative products in active development. Join early and help shape
            the future.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Active Projects", value: "12" },
            { label: "Contributors", value: "123" },
            { label: "GitHub Stars", value: "3.2K" },
            { label: "Beta Users", value: "2.5K" },
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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-semibold rounded-full">
                    {product.status}
                  </span>
                  <span className="px-3 py-1 bg-blue-600/80 text-white text-sm font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-blue-400">{product.tagline}</p>
                  </div>
                  <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded">
                    {product.version}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Maturity Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Maturity</span>
                    <span
                      className={`font-semibold ${getMaturityColor(
                        product.maturity
                      )}`}
                    >
                      {product.maturity}
                    </span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: product.maturity }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiUsers className="text-blue-400" />
                    <span>{product.contributors} contributors</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiGitBranch className="text-yellow-400" />
                    <span>{product.stars} stars</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Roadmap */}
                <div className="mb-4 p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiTrendingUp className="text-green-400" />
                    <span>{product.roadmap}</span>
                  </div>
                </div>

                {/* License */}
                <div className="mb-4">
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">
                    🏢 Commercial Product
                  </span>
                </div>

                {/* CTA */}
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white text-sm transition-all duration-300">
                  Product Info & Details
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
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Contribute?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Help us build the next generation of products. Join our community of
            developers and innovators.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Start Contributing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
