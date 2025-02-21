'use client';
import Carousel from '@/components/Carousel';
import RomanticBanner from '@/components/RomanticBanner';
import RomanticFooter from '@/components/RomanticFooter';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Função para criar a partícula de coração
    const createHeartParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Define posições iniciais aleatórias na tela
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;

      // Define o tempo de vida da partícula (quanto tempo ela vai aparecer)
      const lifetime = 1000; // Tempo de vida de cada partícula (1 segundo)

      // Adiciona partículas à tela
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;

      // Adiciona a partícula ao corpo
      document.body.appendChild(particle);

      // Remove a partícula após o tempo de vida (1 segundo)
      setTimeout(() => {
        particle.remove();
      }, lifetime);
    };

    // Cria 100 partículas logo ao carregar
    for (let i = 0; i < 100; i++) {
      createHeartParticle();
    }
  }, []);

  return (
    <main
      style={{
        paddingLeft: '32px',
        paddingRight: '32px',
      }}
      className="App flex flex-col gap-8 row-start-2 items-center sm:items-start"
    >
      <RomanticBanner
        title="Para a princesa mais especial❤️"
        imageUrl="./Banner.jpg"
      />
      <p
        className="mt-4 text-lg md:text-xl font-light italic font-serif leading-relaxed mx-auto"
        style={{ maxWidth: '800px' }}
      >
        Ei, minha princesa, tudo bem? 💕 <br />
        Quero te agradecer por ser essa mulher incrível que me alegra com suas
        ligaçoes e palhaçadas e esta me fazendo querer ser uma pessoa melhor.
        Quem diria que aquela menina que conheci na loucura do Ano Novo, com
        quem compartilhei momentos nos melhores e piores lugares, se tornaria
        tão importante para mim? Sempre sonhei em ter ao meu lado alguém como
        você: falante, inteligente, engraçada, linda, gostosa e safada. Você
        talvez nem imagine o quanto penso em você e em nós... Mas eu vejo um
        futuro ao seu lado. ✨
        <br />
        Com carinho,
        <strong>Dudu.</strong>
      </p>
      <Carousel />

      <RomanticFooter />
    </main>
  );
}
