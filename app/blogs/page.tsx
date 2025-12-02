"use client";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiArrowRight,
  FiTag,
} from "react-icons/fi";
import { useState } from "react";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "AI/ML",
    "Cloud",
    "DevOps",
    "Security",
  ];

  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Applications",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing business operations and decision-making processes across industries.",
      author: "Sarah Johnson",
      date: "Feb 10, 2025",
      readTime: "8 min read",
      category: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      featured: true,
    },
    {
      id: 2,
      title: "Microservices Architecture: Best Practices",
      excerpt:
        "A comprehensive guide to building scalable microservices with modern tools and patterns.",
      author: "Michael Chen",
      date: "Feb 8, 2025",
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      featured: false,
    },
    {
      id: 3,
      title: "Securing Your Cloud Infrastructure",
      excerpt:
        "Essential security practices for protecting your cloud-based applications and data.",
      author: "Emily Rodriguez",
      date: "Feb 5, 2025",
      readTime: "10 min read",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      featured: false,
    },
    {
      id: 4,
      title: "Kubernetes in Production: Lessons Learned",
      excerpt:
        "Real-world insights from deploying and managing Kubernetes clusters at scale.",
      author: "David Kim",
      date: "Feb 3, 2025",
      readTime: "15 min read",
      category: "DevOps",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
      featured: false,
    },
    {
      id: 5,
      title: "Serverless Computing: When and Why",
      excerpt:
        "Understanding the benefits and trade-offs of serverless architecture for modern applications.",
      author: "Alex Thompson",
      date: "Jan 30, 2025",
      readTime: "7 min read",
      category: "Cloud",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      featured: false,
    },
    {
      id: 6,
      title: "Machine Learning Model Deployment Strategies",
      excerpt:
        "Best practices for deploying ML models to production environments efficiently.",
      author: "Lisa Wang",
      date: "Jan 28, 2025",
      readTime: "11 min read",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
      featured: false,
    },
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Our Blog
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Insights, tutorials, and thought leadership from our team of experts
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Blog */}
        {filteredBlogs.find((blog) => blog.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {filteredBlogs
              .filter((blog) => blog.featured)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                          {blog.category}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {blog.title}
                      </h2>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <FiUser className="text-blue-400" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiCalendar className="text-blue-400" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiClock className="text-blue-400" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <button className="group/btn w-fit px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all duration-300">
                        <span className="flex items-center gap-2">
                          Read More
                          <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs
            .filter((blog) => !blog.featured)
            .map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/80 text-white text-xs font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <FiUser className="text-blue-400" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiClock className="text-blue-400" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2 group/link">
                    Read Article
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
