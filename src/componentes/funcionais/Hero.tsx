import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center pt-24 md:pt-32">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/hero_desktop.jpeg"
                    alt="Doramas Background"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                {/* Modern Gradients - Adjusted for clearer text readability on left */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content - 2 Grid Layout */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start max-w-2xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight drop-shadow-2xl mb-6 tracking-tight">
                        OS MELHORES DORAMAS VOCÊ ENCONTRA AQUI.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg drop-shadow-md font-medium">
                        Assista aos seus dramas coreanos, chineses e japoneses favoritos em um só lugar.
                    </p>

                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-10 rounded-full uppercase text-lg tracking-widest shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105 active:scale-95">
                        Assista Agora
                    </button>
                </div>

                {/* Right Column: Spacer/Visual Balance 
            (Kept empty to reveal the character in the background image) */}
                <div className="hidden lg:block"></div>
            </div>
        </section>
    );
}
