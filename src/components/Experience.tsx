import { useTranslation } from "react-i18next";

export function Experience() {
  const { t } = useTranslation();
  const current: any = t("experience.current", { returnObjects: true });

  return (
    <div className="pixel-card p-6 space-y-4">
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold text-text-primary">
            {current.role}
          </h3>
          <p className="text-neon-mint font-semibold">{current.company}</p>
        </div>
        <div className="text-right">
          <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs font-semibold">
            {current.type}
          </span>
          <p className="text-sm text-text-secondary mt-1">{current.period}</p>
        </div>
      </div>

      <p className="text-text-secondary leading-relaxed">
        {current.description}
      </p>

      <div className="space-y-2">
        {current.highlights.map((highlight: string, i: number) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-neon-mint mt-1">▹</span>
            <span className="text-sm text-text-secondary">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
