export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
        Bonjour, je suis
      </p>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground mb-6">
        Mr. Gary Gaspar
      </h1>
      <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-relaxed">
        Développeur passionné, je construis des expériences web modernes,
        performantes et accessibles.
      </p>
      <a
        href="#about"
        className="inline-block px-8 py-3 border border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-background transition-colors duration-200"
      >
        En savoir plus
      </a>
    </section>
  );
}
