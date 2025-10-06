import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Award,
    Calendar,
    BookOpen,
    Trophy,
    Users,
    Globe2,
} from "lucide-react";

const EducationAndVolunteeringSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // 🎓 EDUCATION DATA
    const educationData = [
        {
            degree: "Bachelor's Degree in Electronic Engineering",
            school: "National University of Colombia",
            mascot: "🎓",
            year: "2019 – 2025 (Expected Graduation: June 2025)",
            achievements: [
                "GPA: 3.7 / 4.0 (Converted from 4.3 scale)",
                "Peer Tutor at the Faculty of Engineering",
            ],
            skills: [
                "Embedded Systems",
                "Control Systems",
                "Power Electronics",
                "Digital Systems",
                "Signal Processing",
                "Artificial Intelligence",
                "Computer Vision",
            ],
            description:
                "Comprehensive education in electronics, automation, and intelligent systems. Gained experience in control engineering, embedded programming, and AI applied to automation and real-time systems. Participated in research projects integrating hardware and software, such as object detection for autonomous drones and assistive vision systems.",
        },
        {
            degree: "High School Diploma",
            school: "Colegio Bilingüe Nueva Alejandría",
            mascot: "📘",
            year: "Graduated in 2018",
            achievements: [
                "Science and Technology Track",
                "Academic Excellence Recognition",
            ],
            skills: ["Mathematics", "Physics", "Chemistry", "English Communication"],
            description:
                "Graduated from a bilingual high school with strong focus on sciences and English proficiency. Developed problem-solving and analytical skills that led to a career path in technology and engineering.",
        },
    ];

    // 🤝 VOLUNTEERING DATA
    const volunteerExperiences = [
        {
            title: "IEEE Student Branch Volunteer",
            organization: "National University of Colombia",
            year: "2022 – Present",
            icon: <Users className="w-6 h-6 text-teal-400" />,
            description:
                "Active member and volunteer at the IEEE Student Branch, supporting technical and educational events to strengthen the student community in engineering.",
            contributions: [
                "Helped organize hackathons, workshops, and technical talks.",
                "Encouraged student participation in IEEE research and leadership activities.",
                "Supported initiatives for women and students in STEM fields.",
            ],
        },
        {
            title: "Academic Collaboration – Book Digitalization Project",
            organization: "Faculty of Engineering, National University of Colombia",
            year: "2024 – Present",
            icon: <BookOpen className="w-6 h-6 text-blue-400" />,
            description:
                "Collaborating with a university professor on the digitalization and edition of an academic book on electronics and automation, currently under pre-publication review.",
            contributions: [
                "Digitized and formatted technical figures, diagrams, and formulas.",
                "Reviewed academic content for technical consistency and clarity.",
                "Used LaTeX for professional document structure and formatting.",
            ],
        },
    ];

    // 🌎 LANGUAGE CERTIFICATIONS
    const languageCertifications = [
        {
            language: "Portuguese",
            certificate: "CELPE-Bras – Intermediate high Level",
            year: "2023",
            icon: <Globe2 className="w-6 h-6 text-green-500" />,
            details:
                "Official Portuguese proficiency certificate recognized by the Brazilian Ministry of Education.",
        },
        {
            language: "Japanese",
            certificate: "JLPT N5 – Japanese Language Proficiency Test",
            year: "2021",
            icon: <Globe2 className="w-6 h-6 text-red-500" />,
            details:
                "Basic level certification in Japanese language, covering reading, vocabulary, and conversational understanding.",
        },
    ];

    // ✨ ANIMATION VARIANTS
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="min-h-screen relative overflow-hidden py-32 bg-[#04081A] text-white">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* 🎓 EDUCATION SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                        Education
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Academic background focused on electronic engineering, automation, and applied research in intelligent systems.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                                hoveredIndex === index ? "border-teal-500 scale-[1.02]" : "border-blue-400/20"
                            }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{edu.mascot}</span>
                                        <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                                    </div>
                                    <p className="text-lg text-gray-300 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-teal-500" />
                                        {edu.school}
                                    </p>
                                    <p className="text-gray-400 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {edu.year}
                                    </p>
                                </div>

                                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                                    {edu.description}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                                        <Trophy className="w-4 h-4 text-yellow-500" />
                                        Key Achievements
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.achievements.map((achievement, i) => (
                                            <div
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                                            >
                                                <Award className="w-4 h-4" />
                                                <span>{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {edu.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 🤝 VOLUNTEERING SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-6">
                        Volunteering & Academic Contributions
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Beyond academics, I have actively contributed to student organizations, technical education, and academic collaboration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
                    {volunteerExperiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-900/60 border border-gray-700 rounded-2xl p-8 hover:border-teal-400 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {item.icon}
                                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm italic mb-3">{item.organization}</p>
                            <p className="text-gray-400 text-sm mb-3">{item.year}</p>
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                {item.contributions.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* 🌍 LANGUAGE CERTIFICATIONS SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent mb-6">
                        Language Certifications
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Certified proficiency in multiple languages, reflecting adaptability and commitment to global communication.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {languageCertifications.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-900/60 border border-gray-700 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                {lang.icon}
                                <h3 className="text-2xl font-semibold text-white">{lang.language}</h3>
                            </div>
                            <p className="text-gray-300 mb-1">{lang.certificate}</p>
                            <p className="text-gray-400 text-sm mb-2">{lang.year}</p>
                            <p className="text-gray-400 text-sm italic">{lang.details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationAndVolunteeringSection;
