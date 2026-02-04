"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, User } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass transition-all duration-300">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/images/logos/doramalandia_logo.svg"
                        alt="Doramalândia"
                        width={120}
                        height={60}
                        className="w-auto h-10 md:h-12 object-contain hover:opacity-80 transition-opacity"
                        priority
                    />
                </Link>
            </div>

            <div className="flex items-center gap-6">
                {/* Search Input (Hidden on mobile for now, just icon) */}
                <button className="text-foreground/80 hover:text-primary transition-colors">
                    <Search className="w-6 h-6" />
                </button>

                {mounted && (
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-xs uppercase tracking-widest font-bold text-foreground/60 hover:text-primary transition-colors border border-border px-3 py-1 rounded-full"
                    >
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </button>
                )}

                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-full uppercase text-sm tracking-wider transition-all shadow-md hover:shadow-lg hover:shadow-primary/20">
                    Assinar
                </button>

                <button className="text-foreground/80 hover:text-primary transition-colors">
                    <User className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
