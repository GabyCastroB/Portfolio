import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
    {
        title: "SCADA & Studio5000 Automation",
        description:
            "Ladder logic in Studio 5000, Factory I/O simulation, and SCADA integration with Ignition.",
        // YouTube demo video if available
        video: "https://youtu.be/VIDEO_ID_FOR_SCADA",  // pon la URL real si existe
        color: "#5196fd",
        githubLink: "https://github.com/GabyCastroB/SCADA-Studio5000",
        liveLink: null, // si no hay demo online
    },
    {
        title: "Computer Vision for Blind Mobility",
        description:
            "YOLOv5 + PyTorch model trained on urban datasets to detect traffic lights, vehicles, and pedestrians.",
        video: null, // si no hay video
        color: "#8f89ff",
        githubLink: "https://github.com/GabyCastroB/Computer-vision",
        liveLink: null,
    },
    {
        title: "Sensors & IoT Projects",
        description:
            "Electronics, CAD, PLC programming, and embedded IoT experiments with sensors.",
        video: null,
        color: "#ed649e",
        githubLink: "https://github.com/GabyCastroB/Sensores-Projects",
        liveLink: null,
    },
    // puedes seguir agregando más repos con video o sin él
];

export default function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
      @media screen and (width: 1366px) and (height: 768px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <ReactLenis root>
            <main className="bg-black" ref={container}>
                <section className="text-white w-full bg-slate-950">
                    {projects.map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                project={project}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </section>
            </main>
        </ReactLenis>
    );
}

function Card({ i, project, progress, range, targetScale }) {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0 project-container"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    transform: `scale(var(--project-scale, 1))`,
                    marginTop: "var(--project-margin, 0)",
                }}
                className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
                <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
                    {project.video ? (
                        <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden bg-black">
                            {/* video player embed */}
                            <iframe
                                src={project.video.replace("watch?v=", "embed/")}
                                title={project.title}
                                className="w-full h-full object-cover"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : null}

                    <div className={`${
                        project.video ? "w-full md:w-[45%]" : "w-full"
                    } p-6 md:p-8 flex flex-col justify-between`}
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: project.color }}
                                />
                                <div className="h-[1px] w-12 bg-gray-600" />
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-800 flex gap-4">
                            {project.githubLink && (
                                <motion.a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="text-sm flex items-center gap-2"
                                >
                                    <span style={{ color: project.color }}>Code</span>
                                </motion.a>
                            )}
                            {project.liveLink && (
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="text-sm flex items-center gap-2"
                                >
                                    <span style={{ color: project.color }}>Live</span>
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

Card.propTypes = {
    i: PropTypes.number.isRequired,
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        video: PropTypes.string,
        color: PropTypes.string.isRequired,
        githubLink: PropTypes.string,
        liveLink: PropTypes.string,
    }).isRequired,
    progress: PropTypes.object.isRequired,
    range: PropTypes.array.isRequired,
    targetScale: PropTypes.number.isRequired,
};
