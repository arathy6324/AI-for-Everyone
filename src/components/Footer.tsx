import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">AI for Everyone</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#what-is-ai" className="hover:text-foreground transition-colors">
              What is AI?
            </a>
            <a href="#stories" className="hover:text-foreground transition-colors">
              Stories
            </a>
            <a href="#get-started" className="hover:text-foreground transition-colors">
              Get Started
            </a>
            <a href="#vision" className="hover:text-foreground transition-colors">
              Our Vision
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 AI for Everyone Campaign
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Making AI accessible, friendly, and empowering for everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
