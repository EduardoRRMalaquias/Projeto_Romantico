export default function RomanticBanner({ title, imageUrl }) {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center shadow-lg overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay rosado para efeito romântico */}
      <div className="absolute inset-0 bg-pink-500/30"></div>

      {/* Título centralizado */}
      <h1 className="text-white text-5xl md:text-6xl font-serif italic font-bold z-10 text-center drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
}
