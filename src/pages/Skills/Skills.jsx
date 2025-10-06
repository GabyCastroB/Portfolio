import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud , BookOpen} from "lucide-react";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaGitAlt,
    FaLinux,
    FaFigma,
    FaAws,
    FaJava,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaRaspberryPi,
    FaGithub,
    FaMicrosoft,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPostgresql,
    SiMongodb,
    SiGraphql,
    SiJest,
    SiWebpack,
    SiRedux,
    SiFirebase,
    SiVercel,
    SiVite,
    SiCplusplus,
    SiPytorch,
    SiTensorflow,
    SiOpencv,
    SiNumpy,
    SiKeras,
    SiLatex,
    SiNotion,
    SiJupyter,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
    <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
        <CardContent className="p-6 relative z-10">
            <div className="flex items-center gap-4 mb-6">
                <div
                    className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
                >
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {title}
                </h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
                        <span className="font-medium">{skill.name}</span>
                    </Badge>
                ))}
            </div>
        </CardContent>
    </Card>
);

const SkillsSection = () => {
    const skillCategories = [
        {
            icon: Cpu,
            title: "Industrial Automation & Control",
            color: "text-red-400",
            skills: [
                { name: "Studio 5000", icon: <Cpu className="w-4 h-4 text-red-400" /> },
                { name: "Factory IO", icon: <Cpu className="w-4 h-4 text-red-500" /> },
                { name: "Ignition SCADA", icon: <Cpu className="w-4 h-4 text-red-600" /> },
                { name: "Ladder Logic", icon: <Cpu className="w-4 h-4 text-red-700" /> },
                { name: "Cadesimu", icon: <Cpu className="w-4 h-4 text-red-500" /> },
                { name: "FluidSIM", icon: <Cpu className="w-4 h-4 text-red-700" /> },
            ],
        },
        {
            icon: Code2,
            title: "Programming Languages",
            color: "text-blue-400",
            skills: [
                { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
                { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-[#004482]" /> },
                { name: "Java", icon: <FaJava className="w-4 h-4 text-[#E34F26]" /> },
                { name: "JavaScript", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
                { name: "HTML", icon: <FaHtml5 className="w-4 h-4 text-[#E44D26]" /> },
                { name: "CSS", icon: <FaCss3Alt className="w-4 h-4 text-[#264DE4]" /> },
                { name: "MATLAB", icon: <Cpu className="w-4 h-4 text-[#E16737]" /> },
            ],
        },
        {
            icon: Database,
            title: "Artificial Intelligence & Computer Vision",
            color: "text-yellow-400",
            skills: [
                { name: "PyTorch", icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" /> },
                { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
                { name: "OpenCV", icon: <SiOpencv className="w-4 h-4 text-[#5C3EE8]" /> },
                { name: "NumPy", icon: <SiNumpy className="w-4 h-4 text-[#4DABCF]" /> },
                { name: "Keras", icon: <SiKeras className="w-4 h-4 text-[#D00000]" /> },
            ],
        },
        {
            icon: Paintbrush,
            title: "Electronics & Hardware",
            color: "text-pink-400",
            skills: [
                { name: "Arduino", icon: <Cpu className="w-4 h-4 text-[#00979D]" /> },
                { name: "Raspberry Pi", icon: <FaRaspberryPi className="w-4 h-4 text-[#C51A4A]" /> },
                { name: "KiCad", icon: <Cpu className="w-4 h-4 text-[#9CA3AF]" /> },
                { name: "Fusion 360", icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" /> },
            ],
        },
        {
            icon: Code2,
            title: "Software & IDEs",
            color: "text-blue-300",
            skills: [
                { name: "Visual Studio", icon: <Cpu className="w-4 h-4 text-[#007ACC]" /> },
                { name: "VS Code", icon: <Cpu className="w-4 h-4 text-[#007ACC]" /> },
                { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },
                { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
                { name: "PyCharm", icon: <FaPython className="w-4 h-4 text-[#4B8BBE]" /> },
                { name: "WebStorm", icon: <Cpu className="w-4 h-4 text-[#60A5FA]" /> },
            ],
        },
        {
            icon: BookOpen,
            title: "Data Analysis & Documentation",
            color: "text-green-400",
            skills: [
                { name: "LaTeX", icon: <SiLatex className="w-4 h-4 text-[#008080]" /> },
                { name: "Excel", icon: <Cpu className="w-4 h-4 text-[#217346]" /> },
                { name: "Notion", icon: <SiNotion className="w-4 h-4 text-white" /> },
            ],
        },
        {
            icon: Cloud,
            title: "Cloud & Collaboration",
            color: "text-orange-400",
            skills: [
                { name: "Google Colab", icon: <Cpu className="w-4 h-4 text-[#F4B400]" /> },
                { name: "Jupyter", icon: <SiJupyter className="w-4 h-4 text-[#F37626]" /> },
                { name: "Microsoft Office", icon: <FaMicrosoft className="w-4 h-4 text-[#F25022]" /> },
            ],
        },
    ];

    return (
        <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

            <section className="container mx-auto px-4 py-11 relative z-10">
                <div className="flex justify-center items-center ">
                    <IconCloudDemo />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={index}
                            icon={category.icon}
                            title={category.title}
                            skills={category.skills}
                            color={category.color}
                        />
                    ))}
                </div>
            </section>
            <style jsx>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                .bg-grid-pattern {
                    background-image: linear-gradient(
                            to right,
                            rgba(100, 100, 255, 0.1) 1px,
                            transparent 1px
                    ),
                    linear-gradient(
                            to bottom,
                            rgba(100, 100, 255, 0.1) 1px,
                            transparent 1px
                    );
                    background-size: 30px 30px;
                }
            `}</style>
        </main>
    );
};

export default SkillsSection;