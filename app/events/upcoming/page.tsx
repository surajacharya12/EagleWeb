"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const unitLabels: { [key: string]: { short: string; full: string } } = {
    days: { short: "D", full: "Days" },
    hours: { short: "H", full: "Hours" },
    minutes: { short: "M", full: "Minutes" },
    seconds: { short: "S", full: "Seconds" },
  };

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-2 md:p-6 text-center"
        >
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-1 md:mb-2">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
            <span className="md:hidden">{unitLabels[unit].short}</span>
            <span className="hidden md:inline">{unitLabels[unit].full}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function UpcomingEvents() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2025",
      description:
        "Join us for a day of cutting-edge technology discussions, networking, and innovation. Learn from industry leaders about the future of tech.",
      date: new Date("2025-03-15T09:00:00"),
      location: "San Francisco Convention Center",
      attendees: 500,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      category: "Conference",
      featured: true,
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on workshop covering the latest in AI and ML. Build real-world applications and learn from experts.",
      date: new Date("2025-03-22T10:00:00"),
      location: "Eagle Infotech HQ",
      attendees: 50,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      category: "Workshop",
      featured: false,
    },
    {
      id: 3,
      title: "Cloud Architecture Masterclass",
      description:
        "Deep dive into cloud architecture patterns, best practices, and scalability strategies for modern applications.",
      date: new Date("2025-04-05T14:00:00"),
      location: "Online (Zoom)",
      attendees: 200,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      category: "Webinar",
      featured: false,
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
            Upcoming Events
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Join us for exciting events, workshops, and conferences. Stay ahead
            of the curve with Eagle Infotech.
          </p>
        </motion.div>

        <div className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                event.featured ? "ring-2 ring-blue-500/50" : ""
              }`}
            >
              <div className="grid md:grid-cols-2 gap-0 md:gap-8">
                {/* Event Image */}
                <div className="relative h-48 md:h-64 lg:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white text-xs md:text-sm font-semibold rounded-full">
                      {event.category}
                    </span>
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs md:text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Event Details */}
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                    {event.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base">
                      <FiCalendar className="text-blue-400 flex-shrink-0" />
                      <span className="line-clamp-1">
                        {event.date.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base">
                      <FiClock className="text-blue-400 flex-shrink-0" />
                      <span>
                        {event.date.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base">
                      <FiMapPin className="text-blue-400 flex-shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base">
                      <FiUsers className="text-blue-400 flex-shrink-0" />
                      <span>{event.attendees} Expected Attendees</span>
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">
                      Event Starts In:
                    </h3>
                    <CountdownTimer targetDate={event.date} />
                  </div>

                  <button className="group w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white text-sm md:text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    <span className="flex items-center justify-center gap-2">
                      Register Now
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
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
