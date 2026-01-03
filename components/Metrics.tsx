'use client';

import { motion } from 'framer-motion';

const metrics = [
    {
        value: "3+ Years",
        label: "Production Experience"
    },
    {
        value: "SaaS & FinTech",
        label: "Domain Expertise"
    },
    {
        value: "High Impact",
        label: "Scalable Solutions"
    }
];

export function Metrics() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center text-center px-4"
                        >
                            <span className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                                {metric.value}
                            </span>
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                {metric.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
