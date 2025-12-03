import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();
  const featured: any = t("projects.featured", { returnObjects: true });

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <article className="pixel-card p-6 space-y-4 hover:border-neon-mint transition-colors">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-text-primary">
            {featured.name}
          </h3>
          <span className="text-xs">{featured.status}</span>
        </div>
        <p className="text-sm font-mono text-neon-blue">{featured.tech}</p>
        <p className="text-text-secondary leading-relaxed">
          {featured.description}
        </p>
      </article>
    </div>
  );
}
