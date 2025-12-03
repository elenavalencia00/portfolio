import { useTranslation } from "react-i18next";

export function Education() {
  const { t } = useTranslation();
  const items: any[] = t("education.items", { returnObjects: true });
  const extra: any = t("education.extra", { returnObjects: true });

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="pixel-card p-6">
            <span className="text-xs text-neon-purple font-semibold">
              {item.type}
            </span>
            <h3 className="text-lg font-bold text-text-primary mt-1">
              {item.degree}
            </h3>
            <p className="text-sm text-text-secondary">{item.institution}</p>
            <p className="text-xs text-text-secondary mt-1">{item.period}</p>
          </div>
        ))}
      </div>

      <div className="pixel-card p-6">
        <h3 className="text-lg font-semibold text-neon-pink mb-4">
          {extra.title}
        </h3>
        <ul className="space-y-2">
          {extra.items.map((item: string, i: number) => (
            <li
              key={i}
              className="text-sm text-text-secondary flex items-center gap-2"
            >
              <span className="text-neon-mint">▹</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
