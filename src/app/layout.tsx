import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gonzalo Callejas Aguero · Full Stack Developer",
  description:
    "Portfolio de Gonzalo Callejas Aguero — Full Stack Developer especializado en React, Node.js y Python. Abierto a remoto. Córdoba, Argentina.",
  keywords: [
    "Gonzalo Callejas Aguero",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "Portfolio",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Gonzalo Callejas Aguero" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Gonzalo Callejas Aguero · Full Stack Developer",
    description:
      "Portfolio de Full Stack Developer especializado en React, Node.js y Python.",
    siteName: "Gonzalo Callejas — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Callejas Aguero · Full Stack Developer",
    description:
      "Portfolio de Full Stack Developer especializado en React, Node.js y Python.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
