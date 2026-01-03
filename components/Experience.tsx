'use client';

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Synctric Technology Pvt Ltd",
        role: "Full Stack Developer",
        period: "Aug 2022 – Present",
        description: [
            "Led frontend development for a merchant payment SaaS platform, enabling pay‑ins, payouts, KYC verification, and invoice generation.",
            "Built responsive merchant and admin dashboards using React, Next.js, and TypeScript with reusable UI components.",
            "Contributed as a backend developer to a CRM‑based customer support SaaS with Admin, Merchant, and Agent panels.",
            "Designed backend APIs enabling plug‑and‑play integrations for Web chat, Instagram, Facebook, and WhatsApp.",
            "Integrated AI‑powered automated messaging with intelligent routing and seamless agent takeover for complex conversations.",
            "Implemented secure authentication, role‑based access control (RBAC), JWT‑based authorization, and audit‑ready workflows.",
            "Maintained production systems including FilmyCharcha.com and other NDA‑protected enterprise platforms.",
            "Built automation solutions to streamline internal workflows and reduce manual operational effort."
        ],
        tech: ["Next.js", "Node.js", "React", "TypeScript", "AWS", "Socket.io", "AI Integration"]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4 bg-muted/20">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
                    <p className="text-muted-foreground text-lg">
                        My professional journey building software.
                    </p>
                </div>

                <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-2 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg font-semibold text-primary mb-4">{exp.company}</h4>

                            <ul className="space-y-3 mb-6 list-disc list-outside ml-4 text-muted-foreground">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="pl-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <Badge key={t} variant="secondary" className="text-xs">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
