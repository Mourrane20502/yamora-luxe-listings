import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader = ({ title, subtitle, breadcrumbs }: PageHeaderProps) => {
  return (
    <section className="pt-[7.5rem] lg:pt-[8.5rem] pb-10 bg-warm-beige border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-gold transition-colors">
            <Home className="h-3 w-3" />
            Accueil
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm font-sans text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        )}
        <div className="w-12 h-[2px] bg-gold mt-4" />
      </div>
    </section>
  );
};

export default PageHeader;
