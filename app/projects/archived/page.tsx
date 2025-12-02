"use client";
import { motion } from "framer-motion";
import {
  FiArchive,
  FiCalendar,
  FiUsers,
  FiGitBranch,
  FiBook,
  FiDownload,
} from "react-icons/fi";

export default function ArchivedProjects() {
  const archivedProducts = [
    {
      id: 1,
      name: "Legacy CMS Pro",
      tagline: "Content management system",
      description:
        "Enterprise content management system that served 5000+ websites. Archived in favor of modern headless CMS solutions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      category: "CMS",
      archivedDate: "December 2024",
      activeYears: "2018-2024",
      totalUsers: "5K+",
      downloads: "25K+",
      reason: "Superseded by modern headless CMS",
      achievements: [
        "Served 5000+ websites",
        "99.9% uptime over 6 years",
        "Featured in TechCrunch",
      ],
      techStack: ["PHP", "MySQL", "jQuery"],
      documentation: "Available",
      license: "Commercial (Archived)",
    },
    {
      id: 2,
      name: "Mobile SDK v1",
      tagline: "First-generation mobile development kit",
      description:
        "Original mobile SDK that powered 1000+ apps. Replaced by v2 with modern architecture and better performance.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      category: "Mobile",
      archivedDate: "October 2024",
      activeYears: "2017-2024",
      totalUsers: "3K+",
      downloads: "50K+",
      reason: "Replaced by SDK v2",
      achievements: [
        "1000+ apps built",
        "50K+ downloads",
        "Award-winning documentation",
      ],
      techStack: ["Java", "Swift", "React Native"],
      documentation: "Available",
      license: "Commercial (Archived)",
    },
    {
      id: 3,
      name: "Analytics Dashboard",
      tagline: "Real-time analytics platform",
      description:
        "Analytics platform that processed billions of events. Merged into our DataFlow Analytics product.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Analytics",
      archivedDate: "August 2024",
      activeYears: "2019-2024",
      totalUsers: "2K+",
      downloads: "15K+",
      reason: "Merged into DataFlow Analytics",
      achievements: [
        "Processed 10B+ events",
        "2000+ active users",
        "Industry recognition",
      ],
      techStack: ["Python", "Elasticsearch", "React"],
      documentation: "Available",
      license: "Commercial (Merged)",
    },
    {
      id: 4,
      name: "Chat Server",
      tagline: "Real-time messaging infrastructure",
      description:
        "Scalable chat server that handled millions of messages. Archived as modern alternatives emerged.",
      image:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800",
      category: "Communication",
      archivedDate: "June 2024",
      activeYears: "2016-2024",
      totalUsers: "8K+",
      downloads: "40K+",
      reason: "Market shift to managed services",
      achievements: [
        "8000+ deployments",
        "Millions of messages daily",
        "Open source community",
      ],
      techStack: ["Node.js", "Redis", "WebSocket"],
      documentation: "Available",
      license: "Commercial (Archived)",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600/20 text-gray-400 rounded-full mb-6">
            <FiArchive className="w-5 h-5" />
            <span className="font-semibold">Archived</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Archived Products
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Celebrating our legacy products that paved the way for innovation.
            Their code and learnings live on.
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
            { label: "Archived Products", value: "25" },
            { label: "Total Users Served", value: "50K+" },
            { label: "Years of Service", value: "100+" },
            { label: "Open Sourced", value: "18" },
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

        {/* Archived Products */}
        <div className="grid md:grid-cols-2 gap-8">
          {archivedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gray-600 text-white text-sm font-semibold rounded-full">
                    Archived
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{product.activeYears}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{product.tagline}</p>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiUsers className="text-blue-400" />
                    <span>{product.totalUsers} users</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiDownload className="text-purple-400" />
                    <span>{product.downloads}</span>
                  </div>
                </div>

                {/* Reason */}
                <div className="mb-4 p-3 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-semibold">
                      Archive Reason:
                    </span>{" "}
                    {product.reason}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {product.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-yellow-400">★</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg text-center">
                    <FiBook className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                    <p className="text-gray-400 text-xs">
                      {product.documentation}
                    </p>
                  </div>
                  <div className="p-2 bg-white/5 rounded-lg text-center">
                    <FiArchive className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                    <p className="text-gray-400 text-xs line-clamp-1">
                      {product.license}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white text-sm transition-all duration-300 flex items-center justify-center gap-2">
                    <FiBook className="w-4 h-4" />
                    View Docs
                  </button>
                  <button className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-white text-sm transition-all duration-300 flex items-center justify-center gap-2">
                    <FiDownload className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legacy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-600/20 to-gray-700/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Honoring Our Legacy
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            These commercial products served thousands of users and taught us
            invaluable lessons. Their documentation and learnings continue to
            influence our current products.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-white transition-all duration-300">
              View Documentation
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-white transition-all duration-300">
              Migration Guides
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
