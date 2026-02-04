import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componentes/layout/Header";
import Rodape from "@/componentes/layout/Rodape";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doramalândia | Seus Doramas Favoritos",
  description: "Assista aos melhores doramas online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Rodape />
        </Providers>
      </body>
    </html>
  );
}
