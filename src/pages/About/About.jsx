import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
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
                    I specialize in <span className="text-[#FF8C8C]">industrial automation, IoT, and computer vision</span> — creating
                    smart solutions that integrate <span className="font-semibold">hardware, software, and artificial intelligence</span>.
                </p>

                <p className="text-white">
                    My work combines engineering and innovation to develop
                    <span className="text-[#FF8C8C]"> intelligent control systems, digital twins, and real-time AI applications</span>.
                    I’m passionate about bringing automation closer to <span className="font-semibold">Industry 4.0 and 5.0</span> standards
                    — making technology more efficient, adaptive, and human-centered.
                </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                    <p className="text-white">
                        “Technology becomes truly powerful when it connects intelligence
                        with real-world impact. My goal is to merge automation, data, and
                        AI to build smarter, more sustainable systems.”
                    </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nazmul Hossain, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
