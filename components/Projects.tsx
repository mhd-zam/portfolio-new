'use client';

import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const projects = [
    {
        title: "Merchant Payment SaaS",
        subtitle: "Fintech & KYC Platform",
        problem: "Need for a comprehensive payment solution with KYC verification, invoice generation, and gateway management.",
        solution: "Led frontend development for a scalable platform enabling pay-ins/payouts and configurable payment templates.",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        stats: "KYC & Payments",
        link: "#",
        github: "#"
    },
    {
        title: "CRM Support System",
        subtitle: "Omni-channel Support SaaS",
        problem: "Fragmented customer support across multiple channels (WhatsApp, Instagram, Facebook).",
        solution: "Built backend APIs and WebSocket services to unify messages into Agent/Merchant panels with plug-and-play integrations.",
        tech: ["Node.js", "Express.js", "WebSocket", "Rest API"],
        stats: "Unified Chat",
        link: "#",
        github: "#"
    },
    {
        title: "AI Automation Suite",
        subtitle: "Intelligent Routing Bot",
        problem: "High volume of customer queries requiring automated but intelligent responses.",
        solution: "Integrated AI-powered messaging with intelligent routing and seamless agent takeover capability.",
        tech: ["Node.js", "AI Integration", "Automation", "Bot Logic"],
        stats: "AI Powered",
        link: "#",
        github: "#"
    },
    {
        title: "FilmyCharcha.com",
        subtitle: "Media & Entertainment",
        problem: "High-traffic media platform requiring constant uptime and performance optimization.",
        solution: "Maintained and optimized the production system for a seamless user experience.",
        tech: ["Next.js", "React", "Performance Optimization"],
        stats: "Production Scale",
        link: "https://filmycharcha.com",
        github: "#"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-6 text-center md:text-left max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Selected Works
                    </h2>
                    <p className="text-muted-foreground text-xl leading-relaxed">
                        Solving complex problems with <span className="text-foreground font-medium">robust architecture</span> and <span className="text-foreground font-medium">clean code</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full flex flex-col bg-card/40 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary w-fit">
                                            <Layers className="h-6 w-6" />
                                        </div>
                                        <div className="flex gap-3">
                                            <Link href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                                                <Github className="h-5 w-5" />
                                            </Link>
                                            <Link href={project.link} className="text-muted-foreground hover:text-white transition-colors">
                                                <ArrowUpRight className="h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl mb-1">{project.title}</CardTitle>
                                    <CardDescription className="text-primary font-medium text-base">
                                        {project.subtitle}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-6">
                                    <div className="space-y-3">
                                        <div className="text-sm text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4 py-1">
                                            {project.solution}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex-col items-start gap-4 pt-4 border-t border-white/5 mx-6 px-0 pb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <Badge key={t} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-normal border-transparent">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardFooter>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
