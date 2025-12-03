import { useTranslation } from "react-i18next";

type TechCategory = {
  title: string;
  items: string[];
};

export function Skills() {
  const { t } = useTranslation();

  const categories: TechCategory[] = [
    t("tech.frontend", { returnObjects: true }),
    t("tech.styling", { returnObjects: true }),
    t("tech.architecture", { returnObjects: true }),
    t("tech.tools", { returnObjects: true }),
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {categories.map((cat, idx) => (
        <div key={idx} className="pixel-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-neon-purple">
            {cat.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item, i) => (
              <span key={i} className="tech-badge">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
