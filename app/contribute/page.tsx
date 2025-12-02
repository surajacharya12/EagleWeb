"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiCode,
  FiGitPullRequest,
  FiStar,
  FiUsers,
  FiBook,
} from "react-icons/fi";

export default function Contribute() {
  const projects = [
    {
      name: "Eagle UI Kit",
      description: "Modern React component library with TypeScript support",
      language: "TypeScript",
      stars: 2500,
      forks: 450,
      issues: 23,
      difficulty: "Intermediate",
      tags: ["React", "TypeScript", "UI"],
    },
    {
      name: "DevOps Toolkit",
      description: "Collection of DevOps automation scripts and tools",
      language: "Python",
      stars: 1800,
      forks: 320,
      issues: 15,
      difficulty: "Advanced",
      tags: ["Python", "DevOps", "Automation"],
    },
    {
      name: "API Gateway",
      description: "Lightweight API gateway with rate limiting and auth",
      language: "Go",
      stars: 3200,
      forks: 580,
      issues: 31,
      difficulty: "Advanced",
      tags: ["Go", "API", "Microservices"],
    },
    {
      name: "Learning Platform",
      description: "Open-source e-learning platform for tech education",
      language: "JavaScript",
      stars: 1200,
      forks: 280,
      issues: 42,
      difficulty: "Beginner",
      tags: ["JavaScript", "Education", "Web"],
    },
  ];

  const contributionTypes = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Code Contributions",
      description: "Fix bugs, add features, or improve performance",
      examples: ["Bug fixes", "New features", "Performance optimization"],
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Documentation",
      description: "Help improve docs, write tutorials, or create guides",
      examples: ["API documentation", "Tutorials", "Code examples"],
    },
    {
      icon: <FiGitPullRequest className="w-8 h-8" />,
      title: "Code Review",
      description: "Review pull requests and provide constructive feedback",
      examples: ["PR reviews", "Code quality", "Best practices"],
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community Support",
      description: "Help others by answering questions and sharing knowledge",
      examples: ["Issue triage", "Q&A support", "Mentoring"],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-600/20 text-green-400";
      case "Intermediate":
        return "bg-yellow-600/20 text-yellow-400";
      case "Advanced":
        return "bg-red-600/20 text-red-400";
      default:
        return "bg-blue-600/20 text-blue-400";
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Contribute to Projects
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Join our open-source community and help build amazing software that
            makes a difference.
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
            { label: "Active Projects", value: "50+" },
            { label: "Contributors", value: "1.2K+" },
            { label: "Pull Requests", value: "5K+" },
            { label: "Stars", value: "25K+" },
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

        {/* Contribution Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Ways to Contribute
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, i) => (
                    <li
                      key={i}
                      className="text-gray-500 text-sm flex items-center gap-2"
                    >
                      <span className="text-blue-400">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <FiGithub className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`px-3 py-1 ${getDifficultyColor(
                      project.difficulty
                    )} text-sm rounded-full`}
                  >
                    {project.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-full">
                    {project.language}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiGitPullRequest className="text-blue-400" />
                    <span>{project.forks} forks</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCode className="text-green-400" />
                    <span>{project.issues} issues</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300">
                    View on GitHub
                  </button>
                  <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-white transition-all duration-300">
                    Contribute
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Ready to Get Started?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                step: "1",
                title: "Pick a Project",
                desc: "Choose a project that interests you",
              },
              {
                step: "2",
                title: "Read Guidelines",
                desc: "Review contribution guidelines",
              },
              {
                step: "3",
                title: "Start Contributing",
                desc: "Submit your first PR",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              View All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
