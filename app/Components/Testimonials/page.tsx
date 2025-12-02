"use client";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content:
        "Eagle Infotech transformed our vision into reality. Their expertise in both product development and service delivery is unmatched. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCo",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      content:
        "Working with Eagle Infotech was a game-changer. They delivered a scalable solution that exceeded our expectations and timeline.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, GrowthLabs",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      content:
        "The team's dedication to quality and innovation is remarkable. They don't just build products, they build partnerships.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Client Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about
            working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group flex-1"
              >
                <FaQuoteLeft className="text-5xl text-blue-400 mb-6 opacity-50" />

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500/50"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
