"use client";
import { motion } from "framer-motion";
import {
  FiClock,
  FiBarChart,
  FiPlay,
  FiDownload,
  FiCode,
} from "react-icons/fi";
import { useState } from "react";

export default function Tutorials() {
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const tutorials = [
    {
      id: 1,
      title: "Building Your First React Application",
      description:
        "Learn the fundamentals of React by building a complete todo application from scratch.",
      duration: "2 hours",
      level: "Beginner",
      lessons: 12,
      students: 1250,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "Advanced TypeScript Patterns",
      description:
        "Master advanced TypeScript features including generics, decorators, and type guards.",
      duration: "3 hours",
      level: "Advanced",
      lessons: 18,
      students: 890,
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
      tags: ["TypeScript", "Advanced", "Patterns"],
    },
    {
      id: 3,
      title: "Docker & Kubernetes Essentials",
      description:
        "Complete guide to containerization and orchestration for modern applications.",
      duration: "4 hours",
      level: "Intermediate",
      lessons: 24,
      students: 2100,
      image:
        "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800",
      tags: ["Docker", "Kubernetes", "DevOps"],
    },
    {
      id: 4,
      title: "REST API Development with Node.js",
      description:
        "Build scalable RESTful APIs using Node.js, Express, and MongoDB.",
      duration: "3.5 hours",
      level: "Intermediate",
      lessons: 20,
      students: 1680,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      tags: ["Node.js", "API", "Backend"],
    },
    {
      id: 5,
      title: "Introduction to Machine Learning",
      description:
        "Get started with ML concepts, algorithms, and practical implementations using Python.",
      duration: "5 hours",
      level: "Beginner",
      lessons: 30,
      students: 3200,
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
      tags: ["Python", "ML", "AI"],
    },
    {
      id: 6,
      title: "AWS Cloud Architecture",
      description:
        "Design and deploy scalable cloud solutions using AWS services and best practices.",
      duration: "6 hours",
      level: "Advanced",
      lessons: 35,
      students: 1450,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      tags: ["AWS", "Cloud", "Architecture"],
    },
  ];

  const filteredTutorials =
    selectedLevel === "All"
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.level === selectedLevel);

  const getLevelColor = (level: string) => {
    switch (level) {
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
            Tutorials
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Step-by-step guides to master modern technologies and frameworks
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: "Total Tutorials", value: "150+" },
            { label: "Active Students", value: "25K+" },
            { label: "Hours of Content", value: "500+" },
            { label: "Completion Rate", value: "92%" },
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

        {/* Level Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedLevel === level
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              {level}
            </button>
          ))}
        </motion.div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600/80 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FiPlay className="w-8 h-8 text-white ml-1" />
                </button>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 ${getLevelColor(
                      tutorial.level
                    )} text-xs font-semibold rounded-full`}
                  >
                    {tutorial.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {tutorial.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <FiClock className="text-blue-400" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCode className="text-blue-400" />
                    <span>{tutorial.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiBarChart className="text-blue-400" />
                    <span>{tutorial.students}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white text-sm transition-all duration-300">
                    Start Learning
                  </button>
                  <button className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300">
                    <FiDownload className="text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
