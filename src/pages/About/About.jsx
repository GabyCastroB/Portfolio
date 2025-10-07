import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 text-white bg-[#04081A]">
            <div className="mx-auto max-w-4xl space-y-10 px-6 text-center">
                <h2 className="text-4xl font-bold lg:text-5xl text-white">
                    Electronic Engineer · Automation & AI Developer
                </h2>

                <div className="space-y-6 text-lg leading-relaxed text-gray-200">
                    <p>
                        Hello! I'm{" "}
                        <span className="font-semibold text-[#FF5A5A]">
              Gabriela María Castro Beltrán
            </span>
                        , an <span className="font-semibold">Electronic Engineer</span> from
                        the <span className="font-semibold">National University of Colombia</span>.
                        I specialize in{" "}
                        <span className="text-[#FF8C8C]">
              industrial automation, control systems, IoT, and computer vision
            </span>
                        .
                    </p>

                    <p>
                        I’ve worked on projects that integrate{" "}
                        <span className="font-semibold">
              artificial intelligence and embedded systems
            </span>
                        , including the development of an{" "}
                        <span className="text-[#FF8C8C]">
              AI-based object detection system
            </span>{" "}
                        for a{" "}
                        <span className="font-semibold">perimeter security drone</span> at
                        the{" "}
                        <span className="text-[#FF5A5A]">
              Colombian Aerospace Force
            </span>
                        . My role focused on{" "}
                        <span className="font-semibold">
              training neural networks, generating datasets, and deploying
              real-time detection models
            </span>{" "}
                        on embedded hardware.
                    </p>

                    <blockquote className="border-l-4 border-gray-500 pl-4 text-left md:text-center mx-auto max-w-3xl">
                        <p>
                            I’m passionate about merging{" "}
                            <span className="text-[#FF8C8C]">
                electronics, automation, and AI
              </span>{" "}
                            to design intelligent systems that improve industrial efficiency
                            and human–machine interaction. My interests include{" "}
                            <span className="font-semibold">
                SCADA integration, digital twins, and edge computing
              </span>{" "}
                            for adaptive and efficient industrial environments.
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
