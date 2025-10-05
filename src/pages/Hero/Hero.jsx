import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

// Grid background
const GridBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </div>
    );
};

export default function Hero() {
    const words = [
        "Electronic Engineer & AI Developer",
        "Automation & SCADA Specialist",
        "Computer Vision & IoT Enthusiast",
        "Always Innovating and Learning",
    ];

    const [code] = useState(`
const profile = {
    name: 'Gabriela María Castro Beltrán',
    title: 'Electronic Engineer | AI & Automation Developer',
    skills: [
        'Python', 'C++', 'PLC Programming', 'SCADA',
        'Computer Vision', 'TensorFlow', 'PyTorch',
        'Factory IO', 'Ignition', 'IoT', 'Embedded Systems'
    ],
    projects: [
        'AI for Perimeter Security Drones',
        'Computer Vision for Visually Impaired Mobility',
        'Industrial Automation with Studio5000 + FactoryIO + Ignition'
    ],
    hardWorker: true,
    innovative: true,
    passionate: true,
    yearsOfExperience: 2,
    hireable() {
        return this.hardWorker && this.innovative && this.skills.length > 5;
    }
};
`);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
        <>
            <main className="bg-[#020617] text-white min-h-screen">
                <section
                    className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0"
                    style={{ paddingTop: "var(--hero-padding-top, 0)" }}
                >
                    {/* Background effects */}
                    <GridBackground />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <Meteors number={10} />
                    </div>

                    {/* Main container */}
                    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
                        {/* Left side */}
                        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
                                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                                <span className="text-gray-300 text-sm font-medium">
                  Welcome to my portfolio
                </span>
                            </div>

                            <div className="relative mb-6 sm:mb-8">
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                                    <SparklesText text="Hello" />
                                    <span className="relative inline-block">
                    I'm
                    <span className="typing-effect gradient-text">
                      {" "}
                        Gabriela Castro
                    </span>
                  </span>
                                </h1>
                            </div>

                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500/10 to-red-700/10 border border-red-500/20 mb-8 backdrop-blur-sm">
                                <i className="fas fa-microchip text-red-400"></i>
                                <FlipWords
                                    className={"text-lg sm:text-xl text-red-400 font-medium"}
                                    words={words}
                                />
                            </div>

                            <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed mb-10 max-w-xl">
                                Engineer specialized in <span className="text-red-400 font-semibold">industrial automation, computer vision, and artificial intelligence</span>.
                                Passionate about designing smart systems that connect hardware and software for Industry 4.0 and 5.0 environments.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <a
                                    href="https://github.com/GabyCastroB"
                                    className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-700 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#f87171]"
                                >
                  <span className="block w-full px-6 py-3 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-700">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>View Projects</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                                </a>

                                <a
                                    href="/GabrielaCastro_CV.pdf"
                                    className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105"
                                >
                  <span className="block w-full px-6 py-3 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <span>Download Resume</span>
                      <i className="fas fa-file-alt transform transition-all duration-300 group-hover:rotate-12"></i>
                    </span>
                  </span>
                                </a>
                            </div>
                        </div>

                        {/* Right side - Code block */}
                        <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
                            <div className="gradient-border">
                                <div className="code-window bg-[#091121]">
                                    <div className="window-header">
                                        <div className="window-dot bg-red-500"></div>
                                        <div className="window-dot bg-yellow-500"></div>
                                        <div className="window-dot bg-green-500"></div>
                                        <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      gabriela.js
                    </span>
                                    </div>
                                    <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-red-400"></i>
            About me
          </span>
                    <i className="fas fa-chevron-down text-red-400 text-xl"></i>
                </div>
                <PortfolioPage />
            </main>
        </>
    );
}
