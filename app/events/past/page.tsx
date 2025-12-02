"use client";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiUsers, FiPlay } from "react-icons/fi";
import { useState } from "react";

export default function PastEvents() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const pastEvents = [
    {
      id: 1,
      title: "Web3 & Blockchain Summit 2024",
      description:
        "A groundbreaking event exploring the future of decentralized technologies and their impact on business.",
      date: new Date("2024-12-10"),
      location: "New York Tech Hub",
      attendees: 800,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      highlights: [
        "50+ Industry Speakers",
        "30+ Technical Sessions",
        "Networking with 800+ Professionals",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400",
      ],
    },
    {
      id: 2,
      title: "DevOps Excellence Workshop 2024",
      description:
        "Intensive hands-on workshop covering modern DevOps practices, CI/CD pipelines, and cloud infrastructure.",
      date: new Date("2024-11-15"),
      location: "Eagle Infotech Campus",
      attendees: 120,
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
      highlights: [
        "Hands-on Labs",
        "Real-world Case Studies",
        "Certificate of Completion",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400",
      ],
    },
    {
      id: 3,
      title: "AI Innovation Conference 2024",
      description:
        "Exploring the latest breakthroughs in artificial intelligence and machine learning applications.",
      date: new Date("2024-10-20"),
      location: "Silicon Valley Convention Center",
      attendees: 1200,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      highlights: [
        "AI Product Demos",
        "Research Paper Presentations",
        "Startup Pitch Competition",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400",
      ],
    },
    {
      id: 4,
      title: "Cybersecurity Summit 2024",
      description:
        "Comprehensive coverage of modern cybersecurity threats, solutions, and best practices.",
      date: new Date("2024-09-08"),
      location: "Boston Security Center",
      attendees: 600,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      highlights: [
        "Live Hacking Demonstrations",
        "Security Tool Workshops",
        "Compliance & Regulations Panel",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      ],
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
            Past Events
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Relive the moments from our successful events. See what you missed
            and get inspired for future gatherings.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Total Events", value: "50+" },
            { label: "Total Attendees", value: "10K+" },
            { label: "Countries Reached", value: "25+" },
            { label: "Satisfaction Rate", value: "98%" },
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

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Event Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <button
                  onClick={() =>
                    setSelectedEvent(
                      selectedEvent === event.id ? null : event.id
                    )
                  }
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600/80 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FiPlay className="w-8 h-8 text-white ml-1" />
                </button>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiCalendar className="text-blue-400" />
                    <span>
                      {event.date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiMapPin className="text-blue-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiUsers className="text-blue-400" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery Preview */}
                {selectedEvent === event.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-3 gap-2 mt-4"
                  >
                    {event.gallery.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    ))}
                  </motion.div>
                )}

                <button
                  onClick={() =>
                    setSelectedEvent(
                      selectedEvent === event.id ? null : event.id
                    )
                  }
                  className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                >
                  {selectedEvent === event.id ? "Hide Gallery" : "View Gallery"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
