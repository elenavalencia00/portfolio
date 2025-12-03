import { useTranslation } from "react-i18next";

type Project = {
  id: number;
  name: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white border-2 border-gray-400 rounded p-3 shadow-lg">
      <div className="w-full h-40 flex items-center justify-center rounded mb-3 p-2">
        <img
          src={project.image}
          alt={project.name}
          className="max-w-full max-h-full object-contain rounded"
          loading="lazy"
        />
      </div>
      <div className="mb-1">
        <h3 className="font-bold text-sm">{project.name}</h3>
      </div>
      <p className="text-[11px] mb-2 leading-tight line-clamp-3">
        {project.description}
      </p>
      <div className="mb-2">
        <p className="text-[10px] font-bold mb-1">Tech:</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] bg-gray-200 px-1.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
      >
        {t("ui.viewProject")}
      </a>
    </div>
  );
}
