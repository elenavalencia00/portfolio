import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { DesktopIcon } from "./components/DesktopIcon";
import { WindowModal } from "./components/WindowModal";
import { TechStack } from "./components/TechStack";
import { ProjectCard } from "./components/ProjectCard";
import { LoginScreen } from "./components/LoginScreen";
import { MusicPlayer } from "./components/MusicPlayer";
import { useEffect } from "react";

export default function App() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as any[];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [openWindows, setOpenWindows] = useState({
    about: false,
    tech: false,
    projects: false,
    contact: false,
    music: false,
    game: false,
    recycle: false,
    bug: false,
    trojan: false,
    errorlog: false,
  });

  const [minimizedWindows, setMinimizedWindows] = useState({
    about: false,
    tech: false,
    projects: false,
    contact: false,
    music: false,
    game: false,
    recycle: false,
    bug: false,
    trojan: false,
    errorlog: false,
  });

  const [maximizedWindows, setMaximizedWindows] = useState({
    about: false,
    tech: false,
    projects: false,
    contact: false,
    music: false,
    game: false,
    recycle: false,
    bug: false,
    trojan: false,
    errorlog: false,
  });

  const [startMenuOpen, setStartMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!startMenuOpen) return;

      const target = e.target as HTMLElement;
      const startMenu = document.querySelector(".start-menu");
      const startButton = document.querySelector(".y2k-start-button");

      if (
        startMenu &&
        !startMenu.contains(target) &&
        startButton &&
        !startButton.contains(target)
      ) {
        setStartMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [startMenuOpen]);

  const openWindow = (window: keyof typeof openWindows) => {
    setOpenWindows((prev) => ({ ...prev, [window]: true }));
    setMinimizedWindows((prev) => ({ ...prev, [window]: false }));
  };

  const closeWindow = (window: keyof typeof openWindows) => {
    setOpenWindows((prev) => ({ ...prev, [window]: false }));
    setMinimizedWindows((prev) => ({ ...prev, [window]: false }));
  };

  const minimizeWindow = (window: keyof typeof openWindows) => {
    setMinimizedWindows((prev) => ({ ...prev, [window]: true }));
  };

  const restoreWindow = (window: keyof typeof openWindows) => {
    setMinimizedWindows((prev) => ({ ...prev, [window]: false }));
  };

  const toggleMaximize = (window: keyof typeof openWindows) => {
    setMaximizedWindows((prev) => ({ ...prev, [window]: !prev[window] }));
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="h-screen pb-16 relative overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/43db6813-d82a-41a9-bc28-5032cbda8a2f.png)",
          zIndex: 0,
        }}
      />

      <div className="h-full p-4 relative z-10 overflow-hidden">
        <div className="grid grid-cols-2 gap-4 w-fit">
          <DesktopIcon
            icon="https://api.iconify.design/pixelarticons/user.svg?color=%23000000&width=64&height=64"
            label={t("about.title")}
            onClick={() => openWindow("about")}
          />
          <DesktopIcon
            icon="https://api.iconify.design/pixelarticons/code.svg?color=%23000000&width=64&height=64"
            label={t("tech.title")}
            onClick={() => openWindow("tech")}
          />
          <DesktopIcon
            icon="https://api.iconify.design/pixelarticons/briefcase.svg?color=%23000000&width=64&height=64"
            label={t("projects.title")}
            onClick={() => openWindow("projects")}
          />
          <DesktopIcon
            icon="https://api.iconify.design/pixelarticons/mail.svg?color=%23000000&width=64&height=64"
            label={t("contact.title")}
            onClick={() => openWindow("contact")}
          />
          <DesktopIcon
            icon="https://api.iconify.design/pixelarticons/music.svg?color=%23000000&width=64&height=64"
            label={t("music.title")}
            onClick={() => openWindow("music")}
          />
          <DesktopIcon
            icon="https://api.iconify.design/pixelarticons/gamepad.svg?color=%23000000&width=64&height=64"
            label={t("game.title")}
            onClick={() => openWindow("game")}
          />
        </div>

        <div className="absolute top-4 right-4">
          <DesktopIcon
            icon="https://api.iconify.design/pixelarticons/trash.svg?color=%23000000&width=64&height=64"
            label={t("recycle.title")}
            onClick={() => openWindow("recycle")}
          />
        </div>

        <div className="absolute bottom-10 right-4 flex flex-row gap-4">
          <a
            href="https://github.com/elenavalencia00"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-2 hover:bg-white/20 rounded-lg transition-all"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#000">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <span className="text-xs text-black font-bold text-shadow">
              {t("social.github")}
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/elena-valencia-vilches/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-2 hover:bg-white/20 rounded-lg transition-all"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#000">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <span className="text-xs text-black font-bold text-shadow">
              {t("social.linkedin")}
            </span>
          </a>
          <div
            className="flex flex-col items-center gap-2 p-2 hover:bg-white/20 rounded-lg transition-all cursor-pointer"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Elena_Valencia_CV.pdf";
              link.download = "Elena_Valencia_CV.pdf";
              link.click();
            }}
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#000">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </div>
            <span className="text-xs text-black font-bold text-shadow text-center">
              CURRICULUM
              <br />
              VITAE
            </span>
          </div>
        </div>
      </div>

      <WindowModal
        title={t("about.title")}
        isOpen={openWindows.about}
        onClose={() => closeWindow("about")}
        onMinimize={() => minimizeWindow("about")}
        onMaximize={() => toggleMaximize("about")}
        isMinimized={minimizedWindows.about}
        isMaximized={maximizedWindows.about}
        width="w-[45%]"
        height="max-h-[50vh]"
      >
        <div className="grid md:grid-cols-[200px_1fr] gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-48 h-48 bg-pink-200 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/avatar.gif"
                alt="Elena Valencia"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-center font-bold">
              Elena Valencia Vilches
            </p>
            <p className="text-xs text-gray-600">{t("about.location")}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">
              {t("about.greeting")}
            </h2>
            <p className="text-sm leading-relaxed">{t("about.bio")}</p>
          </div>
        </div>
      </WindowModal>

      <WindowModal
        title={t("tech.title")}
        isOpen={openWindows.tech}
        onClose={() => closeWindow("tech")}
        onMinimize={() => minimizeWindow("tech")}
        onMaximize={() => toggleMaximize("tech")}
        isMinimized={minimizedWindows.tech}
        isMaximized={maximizedWindows.tech}
        width="w-[50%]"
        height="max-h-[55vh]"
      >
        <TechStack />
      </WindowModal>

      <WindowModal
        title={t("projects.title")}
        isOpen={openWindows.projects}
        onClose={() => closeWindow("projects")}
        onMinimize={() => minimizeWindow("projects")}
        onMaximize={() => toggleMaximize("projects")}
        isMinimized={minimizedWindows.projects}
        isMaximized={maximizedWindows.projects}
        width="w-[65%]"
        height="max-h-[60vh]"
      >
        <div className="grid grid-cols-2 gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </WindowModal>

      <WindowModal
        title={t("contact.title")}
        isOpen={openWindows.contact}
        onClose={() => closeWindow("contact")}
        onMinimize={() => minimizeWindow("contact")}
        onMaximize={() => toggleMaximize("contact")}
        isMinimized={minimizedWindows.contact}
        isMaximized={maximizedWindows.contact}
        width="w-[30%]"
      >
        <div className="flex flex-col" style={{ height: "320px" }}>
          <div
            className="flex items-center gap-2 px-2 py-1.5 border-b"
            style={{
              background: "linear-gradient(180deg, #f9f9f9 0%, #e8e8e8 100%)",
              borderBottom: "1px solid #c0c0c0",
            }}
          >
            <img
              src="/avatar.PNG"
              alt={t("contact.name")}
              className="w-10 h-10 rounded border-2 object-contain"
              style={{ borderColor: "#999" }}
            />
            <div className="flex-1">
              <div className="font-bold text-xs" style={{ color: "#000" }}>
                {t("contact.name")}
              </div>
              <div className="text-[10px]" style={{ color: "#666" }}>
                {t("contact.emailLabel")}
              </div>
            </div>
          </div>

          <div
            className="flex-1 overflow-y-auto p-2 space-y-2"
            style={{ background: "#fff" }}
          >
            <div className="text-[11px]">
              <div
                className="font-bold text-[10px] mb-1"
                style={{ color: "#c00" }}
              >
                {t("contact.says")}
              </div>
              <div style={{ color: "#000" }}>{t("contact.greeting")}</div>
            </div>

            <div className="text-[11px]">
              <div
                className="font-bold text-[10px] mb-1"
                style={{ color: "#c00" }}
              >
                {t("contact.says")}
              </div>
              <div style={{ color: "#000", lineHeight: "1.4" }}>
                {t("contact.email")}
                <br />
                {t("contact.phone")}
                <br />
                <a
                  href={t("contact.github")}
                  className="underline"
                  style={{ color: "#00f" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @elenavalencia00
                </a>
                <br />
                <a
                  href={t("contact.linkedin")}
                  className="underline"
                  style={{ color: "#00f" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elena Valencia
                </a>
              </div>
            </div>
          </div>

          <div
            className="border-t p-1.5"
            style={{
              background: "linear-gradient(180deg, #f9f9f9 0%, #e8e8e8 100%)",
              borderTop: "1px solid #c0c0c0",
            }}
          >
            <input
              type="text"
              disabled
              placeholder={t("contact.placeholder")}
              className="w-full px-2 py-1 border text-[10px]"
              style={{
                borderColor: "#7f9db9",
                background: "#fff",
              }}
            />
          </div>
        </div>
      </WindowModal>

      <WindowModal
        title="Music Player"
        isOpen={openWindows.music}
        onClose={() => closeWindow("music")}
        onMinimize={() => minimizeWindow("music")}
        isMinimized={minimizedWindows.music}
        isMaximized={maximizedWindows.music}
        width="w-[300px]"
        height="h-auto"
        noScroll={true}
        noPadding={true}
      >
        <div className="flex justify-center">
          <MusicPlayer
            songs={[
              {
                title: "Coffe in the Morning",
                artist: "Aaron Taylor",
                file: "/music/song1.mp3",
                cover: "/music/cover1.jpeg",
              },
              {
                title: "I Hate Myself for Loving You",
                artist: "Joan Jett & The Blackhearts",
                file: "/music/song2.mp3",
                cover: "/music/cover2.png",
              },
              {
                title: "Terra",
                artist: "Tanxungueiras",
                file: "/music/song3.mp3",
                cover: "/music/cover3.jpg",
              },
              {
                title: "The Diary of Jane",
                artist: "Breaking Benjamin",
                file: "/music/song4.mp3",
                cover: "/music/cover4.jpeg",
              },
              {
                title: "Revolá",
                artist: "Sanguijuelas del Guadiana",
                file: "/music/song5.mp3",
                cover: "/music/cover5.jpg",
              },
              {
                title: "Epona",
                artist: "Eluveitie",
                file: "/music/song6.mp3",
                cover: "/music/cover6.jpg",
              },
            ]}
          />
        </div>
      </WindowModal>

      <WindowModal
        title="Samurai Duel"
        isOpen={openWindows.game}
        onClose={() => closeWindow("game")}
        onMinimize={() => minimizeWindow("game")}
        onMaximize={() => toggleMaximize("game")}
        isMinimized={minimizedWindows.game}
        isMaximized={maximizedWindows.game}
        width="w-[1020px]"
        height="h-[576px]"
        noPadding={true}
        initialPosition="top-center"
      >
        <iframe
          src="/game/index.html"
          className="w-full h-full border-0 block"
          style={{ margin: 0, padding: 0, overflow: "hidden" }}
          title="Samurai Duel Game"
          scrolling="no"
        />
      </WindowModal>

      <WindowModal
        title={t("recycle.title")}
        isOpen={openWindows.recycle}
        onClose={() => closeWindow("recycle")}
        onMinimize={() => minimizeWindow("recycle")}
        onMaximize={() => toggleMaximize("recycle")}
        isMinimized={minimizedWindows.recycle}
        isMaximized={maximizedWindows.recycle}
        width="w-[40%]"
        height="h-[60vh]"
      >
        <div className="bg-white h-full flex flex-col">
          <div className="flex items-center px-2 py-2 bg-gradient-to-b from-gray-100 to-gray-200 border-b border-gray-300 text-xs font-bold">
            <span className="w-[70%]">{t("recycle.columns.name")}</span>
            <span className="w-[30%]">{t("recycle.columns.size")}</span>
          </div>

          <div className="flex-1 overflow-auto">
            <div className="space-y-0">
              <div
                className="flex items-center py-1 px-2 hover:bg-blue-100 cursor-pointer text-xs"
                onClick={() => openWindow("bug")}
              >
                <span className="w-[70%]">bug_critical.png</span>
                <span className="w-[30%]">32 KB</span>
              </div>
              <div
                className="flex items-center py-1 px-2 hover:bg-blue-100 cursor-pointer text-xs"
                onClick={() => openWindow("trojan")}
              >
                <span className="w-[70%]">trojan.exe</span>
                <span className="w-[30%]">666 KB</span>
              </div>
              <div
                className="flex items-center py-1 px-2 hover:bg-blue-100 cursor-pointer text-xs"
                onClick={() => openWindow("errorlog")}
              >
                <span className="w-[70%]">error-stack-0xFF00ABCD.log</span>
                <span className="w-[30%]">4 KB</span>
              </div>
            </div>
          </div>

          <div className="px-2 py-1 bg-gradient-to-b from-gray-100 to-gray-200 border-t border-gray-300 text-xs text-gray-700">
            {t("recycle.itemCount", { count: 3 })}
          </div>
        </div>
      </WindowModal>

      <WindowModal
        title="bug_critical.png"
        isOpen={openWindows.bug}
        onClose={() => closeWindow("bug")}
        onMinimize={() => minimizeWindow("bug")}
        onMaximize={() => toggleMaximize("bug")}
        isMinimized={minimizedWindows.bug}
        isMaximized={maximizedWindows.bug}
        width="w-[350px]"
        height="h-[400px]"
      >
        <div className="h-full overflow-hidden flex items-center justify-center bg-white">
          <img
            src="/bug.jpg"
            alt="Bug"
            className="w-full h-full object-contain"
          />
        </div>
      </WindowModal>

      <WindowModal
        title="trojan.exe"
        isOpen={openWindows.trojan}
        onClose={() => closeWindow("trojan")}
        onMinimize={() => minimizeWindow("trojan")}
        onMaximize={() => toggleMaximize("trojan")}
        isMinimized={minimizedWindows.trojan}
        isMaximized={maximizedWindows.trojan}
        width="w-[350px]"
        height="h-[400px]"
      >
        <div className="h-full overflow-hidden flex items-center justify-center bg-white">
          <img
            src="/trojan.PNG"
            alt="Trojan"
            className="w-full h-full object-contain"
          />
        </div>
      </WindowModal>

      <WindowModal
        title="error-stack-0xFF00ABCD.log"
        isOpen={openWindows.errorlog}
        onClose={() => closeWindow("errorlog")}
        onMinimize={() => minimizeWindow("errorlog")}
        onMaximize={() => toggleMaximize("errorlog")}
        isMinimized={minimizedWindows.errorlog}
        isMaximized={maximizedWindows.errorlog}
        width="w-[400px]"
        height="h-[300px]"
      >
        <div className="p-3 bg-white font-mono text-sm">
          <p className="mb-2 font-bold">{t("errorlog.title")}</p>
          <p>- {t("errorlog.eyes")}: 2</p>
          <p>- {t("errorlog.legs")}: 6</p>
          <p>
            - {t("errorlog.behavior")}: {t("errorlog.funny")}
          </p>
        </div>
      </WindowModal>

      <div className="y2k-taskbar">
        <button
          className="y2k-start-button"
          onClick={() => setStartMenuOpen(!startMenuOpen)}
        >
          <img
            src="/power.PNG"
            alt="Start"
            style={{ width: "32px", height: "32px", display: "block" }}
          />
        </button>

        {startMenuOpen && (
          <div className="start-menu">
            <div className="start-menu-sidebar">
              <div className="start-menu-sidebar-text">elenaOS</div>
            </div>
            <div className="start-menu-content">
              <div
                className="start-menu-item"
                onClick={() => {
                  openWindow("about");
                  setStartMenuOpen(false);
                }}
              >
                <img
                  src="https://api.iconify.design/pixelarticons/user.svg?color=%23000000&width=32&height=32"
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                />
                <span>{t("about.title")}</span>
              </div>
              <div
                className="start-menu-item"
                onClick={() => {
                  openWindow("tech");
                  setStartMenuOpen(false);
                }}
              >
                <img
                  src="https://api.iconify.design/pixelarticons/code.svg?color=%23000000&width=32&height=32"
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                />
                <span>{t("tech.title")}</span>
              </div>
              <div
                className="start-menu-item"
                onClick={() => {
                  openWindow("projects");
                  setStartMenuOpen(false);
                }}
              >
                <img
                  src="https://api.iconify.design/pixelarticons/briefcase.svg?color=%23000000&width=32&height=32"
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                />
                <span>{t("projects.title")}</span>
              </div>
              <div
                className="start-menu-item"
                onClick={() => {
                  openWindow("contact");
                  setStartMenuOpen(false);
                }}
              >
                <img
                  src="https://api.iconify.design/pixelarticons/mail.svg?color=%23000000&width=32&height=32"
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                />
                <span>Contact</span>
              </div>
              <div
                className="start-menu-item"
                onClick={() => {
                  openWindow("music");
                  setStartMenuOpen(false);
                }}
              >
                <img
                  src="https://api.iconify.design/pixelarticons/music.svg?color=%23000000&width=32&height=32"
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                />
                <span>Music</span>
              </div>
              <div
                className="start-menu-item"
                onClick={() => {
                  openWindow("game");
                  setStartMenuOpen(false);
                }}
              >
                <img
                  src="https://api.iconify.design/pixelarticons/gamepad.svg?color=%23000000&width=32&height=32"
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                />
                <span>Samurai Duel</span>
              </div>
              <div
                className="start-menu-item"
                onClick={() => {
                  openWindow("recycle");
                  setStartMenuOpen(false);
                }}
              >
                <img
                  src="https://api.iconify.design/pixelarticons/trash.svg?color=%23000000&width=32&height=32"
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                />
                <span>Recycle Bin</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-1 ml-1 flex-1 max-w-2xl">
          {openWindows.about && (
            <button
              className={`taskbar-tab ${
                !minimizedWindows.about ? "taskbar-tab-active" : ""
              }`}
              onClick={() =>
                minimizedWindows.about
                  ? restoreWindow("about")
                  : minimizeWindow("about")
              }
            >
              {t("about.title")}
            </button>
          )}
          {openWindows.tech && (
            <button
              className={`taskbar-tab ${
                !minimizedWindows.tech ? "taskbar-tab-active" : ""
              }`}
              onClick={() =>
                minimizedWindows.tech
                  ? restoreWindow("tech")
                  : minimizeWindow("tech")
              }
            >
              {t("tech.title")}
            </button>
          )}
          {openWindows.projects && (
            <button
              className={`taskbar-tab ${
                !minimizedWindows.projects ? "taskbar-tab-active" : ""
              }`}
              onClick={() =>
                minimizedWindows.projects
                  ? restoreWindow("projects")
                  : minimizeWindow("projects")
              }
            >
              {t("projects.title")}
            </button>
          )}
          {openWindows.contact && (
            <button
              className={`taskbar-tab ${
                !minimizedWindows.contact ? "taskbar-tab-active" : ""
              }`}
              onClick={() =>
                minimizedWindows.contact
                  ? restoreWindow("contact")
                  : minimizeWindow("contact")
              }
            >
              Contact
            </button>
          )}
          {openWindows.music && (
            <button
              className={`taskbar-tab ${
                !minimizedWindows.music ? "taskbar-tab-active" : ""
              }`}
              onClick={() =>
                minimizedWindows.music
                  ? restoreWindow("music")
                  : minimizeWindow("music")
              }
            >
              Music
            </button>
          )}
          {openWindows.game && (
            <button
              className={`taskbar-tab ${
                !minimizedWindows.game ? "taskbar-tab-active" : ""
              }`}
              onClick={() =>
                minimizedWindows.game
                  ? restoreWindow("game")
                  : minimizeWindow("game")
              }
            >
              Samurai Duel
            </button>
          )}
          {openWindows.recycle && (
            <button
              className={`taskbar-tab ${
                !minimizedWindows.recycle ? "taskbar-tab-active" : ""
              }`}
              onClick={() =>
                minimizedWindows.recycle
                  ? restoreWindow("recycle")
                  : minimizeWindow("recycle")
              }
            >
              Recycle Bin
            </button>
          )}
        </div>

        <div className="flex-1" />
        <LanguageSwitcher />
        <div className="text-white text-xs px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
