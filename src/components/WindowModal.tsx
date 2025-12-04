import { ReactNode, useState, useRef, useEffect } from "react";

type WindowModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  isMinimized?: boolean;
  isMaximized?: boolean;
  children: ReactNode;
  width?: string;
  height?: string;
  noPadding?: boolean;
  noScroll?: boolean;
  initialPosition?: "center" | "top-center";
  zIndex?: number;
  onFocus?: () => void;
};

export function WindowModal({
  title,
  isOpen,
  onClose,
  onMinimize,
  onMaximize,
  isMinimized = false,
  isMaximized = false,
  children,
  width = "max-w-4xl",
  height = "max-h-[80vh]",
  noPadding = false,
  noScroll = false,
  initialPosition = "center",
  zIndex = 1000,
  onFocus,
}: WindowModalProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isInitialized && windowRef.current && !isMaximized) {
      const rect = windowRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const x = (screenWidth - rect.width) / 2;
      const y =
        initialPosition === "top-center"
          ? 20
          : (screenHeight - rect.height) / 2;

      setPosition({ x, y });
      setIsInitialized(true);
    }
  }, [isOpen, isInitialized, isMaximized, initialPosition]);

  useEffect(() => {
    if (!isOpen) {
      setIsInitialized(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isMaximized) {
      setPosition({ x: 0, y: 0 });
    } else if (windowRef.current && isInitialized) {
      const rect = windowRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const x = (screenWidth - rect.width) / 2;
      const y =
        initialPosition === "top-center"
          ? 20
          : (screenHeight - rect.height) / 2;

      setPosition({ x, y });
    }
  }, [isMaximized, isInitialized, initialPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newY = e.clientY - dragOffset.y;

        setPosition({
          x: e.clientX - dragOffset.x,
          y: Math.max(0, newY),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, isMaximized]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        display: isMinimized ? "none" : "flex",
        zIndex: zIndex,
        pointerEvents: "none",
      }}
      onMouseDown={onFocus}
    >
      <div
        ref={windowRef}
        className={`y2k-window ${
          isMaximized ? "w-full h-full max-w-none" : width
        } relative ${isMaximized ? "" : "animate-scale-in"}`}
        style={
          isMaximized
            ? { pointerEvents: "auto" }
            : {
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? "grabbing" : "default",
                pointerEvents: "auto",
              }
        }
      >
        <div
          className="y2k-title-bar"
          onMouseDown={handleMouseDown}
          style={{ cursor: isMaximized ? "default" : "grab" }}
        >
          <span className="flex items-center gap-2">
            <span className="text-xl">•</span>
            {title}
          </span>
          <div className="y2k-title-buttons">
            <div className="y2k-title-button" onClick={onMinimize}>
              _
            </div>
            <div className="y2k-title-button" onClick={onMaximize}>
              □
            </div>
            <div className="y2k-title-button" onClick={onClose}>
              ✕
            </div>
          </div>
        </div>
        <div
          className={`${isMaximized ? "h-[calc(100%-40px)]" : height} ${
            noPadding
              ? "p-0 overflow-hidden"
              : noScroll
              ? "p-6 overflow-hidden"
              : "p-6 overflow-auto"
          } bg-white`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
