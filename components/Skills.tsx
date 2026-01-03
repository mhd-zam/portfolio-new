'use client';

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiMui,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiPrisma,
    SiSequelize,
    SiFirebase,
    SiAmazonwebservices,
    SiDocker,
    SiGithubactions
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: SiHtml5 },
            { name: "JavaScript", icon: SiJavascript },
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "ShadCN", icon: null },
            { name: "Redux Toolkit", icon: SiRedux },
            { name: "TanStack Query", icon: null },
            { name: "MUI", icon: SiMui }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "REST APIs", icon: null },
            { name: "WebSocket", icon: null },
            { name: "JWT", icon: null },
            { name: "NextAuth", icon: null }
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
            { name: "Prisma ORM", icon: SiPrisma },
            { name: "Sequelize", icon: SiSequelize },
            { name: "Firebase", icon: SiFirebase }
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "AWS EC2 & S3", icon: SiAmazonwebservices },
            { name: "Docker", icon: SiDocker },
            { name: "CI/CD", icon: null },
            { name: "GitHub Actions", icon: SiGithubactions },
            { name: "Zustand", icon: null }
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Arithmetic</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My core stack is focused on modern Javascript/TypeScript ecosystems, but I adapt to the right tool for the job.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="p-8 h-full">
                                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge
                                            key={skill.name}
                                            variant="outline"
                                            className="px-3 py-1 text-sm border-white/10 hover:border-primary/50 transition-colors cursor-default flex items-center gap-2 bg-white/5 hover:bg-white/10"
                                        >
                                            {skill.icon && <skill.icon className="text-lg text-primary/80" />}
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
