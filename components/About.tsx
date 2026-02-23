const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "TailwindCSS",
  "PostgreSQL",
  "Docker",
  "Git / CI-CD",
  "REST & GraphQL",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
        À propos
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Développeur full-stack avec plusieurs années d&apos;expérience dans
            la conception et la réalisation d&apos;applications web de qualité
            production.
          </p>
          <p>
            J&apos;aime résoudre des problèmes complexes avec des solutions
            élégantes, collaborer en équipe et partager mes connaissances.
          </p>
          <p>
            En dehors du code, je m&apos;intéresse à l&apos;open-source, aux
            nouvelles technologies et à l&apos;UX design.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Compétences
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-muted text-sm"
              >
                <span className="text-accent">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
