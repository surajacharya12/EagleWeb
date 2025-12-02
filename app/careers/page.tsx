"use client";
import { motion } from "framer-motion";
import { FiMapPin, FiBriefcase, FiClock, FiArrowRight } from "react-icons/fi";

export default function Careers() {
  const openings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build scalable web applications using modern tech stack.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Manage and optimize our cloud infrastructure.",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Boston",
      type: "Full-time",
      description: "Drive growth and brand awareness strategies.",
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
            Join Our Team
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Build the future with us. We're looking for talented individuals who
            are passionate about technology and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {job.title}
              </h3>
              <p className="text-gray-400 mb-6">{job.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FiBriefcase className="text-blue-400" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FiMapPin className="text-blue-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FiClock className="text-blue-400" />
                  <span>{job.type}</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2">
                Apply Now
                <FiArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
