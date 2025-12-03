import { useState } from "react";
import { useTranslation } from "react-i18next";

type DesktopIconProps = {
  icon: string;
  label: string;
  onClick: () => void;
};

export function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`flex flex-col items-center gap-2 p-3 w-28 rounded-2xl transition-all ${
        isSelected
          ? "bg-white/30 backdrop-blur-md shadow-lg scale-105"
          : "hover:bg-white/10"
      }`}
      onClick={() => {
        setIsSelected(true);
        setTimeout(() => setIsSelected(false), 300);
        onClick();
      }}
      onDoubleClick={onClick}
      role="button"
    >
      <img
        src={icon}
        alt={label}
        className="w-16 h-16 filter drop-shadow-2xl pointer-events-none"
        style={{ imageRendering: "pixelated" }}
      />
      <div
        className="text-xs text-center font-bold transition-all pointer-events-none"
        style={{ color: "#000000", textShadow: "0 0 3px white" }}
      >
        {label}
      </div>
    </div>
  );
}
