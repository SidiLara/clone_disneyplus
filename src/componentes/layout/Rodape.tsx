import Image from "next/image";

export default function Rodape() {
    return (
        <footer className="bg-black py-10 px-6 text-center text-xs text-gray-400">
            <div className="flex justify-center mb-6">
                <Image
                    src="/images/logos/doramalandia_logo.svg"
                    alt="Doramalândia"
                    width={80}
                    height={40}
                    className="h-8 w-auto opacity-70"
                />
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-4">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Ajuda</a>
                <a href="#" className="hover:text-white transition-colors">Dispositivos Compatíveis</a>
                <a href="#" className="hover:text-white transition-colors">Sobre a Doramalândia</a>
            </div>

            <p className="mt-4">
                © 2024 Doramalândia. Todos os direitos reservados. Serviço de assinatura paga.
                Conteúdo sujeito a disponibilidade.
            </p>

            <p className="mt-2 text-[10px] text-gray-600">
                Doramalândia é uma marca fictícia criada para fins demonstrativos.
            </p>
        </footer>
    );
}
