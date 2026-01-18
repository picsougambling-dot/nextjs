import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
}

const RelatedLinks = ({ title = "Pages Recommandées", links }: RelatedLinksProps) => {
  // Filtrer les liens sans href valide
  const validLinks = links.filter(link => link.href && typeof link.href === 'string' && link.href.trim() !== '');
  
  if (validLinks.length === 0) return null;
  
  return (
    <section className="glass-card rounded-2xl p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-primary">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {validLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 hover:bg-primary/5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedLinks;
