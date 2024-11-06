import { AsideMenu } from "@/components/layout/aside-menu";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Documentação da Boltech ERP",
  description: "Documentação destinada a esclarecer as regras de negócio e funcionalidade do sistema Boltech ERP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased relative overflow-y-hidden`}
      >
        <Header />

        <main className="grid grid-cols-5 max-[1180px]:grid-cols-4 max-[940px]:grid-cols-3 max-[710px]:grid-cols-1">
          <AsideMenu />
          <div className="col-span-4 max-[1180px]:col-span-3 max-[940px]:col-span-2 max-[710px]:col-span-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
