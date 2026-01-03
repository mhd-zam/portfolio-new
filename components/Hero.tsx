'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Code2, Database, Layout } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { Badge } from "@/components/ui/badge";
import { scrollToSection } from '@/lib/utils';

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#030712] antialiased bg-grid-white/[0.02]">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="absolute top-0 w-full h-full bg-background/0 z-0"></div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-xs md:text-sm text-muted-foreground font-medium mb-8 hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for new opportunities
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Mohammed Zamil
                    </h1>

                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-2" />

                    <h2 className="text-2xl md:text-4xl font-light tracking-tight mt-4 text-white/80">
                        Full Stack <span className="font-semibold text-primary">Engineer</span>
                    </h2>

                    <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        I specialize in building <span className="text-white font-medium">high-performance SaaS applications</span> with modern architecture.
                        Turning complex requirements into clean, scalable code.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto"
                >
                    <Link
                        href="#projects"
                        className="w-full sm:w-auto"
                        onClick={(e) => scrollToSection(e, "#projects")}
                    >
                        <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base rounded-full bg-white text-black hover:bg-white/90 font-medium">
                            View Scenarios
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto"
                        onClick={(e) => scrollToSection(e, "#contact")}
                    >
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base rounded-full border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20">
                            Contact Me
                        </Button>
                    </Link>
                </motion.div>

                {/* Tech Stack Ticker (Visual Interest) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="pt-16 flex items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <Code2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <span className="text-xs font-mono hidden md:block">Frontend</span>
                    </div>
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <Terminal className="w-6 h-6 text-green-400" />
                        </div>
                        <span className="text-xs font-mono hidden md:block">Backend</span>
                    </div>
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <Database className="w-6 h-6 text-yellow-400" />
                        </div>
                        <span className="text-xs font-mono hidden md:block">Database</span>
                    </div>
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <Layout className="w-6 h-6 text-purple-400" />
                        </div>
                        <span className="text-xs font-mono hidden md:block">Design</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
