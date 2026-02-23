export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-foreground mb-4">Contact</h2>
      <p className="text-muted mb-12 leading-relaxed">
        Une idée de projet, une opportunité, ou juste envie d&apos;échanger ?
        N&apos;hésitez pas à me contacter.
      </p>

      {/* Links */}
      <div className="flex justify-center gap-6 mb-16 flex-wrap">
        <a
          href="mailto:gary.gaspar@gmail.com"
          className="flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
        >
          <EmailIcon />
          gary.gaspar@gmail.com
        </a>
        <a
          href="https://github.com/garygaspar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
        >
          <GitHubIcon />
          github.com/garygaspar
        </a>
      </div>

      {/* Simple contact form */}
      <form
        action="mailto:gary.gaspar@gmail.com"
        method="post"
        encType="text/plain"
        className="space-y-4 text-left"
      >
        <div>
          <label htmlFor="name" className="block text-sm text-muted mb-1">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.com"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-muted mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Votre message..."
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-accent text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}
