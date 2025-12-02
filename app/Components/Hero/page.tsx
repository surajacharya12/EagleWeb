"use client";
import { FiArrowRight, FiPlayCircle, FiTrendingUp, FiUsers, FiActivity } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="relative min-h-[120vh] flex items-center overflow-hidden bg-[#0a0a1f] text-white pb-32">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>

                <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000"></div>

                {/* Extended bottom glow */}
                <div className="absolute bottom-[-40%] left-[20%] w-[60vw] h-[60vw] bg-indigo-600/20 rounded-full blur-[140px] mix-blend-screen animate-pulse-slow delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-blue-200">Accepting New Clients</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                            Build Products That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                                Defy Expectations
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            We transform ambitious ideas into scalable, high-impact digital solutions.
                            From MVP to enterprise, we engineer success.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <span className="flex items-center gap-2">
                                    Start Your Project
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button className="group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all duration-300">
                                <span className="flex items-center gap-2">
                                    <FiPlayCircle className="text-xl" />
                                    Watch Showreel
                                </span>
                            </button>
                        </div>

                        <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-400 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <FiUsers className="text-blue-400 text-lg" />
                                <span>50+ Happy Clients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiActivity className="text-green-400 text-lg" />
                                <span>99.9% Uptime</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Glassmorphism Card */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-none perspective-1000">
                        <div className="relative transform transition-transform hover:scale-[1.02] duration-500">

                            {/* Main Card */}
                            <div className="relative z-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

                                {/* Fake Browser Header */}
                                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="ml-4 h-2 w-32 bg-white/10 rounded-full"></div>
                                </div>

                                {/* Abstract Content */}
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-1/3 h-32 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                            <FiTrendingUp className="text-4xl text-blue-400" />
                                        </div>
                                        <div className="w-2/3 space-y-3">
                                            <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse"></div>
                                            <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse delay-75"></div>
                                            <div className="h-20 w-full bg-white/5 rounded-xl mt-2"></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-24 rounded-xl bg-purple-500/10 border border-purple-500/20"></div>
                                        <div className="h-24 rounded-xl bg-pink-500/10 border border-pink-500/20"></div>
                                        <div className="h-24 rounded-xl bg-indigo-500/10 border border-indigo-500/20"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Boxes */}
                            <div className="absolute -top-12 -right-8 z-20 bg-gray-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-500/20 rounded-lg">
                                        <FiTrendingUp className="text-green-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Growth</p>
                                        <p className="text-lg font-bold text-white">+128%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-8 -left-8 z-20 bg-gray-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl animate-float delay-1000">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800 flex items-center justify-center text-xs"
                                            >
                                                U{i}
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Active Users</p>
                                        <p className="text-lg font-bold text-white">12.5k</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
