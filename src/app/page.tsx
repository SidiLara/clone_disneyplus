import Hero from "@/componentes/funcionais/Hero";
import SecaoCatalogo from "@/componentes/funcionais/SecaoCatalogo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SecaoCatalogo />
    </div>
  );
}
