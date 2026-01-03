'use client';

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 px-4 bg-background">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold tracking-tight"
                >
                    About Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="prose prose-invert prose-lg mx-auto text-muted-foreground leading-relaxed"
                >
                    <p>
                        I am a <span className="text-foreground font-medium">Full Stack Developer</span> with 3+ years of experience building scalable SaaS applications across <span className="text-foreground font-medium">fintech payments, CRM support systems, automation, and media platforms</span>.
                    </p>
                    <p>
                        My expertise lies in <span className="text-foreground font-medium">Node.js, React, and Next.js</span>, with a strong focus on designing robust RESTful APIs and enabling seamless third-party integrations. I specialize in backend architecture for CRM systems and frontend development for complex payment platforms.
                    </p>
                    <p>
                        I thrive on delivering secure, high-performance applications end-to-end, from secure auth flows to real-time dashboards.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
