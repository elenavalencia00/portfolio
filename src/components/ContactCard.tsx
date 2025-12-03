import { useTranslation } from "react-i18next";

export function ContactCard() {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 flex-wrap text-sm">
      <a
        href="mailto:elenavalenciavilches@gmail.com"
        className="text-neon-blue hover:text-neon-mint transition-colors"
      >
        📧 Email
      </a>
      <a
        href="tel:+34654814276"
        className="text-neon-blue hover:text-neon-mint transition-colors"
      >
        📱 Phone
      </a>
      <a
        href="#"
        className="text-neon-blue hover:text-neon-mint transition-colors"
      >
        🐙 GitHub
      </a>
      <a
        href="#"
        className="text-neon-blue hover:text-neon-mint transition-colors"
      >
        💼 LinkedIn
      </a>
    </div>
  );
}
