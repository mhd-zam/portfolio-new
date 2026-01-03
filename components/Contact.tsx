'use client';

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent -z-10"></div>

            <div className="max-w-4xl mx-auto text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                    Let’s build something <span className="text-primary">solid</span>.
                </motion.h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Currently open to new opportunities in Full Stack & Frontend Engineering.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-4 pt-8"
                >
                    <Button size="lg" className="h-12 px-8 text-base rounded-full" asChild>
                        <Link href="mailto:mohammedzamil49@gmail.com">
                            <Mail className="mr-2 h-5 w-5" />
                            Say Hello
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full" asChild>
                        <Link href="https://www.linkedin.com/in/mohammed-zamil/" target="_blank">
                            <Linkedin className="mr-2 h-5 w-5" />
                            LinkedIn
                        </Link>
                    </Button>
                    <Button size="lg" variant="ghost" className="h-12 px-8 text-base rounded-full" asChild>
                        <Link href="https://github.com/mhd-zam" target="_blank">
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
