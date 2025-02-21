import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Rayssa Perfeita',
  description: 'Uma demonstração simples de tudo que sinto por você',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
