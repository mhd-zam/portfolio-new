'use client';

import { scrollToSection } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
];

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        >
            <div className="glass-panel pointer-events-auto flex items-center justify-between px-6 py-2 rounded-full shadow-2xl backdrop-blur-xl border border-white/10 w-full max-w-xl bg-black/60 translate-y-0 hover:scale-[1.02] transition-transform duration-300">
                <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors">
                    MZ<span className="text-indigo-500">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center">
                    <Button variant="ghost" size="sm" asChild className="rounded-full hover:bg-white/10 text-white hover:text-white px-4">
                        <Link
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                        >
                            Contact
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
