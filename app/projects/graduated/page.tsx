"use client";
import { motion } from "framer-motion";
import {
  FiPackage,
  FiUsers,
  FiTrendingUp,
  FiDownload,
  FiExternalLink,
  FiStar,
  FiShield,
} from "react-icons/fi";

export default function GraduatedProjects() {
  const products = [
    {
      id: 1,
      name: "Eagle Cloud Platform",
      tagline: "Enterprise-grade cloud infrastructure management",
      description:
        "Complete cloud management solution with automated scaling, monitoring, and cost optimization. Trusted by Fortune 500 companies.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      category: "Infrastructure",
      version: "v3.5.2",
      users: "10K+",
      uptime: "99.99%",
      downloads: "50K+",
      features: [
        "Multi-cloud support (AWS, Azure, GCP)",
        "Real-time monitoring & alerts",
        "Cost optimization AI",
        "Auto-scaling & load balancing",
        "Enterprise security & compliance",
      ],
      techStack: ["Kubernetes", "Go", "React", "PostgreSQL"],
      pricing: "Starting at $499/month",
      status: "Production Ready",
      license: "Commercial",
    },
    {
      id: 2,
      name: "DataFlow Analytics",
      tagline: "Real-time data processing and analytics platform",
      description:
        "Process millions of events per second with our distributed analytics engine. Built for scale and performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Analytics",
      version: "v2.8.1",
      users: "5K+",
      uptime: "99.95%",
      downloads: "30K+",
      features: [
        "Real-time stream processing",
        "Custom dashboards & visualizations",
        "ML-powered insights",
        "Data warehouse integration",
        "API-first architecture",
      ],
      techStack: ["Apache Kafka", "Python", "TypeScript", "MongoDB"],
      pricing: "Starting at $799/month",
      status: "Production Ready",
      license: "Commercial",
    },
    {
      id: 3,
      name: "SecureAuth Pro",
      tagline: "Next-generation authentication & authorization",
      description:
        "Zero-trust security platform with biometric authentication, SSO, and advanced threat detection.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      category: "Security",
      version: "v4.2.0",
      users: "15K+",
      uptime: "99.99%",
      downloads: "75K+",
      features: [
        "Multi-factor authentication",
        "Biometric verification",
        "Single Sign-On (SSO)",
        "Threat intelligence",
        "Compliance reporting",
      ],
      techStack: ["Node.js", "Redis", "PostgreSQL", "React"],
      pricing: "Starting at $299/month",
      status: "Production Ready",
      license: "Commercial",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 text-green-400 rounded-full mb-6">
            <FiShield className="w-5 h-5" />
            <span className="font-semibold">Production Ready</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Graduated Products
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Battle-tested, enterprise-ready products trusted by thousands of
            companies worldwide.
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
            { label: "Active Users", value: "30K+" },
            { label: "Uptime", value: "99.99%" },
            { label: "Total Downloads", value: "155K+" },
            { label: "Enterprise Clients", value: "500+" },
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

        {/* Products */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                      {product.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {product.name}
                      </h2>
                      <p className="text-blue-400 text-lg">{product.tagline}</p>
                    </div>
                    <span className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-lg">
                      {product.version}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <FiUsers className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-white font-semibold">
                        {product.users}
                      </div>
                      <div className="text-gray-400 text-xs">Users</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <FiTrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-white font-semibold">
                        {product.uptime}
                      </div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <FiDownload className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <div className="text-white font-semibold">
                        {product.downloads}
                      </div>
                      <div className="text-gray-400 text-xs">Downloads</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <FiStar className="text-yellow-400 flex-shrink-0 mt-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* License Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full">
                      🏢 Commercial License
                    </span>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div>
                      <p className="text-gray-400 text-sm">Pricing</p>
                      <p className="text-white font-bold text-lg">
                        {product.pricing}
                      </p>
                    </div>
                    <div>
                      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300 flex items-center gap-2">
                        Learn More
                        <FiExternalLink />
                      </button>
                    </div>
                  </div>
                </div>
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
            Need Enterprise Support?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get dedicated support, custom SLAs, and priority feature requests
            for your organization.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
