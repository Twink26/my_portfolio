
import { useState } from "react";
import {
  Code2,
  Trophy,
  Twitter,
  Linkedin,
  Github,
  ChefHat,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";


const PlatformCard = ({ platform, index }: { platform: Platform; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[platform.icon] || Code2;



  return (
    <a
      href={platform.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
      aria-label={`Visit ${platform.name} profile`}
    >
      {cardContent}
    </a>
  );
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 opacity-0 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Featured Profiles & Projects</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <span className="text-foreground">Connect with me</span>
            <br />
            <span className="gradient-text">across platforms</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Explore my work, achievements, and insights across different platforms. Each card reveals a featured highlight on hover.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <PlatformCard key={platform.id} platform={platform} index={index} />
            ))}
          </div>

          
        </div>
      </section>
    </main>
  );
};

export default Index;