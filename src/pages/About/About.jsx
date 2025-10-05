import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
                Electronic Engineer · Automation & AI Developer
            </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Gabriela working on industrial automation and AI project"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
                <p className="text-white">
                    Hello! I'm <span className="font-semibold text-[#FF5A5A]">Gabriela María Castro Beltrán</span>, an
                    <span className="font-semibold"> Electronic Engineer </span> from the
                    <span className="font-semibold"> National University of Colombia</span>.
                    I specialize in <span className="text-[#FF8C8C]"> industrial automation, control systems, IoT, and computer vision</span>.
                </p>
                <p className="text-white">
                    I have worked on projects that integrate <span className="font-semibold"> artificial intelligence and embedded systems</span>,
                    including the development of an <span className="text-[#FF8C8C]"> AI-based object detection system</span> for a <span className="font-semibold"> perimeter security drone</span> at the
                    <span className="text-[#FF5A5A]"> Colombian Aerospace Force</span>.
                    My work focused on <span className="font-semibold"> training neural networks, creating datasets, and deploying
                    real-time detection models</span> on embedded hardware.
                </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                    <p className="text-white">
                        I am passionate about combining <span className="text-[#FF8C8C]"> electronics, automation, and AI </span>
                        to develop intelligent systems that can enhance industrial processes and human interaction with technology.
                        My interests include <span className="font-semibold"> SCADA integration, digital twins, and edge computing </span>
                        for adaptive and efficient industrial environments.
                    </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
