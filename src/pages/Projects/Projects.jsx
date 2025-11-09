import { ReactLenis } from "lenis/react";
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const projects = [
    {
        title: "SCADA & Studio5000 Automation",
        description: `
      This project integrates industrial automation systems through the development of ladder logic in Studio 5000 and process simulation in Factory I/O. 
      The system models a production line with conveyor belts, sensors, and actuators, controlled by a Rockwell PLC. 
      A SCADA layer was built using Ignition by Inductive Automation, allowing real-time process monitoring, alarms, and data visualization. 
      This setup demonstrates the implementation of closed-loop control, industrial networking, and HMI development for efficient industrial process automation.`,
        video: null,
        image: "/Images/FactoryIO.png",
        color: "#5196fd",
        githubLink:
            "https://github.com/GabyCastroB/SCADA-Studio5000/tree/main/ProyectoFinal",
        liveLink: null,
    },
    {
        title: "Computer Vision for Blind Mobility",
        description: `
      Designed and trained a YOLOv5 deep learning model using PyTorch for object detection in urban environments to assist visually impaired individuals. 
      The system detects traffic lights, vehicles, crosswalks, and pedestrians in real-time. 
      The project emphasizes embedded AI applications and accessibility-oriented computer vision for assistive technology.`,
        video: "https://www.youtube.com/watch?v=-6pKjsrdCG0",
        image: null,
        color: "#8f89ff",
        githubLink:
            "https://github.com/GabyCastroB/Computer-vision/tree/main/Proyecto",
        liveLink: null,
    },
    {
        title: "Sensors & IoT Projects",
        description: `
      A collection of experiments combining sensors, microcontrollers, and IoT protocols to monitor and automate processes. 
      Projects include temperature and humidity sensing systems, motion detectors, and actuator control via microcontrollers. 
      Data acquisition and visualization were achieved through serial communication and cloud dashboards. 
      The hardware design was complemented by CAD modeling and circuit simulation using tools like Fusion 360 and CADe Simu.`,
        video: null,
        image: "/Images/fifo.png",
        color: "#ed649e",
        githubLink: "https://github.com/GabyCastroB/Sensores-Projects",
        liveLink: null,
    },
    {
        title: "FPGA Projects",
        description: `
      A series of FPGA-based designs focusing on digital logic and hardware description languages. 
      Implementations include binary adders, BCD to 7-segment decoders, multipliers, shift registers, and memory buffers developed using Verilog and VHDL. 
      Advanced modules include a VGA signal generator and a robotic wheelchair controller interfaced with sensors and motor drivers. 
      Simulation and synthesis were performed using Intel Quartus and ModelSim, demonstrating skills in digital design, parallel processing, and real-time control.`,
        video: "https://www.youtube.com/watch?v=BqqBdJyHeCc",
        image: null,
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
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 text-lg">
                            A showcase of my work combining electronics, AI, and automation.
                        </p>
                    </div>

                    {/* Project list */}
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
                {/* Multimedia section (video or image) */}
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

                {/* Text section */}
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
                        <p className="text-gray-400 mb-6 whitespace-pre-line">
                            {project.description}
                        </p>
                    </div>

                    {/* Links */}
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
