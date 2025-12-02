"use client";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export default function OurTeam() {
  const leadership = [
    {
      name: "Robert Anderson",
      role: "CEO & Founder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      bio: "Visionary leader with 15+ years in tech innovation",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Lisa Martinez",
      role: "CTO",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Tech strategist passionate about scalable solutions",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "David Kim",
      role: "COO",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      bio: "Operations expert driving efficiency and growth",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  ];

  const departments = [
    {
      name: "Engineering",
      members: 25,
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Design",
      members: 12,
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Product",
      members: 8,
      icon: "📱",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Marketing",
      members: 10,
      icon: "📢",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Sales",
      members: 15,
      icon: "💼",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Support",
      members: 18,
      icon: "🤝",
      color: "from-indigo-500 to-purple-500",
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
            Meet Our Team
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            The brilliant minds behind the magic. Together, we're building the
            future of technology and innovation.
          </p>
        </motion.div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Team Members", value: "88+" },
            { label: "Countries", value: "12" },
            { label: "Departments", value: "6" },
            { label: "Years Combined Exp", value: "500+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="relative w-full h-full rounded-full border-4 border-white/20"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">
                    {leader.role}
                  </p>
                  <p className="text-gray-400 mb-6">{leader.bio}</p>

                  <div className="flex gap-4">
                    <a
                      href={leader.linkedin}
                      className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                    >
                      <FiLinkedin className="w-5 h-5 text-gray-300 hover:text-blue-400" />
                    </a>
                    <a
                      href={leader.twitter}
                      className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                    >
                      <FiTwitter className="w-5 h-5 text-gray-300 hover:text-blue-400" />
                    </a>
                    <a
                      href={leader.email}
                      className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                    >
                      <FiMail className="w-5 h-5 text-gray-300 hover:text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Departments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Departments
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}
                  >
                    {dept.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-gray-400">
                    <span className="text-3xl font-bold text-blue-400">
                      {dept.members}
                    </span>{" "}
                    Members
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Our Culture
          </h2>
          <p className="text-gray-300 text-lg text-center mb-8 max-w-3xl mx-auto">
            We believe in fostering a collaborative, inclusive, and innovative
            environment where every team member can thrive and make an impact.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Work-Life Balance",
                desc: "Flexible hours & remote options",
              },
              {
                title: "Growth Opportunities",
                desc: "Continuous learning & development",
              },
              {
                title: "Inclusive Environment",
                desc: "Diverse & welcoming culture",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 text-center"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105">
              Join Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
