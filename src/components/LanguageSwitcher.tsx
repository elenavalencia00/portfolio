import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "es" ? "en" : "es";
    console.log("Switching from", currentLang, "to", newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className="y2k-button text-xs px-4 py-2"
      onClick={toggleLanguage}
      type="button"
      aria-label="Switch language"
    >
      {currentLang.toUpperCase()}
    </button>
  );
}
