"use client";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiUsers,
  FiCalendar,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";
import { useState } from "react";

export default function Volunteer() {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  const volunteerRoles = [
    {
      id: 1,
      title: "Technical Mentor",
      description:
        "Guide aspiring developers through their learning journey and help them build real-world projects.",
      commitment: "4-6 hours/week",
      skills: ["Programming", "Teaching", "Communication"],
      openings: 5,
      benefits: [
        "Flexible schedule",
        "Certificate of recognition",
        "Networking opportunities",
        "Skill development",
      ],
    },
    {
      id: 2,
      title: "Event Coordinator",
      description:
        "Help organize and manage tech events, workshops, and community meetups.",
      commitment: "6-8 hours/week",
      skills: ["Organization", "Communication", "Event Planning"],
      openings: 3,
      benefits: [
        "Event management experience",
        "Leadership skills",
        "Industry connections",
        "Free event access",
      ],
    },
    {
      id: 3,
      title: "Content Creator",
      description:
        "Create educational content including blog posts, tutorials, and video guides.",
      commitment: "5-7 hours/week",
      skills: ["Writing", "Video Editing", "Technical Knowledge"],
      openings: 4,
      benefits: [
        "Portfolio building",
        "Creative freedom",
        "Byline credit",
        "Content tools access",
      ],
    },
    {
      id: 4,
      title: "Community Moderator",
      description:
        "Foster a positive community environment and help members with their questions.",
      commitment: "3-5 hours/week",
      skills: ["Communication", "Problem Solving", "Empathy"],
      openings: 6,
      benefits: [
        "Community leadership",
        "Conflict resolution skills",
        "Recognition badge",
        "Priority support",
      ],
    },
  ];

  const impactStats = [
    { value: "500+", label: "Active Volunteers" },
    { value: "10K+", label: "People Helped" },
    { value: "200+", label: "Events Organized" },
    { value: "50+", label: "Countries" },
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
            Volunteer With Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Make a difference in the tech community. Share your skills, inspire
            others, and grow together.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {impactStats.map((stat, index) => (
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

        {/* Why Volunteer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Volunteer?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiHeart className="w-8 h-8" />,
                title: "Give Back",
                description: "Help others succeed in their tech journey",
              },
              {
                icon: <FiUsers className="w-8 h-8" />,
                title: "Build Network",
                description: "Connect with like-minded professionals",
              },
              {
                icon: <FiAward className="w-8 h-8" />,
                title: "Gain Experience",
                description: "Develop leadership and mentoring skills",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Volunteer Roles */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Available Positions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {role.title}
                  </h3>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full">
                    {role.openings} openings
                  </span>
                </div>

                <p className="text-gray-300 mb-6">{role.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FiCalendar className="text-blue-400" />
                    <span>Commitment: {role.commitment}</span>
                  </div>

                  <div>
                    <p className="text-gray-400 mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setSelectedRole(selectedRole === role.id ? null : role.id)
                  }
                  className="text-blue-400 hover:text-blue-300 font-semibold mb-4 transition-colors"
                >
                  {selectedRole === role.id ? "Hide Benefits" : "View Benefits"}
                </button>

                {selectedRole === role.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 mb-6"
                  >
                    {role.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <FiCheckCircle className="text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Don't see a role that fits? We'd still love to hear from you!
          </p>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-white transition-all duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
