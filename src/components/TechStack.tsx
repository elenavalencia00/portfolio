import { useTranslation } from "react-i18next";

type TechItem = {
  name: string;
  icon: string;
};

const techItems: TechItem[] = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.simpleicons.org/springboot/6DB33F",
  },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  {
    name: "TanStack Query",
    icon: "https://cdn.simpleicons.org/reactquery/FF4154",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  {
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
      {techItems.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 hover:scale-105 transition-all duration-200 cursor-pointer bg-white/50 backdrop-blur-sm rounded-lg border border-white/30 shadow-lg hover:shadow-xl"
          title={tech.name}
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20"
          />
          <span className="text-xs md:text-sm text-center font-semibold text-gray-800">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}
