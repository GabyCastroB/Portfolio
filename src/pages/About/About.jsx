import { ReactLenis } from "lenis/react";
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const projects = [
    {
        title: "SCADA & Studio5000 Automation",
        description:
            "Development of ladder logic in Studio 5000, Factory I/O simulation, and SCADA integration using Ignition.",
        video: null,
        image: "/images/scada.jpg",
        color: "#5196fd",
        githubLink: "https://github.com/GabyCastroB/SCADA-Studio5000",
        liveLink: null,
    },
    {
        title: "Computer Vision for Blind Mobility",
        description:
            "YOLOv5 + PyTorch model trained on urban datasets to detect traffic lights, vehicles, and pedestrians.",
        video: "https://www.youtube.com/watch?v=VIDEO_ID",
        image: null,
        color: "#8f89ff",
        githubLink: "https://github.com/GabyCastroB/Computer-vision",
        liveLink: null,
    },
    {
        title: "Sensors & IoT Projects",
        description:
            "Implementation of electronics, CAD, PLC programming, and embedded IoT experiments using different sensors.",
        video: null,
        image: "/images/iot.jpg",
        color: "#ed649e",
        githubLink: "https://github.com/GabyCastroB/Sensores-Projects",
        liveLink: null,
    },
    {
        title: "FPGA Projects",
        description:
            "Various FPGA designs including adders, BCD to 7-segment decoders, memory buffers, VGA controllers, multipliers, and robotic wheelchair control systems. All implemented with Verilog/VHDL and testbenches. :contentReference[oaicite:0]{index=0}",
        video: null,
        image: "/images/fpga.jpg",  // pon aquí una imagen representativa si la tienes
        color: "#00cc88",
        githubLink: "https://github.com/GabyCastroB/FPGA-Projects",
        liveLink: null,
    },
];

export default function Projects() {
    return (
        <ReactLenis root>
            <main className="bg-[#04081A] text-white py-20 px-6">
                <section className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 text-lg">
                            A showcase of my work combining electronics, AI, automation, and FPGA designs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </section>
            </main>
        </ReactLenis>
    );
}

function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:shadow-blue-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col md:flex-row">
                {(project.video || project.image) && (
                    <div className="w-full md:w-1/2 bg-black">
                        {project.video ? (
                            <iframe
                                src={project.video.replace("watch?v=", "embed/")}
                                title={project.title}
                                className="w-full h-[300px] md:h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[300px] md:h-full object-cover"
                            />
                        )}
                    </div>
                )}

                <div
                    className={`p-8 flex flex-col justify-between ${
                        project.video || project.image ? "md:w-1/2" : "w-full"
                    }`}
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
              <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
              ></span>
                            <h3 className="text-2xl font-semibold">{project.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-6">{project.description}</p>
                    </div>

                    <div className="flex gap-4 mt-auto">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-400 hover:underline"
                            >
                                View Code
                            </a>
                        )}
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-purple-400 hover:underline"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        video: PropTypes.string,
        image: PropTypes.string,
        color: PropTypes.string.isRequired,
        githubLink: PropTypes.string,
        liveLink: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
};
