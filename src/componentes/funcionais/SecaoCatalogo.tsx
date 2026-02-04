"use client";

import { useState } from "react";
import Image from "next/image";
import { obterEmBreve, obterPopulares } from "@/servicos/catalogoServico";

// Inline util since I haven't strictly created lib/utils per structure.md (it's not forbidden but let's stick to standard imports if possible)
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export default function SecaoCatalogo() {
    const [abaAtiva, setAbaAtiva] = useState<"emBreve" | "populares">("emBreve");

    const dados = abaAtiva === "emBreve" ? obterEmBreve() : obterPopulares();

    return (
        <section className="bg-background py-16 px-6 transition-colors duration-300">
            <div className="container mx-auto">

                {/* Navigation Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    {["emBreve", "populares"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setAbaAtiva(tab as any)}
                            className={cn(
                                "relative px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300",
                                abaAtiva === tab
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                            )}
                        >
                            {tab === "emBreve" ? "Em Breve" : "Mais Populares"}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {dados.map((item) => (
                        <div
                            key={item.id}
                            className="group relative aspect-video overflow-hidden rounded-xl bg-card border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <Image
                                src={item.imagem}
                                alt={item.titulo}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-lg mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.titulo}
                                </h3>
                                <span className="text-primary-foreground bg-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider self-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 shadow-lg">
                                    Assistir
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
