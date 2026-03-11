import { MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-card border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary/10 border border-primary/40 flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xs">
                RL
              </span>
            </div>
            <span className="font-display font-bold text-lg text-primary">
              RL <span className="text-foreground">Gold</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground uppercase tracking-widest">
            {["Home", "Services", "Calculator", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918072938745"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:brightness-110 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            +91 80729 38745
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} RL Gold. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
